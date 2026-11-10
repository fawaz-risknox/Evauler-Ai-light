'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Send, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'],
        });
      } catch (err) {
        // no-op
      }
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 ambient-page">
      <Navbar />

      <SubpageHero
        badgeIcon={<MessageSquare size={14} className="text-blue-600" />}
        badgeText="Get in touch"
        title="Contact our valuation advisory team"
        subtitle="Have questions about continuous valuation modeling, 409A audit defense, or accelerator cohort pricing? Let us talk."
      />

      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Direct channels
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Talk directly with certified analysts
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Our team of chartered accountants and corporate secretaries handles valuation appraisals, Safe Harbor filings, and investor diligence support.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:info@evaluer.ai"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      info@evaluer.ai
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Locations
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      Bengaluru &bull; Kochi, India
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <a
                  href="tel:+918848827932"
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Telephone
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      +91 88488 27932
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500 block mb-3">
                  Connect across our networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-700 transition-colors"
                    aria-label="X (formerly Twitter)"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center text-slate-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7 bg-slate-50/70 rounded-2xl border border-slate-200 p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12 px-4 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Message delivered
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, {formData.name || 'there'}! Our corporate finance team will review your inquiry and reply to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 block mb-1">
                      Full name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block mb-1">
                      Email address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="text-xs font-bold text-slate-700 block mb-1">
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / 409A Appraisal"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 block mb-1">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your venture and evaluation requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-blue-600 resize-y"
                    />
                    <div className="text-right text-[11px] text-slate-400 mt-1">
                      {formData.message.length}/500
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

