import SectorHero from '../../components/marketing/SectorHero';
import TemplateGallery from '../../components/marketing/TemplateGallery';
import PricingSection from '../../components/marketing/PricingSection';

const templates = [
  { key: 'one', name: 'Starter Pack', blurb: 'Jumpstart tasks for Sales.', imageSrc: '/screens/sales_1.png', sampleTitle: 'Preview', sampleBody: 'Example content...' },
  { key: 'two', name: 'Lead Builder', blurb: 'Curate prospects with reasons.', imageSrc: '/screens/sales_2.png', sampleTitle: 'Columns', sampleList: ['Name','Company','Email','Why good fit'] },
  { key: 'three', name: 'Weekly Report', blurb: 'Shareable summary.', imageSrc: '/screens/sales_3.png', sampleTitle: 'Insight', sampleBody: 'Your wins and next steps.' }
];

export default function Page() {
  return (
    <>
      <PricingSection sector="sales" />
    </>
  );
}
