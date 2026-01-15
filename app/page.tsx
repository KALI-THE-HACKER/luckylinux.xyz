import Link from "next/link"
import { ArrowRight, Github, Linkedin, FileText, Lock, Target } from "lucide-react"
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
            A collection of self-hosted systems, applications, and experiments running on personal infrastructure
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
              className="border-zinc-700 bg-zinc-900/50 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600 backdrop-blur-sm transition-all duration-300"
              asChild
            >
              <Link target="_blank" href="https://portfolio.luckylinux.dev">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="systems" className="relative px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Systems</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Railsplit Card */}
            <Link href="https://railsplit.luckylinux.dev" target="_blank" rel="noopener noreferrer">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-cyan-600 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-zinc-100">Railsplit</h3>
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-6 h-6 rounded bg-gradient-to-br from-cyan-400 to-blue-500" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">
                    Smart journey-splitting system running on self-hosted infrastructure
                  </p>
                </div>
              </div>
            </Link>

            {/* Portfolio Card */}
            <Link href="https://portfolio.luckylinux.dev" target="_blank" rel="noopener noreferrer">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-blue-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-zinc-100">Portfolio</h3>
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Engineering projects and technical work</p>
                </div>
              </div>
            </Link>

            {/* Private Cloud Card */}
            <Link href="https://cloud.luckylinux.dev" target="_blank" rel="noopener noreferrer">
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-pink-800 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-semibold text-zinc-100">Private Cloud</h3>
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-pink-400" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Encrypted personal cloud storage (self-hosted)</p>
                </div>
              </div>
            </Link>

            {/* Internal Systems Card */}
              <div className="group relative h-full bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-2xl p-8 hover:border-zinc-600 transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-500/10 cursor-pointer flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 space-y-4 flex-1 flex flex-col">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-zinc-100">Internal Systems</h3>
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-400 rounded-full border border-zinc-700">
                        Private
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-zinc-800/50 flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-zinc-500" />
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed flex-1">Dashboards, analytics, code server</p>
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Why Self-Hosted Section */}
      <section className="relative px-4 py-24 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Self-Hosted</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Full control over systems</h3>
              <p className="text-zinc-500 leading-relaxed">Complete ownership and control of infrastructure and data</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Privacy-first</h3>
              <p className="text-zinc-500 leading-relaxed">No third-party access, complete data sovereignty</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-zinc-600/10 flex items-center justify-center mb-3">
                <div className="w-2 h-2 rounded-full bg-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Built for learning and scale</h3>
              <p className="text-zinc-500 leading-relaxed">Hands-on experience with production-grade systems</p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-600/10 flex items-center justify-center mb-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100">Real infrastructure, not demos</h3>
              <p className="text-zinc-500 leading-relaxed">Production systems running real workloads</p>
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
