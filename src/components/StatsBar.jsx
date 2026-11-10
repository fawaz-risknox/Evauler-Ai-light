'use client';

import { Globe2, FileSpreadsheet, CheckCircle, Scale } from 'lucide-react';

export default function StatsBar() {
  const stats = [
    { 
      value: '3+', 
      label: 'Countries served',
      desc: 'Active cross-border assessments',
      icon: <Globe2 size={20} className="text-blue-600" />
    },
    { 
      value: '150+', 
      label: 'Entity evaluations',
      desc: 'Startups, funds, and accelerators',
      icon: <FileSpreadsheet size={20} className="text-indigo-600" />
    },
    { 
      value: '99%', 
      label: 'Evaluation accuracy',
      desc: 'Audited formulas and methodology',
      icon: <CheckCircle size={20} className="text-emerald-600" />
    },
    { 
      value: '88', 
      label: 'Evaluation criteria',
      desc: '5 standardized dimensions',
      icon: <Scale size={20} className="text-sky-600" />
    },
  ];

  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 mb-12 sm:mb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-4 sm:p-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {stats.map((s, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col justify-between ${idx > 0 ? 'pt-4 lg:pt-0 lg:pl-5' : ''}`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                    Metric 0{idx + 1}
                  </span>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wide mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

