'use client';
import React from 'react';

type Card = {
  key: string;
  name: string;
  blurb: string;
  imageSrc?: string;
  sampleTitle?: string;
  sampleBody?: string;
  sampleList?: string[];
};

export default function TemplateGallery({ templates }: { templates: Card[] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <h2 className="text-2xl font-bold">Template gallery</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {templates.map((card) => (
          <div key={card.key} className="rounded-xl border p-4">
            <div className="flex h-28 items-center justify-center rounded bg-gray-100 text-xs text-gray-500">
              {card.imageSrc ? <img src={card.imageSrc} alt={card.name} className="max-h-28" /> : 'Preview'}
            </div>
            <h3 className="mt-3 font-semibold">{card.name}</h3>
            <p className="text-sm text-gray-700">{card.blurb}</p>
            {card.sampleTitle && <p className="mt-2 text-xs font-medium">{card.sampleTitle}</p>}
            {card.sampleBody && <pre className="mt-1 whitespace-pre-wrap text-xs">{card.sampleBody}</pre>}
            {card.sampleList && (
              <ul className="mt-1 text-xs text-gray-700">
                {card.sampleList.map((i, idx) => (
                  <li key={idx}>• {i}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
