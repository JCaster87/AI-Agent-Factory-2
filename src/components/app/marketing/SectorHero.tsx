'use client';
import React from 'react';

export default function SectorHero({
  brandName,
  eyebrow,
  title,
  subtitle,
  bullets,
  ctaText,
  accentClass = 'from-indigo-500/10 to-indigo-200/40',
  buttonClass = 'bg-indigo-600',
  outlineClass = 'border-indigo-600 text-indigo-700',
  showPlanButtons = false,
  sector = 'generic',
}: {
  brandName: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaText: string;
  accentClass?: string;
  buttonClass?: string;
  outlineClass?: string;
  showPlanButtons?: boolean;
  sector?: string;
}) {
  const startCheckout = async (plan: 'basic' | 'pro' | 'scale') => {
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ plan, sector }),
    });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <section className="relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${accentClass}`} />
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-medium text-gray-700">{eyebrow}</p>
        <h1 className="mt-2 text-4xl font-bold">{title}</h1>
        <p className="mt-3 max-w-2xl text-gray-700">{subtitle}</p>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-gray-700 sm:grid-cols-2">
          {bullets.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>

        {showPlanButtons && (
          <div className="mt-6 flex gap-3">
            <button onClick={() => startCheckout('basic')} className={`rounded-lg px-4 py-2 text-white ${buttonClass}`}>
              Starter $9.99
            </button>
            <button onClick={() => startCheckout('pro')} className={`rounded-lg px-4 py-2 border ${outlineClass}`}>
              Pro $29
            </button>
            <button onClick={() => startCheckout('scale')} className="rounded-lg px-4 py-2 border border-gray-800 text-gray-900">
              Scale $79
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
