'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  Check,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  const tiers = [
    {
      name: 'Bootstrap',
      tagline: 'For pre-seed and early incorporation',
      price: '$0',
      period: 'forever free',
      highlight: false,
      badge: 'Free tier',
      features: [
        'Up to 25 cap table stakeholders',
        'Five-method valuation preview',
        'Basic round dilution simulator',
        'Standard stock certificate issuance',
        'Email support',
      ],
      cta: 'Get started free',
      link: 'https://www.evaluerai.com/auth/sign-in',
    },
    {
      name: 'Growth Pro',
      tagline: 'For seed to Series A tech startups',
      price: isAnnual ? '$63' : '$79',
      period: 'per month, billed annually',
      highlight: false,
      badge: 'Equity operations',
      features: [
        'Unlimited stakeholders and option grants',
        'Continuous valuation updates',
        'SAFE and convertible note waterfall',
        'Investor data room',
        'Accounting integration (QuickBooks, Xero, Stripe)',
        'Electronic signatures and SEC Rule 701 compliance',
      ],
      cta: 'Start 14-day trial',
      link: 'https://www.evaluerai.com/auth/sign-in',
    },
    {
      name: '409A Certified Bundle',
      tagline: 'IRS-compliant valuation and equity software',
      price: '$990',
      period: 'per year (all included)',
      highlight: true,
      badge: 'Most popular',
      features: [
        'One IRS-defensible 409A report',
        'Signed by certified valuation analysts',
        'One year of Growth Pro cap table included',
        'Initial draft within 24 hours',
        'IRS Safe Harbor defense support',
        'Unlimited ISO, NSO, and RSU option awards',
        'Analyst review call',
      ],
      cta: 'Order 409A bundle',
      link: 'https://evaluer-valuation.vercel.app/',
    },
    {
      name: 'Institutional / Fund',
      tagline: 'For venture funds and accelerators',
      price: '$2,400',
      period: 'per year (up to 20 entities)',
      highlight: false,
      badge: 'Cohort analytics',
      features: [
        'Batch entity evaluations (20+ startups)',
        'Cohort comparison matrix',
        'Readiness ranking dashboard',
        'White-label reporting & export',
        'REST API access',
        'Dedicated valuation specialist',
      ],
      cta: 'Contact for fund onboarding',
      link: '/contact',
    },
  ];

  const faqs = [
    {
      q: 'When does a startup legally require a 409A valuation?',
      a: 'The IRS requires an independent 409A valuation before you grant stock options to employees or advisors. This sets the fair market value strike price. Valuations must be renewed every 12 months, or after any priced funding round.',
    },
    {
      q: 'How does EvaluerAI compare to Eqvista and Equidam pricing?',
      a: 'Eqvista charges separately for cap table software ($990 to $1,800 a year) and 409A reports. Equidam offers valuation modeling for 490 euros a year without certified IRS 409A sign-off. EvaluerAI includes both continuous valuation modeling and certified 409A audit reports in a $990 a year plan.',
    },
    {
      q: 'Can we update our valuation if we close a SAFE or price increase?',
      a: 'Yes. Growth Pro and 409A plan subscribers can run updated valuations when revenue changes or after closing a SAFE.',
    },
    {
      q: 'What is included in the Accelerator and VC Cohort plan?',
      a: 'Accelerator and fund plans include batch company onboarding, cohort comparisons, automated PDF export, and REST API access.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 ambient-page">
      <Navbar />

      <SubpageHero
        badgeIcon={<Sparkles size={14} className="text-blue-600" />}
        badgeText="Predictable pricing"
        title="Simple tiers for startups and venture funds"
        subtitle="Continuous equity software and certified 409A valuations. No hidden audit add-ons."
      />

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12 sm:mb-16">
          <span className={`text-xs font-bold ${!isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
            Monthly billing
          </span>
          <button
            type="button"
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 rounded-full bg-blue-600 p-0.5 transition-colors relative"
            aria-label="Toggle annual billing"
          >
            <div
              className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform duration-200 ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-bold ${isAnnual ? 'text-slate-900' : 'text-slate-500'}`}>
              Annual billing
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
              Save 20%
            </span>
          </div>
        </div>

        {/* 4 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl border p-6 sm:p-7 flex flex-col justify-between transition-all ${
                tier.highlight
                  ? 'bg-white border-blue-600 shadow-xl ring-2 ring-blue-600/10 relative'
                  : 'bg-white border-slate-200 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-xs">
                    {tier.badge}
                  </div>
                )}

                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900">{tier.name}</h3>
                  {!tier.highlight && (
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 min-h-[32px] mb-4">
                  {tier.tagline}
                </p>

                <div className="pb-5 mb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {tier.price}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{tier.period}</span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={tier.link}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                    tier.highlight
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing FAQs */}
        <div className="mt-20 max-w-3xl mx-auto pt-16 border-t border-slate-200">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Pricing questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Common questions on 409A renewals, cap table seat tiers, and refunds.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((f) => (
              <div key={f.q} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5">{f.q}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{f.a}</div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <CTASection />
      <Footer />
    </main>
  );
}

