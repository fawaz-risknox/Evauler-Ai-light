import './globals.css';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')
      ? process.env.NEXT_PUBLIC_SITE_URL
      : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'https://evauler-ai-light.vercel.app';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'EvaluerAI | Startup valuation and investability score',
  description:
    'EvaluerAI scores your company on 88 criteria and returns an entity valuation and an investability score from your business, financials, market, and risk data.',
  keywords: [
    'EvaluerAI',
    'Startup Valuation',
    'Investability Score',
    'Entity Valuation',
    '88 evaluation criteria',
    '5 dimension evaluation',
    'VC cohort analytics',
    'ESG startup scoring',
    'pitch deck readiness',
  ],
  icons: {
    icon: '/tab-preview.png',
    shortcut: '/tab-preview.png',
    apple: '/tab-preview.png',
  },
  openGraph: {
    title: 'EvaluerAI | Startup valuation and investability score',
    description:
      'Score your company on 88 criteria across five dimensions. Get a valuation report and a ranked list of what to fix.',
    url: '/',
    siteName: 'EvaluerAI',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'EvaluerAI Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EvaluerAI | Startup valuation and investability score',
    description:
      'Score your company on 88 criteria across five dimensions. Get a valuation report and a ranked list of what to fix.',
    images: ['/opengraph-image.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 selection:bg-blue-100 selection:text-blue-900 antialiased">
        {children}
      </body>
    </html>
  );
}

