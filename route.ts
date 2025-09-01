import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { agents, runs } from '@/lib/schema';
import { and, lte, eq } from 'drizzle-orm';
import { runAgentOnce } from '@/lib/runAgent';
import { sendOutputEmail } from '@/lib/email';

export const runtime = 'nodejs';

export async function GET() {
  const now = new Date();
  const dueAgents = await db.select().from(agents).where(and(eq(agents.isActive, true), lte(agents.nextRunAt, now))).limit(5);
  for (const agent of dueAgents) {
    const [run] = await db.insert(runs).values({ agentId: agent.id, userId: agent.userId, status: 'processing' }).returning();
    try {
      const result = await runAgentOnce(agent as any);
      await db.update(runs).set({ status: 'succeeded', finishedAt: new Date(), outputSummary: result.summary, outputData: result.data }).where(eq(runs.id, run.id));
      const emailTo = (agent as any).config?.emailFrom;
      if (emailTo) await sendOutputEmail(emailTo, (agent as any).name, result);
      const next = new Date();
      if ((agent as any).frequency === 'daily') next.setDate(next.getDate() + 1); else next.setDate(next.getDate() + 7);
      await db.update(agents).set({ lastRunAt: new Date(), nextRunAt: next }).where(eq(agents.id, agent.id));
    } catch (e) {
      await db.update(runs).set({ status: 'failed', finishedAt: new Date(), error: String(e) }).where(eq(runs.id, run.id));
    }
  }
  return NextResponse.json({ ok: true, processed: dueAgents.length });
}
