export function allowedAgentCount(tier?: string) {
  switch ((tier || 'starter').toLowerCase()) {
    case 'scale': return 15;
    case 'pro': return 5;
    default: return 1;
  }
}
