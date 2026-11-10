'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Users,
  Leaf,
  BarChart3,
  Target,
  ArrowRight,
  TrendingUp,
  Sliders,
  Check,
  Compass,
  FileCheck
} from 'lucide-react';

export default function InvestabilityScorePage() {
  // Dimension Sliders
  const [ideaScore, setIdeaScore] = useState(82);
  const [teamScore, setTeamScore] = useState(78);
  const [esgScore, setEsgScore] = useState(70);
  const [financialScore, setFinancialScore] = useState(75);
  const [fundabilityScore, setFundabilityScore] = useState(80);

  // Overall Calculation
  const overallScore = useMemo(() => {
    const raw =
      ideaScore * 0.25 +
      teamScore * 0.25 +
      esgScore * 0.15 +
      financialScore * 0.20 +
      fundabilityScore * 0.15;
    return Math.round(raw);
  }, [ideaScore, teamScore, esgScore, financialScore, fundabilityScore]);

  const classification = useMemo(() => {
    if (overallScore >= 80) {
      return {
        label: 'Fully investable',
        badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        desc: 'The company meets investor standards across market size, team execution, and unit economics.',
      };
    }
    if (overallScore >= 60) {
      return {
        label: 'Conditionally investable',
        badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
        desc: 'The company has a clear path to funding, but diligence flags need to be addressed.',
      };
    }
    return {
      label: 'Early stage and building',
      badgeClass: 'bg-slate-200 text-slate-800 border-slate-300',
      desc: 'Focus on traction, customer discovery, and product defensibility before pitching institutional funds.',
    };
  }, [overallScore]);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 ambient-page">
      <Navbar />

      <SubpageHero
        badgeIcon={<ShieldCheck size={14} className="text-blue-600" />}
        badgeText="88-criteria readiness model"
        title="Venture readiness and investability diagnostic"
        subtitle="One score out of 100 based on 88 standardized evaluation criteria across five core business dimensions."
        actionCta={
          <a
            href="https://www.evaluerai.com/auth/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-colors"
          >
            <span>Start official assessment</span>
            <ArrowRight size={14} />
          </a>
        }
      />

      {/* Simulator Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 lg:p-12">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Readiness simulator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Adjust your scores across the five dimensions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              See how individual performance in idea defensibility, team track record, ESG, financials, and fundability affects your venture classification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* 5 Dimension Sliders */}
            <div className="lg:col-span-7 space-y-6">
              {[
                { label: 'Idea validation and market size, 25% weight', val: ideaScore, set: setIdeaScore, icon: Lightbulb },
                { label: 'Qualitative factors and leadership execution, 25% weight', val: teamScore, set: setTeamScore, icon: Users },
                { label: 'ESG, regulatory compliance, and governance, 15% weight', val: esgScore, set: setEsgScore, icon: Leaf },
                { label: 'Financial position and gross margin health, 20% weight', val: financialScore, set: setFinancialScore, icon: BarChart3 },
                { label: 'Fundability and round capitalization terms, 15% weight', val: fundabilityScore, set: setFundabilityScore, icon: Target },
              ].map((dim) => {
                const Icon = dim.icon;
                return (
                  <div key={dim.label} className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-800 flex items-center gap-1.5">
                        <Icon size={14} className="text-blue-600" />
                        {dim.label}
                      </span>
                      <span className="font-extrabold text-blue-600">{dim.val} / 100</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="100"
                      value={dim.val}
                      onChange={(e) => dim.set(Number(e.target.value))}
                      className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                    />
                  </div>
                );
              })}
            </div>

            {/* Total Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/70 via-white to-slate-50 rounded-2xl border border-blue-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Overall readiness score
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                    {overallScore}
                  </span>
                  <span className="text-sm font-semibold text-slate-400">/ 100</span>
                </div>

                <div className="mb-6">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${classification.badgeClass}`}>
                    {classification.label}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {classification.desc}
                </p>

                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 text-xs">
                  <span className="font-bold text-slate-800 block">Diligence summary</span>
                  <div className="text-slate-600 flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>88 criteria evaluated across 5 sections</span>
                  </div>
                  <div className="text-slate-600 flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-emerald-600" />
                    <span>Ranked roadmap to close gaps</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200">
                <a
                  href="https://www.evaluerai.com/auth/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs"
                >
                  <span>Check your entity score</span>
                  <ArrowRight size={14} />
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

