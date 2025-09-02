'use client';
import React from 'react';

export default function PricingSection({ sector = 'generic' }: { sector?: string }) {
  const startCheckout = async (plan: 'basic' | 'pro' | 'scale') => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ plan, sector }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  const tiers = [
    { key: 'basic', name: 'Starter', price: '$9.99', points: ['1 agent', 'Email support'] },
    { key: 'pro', name: 'Pro', price: '$29', points: ['5 agents', 'Priority support'] },
    { key: 'scale', name: 'Scale', price: '$79', points: ['15 agents', 'Priority support'] },
  ] as const;

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="text-2xl font-bold">Simple pricing</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.key} className="rounded-xl border p-5">
            <h3 className="font-semibold">{t.name}</h3>
            <div className="mt-1 text-2xl">{t.price}/mo</div>
            <ul className="mt-3 text-sm text-gray-700">
              {t.points.map((p, i) => (
                <li key={i}>• {p}</li>
              ))}
            </ul>
            <button onClick={() => startCheckout(t.key)} className="mt-4 rounded-lg bg-black px-4 py-2 text-white">
              Choose {t.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
