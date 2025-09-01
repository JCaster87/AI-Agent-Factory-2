import Link from 'next/link';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaText: string;
  ctaHref?: string;
  brandName?: string;
  accentClass?: string; // e.g. 'from-indigo-500/10 to-indigo-200/40'
};

export default function SectorHero({
  eyebrow,
  title,
  subtitle,
  bullets,
  ctaText,
  ctaHref = '/pricing',
  brandName = 'AI Agent Factory',
  accentClass = 'from-black/5 to-gray-200'
}: Props) {
  return (
    <main>
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold">{brandName}</Link>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/pricing" className="rounded-full border px-3 py-1.5 hover:bg-gray-50">Pricing</Link>
          </div>
          <div className="md:hidden" />
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b ${accentClass}`} />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            {eyebrow && <p className="text-xs uppercase tracking-wider text-gray-500">{eyebrow}</p>}
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
            <p className="mt-4 text-lg text-gray-700">{subtitle}</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-800">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border"><span className="text-sm">✓</span></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href={ctaHref} className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-3 text-white font-medium shadow hover:opacity-90">
                {ctaText}
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-xl border px-5 py-3 font-medium">
                See pricing
              </Link>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="rounded-2xl border bg-white shadow-xl p-4">
              <div className="rounded-xl border bg-gray-50 p-4">
                <div className="h-6 w-40 rounded bg-white border shadow-inner flex items-center justify-center text-xs text-gray-500">Agent Wizard</div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="space-y-2">
                    <div className="h-9 rounded border bg-white p-2 text-gray-500">Template</div>
                    <div className="h-9 rounded border bg-white p-2 text-gray-500">Name</div>
                    <div className="h-9 rounded border bg-white p-2 text-gray-500">Frequency</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-9 rounded border bg-white p-2 text-gray-500">Tone</div>
                    <div className="h-9 rounded border bg-white p-2 text-gray-500">Email</div>
                    <div className="h-9 rounded border bg-white p-2 text-gray-500">Lead count</div>
                  </div>
                </div>
                <div className="mt-4 h-10 rounded-xl bg-black text-white text-sm flex items-center justify-center">Create Agent</div>
              </div>
              <p className="mt-3 text-xs text-gray-500">Preview of the in‑app wizard</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
