import SectorHero from '@/components/marketing/SectorHero';

export default function Page() {
  return (
    <SectorHero
      brandName="PromoPilot"
      eyebrow="Built for PromoPilot"
      title="Marketing that runs itself."
      subtitle="Launch campaigns, build leads, and deliver reports on autopilot — so you can focus on strategy, not spreadsheets."
      bullets={[ \"Weekly content calendars & campaign ideas generated instantly.\", \"Fresh lead lists and cold emails delivered to your inbox.\", \"Auto-built reports with insights your boss will love.\" ]}
      ctaText="Start your free trial today."
      accentClass="from-indigo-500/10 to-indigo-200/40"
    />
  );
}
