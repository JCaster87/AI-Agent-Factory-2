export function allowedAgentCount(tier?: string) {
  const t = (tier || 'starter').toLowerCase();
  if (t === 'scale') return 15;
  if (t === 'pro') return 5;
  return 1;
}
