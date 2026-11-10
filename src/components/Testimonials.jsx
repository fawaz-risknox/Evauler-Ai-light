'use client';

import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'We used EvaluerAI to list the readiness gaps that would come up in diligence. The score showed what to fix before we took the company to investors.',
    name: 'Michael Smith',
    role: 'Security Consultant',
    company: 'Enterprise Infrastructure',
  },
  {
    quote:
      'The scored report told us which founders to spend time with. We now rank portfolio companies by the same 88 criteria instead of a slide deck.',
    name: 'Abid Sherrif',
    role: 'CIO',
    company: 'SP Medifort Hospital',
  },
  {
    quote:
      'Follow-ups used to sit in inboxes. EvaluerAI keeps the open items on one list, so we close them.',
    name: 'Aman S',
    role: 'Operations Head',
    company: 'Venture Operations',
  },
  {
    quote:
      'EvaluerAI scored our readiness and listed the work in order. In a few months we moved from Conditionally Investable to a higher score, then closed the round.',
    name: 'Vivek Chandran',
    role: 'Founder & CTO',
    company: 'RISKNOX AI',
  },
  {
    quote:
      'The ESG and fundability sections gave us a list of compliance and capital-planning tasks. We use the same score to compare companies in the program.',
    name: 'Priya Menon',
    role: 'Director of Programs',
    company: 'TechStars Accelerator',
  },
  {
    quote:
      'We scored 40 early-stage startups on the same criteria. The cohort view made the ranking obvious instead of a room full of opinions.',
    name: 'Gokul R.',
    role: 'Managing Partner',
    company: 'SWIFT Capital',
  },
];

function TestimonialCard({ item }) {
  return (
    <article className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-all flex h-full w-full flex-col justify-between">
      <div>
        {/* 5 Stars */}
        <div
          className="flex items-center gap-1 text-amber-400 mb-3"
          role="img"
          aria-label="Rated 5 out of 5 stars"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
          ))}
        </div>

        <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4 italic">
          <Quote size={16} className="mb-1.5 text-blue-200" aria-hidden="true" />
          <p>&quot;{item.quote}&quot;</p>
        </blockquote>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm shrink-0">
          {item.name.split(' ').map((n) => n[0]).join('')}
        </div>
        <div>
          <div className="text-sm font-bold text-slate-900">{item.name}</div>
          <div className="text-[11px] text-slate-500">{item.role}, {item.company}</div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const slides = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/80 ambient-wash-d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold mb-3">
            <span>Client stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What operators say about EvaluerAI
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Quotes from founders, operators, and investors who used the report.
          </p>
        </div>

      </div>

      {/* Scrolling testimonial marquee */}
      <div className="testimonials-marquee">
        <div className="testimonials-track">
          {slides.map((t, index) => (
            <div
              key={`${t.name}-${index}`}
              className="testimonial-slide"
              aria-hidden={index >= TESTIMONIALS.length || undefined}
            >
              <TestimonialCard item={t} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
