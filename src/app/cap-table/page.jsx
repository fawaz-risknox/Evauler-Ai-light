'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  PieChart,
  Layers,
  ShieldCheck,
  Users,
  FileSpreadsheet,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  RefreshCw,
  Award,
  Lock
} from 'lucide-react';

export default function CapTablePage() {
  // Simulator State
  const [preMoney, setPreMoney] = useState(6000); // in $k
  const [investment, setInvestment] = useState(1500); // in $k
  const [optionPool, setOptionPool] = useState(10); // %

  const simulation = useMemo(() => {
    const postMoney = preMoney + investment;
    const investorShare = (investment / postMoney) * 100;
    const remainingForFounders = 100 - investorShare - optionPool;
    const founder1 = (remainingForFounders * 0.55).toFixed(1);
    const founder2 = (remainingForFounders * 0.45).toFixed(1);

    return {
      postMoney: (postMoney / 1000).toFixed(2),
      investorShare: investorShare.toFixed(1),
      founder1,
      founder2,
      optionPool: optionPool.toFixed(1),
    };
  }, [preMoney, investment, optionPool]);

  const capFeatures = [
    {
      title: 'SAFE and convertible note modeling',
      desc: 'Simulate pre-money and post-money SAFEs with valuation caps and discount rates.',
      icon: <Layers size={20} className="text-blue-600" />,
    },
    {
      title: 'Option pool expansion',
      desc: 'Size unallocated options before or after the round to see dilution impact on common shares.',
      icon: <Users size={20} className="text-indigo-600" />,
    },
    {
      title: 'Cap table sync with 409A valuations',
      desc: 'Cap table changes feed into fair market value calculations to keep employee option pricing current.',
      icon: <ShieldCheck size={20} className="text-sky-600" />,
    },
    {
      title: 'Securities tracking and SEC Rule 701',
      desc: 'Issue digital stock certificates, track equity grants, and monitor Rule 701 disclosure thresholds.',
      icon: <Award size={20} className="text-blue-600" />,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 ambient-page">
      <Navbar />

      <SubpageHero
        badgeIcon={<PieChart size={14} className="text-blue-600" />}
        badgeText="Dilution modeling and equity waterfall"
        title="Cap table simulator and equity management"
        subtitle="Model dilution from SAFEs, priced rounds, and employee option pools in real time."
        actionCta={
          <a
            href="https://evaluer-valuation.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-xs transition-colors"
          >
            <span>Launch cap table simulator</span>
            <ArrowRight size={14} />
          </a>
        }
      />

      {/* 4 Core Features */}
      <section className="py-12 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capFeatures.map((feat) => (
              <div key={feat.title} className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
                    {feat.icon}
                  </div>
                  <h3 className="text-xs font-bold text-slate-900">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dilution Simulator */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6 sm:p-10 lg:p-12">
          
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Round dilution waterfall
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Simulate your next funding round
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Model pre-money valuation, check size, and unallocated ESOP reserve to see post-money ownership stakes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-6">
              {/* Pre-money valuation slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700">Pre-money valuation</span>
                  <span className="font-extrabold text-blue-600">${(preMoney / 1000).toFixed(1)}M</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={preMoney}
                  onChange={(e) => setPreMoney(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Investment Amount slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700">New round investment check</span>
                  <span className="font-extrabold text-indigo-600">${(investment / 1000).toFixed(2)}M</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="5000"
                  step="250"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full accent-indigo-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Option Pool slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700">Unallocated employee option pool</span>
                  <span className="font-extrabold text-sky-600">{optionPool}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="1"
                  value={optionPool}
                  onChange={(e) => setOptionPool(Number(e.target.value))}
                  className="w-full accent-sky-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 leading-relaxed">
                Post-money valuation will be <strong>${simulation.postMoney}M</strong>. Investor check represents <strong>{simulation.investorShare}%</strong> of fully diluted capital.
              </div>
            </div>

            {/* Right Stakeholder Breakdown Table */}
            <div className="lg:col-span-6 bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
                  Post-round ownership structure
                </span>

                <div className="space-y-3">
                  {[
                    { holder: 'Founder 1 (CEO)', share: `${simulation.founder1}%`, color: 'bg-blue-600' },
                    { holder: 'Founder 2 (CTO)', share: `${simulation.founder2}%`, color: 'bg-indigo-600' },
                    { holder: 'New Lead Investor', share: `${simulation.investorShare}%`, color: 'bg-emerald-600' },
                    { holder: 'Employee Option Pool', share: `${simulation.optionPool}%`, color: 'bg-amber-500' },
                  ].map((row) => (
                    <div key={row.holder} className="p-3 rounded-lg bg-white border border-slate-200/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <span className={`w-3 h-3 rounded-full ${row.color}`} />
                        <span className="font-semibold text-slate-800">{row.holder}</span>
                      </div>
                      <span className="font-bold text-slate-900">{row.share}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Sync with continuous 409A appraisal</span>
                <a
                  href="/pricing"
                  className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Explore Cap Table plans</span>
                  <ArrowRight size={13} />
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

