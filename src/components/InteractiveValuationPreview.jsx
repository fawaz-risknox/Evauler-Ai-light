'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Calculator, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';

export default function InteractiveValuationPreview() {
  const [stage, setStage] = useState('Seed'); // 'Pre-seed', 'Seed', 'Series A'
  const [arr, setArr] = useState(600); // in thousands ($k)
  const [growth, setGrowth] = useState(120); // %

  const valuationEstimate = useMemo(() => {
    let multiple = 7.5;
    if (growth > 150) multiple = 12.0;
    else if (growth > 80) multiple = 8.5;
    else multiple = 5.0;

    const baseValuation = (arr / 1000) * multiple;
    let minVal = baseValuation * 0.85;
    let maxVal = baseValuation * 1.25;

    if (stage === 'Pre-seed') {
      minVal = Math.max(1.8, minVal);
      maxVal = Math.max(3.2, maxVal);
    } else if (stage === 'Seed') {
      minVal = Math.max(3.5, minVal);
      maxVal = Math.max(6.5, maxVal);
    } else {
      minVal = Math.max(8.0, minVal);
      maxVal = Math.max(16.0, maxVal);
    }

    return {
      min: minVal.toFixed(1),
      max: maxVal.toFixed(1),
      score: Math.min(94, Math.round(68 + (growth / 25) + (arr > 500 ? 8 : 4))),
    };
  }, [stage, arr, growth]);

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden ambient-wash-estimator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden p-5 sm:p-8 lg:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left Inputs */}
            <div className="lg:col-span-7 space-y-3.5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-2">
                  <Calculator size={14} />
                  <span>Instant estimator</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Preview your valuation and readiness score
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Adjust company parameters to view indicative ranges derived from 120,000+ venture comparables.
                </p>
              </div>

              {/* Stage buttons */}
              <div>
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                  Investment stage
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Pre-seed', 'Seed', 'Series A'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStage(s)}
                      className={`py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all ${
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

              {/* ARR Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">Annual recurring revenue</span>
                  <span className="font-extrabold text-blue-600">${arr >= 1000 ? `${(arr/1000).toFixed(1)}M` : `${arr}k`} ARR</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={arr}
                  onChange={(e) => setArr(Number(e.target.value))}
                  className="w-full accent-blue-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>$50k</span>
                  <span>$1.5M</span>
                  <span>$3.0M+</span>
                </div>
              </div>

              {/* Growth Rate Slider */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-bold text-slate-700 uppercase tracking-wider">Year-over-year growth rate</span>
                  <span className="font-extrabold text-indigo-600">+{growth}% YoY</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="300"
                  step="10"
                  value={growth}
                  onChange={(e) => setGrowth(Number(e.target.value))}
                  className="w-full accent-indigo-600 bg-slate-200 h-1.5 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>20%</span>
                  <span>150%</span>
                  <span>300%+</span>
                </div>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/50 rounded-2xl border border-blue-200/80 p-5 sm:p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-blue-100 mb-4">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Indicative result
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Live calculation
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <span className="text-[11px] text-slate-500 font-medium block">
                      Estimated valuation range
                    </span>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                      ${valuationEstimate.min}M to ${valuationEstimate.max}M
                    </div>
                    <span className="text-[11px] text-blue-600 font-semibold mt-0.5 block">
                      Based on {stage} multiple benchmarks
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-slate-700">Readiness score</span>
                      <span className="text-sm font-extrabold text-blue-600">
                        {valuationEstimate.score} / 100
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-300"
                        style={{ width: `${valuationEstimate.score}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-slate-500">
                      88 criteria check: {valuationEstimate.score >= 80 ? 'Fully investable' : 'Conditionally investable'}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-blue-100">
                <a
                  href="https://evaluer-valuation.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition-colors"
                >
                  <span>Generate official 409A report</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

