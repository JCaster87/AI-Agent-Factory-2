import { getUserId } from '@/lib/auth';
import { db } from '@/lib/db';
import { agents, subscriptions } from '@/lib/schema';
import { eq, and, inArray } from 'drizzle-orm';
import UsageWidget from '@/components/app/UsageWidget';
import { allowedAgentCount } from '@/lib/utils';
import Link from 'next/link';

export default async function Dashboard() {
  const userId = await getUserId();
  if (!userId) return <main className="p-8">Please sign in.</main>;

  const subs = await db.select().from(subscriptions).where(and(eq(subscriptions.userId, userId), inArray(subscriptions.status, ['active','trialing'])));
  const tier = (subs[0]?.tier || 'starter').toLowerCase();
  const limit = allowedAgentCount(tier);
  const userAgents = await db.select().from(agents).where(eq(agents.userId, userId));
  const used = userAgents.length;

  return (
    <main className="mx-auto max-w-4xl p-8 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <UsageWidget used={used} limit={limit} tier={tier} />

      <section className="rounded-2xl border bg-white p-5 shadow-sm">
        <header className="flex items-center justify-between">
          <h2 className="font-semibold">Your Agents</h2>
          <Link href="/agents/new" className="rounded-lg bg-black text-white px-3 py-1.5 text-sm">New Agent</Link>
        </header>
        <p className="mt-2 text-sm text-gray-600">{used === 0 ? 'No agents yet. Create your first one!' : 'Agents list coming soon.'}</p>
      </section>
    </main>
  );
}
