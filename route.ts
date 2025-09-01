import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

const planMap: Record<string, string | undefined> = {
  basic: process.env.STRIPE_PRICE_BASIC,
  pro: process.env.STRIPE_PRICE_PRO,
  scale: process.env.STRIPE_PRICE_SCALE,
};

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') || '';
  let plan = 'basic';
  let sector = 'generic';
  if (contentType.includes('application/json')) {
    const body = await req.json();
    plan = body.plan || 'basic';
    sector = body.sector || 'generic';
  } else {
    const form = await req.formData();
    plan = (form.get('plan') as string) || 'basic';
    sector = (form.get('sector') as string) || 'generic';
  }

  const price = planMap[plan] || process.env.STRIPE_PRICE_BASIC;
  if (!process.env.NEXT_PUBLIC_APP_URL) return NextResponse.json({ error: 'missing NEXT_PUBLIC_APP_URL' }, { status: 500 });
  if (!process.env.STRIPE_SECRET_KEY) return NextResponse.json({ error: 'missing STRIPE_SECRET_KEY' }, { status: 500 });
  if (!price) return NextResponse.json({ error: 'missing price id' }, { status: 500 });

  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price, quantity: 1 }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?status=cancel`,
    subscription_data: { metadata: { sector, plan } },
  });

  return NextResponse.json({ url: session.url });
}
