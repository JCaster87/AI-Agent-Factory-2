import Link from 'next/link';

type Tier = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  priceEnv?: string; // optional: env key name for Stripe price id
};

export default function PricingSection({
  title = 'Simple pricing',
  subtitle = 'Start for just $9.99. Upgrade as you grow.',
  cta = 'Subscribe',
  tiers = [
    { name: 'Starter', price: '$9.99/mo', blurb: '1 agent • light usage', features: ['1 active agent', 'Email delivery', 'Basic support'], priceEnv: 'STRIPE_PRICE_BASIC' },
    { name: 'Pro', price: '$29/mo', blurb: '5 agents • heavier usage', features: ['Up to 5 agents', 'Priority email', 'Downloads (CSV/JSON)'], priceEnv: 'STRIPE_PRICE_PRO' },
    { name: 'Scale', price: '$79/mo', blurb: '15 agents • teams', features: ['Up to 15 agents', 'Priority support', 'Team seats (beta)'], priceEnv: 'STRIPE_PRICE_SCALE' },
  ]
}: {
  title?: string;
  subtitle?: string;
  cta?: string;
  tiers?: Tier[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        <p className="mt-3 text-gray-600">{subtitle}</p>
      </header>
      <ul className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map(t => (
          <li key={t.name} className="rounded-2xl border bg-white shadow-sm p-6 flex flex-col">
            <div className="flex-1">
              <div className="font-semibold">{t.name}</div>
              <div className="mt-1 text-3xl">{t.price}</div>
              <p className="mt-1 text-gray-600 text-sm">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-800">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full border"><span className="text-[10px] leading-none">✓</span></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <form action="/api/stripe/checkout" method="post" className="mt-6">
              {/* In a real app you might pass which price to use; for MVP checkout uses BASIC by default */}
              <button className="w-full inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-medium shadow hover:opacity-90">
                {cta}
              </button>
            </form>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs text-gray-500">7-day free trial. Cancel anytime.</p>
    </section>
  );
}
