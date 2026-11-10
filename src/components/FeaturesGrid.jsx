'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { 
  BarChart2, 
  Layers, 
  AlertCircle, 
  ListOrdered, 
  Users2, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const TABS = [
  { id: 'evaluation', label: 'Evaluation', icon: BarChart2, title: 'Evaluation scorecard' },
  { id: 'classification', label: 'Classification', icon: Layers, title: 'Readiness classification' },
  { id: 'risk', label: 'Risk and diligence', icon: AlertCircle, title: 'Diligence risk radar' },
  { id: 'action', label: 'Action roadmap', icon: ListOrdered, title: 'Ranked gap list' },
  { id: 'insights', label: 'Insights', icon: Sparkles, title: 'ESG and fundability pages' },
  { id: 'cohort', label: 'Cohort analytics', icon: Users2, title: 'Portfolio benchmarking' },
];

function FeaturePreview({ src, alt, width, height, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Soft halo tying the screenshot to the section background */}
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-blue-100/60 via-indigo-50/40 to-transparent blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-900/5">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50/80 px-3.5 py-2">
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-300" />
          <span className="ml-2 text-[10px] font-medium text-slate-400">
            evaluer.ai / product preview
          </span>
        </div>

        <div className="feature-media flex items-center justify-center bg-white p-2.5 sm:p-3">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="(min-width: 1024px) 55vw, 92vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// The navbar is 72px tall and the stage pins directly below it.
const PIN_TOP = 72;
// Below this height the full stage cannot fit, so the section falls back to manual tabs.
// Narrower desktops need a little more height because the panel copy wraps further.
const PINNED_QUERY =
  '(min-width: 1200px) and (min-height: 720px), (min-width: 1024px) and (min-height: 780px)';

export default function FeaturesGrid() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const activeIndex = TABS.findIndex((tab) => tab.id === activeTab);
  const sectionRef = useRef(null);
  const tabRefs = useRef([]);
  const scrollLockRef = useRef(false);
  const lockTimeoutRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const pinned = window.matchMedia(PINNED_QUERY);
    let frame = 0;

    const updateFromScroll = () => {
      frame = 0;
      if (!pinned.matches || scrollLockRef.current) return;

      const pinDistance = section.offsetHeight - window.innerHeight + PIN_TOP;
      if (pinDistance <= 0) return;

      const progress = (PIN_TOP - section.getBoundingClientRect().top) / pinDistance;
      const nextIndex = Math.min(
        TABS.length - 1,
        Math.max(0, Math.floor(progress * TABS.length))
      );
      const nextId = TABS[nextIndex].id;

      setActiveTab((current) => (current === nextId ? current : nextId));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFromScroll);
    };

    const releaseLock = () => {
      if (!scrollLockRef.current) return;
      scrollLockRef.current = false;
      if (lockTimeoutRef.current) {
        window.clearTimeout(lockTimeoutRef.current);
        lockTimeoutRef.current = null;
      }
      requestUpdate();
    };

    updateFromScroll();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('scrollend', releaseLock);
    window.addEventListener('wheel', releaseLock, { passive: true });
    window.addEventListener('touchstart', releaseLock, { passive: true });
    pinned.addEventListener?.('change', requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      if (lockTimeoutRef.current) window.clearTimeout(lockTimeoutRef.current);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('scrollend', releaseLock);
      window.removeEventListener('wheel', releaseLock);
      window.removeEventListener('touchstart', releaseLock);
      pinned.removeEventListener?.('change', requestUpdate);
    };
  }, []);

  const selectTab = useCallback((index) => {
    const nextTab = TABS[index];
    if (!nextTab) return;

    const section = sectionRef.current;
    const pinned =
      typeof window !== 'undefined' && window.matchMedia(PINNED_QUERY).matches;

    if (!pinned || !section) {
      setActiveTab(nextTab.id);
      return;
    }

    const pinDistance = section.offsetHeight - window.innerHeight + PIN_TOP;
    const targetProgress = (index + 0.5) / TABS.length;
    const targetTop = Math.max(
      0,
      window.scrollY +
        section.getBoundingClientRect().top -
        PIN_TOP +
        targetProgress * pinDistance
    );
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Keep scroll updates from flickering through the tabs while the page
    // animates to the clicked one. A wheel or touch gesture releases the lock.
    scrollLockRef.current = true;
    setActiveTab(nextTab.id);
    if (lockTimeoutRef.current) window.clearTimeout(lockTimeoutRef.current);
    lockTimeoutRef.current = window.setTimeout(() => {
      scrollLockRef.current = false;
      lockTimeoutRef.current = null;
    }, 1400);

    window.scrollTo({
      top: targetTop,
      behavior: reduceMotion ? 'instant' : 'smooth',
    });
  }, []);

  const handleTabKeyDown = (event) => {
    let nextIndex = null;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (activeIndex + 1) % TABS.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (activeIndex - 1 + TABS.length) % TABS.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = TABS.length - 1;
    }

    if (nextIndex === null) return;

    event.preventDefault();
    selectTab(nextIndex);
    tabRefs.current[nextIndex]?.focus({ preventScroll: true });
  };

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      style={{ '--feature-steps': TABS.length }}
      className="features-scrolly py-20 sm:py-28 bg-white border-y border-slate-200/80"
    >
      <div className="features-scrolly-stage relative">
        <div aria-hidden="true" className="features-ambient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="features-header text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>What the product does</span>
          </div>
          <h2 className="features-title text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Score, classify, and list the work
          </h2>
          <p className="features-desc mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            One model scores readiness, adds market and peer context, and ranks the gaps. Founders see what to fix. Investors see the same numbers.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div
          role="tablist"
          aria-label="Product capabilities"
          aria-orientation="horizontal"
          onKeyDown={handleTabKeyDown}
          className="features-tabs flex items-center justify-start sm:justify-center overflow-x-auto pb-2 mb-6 sm:mb-8 no-scrollbar gap-1.5"
        >
          {TABS.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`features-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={isActive ? `features-panel-${tab.id}` : undefined}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectTab(index)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel Content Box */}
        <div
          role="tabpanel"
          id={`features-panel-${activeTab}`}
          aria-labelledby={`features-tab-${activeTab}`}
          tabIndex={0}
          className="features-panel bg-slate-50/70 rounded-2xl border border-slate-200 p-5 sm:p-7 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
        >
          <div key={activeTab} className="feature-panel-enter">

          {/* TAB 1: Evaluation */}
          {activeTab === 'evaluation' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  Dimension breakdown
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  88 criteria across five core dimensions
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every company is evaluated against structured weights. You see exactly which dimensions boost your score and where points were deducted before investors ask.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-1 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <span>Idea validation and market size, 25% weight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <span>Qualitative execution and domain leadership, 25% weight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <span>Financial position, burn multiple, and margins, 20% weight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <span>ESG compliance, regulation, and governance, 15% weight</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <span>Fundability and investor round dynamics, 15% weight</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <FeaturePreview
                  src="/form.png"
                  alt="Evaluer AI report generator, step 1 of 6: Basic Information with entity type options"
                  width={957}
                  height={457}
                />
              </div>
            </div>
          )}

          {/* TAB 2: Classification */}
          {activeTab === 'classification' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                  Readiness status
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Clear readiness classifications
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Instead of ambiguous feedback like &apos;not right now,&apos; EvaluerAI returns three distinct readiness tiers with exact conditions to advance.
                </p>
                <div className="space-y-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200">
                    <span className="text-xs font-bold text-emerald-800 block">Fully investable, 80 to 100 points</span>
                    <span className="text-[11px] text-emerald-700">Meets institutional investor thresholds across unit economics and governance.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200">
                    <span className="text-xs font-bold text-amber-800 block">Conditionally investable, 60 to 79 points</span>
                    <span className="text-[11px] text-amber-700">Valid model, but named gaps must be resolved before a priced institutional round.</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-100 border border-slate-200">
                    <span className="text-xs font-bold text-slate-800 block">Early stage, under 60 points</span>
                    <span className="text-[11px] text-slate-600">Focus on product-market fit, customer retention, and early traction milestones.</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <FeaturePreview
                  src="/classification.png"
                  alt="Evaluer AI dashboard showing an overall investment readiness score of 52 percent with Idea Validation, Qualitative, ESG, Financial and Fundability section scores"
                  width={956}
                  height={461}
                />
              </div>
            </div>
          )}

          {/* TAB 3: Risk */}
          {activeTab === 'risk' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                  Diligence radar
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Catch diligence flags before venture partners do
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Evaluates potential dealbreakers in corporate governance, cap table concentration, key person dependencies, and runway burn.
                </p>
                <div className="p-3 rounded-lg bg-white border border-slate-200 space-y-1.5 text-xs">
                  <div className="font-bold text-slate-900">What investors look for in diligence:</div>
                  <div className="text-slate-600">Cap table dead equity or unresolved SAFE notes</div>
                  <div className="text-slate-600">Customer concentration over 30% in a single account</div>
                  <div className="text-slate-600">Missing IP assignments or trademark registrations</div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <FeaturePreview
                  src="/risk.png"
                  alt="Evaluer AI Idea Validation Analysis report showing a 42 percent score, key strengths, critical gaps and immediate actions"
                  width={954}
                  height={934}
                  className="mx-auto w-full max-w-[440px]"
                />
              </div>
            </div>
          )}

          {/* TAB 4: Action */}
          {activeTab === 'action' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  Improvement roadmap
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  A ranked list of gaps with timelines
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Every point deduction is paired with a concrete action item, an estimated effort window, and the expected score gain.
                </p>
                <div className="text-xs text-slate-600">
                  Move from conditionally investable to fully investable systematically within 60 to 90 days.
                </div>
              </div>
              <div className="lg:col-span-7">
                <FeaturePreview
                  src="/action.png"
                  alt="Evaluer AI Immediate Actions list: five prioritized actions such as implementing a cost reduction program, each with an impact and a timeline"
                  width={966}
                  height={418}
                />
              </div>
            </div>
          )}

          {/* TAB 5: Insights */}
          {activeTab === 'insights' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
                  ESG and fundability
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  ESG and fundability pages
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The ESG, financials, and capital-structure pages show the scores and the missing items, with recommendations for compliance, profit, funding documents, and use of funds.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-1 font-medium">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                    <span>ESG score with key strengths and priority improvements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                    <span>Financial position and capital-structure signals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-indigo-600 shrink-0" />
                    <span>Recommendations tied to compliance and use of funds</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <FeaturePreview
                  src="/insights.png"
                  alt="Evaluer AI ESG Perspective Executive Summary showing a 47 percent score, key strengths and priority improvements"
                  width={960}
                  height={717}
                  className="mx-auto w-full max-w-[500px]"
                />
              </div>
            </div>
          )}

          {/* TAB 6: Cohort */}
          {activeTab === 'cohort' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 space-y-3">
                <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                  Venture funds and accelerators
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Compare entire batches on one objective scale
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Accelerators, family offices, and venture firms benchmark 40 or more startups side by side, replacing room debates with standardized criteria.
                </p>
              </div>
              <div className="lg:col-span-7">
                <FeaturePreview
                  src="/cohort.png"
                  alt="Evaluer AI Report Library dashboard showing total, in-progress and completed reports with investability scores for each venture"
                  width={957}
                  height={459}
                />
              </div>
            </div>
          )}

          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
