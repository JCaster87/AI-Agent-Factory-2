import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl p-8 space-y-8">
      <h1 className="text-4xl font-bold">Hire a bot in 5 minutes.</h1>
      <p className="text-lg text-gray-600">Automate outreach, reporting, and training without code.</p>
      <div className="flex gap-3">
        <Link href="/pricing" className="px-4 py-2 bg-black text-white rounded">Start Free</Link>
        <a href="#how" className="px-4 py-2 border rounded">How it works</a>
      </div>
      <section id="how" className="grid md:grid-cols-3 gap-4 pt-8">
        {['Pick a template','Customize','Get results daily/weekly'].map((t,i)=> (
          <div key={i} className="border rounded p-4"><div className="font-semibold">{t}</div></div>
        ))}
      </section>
    </main>
  );
}
