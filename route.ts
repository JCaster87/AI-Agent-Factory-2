import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getUserId } from '@/lib/auth';

const planMap: Record<string, string | undefined> = {
  basic: process.env.STRIPE_PRICE_BASIC,
  pro: process.env.STRIPE_PRICE_PRO,
  scale: process.env.STRIPE_PRICE_SCALE,
};

export async function POST(req: NextRequest) {
  const userId = await getUserId();
  if (!userId) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });

  // Accept both JSON and form submissions
  let plan = 'basic';
  let sector = 'generic';
  const contentType = req.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    const body = await req.json();
    plan = (body.plan as string) || 'basic';
    sector = (body.sector as string) || 'generic';
  } else {
    const form = await req.formData();
    plan = (form.get('plan') as string) || 'basic';
    sector = (form.get('sector') as string) || 'generic';
  }

  const price = planMap[plan] || process.env.STRIPE_PRICE_BASIC;
  if (!price) return NextResponse.json({ error: 'price_not_configured' }, { status: 500 });

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?status=cancel`,
    subscription_data: { metadata: { userId, sector, plan } },
  });

  return NextResponse.json({ url: session.url });
}
