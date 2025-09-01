import Link from 'next/link';

export default function UsageWidget({ used, limit, tier }: { used: number; limit: number; tier: string }) {
  const pct = Math.min(100, Math.round((used / Math.max(1, limit)) * 100));
  const nearLimit = used >= limit;
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Agent usage</h3>
          <p className="text-sm text-gray-600">Plan: {tier.toUpperCase()} • {used} / {limit} agents</p>
        </div>
        {nearLimit ? (
          <Link href="/pricing" className="rounded-lg bg-black text-white px-3 py-1.5 text-sm">Upgrade</Link>
        ) : null}
      </div>
      <div className="mt-3 h-2 rounded bg-gray-200 overflow-hidden">
        <div className="h-full bg-black" style={{ width: pct + '%' }} />
      </div>
      {nearLimit && <p className="mt-2 text-xs text-red-600">You’ve reached your plan limit. Upgrade to create more agents.</p>}
    </div>
  );
}
