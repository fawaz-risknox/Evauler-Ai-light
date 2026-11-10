'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import TeamSection from '@/components/TeamSection';
import CTASection from '@/components/CTASection';
import {
  Award,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      title: 'Mathematical transparency',
      desc: 'Calculations and formulas are documented, open to audit, and free of subjective appraisal bias.',
      icon: <Award size={22} className="text-blue-600" />,
    },
    {
      title: 'Calibrated to venture reality',
      desc: 'Valuation multiples and stage weightings calibrate against 120,000 verified funding transactions.',
      icon: <TrendingUp size={22} className="text-indigo-600" />,
    },
    {
      title: 'Diligence-first diagnostic',
      desc: 'Every point deduction on the 88 criteria highlights the exact questions institutional VC partners ask.',
      icon: <ShieldCheck size={22} className="text-emerald-600" />,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 ambient-page">
      <Navbar />

      <SubpageHero
        badgeIcon={<Users size={14} className="text-blue-600" />}
        badgeText="Our mission and origin"
        title="Built to replace subjective appraisals with audited math"
        subtitle="EvaluerAI combines certified chartered accountancy, corporate company secretarial governance, and engineering to automate startup valuations and readiness scoring."
      />

      {/* Values Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
            Core principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How we approach venture valuation
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Founded by finance practitioners to eliminate the black box of traditional startup appraisals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div
              key={v.title}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <TeamSection />

      <CTASection />
      <Footer />
    </main>
  );
}

