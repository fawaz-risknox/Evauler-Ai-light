'use client';

import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const GAUGE_TICKS = Array.from({ length: 60 }, (_, i) => i);

export default function CTASection() {
  const handleTriggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
      });
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="cta" className="py-24 sm:py-32 bg-white relative overflow-hidden ambient-wash-g">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="cta-stage relative rounded-[32px] text-white p-8 sm:p-12 lg:p-16 text-center overflow-hidden">

          {/* Ambient glows */}
          <div aria-hidden="true" className="cta-glow cta-glow-a" />
          <div aria-hidden="true" className="cta-glow cta-glow-b" />
          <div aria-hidden="true" className="cta-glow cta-glow-c" />

          {/* Rising valuation line */}
          <svg
            aria-hidden="true"
            className="cta-chart"
            viewBox="0 0 1200 400"
            preserveAspectRatio="xMidYMax slice"
            fill="none"
          >
            <defs>
              <linearGradient id="ctaLine" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#93b3ff" stopOpacity="0" />
                <stop offset="0.35" stopColor="#93b3ff" stopOpacity="0.5" />
                <stop offset="1" stopColor="#67e8f9" stopOpacity="0.85" />
              </linearGradient>
              <linearGradient id="ctaArea" x1="0" y1="60" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#93b3ff" stopOpacity="0.22" />
                <stop offset="1" stopColor="#93b3ff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Ghost series for depth */}
            <path
              d="M-20 356 C 110 350, 180 330, 270 326 S 420 286, 520 292 S 660 238, 760 246 S 900 190, 1010 196 S 1150 148, 1220 136"
              stroke="rgba(147, 179, 255, 0.16)"
              strokeWidth="1.5"
              strokeDasharray="4 10"
            />

            <path
              d="M-20 322 C 110 316, 180 292, 270 288 S 420 244, 520 250 S 660 194, 760 202 S 900 142, 1010 148 S 1150 96, 1220 84 L 1220 400 L -20 400 Z"
              fill="url(#ctaArea)"
            />
            <path
              d="M-20 322 C 110 316, 180 292, 270 288 S 420 244, 520 250 S 660 194, 760 202 S 900 142, 1010 148 S 1150 96, 1220 84"
              stroke="url(#ctaLine)"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Data nodes */}
            {[
              [270, 288],
              [520, 250],
              [760, 202],
              [1010, 148],
            ].map(([cx, cy]) => (
              <g key={`${cx}-${cy}`}>
                <circle cx={cx} cy={cy} r="7" fill="#93b3ff" fillOpacity="0.12" />
                <circle cx={cx} cy={cy} r="2.5" fill="#bfdbfe" />
              </g>
            ))}
          </svg>

          {/* Valuation dial, bottom right */}
          <svg
            aria-hidden="true"
            className="cta-gauge"
            viewBox="0 0 480 480"
            fill="none"
          >
            <defs>
              <linearGradient id="ctaArc" x1="80" y1="60" x2="330" y2="250" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#93b3ff" stopOpacity="0.15" />
                <stop offset="1" stopColor="#22d3ee" stopOpacity="0.85" />
              </linearGradient>
            </defs>

            <circle cx="240" cy="240" r="196" stroke="rgba(147, 179, 255, 0.2)" strokeWidth="1" />
            <circle
              cx="240"
              cy="240"
              r="158"
              stroke="rgba(147, 179, 255, 0.16)"
              strokeWidth="1"
              strokeDasharray="2 9"
            />
            <circle cx="240" cy="240" r="118" stroke="rgba(147, 179, 255, 0.24)" strokeWidth="1.2" />
            <circle cx="240" cy="240" r="78" stroke="rgba(103, 232, 249, 0.2)" strokeWidth="1" />

            {/* Tick ring */}
            {GAUGE_TICKS.map((i) => {
              const major = i % 5 === 0;
              return (
                <line
                  key={i}
                  x1="240"
                  y1={major ? 32 : 36}
                  x2="240"
                  y2="44"
                  stroke={major ? 'rgba(191, 219, 254, 0.55)' : 'rgba(147, 179, 255, 0.28)'}
                  strokeWidth={major ? 1.6 : 1}
                  transform={`rotate(${i * 6} 240 240)`}
                />
              );
            })}

            <circle
              cx="240"
              cy="240"
              r="196"
              stroke="url(#ctaArc)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="150 1081"
              transform="rotate(-152 240 240)"
            />
          </svg>
          <div aria-hidden="true" className="cta-sweep" />

          {/* Floating data chips (large screens) */}
          <div aria-hidden="true" className="cta-chip cta-chip-a">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200/80">
              Evaluation model
            </span>
            <span className="text-sm font-bold text-white">88 criteria</span>
            <span className="text-[10px] font-medium text-blue-100/70">5 dimensions</span>
          </div>

          <div aria-hidden="true" className="cta-chip cta-chip-b">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-blue-200/80">
              Readiness
            </span>
            <span className="mt-1 flex items-end gap-1">
              {[8, 12, 10, 16, 20].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full"
                  style={{
                    height: `${h}px`,
                    background:
                      i === 4
                        ? 'linear-gradient(to top, #22d3ee, #bfdbfe)'
                        : 'rgba(147, 179, 255, 0.35)',
                  }}
                />
              ))}
            </span>
            <span className="text-[10px] font-medium text-blue-100/70">Weighted score</span>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-5 sm:space-y-6">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold">
              <Sparkles size={15} className="text-blue-200" />
              <span>Get started in under 5 minutes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Ready to know your numbers before you raise?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join founders and venture investors scoring startups with structured, audited criteria.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3">
              <a
                href="https://evaluer-valuation.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleTriggerConfetti}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-sm sm:text-base shadow-md transition-all active:scale-[0.98]"
              >
                <span>Get your valuation report</span>
                <ArrowRight size={17} strokeWidth={2.2} />
              </a>
              <a
                href="https://www.evaluerai.com/auth/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-blue-800/80 hover:bg-blue-800 text-white font-bold text-sm sm:text-base border border-white/20 shadow-xs transition-all active:scale-[0.98]"
              >
                <span>Check investability score</span>
                <ArrowRight size={17} strokeWidth={2} />
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-blue-100/90 font-medium">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-300" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-300" />
                IPEV and IRS 409A aligned
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-blue-300" />
                Instant PDF report export
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
