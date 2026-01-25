import Link from "next/link"
import { ArrowLeft, Cloud, Check, Shield, Lock, Zap, HardDrive } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CloudStoragePage() {
  const createMailtoLink = (plan: string, price: string, storage: string) => {
    const subject = `Cloud Storage - ${plan} Plan Inquiry`
    const body = `Hi,

I am interested in subscribing to the ${plan} Plan for Cloud Storage.

Plan Details:
- Plan: ${plan}
- Price: ${price}
- Storage: ${storage}

Please provide me with:
- Setup instructions
- Payment process
- Account activation timeline

My Details:
Name: 
Email: 
Phone: 

Thank you!`
    
    return `mailto:purchases@luckylinux.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-500/10 mb-6">
            <Cloud className="w-10 h-10 text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Cloud Storage
          </h1>
          <p className="text-xl text-zinc-400 mb-2">Your Private Cloud, Your Control</p>
          <p className="text-lg text-emerald-400 font-semibold">Starting at just ₹29/month</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">What You Get</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Get your own secure, encrypted cloud storage space with all the features you expect from services like Google Drive—but completely private, self-hosted, and under your control. Perfect for personal use, small businesses, or anyone who values data privacy.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">End-to-End Encryption</h3>
                  <p className="text-zinc-500">Your files are encrypted both in transit and at rest. Only you have access to your data.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Complete Privacy</h3>
                  <p className="text-zinc-500">No third-party access. Your files stay on dedicated infrastructure under your control.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Fast & Reliable</h3>
                  <p className="text-zinc-500">Quick uploads, downloads, and file syncing across all your devices.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                    <HardDrive className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Flexible Storage</h3>
                  <p className="text-zinc-500">Multiple storage tiers available to fit your needs and budget.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100 text-center">Subscription Plans</h2>
            <p className="text-zinc-400 text-center mb-8">Choose the plan that fits your needs</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Free Trial */}
              <a href={createMailtoLink("Free Trial", "Free for 3 months", "2GB")} className="group">
                <div className="bg-zinc-900/30 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Free Trial</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-emerald-400">Free</span>
                    </div>
                    <p className="text-sm text-zinc-500 mt-1">For 3 months</p>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">2GB storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">Web access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">Mobile apps</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">Email support</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-600 text-center group-hover:text-emerald-400 transition-colors">Click to subscribe →</p>
                  </div>
                </div>
              </a>

              {/* Basic Plan */}
              <a href={createMailtoLink("Basic", "₹29/month", "10GB")} className="group">
                <div className="bg-zinc-900/30 border border-zinc-800 hover:border-indigo-500/50 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10 cursor-pointer h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Basic</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-indigo-400">₹29</span>
                      <span className="text-zinc-500">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">10GB storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">All free features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">File versioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-400">Password-protected shares</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-zinc-800">
                    <p className="text-xs text-zinc-600 text-center group-hover:text-indigo-400 transition-colors">Click to subscribe →</p>
                  </div>
                </div>
              </a>

              {/* Pro Plan */}
              <a href={createMailtoLink("Pro", "₹99/month", "50GB")} className="group">
                <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-2 border-indigo-500/50 hover:border-indigo-400 rounded-2xl p-6 flex flex-col relative transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 cursor-pointer h-full">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full">
                    POPULAR
                  </div>
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Pro</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-indigo-400">₹99</span>
                      <span className="text-zinc-500">/month</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6 flex-1">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">50GB storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">All Basic features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">Advanced file sharing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">30-day version history</span>
                    </li>
                  </ul>
                  <div className="pt-4 border-t border-indigo-500/30">
                    <p className="text-xs text-zinc-500 text-center group-hover:text-indigo-300 transition-colors">Click to subscribe →</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-zinc-500">Need more storage? <span className="text-indigo-400 font-medium"><a href={createMailtoLink("Custom", "Custom Pricing", "Custom Storage")}>Contact us for Custom Plan</a></span></p>
            </div>
          </div>

          {/* What's Included */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">What's Included</h2>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Personal cloud storage space (customizable size)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Web interface for file management</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Android and iOS app for seamless access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">File sharing with password protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Desktop and mobile sync clients</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Automatic backup and versioning</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">99.9% uptime guarantee</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Email support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Perfect For</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Personal Use</h3>
                <p className="text-zinc-500 text-sm">Store photos, documents, and backups securely</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Small Business</h3>
                <p className="text-zinc-500 text-sm">Share files with team members privately</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Developers</h3>
                <p className="text-zinc-500 text-sm">Store project files and code repositories</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Plan?</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              If you need more storage or have specific requirements, we can create a custom plan tailored to your needs.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/20 border-0"
              asChild
            >
              <a href={createMailtoLink("Custom", "Custom Pricing", "Custom Storage")}>Contact for Custom Plan</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
