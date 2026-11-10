'use client';

import { Sparkles, Zap, ShieldCheck, TrendingUp, Compass, ArrowRight } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      title: 'Scored from structured data',
      desc: 'The model scores your financials and operating data against 88 criteria.',
      icon: Sparkles,
      tag: 'Objective methodology',
    },
    {
      title: 'A report without a consulting cycle',
      desc: 'You submit the form. The report comes back without a weeks-long consulting process.',
      icon: Zap,
      tag: 'Instant turnaround',
    },
    {
      title: 'Same criteria every time',
      desc: 'Every company is scored on the same 88 items, eliminating subjective appraisal bias.',
      icon: ShieldCheck,
      tag: 'Consistent standard',
    },
    {
      title: 'See the diligence questions early',
      desc: 'The score shows which items a diligence checklist would flag before partners do.',
      icon: TrendingUp,
      tag: 'VC alignment',
    },
    {
      title: 'A ranked list of gaps',
      desc: 'Each low score comes with a next action and a time window to improve readiness.',
      icon: Compass,
      tag: 'Actionable roadmap',
    },
  ];

  return (
    <section id="benefits" className="py-20 sm:py-28 bg-white border-t border-slate-200/80 ambient-wash-c">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What you get from EvaluerAI
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Use the report to see your score and the gaps before you raise.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            const isFeatured = idx === 0 || idx === 4;
            return (
              <div
                key={b.title}
                className={`p-5 rounded-2xl border transition-all ${
                  isFeatured
                    ? 'bg-gradient-to-br from-blue-50/70 via-white to-slate-50 border-blue-200/80 shadow-xs md:col-span-2 lg:col-span-1'
                    : 'bg-white border-slate-200 shadow-xs hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {b.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

