import SectorHero from '@/components/marketing/SectorHero';
import TemplateGallery from '@/components/marketing/TemplateGallery';
import PricingSection from '@/components/marketing/PricingSection';

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
        showPlanButtons
        sector="marketers"
      />
      <TemplateGallery templates=[{"{ key: 'sample', name: 'Example', blurb: 'Replace with gallery zip files.', sampleTitle: 'Preview', sampleBody: '...' }"}] />
      <PricingSection sector="marketers" />
    </>
  );
}
