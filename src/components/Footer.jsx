'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 mt-auto ambient-wash-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-100">
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link href="/" className="inline-block relative h-9 w-36">
              <Image
                src="/LOGO/eValuer Ai Logo Black.png"
                alt="EvaluerAI Logo"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mt-2">
              Continuous startup valuation and 88-criteria investability scoring.
              Built by chartered accountants, company secretaries, and engineers to replace opinion-based appraisals with objective criteria.
            </p>
            <div className="flex flex-col gap-2 pt-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-blue-600 shrink-0" />
                <span>Bengaluru and Kochi, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-blue-600 shrink-0" />
                <span>info@evaluer.ai</span>
              </div>
            </div>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/valuation" className="hover:text-blue-600 transition-colors">
                  Valuation engine
                </Link>
              </li>
              <li>
                <Link href="/investability-score" className="hover:text-blue-600 transition-colors">
                  Investability score
                </Link>
              </li>
              <li>
                <Link href="/cap-table" className="hover:text-blue-600 transition-colors">
                  Cap table simulator
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                  Pricing plans
                </Link>
              </li>
              <li>
                <a
                  href="https://evaluer-valuation.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                >
                  <span>Launch valuation app</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Methodology */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Methodology
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/investability-score" className="hover:text-blue-600 transition-colors">
                  88 evaluation criteria
                </Link>
              </li>
              <li>
                <Link href="/valuation" className="hover:text-blue-600 transition-colors">
                  5 valuation methods
                </Link>
              </li>
              <li>
                <span className="text-slate-500">IPEV compliance</span>
              </li>
              <li>
                <span className="text-slate-500">IRS 409A audit defense</span>
              </li>
              <li>
                <span className="text-slate-500">VC cohort benchmarks</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-blue-600 transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                  Blog and insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact support
                </Link>
              </li>
              <li>
                <a
                  href="https://www.evaluerai.com/auth/sign-in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  Investor portal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-emerald-600" />
            <span>Bank-grade 256-bit data encryption, IPEV and IRS Safe Harbor compliant</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} EvaluerAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

