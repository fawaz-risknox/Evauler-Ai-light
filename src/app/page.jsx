import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import CoreInsightsSection from '@/components/CoreInsightsSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import InteractiveValuationPreview from '@/components/InteractiveValuationPreview';
import HowItWorks from '@/components/HowItWorks';
import BenefitsSection from '@/components/BenefitsSection';
import Testimonials from '@/components/Testimonials';
import TeamSection from '@/components/TeamSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900">
      <Navbar />
      <Hero />
      <StatsBar />
      <CoreInsightsSection />
      <FeaturesGrid />
      <InteractiveValuationPreview />
      <HowItWorks />
      <BenefitsSection />
      <Testimonials />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}

