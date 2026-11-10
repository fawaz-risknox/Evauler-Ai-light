'use client';

import Link from 'next/link';
import { 
  BarChart3, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';

export default function CoreInsightsSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 relative overflow-hidden ambient-wash-a">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Two core questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Two numbers from EvaluerAI
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            An investability score out of 100 and a valuation range built from the same 88 criteria.
          </p>
        </div>

        {/* 2 Diagnostic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          
          {/* Card 01: Valuation */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-6 flex flex-col justify-between card-hover-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-50 rounded-bl-full -z-0 opacity-60 group-hover:scale-105 transition-transform" />
            
            <div className="relative z-10">
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-600">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                      Valuation
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Company valuation
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-300">
                  01
                </div>
              </div>

              {/* Core question */}
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Core question
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                What is the fair value of my business?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                You need a number before you negotiate. EvaluerAI estimates value from financials, market size, and operating data. The report lists the assumptions and the range.
              </p>

              {/* Factors pill grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {[
                  { title: 'Market size and comps', desc: 'Industry comps and valuation multiples' },
                  { title: 'Growth and business model', desc: 'Growth rate, scalability, and monetization' },
                  { title: 'Capital structure and revenue', desc: 'Funding history and projections' },
                  { title: 'Risk factors', desc: 'Downside cases and sensitivity limits' },
                ].map((item) => (
                  <div key={item.title} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-xs font-bold text-slate-800">{item.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action */}
            <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                Multi-factor valuation model
              </span>
              <Link
                href="/valuation"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Calculate the valuation</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Card 02: Investability */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-5 sm:p-6 flex flex-col justify-between card-hover-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-50 rounded-bl-full -z-0 opacity-60 group-hover:scale-105 transition-transform" />
            
            <div className="relative z-10">
              {/* Header row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center text-indigo-600">
                    <Database size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider block">
                      Venture readiness
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Investability assessment
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-extrabold text-slate-300">
                  02
                </div>
              </div>

              {/* Core question */}
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Core question
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                Is my entity ready for investment?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Investors check more than a pitch deck. EvaluerAI returns an investability score out of 100. Each of the five sections is scored on its own from 88 criteria. The report also includes a ranked gap list.
              </p>

              {/* Factors pill grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
                {[
                  { title: 'Idea validation', desc: 'Market size, pain point, and defensibility' },
                  { title: 'Qualitative factors', desc: 'Team execution, strategy, and domain track record' },
                  { title: 'ESG and financial health', desc: 'Governance indicators and financial sustainability' },
                  { title: 'Fundability', desc: 'Institutional check readiness and round fit' },
                ].map((item) => (
                  <div key={item.title} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                    <div className="text-xs font-bold text-slate-800">{item.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action */}
            <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                88-criteria evaluation diagnostic
              </span>
              <Link
                href="/investability-score"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <span>Run investability score</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

