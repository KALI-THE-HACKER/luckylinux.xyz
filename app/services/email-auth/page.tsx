import Link from "next/link"
import { ArrowLeft, Mail, Check, Shield, Zap, Lock, Key, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EmailAuthPage() {
  const mailtoLink = `mailto:purchases@luckylinux.dev?subject=Free%20Email%20Authentication%20Service&body=Hi%2C%0A%0AI%20am%20interested%20in%20integrating%20your%20free%20Email%20Authentication%20service%20into%20my%20website.%0A%0APlease%20provide%20me%20with%3A%0A-%20API%20documentation%0A-%20Integration%20guide%0A-%20API%20keys%0A-%20Setup%20support%0A%0AWebsite%20URL%3A%20%0AName%3A%20%0AEmail%3A%20%0APhone%3A%20%0A%0AThank%20you!`

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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-teal-500/10 mb-6">
            <Mail className="w-10 h-10 text-teal-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Email Authentication
          </h1>
          <p className="text-xl text-zinc-400 mb-2">Passwordless Login Made Simple</p>
          <p className="text-lg text-cyan-400 font-semibold">100% FREE Forever</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">What is Email Authentication?</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Modern, secure authentication system that eliminates passwords entirely. Users receive a magic link via email to sign in—no passwords to remember, no password resets, no security vulnerabilities. Integrate it into your website in minutes with our simple API.
            </p>
          </div>

          {/* How It Works */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">How It Works</h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-1">User Enters Email</h3>
                    <p className="text-zinc-500">User enters their email address on your website's login page</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-1">Magic Link Sent</h3>
                    <p className="text-zinc-500">Our service sends a secure, time-limited magic link to their email</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-1">User Clicks Link</h3>
                    <p className="text-zinc-500">User clicks the link in their email to verify ownership</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-100 mb-1">Instant Login</h3>
                    <p className="text-zinc-500">User is securely authenticated and logged into your application</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Highly Secure</h3>
                  <p className="text-zinc-500">No password databases to breach. Each link is unique and expires after use.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Easy Integration</h3>
                  <p className="text-zinc-500">Simple REST API with clear documentation. Integrate in minutes, not hours.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Time-Limited Links</h3>
                  <p className="text-zinc-500">Magic links automatically expire after a set time for enhanced security.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                    <Key className="w-5 h-5 text-teal-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Better UX</h3>
                  <p className="text-zinc-500">No forgotten passwords, no password resets. Just smooth, frictionless login.</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">What You Get</h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">RESTful API for authentication requests</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Customizable email templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Webhook notifications for successful logins</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">API key for secure access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Complete documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Integration examples for popular frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Email support for integration help</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">SaaS Products</h3>
                <p className="text-zinc-500 text-sm">Modern login experience for your users</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Web Apps</h3>
                <p className="text-zinc-500 text-sm">Quick authentication without password complexity</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Admin Portals</h3>
                <p className="text-zinc-500 text-sm">Secure access without password management</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Integrate Passwordless Auth</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Contact us to get your API credentials and integration documentation. Start offering passwordless login to your users today.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-teal-500/20 border-0"
              asChild
            >
              <a href={mailtoLink}>Get Free Access</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
