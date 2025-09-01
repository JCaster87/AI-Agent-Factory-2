import SectorHero from '@/components/marketing/SectorHero';
import PricingSection from '@/components/marketing/PricingSection';
import TemplateGallery from '@/components/marketing/TemplateGallery';

const templates = [
    { key: 'calendar', name: 'Weekly Content Calendar', blurb: '7-day post plan with captions & hooks.', sampleTitle: 'Preview', sampleBody: 'Mon: Product tip\nTue: Customer story\nWed: Industry meme...'},
    { key: 'leadlist', name: 'Cold Lead List Builder', blurb: 'CSV-style list of 50 prospects.', sampleTitle: 'Columns', sampleList: ['Name', 'Company', 'Role', 'Email', 'Why good fit']},
    { key: 'report', name: 'Campaign Report Builder', blurb: 'Auto-summary of metrics with insights.', sampleTitle: 'Insight', sampleBody: 'Clicks up 22% WoW — short-form video drove 70% of traffic.'}
  ];

export default function Page() {
  return (
    <>
      <SectorHero
        brandName="PromoPilot"
        eyebrow="Built for marketers"
        title="Marketing that runs itself."
        subtitle="Launch campaigns, build leads, and deliver reports on autopilot — so you can focus on strategy, not spreadsheets."
        bullets={[ "Weekly content calendars & campaign ideas generated instantly.", "Fresh lead lists and cold emails delivered to your inbox.", "Auto-built reports with insights your boss will love." ]}
        ctaText="Start for $9.99"
        accentClass="from-indigo-500/10 to-indigo-200/40"
        buttonClass="bg-indigo-600"
        outlineClass="border-indigo-600 text-indigo-700"
      />
      <TemplateGallery templates=[('Prospect List', 'CSV with 50 leads matching your ICP.', 'Name, Role, Email\\nJack Lee, CTO, jack@startup.com'), ('Cold Email Sequence', '3-touch sequence with personalization hooks.', 'Subject: Quick idea for {{Company}}'), ('Call Script', 'Structured talk track with objection handling.', 'Intro → Discovery → Value → Close')] />
      <PricingSection />
    </>
  );
}
