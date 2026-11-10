'use client';

import { FileEdit, Cpu, FileCheck2, Wrench, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Enter your entity general information',
    desc: 'Add business, financial, and market details through a guided questionnaire.',
    icon: FileEdit,
    tag: 'Input phase',
  },
  {
    step: '02',
    title: 'The model scores the data',
    desc: 'It scores investability and valuation factors from that input against 88 criteria.',
    icon: Cpu,
    tag: 'Analysis phase',
  },
  {
    step: '03',
    title: 'You get the report',
    desc: 'You receive an entity valuation estimate and an investability score out of 100.',
    icon: FileCheck2,
    tag: 'Report generation',
  },
  {
    step: '04',
    title: 'Fix the gaps',
    desc: 'Use the ranked list to close diligence gaps before pitching to venture investors.',
    icon: Wrench,
    tag: 'Execution roadmap',
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50/60 relative ambient-wash-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How it works
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From raw financial inputs to a defensible valuation and investor-grade score in minutes.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                {/* Step pill and connector */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-blue-600 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100">
                      Step {s.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                      <Icon size={16} />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-slate-100 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  {s.tag}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

