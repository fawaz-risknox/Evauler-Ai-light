'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ShieldCheck, 
  Sliders, 
  BarChart3, 
  Layers
} from 'lucide-react';

const TRUST = ['150+ entity evaluations', '88 evaluation criteria', 'IPEV and IRS 409A aligned'];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('founder'); // 'founder' | 'investor'

  return (
    <section className="relative isolate overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Soft periwinkle curves: full composition on desktop, stacked washes on mobile */}
      <div
        aria-hidden="true"
        className="hero-ambient-art absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Startup valuation <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                and investability
              </span> <br />
              score
            </h1>

            {/* Subparagraph */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              EvaluerAI reads your business, financials, market, and risk data and returns an
              entity valuation and an investability score.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="https://evaluer-valuation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Get your valuation report</span>
                <ArrowRight size={16} strokeWidth={2.2} />
              </a>
              <a
                href="https://www.evaluerai.com/auth/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all active:scale-[0.98]"
              >
                <span>Check your investability score</span>
                <ArrowRight size={16} strokeWidth={2} className="text-slate-500" />
              </a>
              <a
                href="https://debt-module.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-200 shadow-xs hover:border-slate-300 transition-all active:scale-[0.98]"
              >
                <span>Analyse your credit score</span>
                <ArrowRight size={16} strokeWidth={2} className="text-slate-500" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-slate-200/80 w-full max-w-xl">
              {TRUST.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Column: Interactive Light UI Card Showcase */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-xl" />

              {/* Main Showcase Container */}
              <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
                
                {/* Header bar */}
                <div className="px-5 py-4 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-medium text-slate-500">evaluer.ai/diagnostic-report</span>
                  </div>
                  <div className="flex bg-slate-200/80 p-0.5 rounded-lg text-[11px] font-semibold">
                    <button
                      type="button"
                      onClick={() => setActiveTab('founder')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'founder'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Founder
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('investor')}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeTab === 'investor'
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Investor
                    </button>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 space-y-5">
                  {/* Company Banner */}
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Entity diagnostic
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Apex Dynamics Technologies
                      </h3>
                      <div className="text-xs text-slate-500 mt-0.5">
                        Series A readiness &bull; Enterprise AI &bull; Bengaluru
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Fully investable
                    </span>
                  </div>

                  {/* Dual Primary Metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                      <span className="text-xs font-medium text-slate-500">Investability score</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-3xl font-extrabold text-blue-600 tracking-tight">84</span>
                        <span className="text-xs font-medium text-slate-400">/ 100</span>
                      </div>
                      <span className="text-[11px] text-emerald-600 font-semibold mt-1">
                        &uarr; Top 8% of cohort
                      </span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                      <span className="text-xs font-medium text-slate-500">Fair market valuation</span>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-extrabold text-slate-900 tracking-tight">$4.8M</span>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium mt-1">
                        Range: $4.2M to $5.5M
                      </span>
                    </div>
                  </div>

                  {/* 5-Dimension Score Progress */}
                  <div className="space-y-2 pt-1">
                    <div className="flex justify-between text-xs font-semibold text-slate-700">
                      <span>Five evaluation dimensions</span>
                      <span className="text-blue-600 font-bold">88 criteria scored</span>
                    </div>

                    <div className="space-y-1.5">
                      {[
                        { label: 'Idea validation and market size', score: 88, color: 'bg-blue-600' },
                        { label: 'Qualitative and team execution', score: 85, color: 'bg-indigo-600' },
                        { label: 'ESG and regulatory governance', score: 80, color: 'bg-emerald-600' },
                        { label: 'Financial position and margins', score: 82, color: 'bg-sky-600' },
                        { label: 'Fundability and investor fit', score: 86, color: 'bg-blue-500' },
                      ].map((dim) => (
                        <div key={dim.label} className="flex items-center gap-3 text-xs">
                          <span className="text-slate-600 w-44 truncate">{dim.label}</span>
                          <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${dim.color}`}
                              style={{ width: `${dim.score}%` }}
                            />
                          </div>
                          <span className="text-slate-800 font-bold w-6 text-right">{dim.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Next Step Guidance */}
                  <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-blue-600 shrink-0" />
                      <span className="text-slate-700 font-medium">
                        {activeTab === 'founder' 
                          ? 'Immediate action: Close 2 governance checklist items'
                          : 'Diligence finding: 409A audit defense ready'}
                      </span>
                    </div>
                    <Link href="/investability-score" className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5">
                      <span>Inspect</span>
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>

                {/* Footer preview action */}
                <div className="px-5 py-3 bg-slate-50/90 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={13} className="text-blue-600" />
                    <span>IPEV guidelines, 88 criteria report</span>
                  </span>
                  <a 
                    href="https://evaluer-valuation.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-900 hover:text-blue-600"
                  >
                    View sample report
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

