import Link from "next/link"
import { ArrowLeft, BarChart3, Check, Eye, Globe, Map, Smartphone, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AnalyticsPage() {
  const mailtoLink = `mailto:purchases@luckylinux.dev?subject=Free%20Web%20Analytics%20Service&body=Hi%2C%0A%0AI%20am%20interested%20in%20using%20your%20free%20Web%20Analytics%20service.%0A%0APlease%20provide%20me%20with%3A%0A-%20Integration%20instructions%0A-%20Tracking%20code%0A-%20Dashboard%20access%0A-%20Available%20metrics%0A%0AWebsite%20URL%3A%20%0AName%3A%20%0AEmail%3A%20%0A%0AThank%20you!`

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="relative px-4 py-6 border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-500/10 mb-6">
            <BarChart3 className="w-10 h-10 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Web Analytics
          </h1>
          <p className="text-xl text-zinc-400 mb-2">Privacy-First Visitor Tracking</p>
          <p className="text-lg text-cyan-400 font-semibold">100% FREE</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Why Choose Our Analytics?</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Get comprehensive insights into your website visitors without compromising their privacy. Our analytics platform provides all the metrics you need—device information, location data, page views, and more—without using cookies or collecting personal information.
            </p>
          </div>

          {/* What We Track */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">What We Track</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Visitor Metrics</h3>
                  <p className="text-zinc-500">Page views, unique visitors, session duration, and bounce rates</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Device Information</h3>
                  <p className="text-zinc-500">Device types (mobile, tablet, desktop), browsers, operating systems, and screen sizes</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <Map className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Location Data</h3>
                  <p className="text-zinc-500">Country, region, and city-level visitor geographic distribution</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Traffic Sources</h3>
                  <p className="text-zinc-500">Referrers, UTM parameters, and traffic channel analysis</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">What's Included</h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Simple JavaScript tracking code for easy integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Real-time analytics dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Device and browser breakdown</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Geographic location insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Traffic source tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">No cookies required - GDPR friendly</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Lightweight tracking script (&lt;2KB)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Email support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Why Choose This Over Google Analytics?</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">🔒 Privacy Focused</h3>
                <p className="text-zinc-500 text-sm">No personal data collection, no user tracking, no cookies—just anonymous metrics</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">⚡ Lightweight</h3>
                <p className="text-zinc-500 text-sm">Tiny script that doesn't slow down your website</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">💰 Completely Free</h3>
                <p className="text-zinc-500 text-sm">No hidden costs, no usage limits, no credit card required</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Tracking Your Visitors</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get your free analytics setup today. We'll provide the tracking code and dashboard access within hours.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white hover:from-orange-600 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/20 border-0"
              asChild
            >
              <a href={mailtoLink}>Get Free Analytics</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
