import Link from "next/link"
import { ArrowRight, Github, Linkedin, FileText, Lock, Code2, Cloud, BarChart3, Workflow, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
            Luckylinux&apos;s Self-Hosted Universe
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light text-balance">
            Things I build. Things I host. Things I run.
          </p>
          <p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed text-balance">
            A showcase of self-hosted applications, automation workflows, and cloud services—designed for privacy, control, and continuous learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-zinc-100 text-zinc-900 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-zinc-100/20"
              asChild
            >
              <Link href="#systems">
                Explore Systems
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 bg-zinc-900/50 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-500 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link target="_blank" href="https://portfolio.luckylinux.dev">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Development Tools Section */}
      <section id="systems" className="relative px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">Development Tools</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Powerful development and server management tools hosted on dedicated infrastructure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Code Server */}
            <Link href="https://code.luckylinux.dev" target="_blank" rel="noopener noreferrer">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 mb-1">Code Server</h3>
                      <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Private Access</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Code2 className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Web-based VS Code instance for coding from anywhere—laptop, tablet, or smartphone—with full IDE features and secure remote access</p>
                  <div className="pt-2 flex items-center text-cyan-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">Access IDE</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Server Dashboard */}
            <Link href="https://github.com/KALI-THE-HACKER/server-dashboard" target="_blank" rel="noopener noreferrer">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 mb-1">Server Dashboard</h3>
                      <span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Private Access</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Lock className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Comprehensive control panel for managing services, monitoring system health, and accessing server terminal securely via browser interface on any device</p>
                  <div className="pt-2 flex items-center text-purple-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">View on GitHub</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="relative px-4 py-24 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">Applications</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Production-ready applications and services built from scratch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Railsplit Card */}
            <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-semibold text-zinc-100">Railsplit</h3>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-cyan-500" />
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed flex-1">
                  Helps you find confirmed train seats by intelligently splitting long journeys, finding efficient intermediate junctions, and suggesting routes with confirmed availability.
                </p>
                <div className="pt-2 flex flex-col gap-2">
                  <Link href="https://railsplit.luckylinux.dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors w-fit">
                    <span className="hover:translate-x-1 transition-transform">Launch App</span>
                    <ArrowRight className="ml-1 h-4 w-4 hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://www.linkedin.com/posts/luckylinux_%F0%9D%90%88%F0%9D%90%A7%F0%9D%90%AD%F0%9D%90%AB%F0%9D%90%A8%F0%9D%90%9D%F0%9D%90%AE%F0%9D%90%9C%F0%9D%90%A2%F0%9D%90%A7%F0%9D%90%A0-%F0%9D%90%91%F0%9D%90%9A%F0%9D%90%A2%F0%9D%90%A5%F0%9D%90%AC%F0%9D%90%A9%F0%9D%90%A5%F0%9D%90%A2%F0%9D%90%AD-activity-7349056500750766080-joUz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGAqHoBlpF_nvgErJECw87HfWSk_ioQXaA" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors w-fit">
                    <span className="hover:translate-x-1 transition-transform">View on LinkedIn</span>
                    <ArrowRight className="ml-1 h-4 w-4 hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Portfolio Card */}
            <Link href="https://portfolio.luckylinux.dev" target="_blank" rel="noopener noreferrer">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-zinc-100">Portfolio</h3>
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-emerald-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Complete showcase of my engineering projects, technical implementations, and development work</p>
                  <div className="pt-2 flex items-center text-emerald-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">View Portfolio</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">Services for Rent</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Professional cloud services and automation tools available for your projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Cloud Storage Card */}
            <Link href="/services/cloud-storage">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 mb-1">Cloud Storage</h3>
                      <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">As cheap as just Rs. 29/month</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Cloud className="w-6 h-6 text-indigo-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Secure, encrypted cloud storage with Google Drive-like features. Get your own private storage space with full privacy and control. Perfect for personal use.</p>
                  <div className="pt-2 flex items-center text-indigo-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">Get Storage</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* n8n */}
            <Link href="/services/n8n">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-rose-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-rose-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 mb-1">n8n Workflows</h3>
                      <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">at just Rs. 49/month</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Workflow className="w-6 h-6 text-rose-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Rent your own n8n member account for powerful workflow automation. Integrate 350+ services, automate tasks, and build custom workflows with an intuitive visual editor.</p>
                  <div className="pt-2 flex items-center text-rose-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">Get Account</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Analytics */}
            <Link href="/services/analytics">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 mb-1">Web Analytics</h3>
                      <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Free Service</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <BarChart3 className="w-6 h-6 text-orange-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Free privacy-focused analytics for your website. Track visitor metrics, <strong>device types</strong> and <strong>location data</strong>—all without cookies. Perfect alternative to Google Analytics.</p>
                  <div className="pt-2 flex items-center text-orange-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">Start Tracking</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Mail Auth Service */}
            <Link href="/services/email-auth">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-teal-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100 mb-1">Email Authentication</h3>
                      <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Free Service</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Free passwordless authentication for your website. Implement magic link email login in minutes. Secure, modern, and eliminates password management hassles for your users.</p>
                  <div className="pt-2 flex items-center text-teal-400 text-sm font-medium">
                    <span className="group-hover:translate-x-1 transition-transform">Integrate Now</span>
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative px-4 py-24 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">Why Self-Host?</h2>
            <p className="text-zinc-500 text-lg max-w-2xl mx-auto">Building infrastructure that prioritizes control, privacy, and continuous learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Complete Infrastructure Control</h3>
              <p className="text-zinc-500 leading-relaxed">Total ownership of the technology stack—from hardware to application layer—enabling custom configurations and unlimited scalability</p>
            </div>

            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Privacy by Design</h3>
              <p className="text-zinc-500 leading-relaxed">Zero third-party data access with complete data sovereignty—no tracking, no external dependencies, absolute control over information</p>
            </div>

            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Engineering at Scale</h3>
              <p className="text-zinc-500 leading-relaxed">Hands-on experience managing production-grade infrastructure, learning deployment patterns, monitoring, and optimization techniques</p>
            </div>

            <div className="space-y-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Production-Ready Systems</h3>
              <p className="text-zinc-500 leading-relaxed">Real infrastructure handling live workloads and traffic—not sandbox demos, but systems built for reliability and performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative px-4 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zinc-500">
            <span className="text-sm font-medium tracking-wide hover:text-zinc-300 transition-colors cursor-default">
              Docker
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm font-medium tracking-wide hover:text-zinc-300 transition-colors cursor-default">
              Linux
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm font-medium tracking-wide hover:text-zinc-300 transition-colors cursor-default">
              FastAPI
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm font-medium tracking-wide hover:text-zinc-300 transition-colors cursor-default">
              React
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm font-medium tracking-wide hover:text-zinc-300 transition-colors cursor-default">
              Flutter
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm font-medium tracking-wide hover:text-zinc-300 transition-colors cursor-default">
              CI/CD
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-sm font-medium tracking-wide hover:text-zinc-300 transition-colors cursor-default">
              Cloudflare
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-16 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/KALI-THE-HACKER"
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/luckylinux"
                className="text-zinc-500 hover:text-zinc-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-sm text-zinc-500 text-center md:text-right italic">
              An evolving universe. Still expanding.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
