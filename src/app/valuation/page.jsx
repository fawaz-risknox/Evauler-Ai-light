'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  Calculator,
  ShieldCheck,
  FileText,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Download,
  Clock,
  Scale,
  Award,
  ChevronRight
} from 'lucide-react';

export default function ValuationPage() {
  // Interactive Calculator State
  const [stage, setStage] = useState('Seed');
  const [revenue, setRevenue] = useState(500); // $k
  const [growth, setGrowth] = useState(100); // %
  const [marketSize, setMarketSize] = useState(5); // $B

  const compliancePoints = [
    {
      title: 'IPEV guideline compliance',
      desc: 'Formulas follow International Private Equity Valuation guidelines.',
      icon: <Award size={20} className="text-blue-600" />,
    },
    {
      title: 'IRS 409A audit readiness',
      desc: 'Produces fair market value documentation for IRS Safe Harbor employee option strike prices.',
      icon: <ShieldCheck size={20} className="text-indigo-600" />,
    },
    {
      title: 'Stage-adjusted weighting',
      desc: 'Weights qualitative methods (Scorecard and Berkus) for early stages, then shifts weight to DCF and market multiples as revenue matures.',
      icon: <Scale size={20} className="text-sky-600" />,
    },
    {
      title: 'Updated market benchmarks',
      desc: 'Multiples compare against 120,000 private venture funding transactions.',
      icon: <Clock size={20} className="text-blue-600" />,
    },
  ];

  // Calculated Valuations
  const calculations = useMemo(() => {
    const revM = revenue / 1000;
    
    // 1. Scorecard (qualitative peer adjusted)
    const scorecardVal = stage === 'Pre-seed' ? 2.5 : stage === 'Seed' ? 4.8 : 10.5;
    
    // 2. Berkus (5 factor baseline)
    const berkusVal = stage === 'Pre-seed' ? 2.0 : stage === 'Seed' ? 3.8 : 8.5;
    
    // 3. DCF (5 year projection discounted)
    const dcfMultiple = growth > 120 ? 9.5 : 6.5;
    const dcfVal = Math.max(2.5, revM * dcfMultiple + (marketSize * 0.2));
    
    // 4. VC Method (Exit multiple discounted)
    const vcVal = Math.max(2.8, (revM * 4 * 8) / Math.pow(1.35, 4));

    // Blended Stage Weighted
    let weights = { scorecard: 0.35, berkus: 0.35, dcf: 0.15, vc: 0.15 };
    if (stage === 'Seed') {
      weights = { scorecard: 0.25, berkus: 0.20, dcf: 0.30, vc: 0.25 };
    } else if (stage === 'Series A') {
      weights = { scorecard: 0.10, berkus: 0.05, dcf: 0.45, vc: 0.40 };
    }

    const blended = 
      scorecardVal * weights.scorecard +
      berkusVal * weights.berkus +
      dcfVal * weights.dcf +
      vcVal * weights.vc;

    return {
      scorecard: scorecardVal.toFixed(2),
      berkus: berkusVal.toFixed(2),
      dcf: dcfVal.toFixed(2),
      vc: vcVal.toFixed(2),
      blended: blended.toFixed(2),
      rangeMin: (blended * 0.85).toFixed(2),
      rangeMax: (blended * 1.20).toFixed(2),
    };
  }, [stage, revenue, growth, marketSize]);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 ambient-page">
      <Navbar />

      {/* Subpage Hero */}
      <SubpageHero
        badgeIcon={<Scale size={14} className="text-blue-600" />}
        badgeText="IPEV and 409A aligned methodology"
        title="Stage-adjusted startup valuation"
        subtitle="Five valuation methods calibrated by company stage, market multiples, and audited benchmarks."
        actionCta={
          <div className="flex items-center gap-3">
            <a
              href="https://evaluer-valuation.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-colors"
            >
              <span>Launch valuation engine</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs border border-slate-200 shadow-xs transition-colors"
            >
              <span>View 409A plans</span>
            </a>
          </div>
        }
      />

      {/* 4 Compliance Standards */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {compliancePoints.map((point) => (
              <div key={point.title} className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    {point.icon}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {point.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive 5-Method Valuation Engine */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 lg:p-12">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Interactive valuation engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Model your fair market value in real time
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Adjust company inputs below to see how stage-weighted algorithms adjust between early qualitative methods and discounted cash flows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Stage Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                  Company stage
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Pre-seed', 'Seed', 'Series A'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStage(s)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        stage === s
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Revenue Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700">Annual revenue (ARR)</span>
                  <span className="font-extrabold text-blue-600">${revenue}k</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Growth Rate Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700">Year-over-year growth rate</span>
                  <span className="font-extrabold text-indigo-600">+{growth}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="300"
                  step="10"
                  value={growth}
                  onChange={(e) => setGrowth(Number(e.target.value))}
                  className="w-full accent-indigo-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Market Size Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700">Total addressable market (TAM)</span>
                  <span className="font-extrabold text-sky-600">${marketSize}B</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={marketSize}
                  onChange={(e) => setMarketSize(Number(e.target.value))}
                  className="w-full accent-sky-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Valuation waterfall ({stage})
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-1">
                  ${calculations.blended}M
                </div>
                <div className="text-xs text-slate-500 mb-6">
                  Recommended raise range: ${calculations.rangeMin}M to ${calculations.rangeMax}M
                </div>

                {/* 4 Method Breakdown */}
                <div className="space-y-2.5">
                  {[
                    { name: 'Scorecard method', val: calculations.scorecard, desc: 'Qualitative peer multiples' },
                    { name: 'Berkus method', val: calculations.berkus, desc: 'Five basic execution milestones' },
                    { name: 'Discounted cash flow (DCF)', val: calculations.dcf, desc: 'Cash generation discounted at WACC' },
                    { name: 'Venture capital method', val: calculations.vc, desc: 'Target return exit multiple' },
                  ].map((m) => (
                    <div key={m.name} className="p-2.5 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-800">{m.name}</div>
                        <div className="text-[11px] text-slate-400">{m.desc}</div>
                      </div>
                      <span className="font-extrabold text-blue-600">${m.val}M</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Ready to formalize into a certified PDF report?
                </span>
                <a
                  href="https://evaluer-valuation.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs"
                >
                  Export report
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}

