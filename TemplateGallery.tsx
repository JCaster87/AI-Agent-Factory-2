type Template = {
  key: string;
  name: string;
  blurb: string;
  sampleTitle?: string;
  sampleBody?: string;
  sampleList?: string[]; // for CSV/JSON bullet preview
  badge?: string;
};

export default function TemplateGallery({
  title = 'Templates you get',
  subtitle = 'Ready-to-run playbooks tailored to your role.',
  templates = []
}: {
  title?: string;
  subtitle?: string;
  templates: Template[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <header className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        <p className="mt-2 text-gray-600">{subtitle}</p>
      </header>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {templates.map((t) => (
          <article key={t.key} className="rounded-2xl border bg-white shadow-sm overflow-hidden">
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{t.blurb}</p>
                </div>
                {t.badge && <span className="rounded-full border px-2 py-0.5 text-xs">{t.badge}</span>}
              </div>
            </div>
            <div className="border-t bg-gray-50 p-5 text-sm">
              {t.sampleTitle && <p className="font-mono text-xs uppercase text-gray-500">{t.sampleTitle}</p>}
              {t.sampleBody && <pre className="mt-2 whitespace-pre-wrap text-[13px] leading-5 text-gray-800">{t.sampleBody}</pre>}
              {t.sampleList && (
                <ul className="mt-2 space-y-1 text-gray-800 list-disc list-inside">
                  {t.sampleList.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
