import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BarChart3, Check, Eye, Globe, Map, Smartphone, TrendingUp, Cpu, ShieldAlert, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "Plausible Analytics | Self-Hosted Developer Services | Luckylinux",
  description: "Get a privacy-first, cookieless web analytics tracking account powered by Plausible, hosted on Luckylinux's private server. Keep complete ownership of your visitor data.",
  alternates: {
    canonical: "/services/analytics",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luckylinux.dev/services/analytics",
    siteName: "Luckylinux's Self-Hosted Universe",
    title: "Plausible Analytics | Self-Hosted Developer Services | Luckylinux",
    description: "Privacy-first, cookie-free web analytics tracking powered by Plausible Analytics on Luckylinux's private server.",
  }
}

export default function AnalyticsPage() {
  const mailtoLink = `mailto:admin@luckylinux.dev?subject=Requesting%20Free%20Plausible%20Analytics%20Account&body=Hi%2C%0A%0AI%20am%20interested%20in%20setting%20up%20analytics%20tracking%20for%20my%20website%20using%20your%20self-hosted%20Plausible%20instance.%0A%0AWebsite%20Domain%3A%20%0AName%3A%20%0A%0AThank%20you!`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Self-Hosted Plausible Analytics",
    "serviceType": "Web Analytics Hosting",
    "provider": {
      "@type": "Person",
      "name": "Lucky Verma",
      "url": "https://luckylinux.dev"
    },
    "description": "Privacy-first, cookie-free audience tracking powered by Plausible Analytics, hosted on a private server. Offers free accounts for developer projects.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free developer hosting for colleagues and friends."
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#F9F7F3] text-[#1C1C1C] flex flex-col font-sans selection:bg-[#B36A2E]/10 selection:text-[#B36A2E]">
      {/* Header */}
      <header className="relative px-6 py-6 border-b border-[rgba(0,0,0,0.08)] bg-[#F9F7F3] z-10 select-none">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/#infrastructure" className="flex items-center gap-2 text-[#66635F] hover:text-[#1C1C1C] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-[rgba(0,0,0,0.12)] text-[#B36A2E] bg-[#F6F3ED] mb-2">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl text-[#1C1C1C] font-serif font-normal">
            Plausible Analytics
          </h1>
          <p className="text-xl text-[#66635F] font-light max-w-lg mx-auto">
            Privacy-first, cookieless audience tracking powered by Plausible, hosted on my private server.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#66635F]">
            <span className="text-[#B36A2E] font-semibold">Free Developer Hosting</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href="https://plausible.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#B36A2E] flex items-center gap-1.5 transition-colors border-b border-transparent hover:border-[#B36A2E] pb-0.5"
            >
              Official Project <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-6 py-12 flex-1">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Free Banner Invite */}
          <div className="bg-[#B36A2E]/5 border border-[#B36A2E]/25 rounded-md p-6 flex flex-col md:flex-row gap-5 items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-md border border-[#B36A2E]/25 bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h4 className="text-[15px] font-semibold text-[#1C1C1C] uppercase font-mono tracking-wider">Free Hosting for Your Projects</h4>
              <p className="text-sm text-[#66635F] leading-relaxed">
                If you are a developer, colleague, or friend, you can get a <strong>free account</strong> on my Plausible server to track your own websites. You will receive a clean JS snippet and your own secure dashboard without worrying about paying for analytics subscriptions or managing a self-hosted server yourself.
              </p>
              <div className="pt-2">
                <a href={mailtoLink} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#B36A2E] hover:underline">
                  Claim Free Analytics Domain →
                </a>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Overview</h2>
            <p className="text-[16px] md:text-[17px] text-[#66635F] font-light leading-relaxed">
              Plausible Analytics is an open-source, lightweight, and GDPR-compliant alternative to Google Analytics. By running Plausible on our own dedicated server, we gain complete ownership of historical analytics data without selling visitor behaviors to ad networks.
            </p>
          </div>

          {/* Developer Utility & Documentation */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Developer Utility & Documentation</h2>
            <div className="bg-[#F6F3ED] border border-[rgba(0,0,0,0.08)] rounded-md p-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Ultra-Lightweight Script (&lt;2KB)</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Standard tracking scripts add massive page bloat. Plausible’s script is under 2KB, loading asynchronously to prevent blocking your main JavaScript rendering thread. This preserves high Google Lighthouse scores and Core Web Vitals.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Globe className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">GDPR & CCPA Compliant Out-of-the-Box</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Plausible does not store cookies, track personal IP addresses, or maintain persistent client identifiers. Because no personal data is collected, developers do not need to show annoying cookie consent banners or privacy opt-ins.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">API Integrations & Goal Tracking</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Offers native support for tracking custom events (e.g. form signups, purchase clicks, API errors) using simple inline JS dispatchers. You can also fetch analytics metrics programmatically via Plausible's REST API.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Track */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Tracked Metrics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Visitor Metrics</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Page views, unique visitors, active session durations, and instant bounce rates.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Device Details</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Traffic mapped by operating systems, viewport size, and browser types.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">What&apos;s Included</h2>
            <div className="bg-[#F6F3ED] border border-[rgba(0,0,0,0.08)] rounded-md p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#66635F] font-light text-[15px]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Custom JS tracker (&lt;2KB payload)</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Real-time dashboard access link</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Goal & event tracking API</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>No GDPR cookie flags needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
