'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import CTASection from '@/components/CTASection';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'All articles' },
  { id: 'valuation', label: 'Valuation methods' },
  { id: 'compliance', label: '409A and compliance' },
  { id: 'investability', label: 'Investability and VC' },
  { id: 'equity', label: 'Cap tables and equity' },
];

const ARTICLES = [
  {
    id: 1,
    category: 'valuation',
    categoryLabel: 'Valuation methods',
    title: 'The shift from annual appraisals to continuous startup valuation',
    desc: 'How continuous financial data and live cap tables replace annual accounting estimates.',
    readTime: '6 min read',
    date: 'Oct 28, 2026',
    featured: true,
  },
  {
    id: 2,
    category: 'valuation',
    categoryLabel: 'Valuation methods',
    title: 'Comparing five startup valuation methods: Scorecard, Berkus, and DCF',
    desc: 'How qualitative scoring differs from discounted cash flow multiples, and how stage weights adjust over time.',
    readTime: '8 min read',
    date: 'Oct 24, 2026',
  },
  {
    id: 3,
    category: 'investability',
    categoryLabel: 'Investability and VC',
    title: 'Understanding the 88 criteria in the EvaluerAI investability model',
    desc: 'A breakdown of idea validation, qualitative factors, ESG, financials, and fundability.',
    readTime: '10 min read',
    date: 'Oct 18, 2026',
  },
  {
    id: 4,
    category: 'compliance',
    categoryLabel: '409A and compliance',
    title: 'What founders get wrong about IRS 409A safe harbor option valuations',
    desc: 'When option strike prices must be updated, and how independent appraisal protects employee stock grants.',
    readTime: '7 min read',
    date: 'Oct 12, 2026',
  },
  {
    id: 5,
    category: 'investability',
    categoryLabel: 'Investability and VC',
    title: 'How accelerators use cohort benchmarking to evaluate pitch batches',
    desc: 'Replacing subjective committee arguments with standardized 5-dimension readiness matrices.',
    readTime: '5 min read',
    date: 'Oct 05, 2026',
  },
  {
    id: 6,
    category: 'equity',
    categoryLabel: 'Cap tables and equity',
    title: 'Modeling pre-money SAFEs and unallocated option pools',
    desc: 'How post-round dilution waterfalls affect founder equity when SAFEs convert at discount caps.',
    readTime: '9 min read',
    date: 'Sep 29, 2026',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchCat = activeCategory === 'all' || art.category === activeCategory;
      const matchSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 ambient-page">
      <Navbar />

      <SubpageHero
        badgeIcon={<BookOpen size={14} className="text-blue-600" />}
        badgeText="Knowledge hub"
        title="Venture valuation insights and compliance guides"
        subtitle="Articles and practical frameworks on startup valuation methods, IRS 409A compliance, and due diligence readiness."
      />

      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Search & Category filter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 w-full md:w-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full pl-9 pr-4 py-2 bg-white rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3">
                  <span className="font-bold text-blue-600 uppercase tracking-wider">
                    {art.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                  {art.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {art.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>{art.date}</span>
                <span className="font-bold text-blue-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight size={13} />
                </span>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-sm text-slate-500">No articles match your search criteria.</p>
          </div>
        )}
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}

