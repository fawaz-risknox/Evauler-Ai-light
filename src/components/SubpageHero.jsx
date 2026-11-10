'use client';

export default function SubpageHero({ badgeIcon, badgeText, title, subtitle, actionCta }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-blue-50/60 via-slate-50/50 to-white border-b border-slate-200/80">
      {/* Defined light grid pattern background with ambient depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none -z-0 overflow-hidden"
      >
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-blue-100/70 via-indigo-50/50 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-[280px] h-[280px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 subpage-grid-pattern opacity-90"
          style={{
            maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0.4) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0.4) 100%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 text-xs font-semibold mb-6 shadow-xs">
            {badgeIcon}
            <span>{badgeText}</span>
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}

        {actionCta && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {actionCta}
          </div>
        )}
      </div>
    </section>
  );
}

