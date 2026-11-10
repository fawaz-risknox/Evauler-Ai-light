'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Valuation', href: '/valuation' },
  { label: 'Investability', href: '/investability-score' },
  { label: 'Cap table', href: '/cap-table' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-9 w-32 sm:w-36 transition-transform group-hover:scale-[1.02]">
            <Image
              src="/LOGO/eValuer Ai Logo Black.png"
              alt="EvaluerAI"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60 shadow-xs">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-white text-blue-600 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.evaluerai.com/auth/sign-in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 transition-colors"
          >
            Sign in
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xs hover:shadow-sm transition-all active:scale-[0.98]"
          >
            <span>Partner With EvaluerAI</span>
            <ArrowRight size={13} strokeWidth={2.2} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="/contact"
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-600 text-white"
          >
            Partner
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="https://www.evaluerai.com/auth/sign-in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 rounded-lg border border-slate-200"
              >
                Sign in
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-lg shadow-xs"
              >
                Partner With EvaluerAI
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

