import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Code, Check, Shield, Terminal, Cpu, Globe, Activity, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "VS Code Server | Self-Hosted Developer Services | Luckylinux",
  description: "A private, zero-dependency VS Code workspace containerized and hosted on dedicated server hardware by Luckylinux. Access your code editor from any remote browser.",
  alternates: {
    canonical: "/services/code-server",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luckylinux.dev/services/code-server",
    siteName: "Luckylinux's Self-Hosted Universe",
    title: "VS Code Server | Self-Hosted Developer Services | Luckylinux",
    description: "Containerized, zero-dependency VS Code editor accessible from any remote browser, hosted on Luckylinux's private server.",
  }
}

export default function CodeServerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Self-Hosted VS Code Server",
    "serviceType": "Cloud Development Environment",
    "provider": {
      "@type": "Person",
      "name": "Lucky Verma",
      "url": "https://luckylinux.dev"
    },
    "description": "A private, zero-dependency VS Code workspace containerized and hosted on dedicated server hardware. Provides secure terminal sessions and persistent dev tools."
  }
  const mailtoLink = `mailto:admin@luckylinux.dev?subject=Code%20Server%20Collaboration&body=Hi%2C%0A%0AI%20am%20interested%20in%20discussing%20or%20collaborating%20on%20your%20self-hosted%20coder/code-server%20environment.%0A%0AName%3A%20%0AEmail%3A%20%0A%0AThank%20you!`

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
            <Code className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl text-[#1C1C1C] font-serif font-normal">
            coder/code-server
          </h1>
          <p className="text-xl text-[#66635F] font-light max-w-lg mx-auto">
            A private, self-hosted VS Code workspace running inside isolated Docker containers on my dedicated server hardware.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#66635F]">
            <span className="text-[#B36A2E] font-semibold">Sandboxed Environment</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href="https://github.com/coder/code-server"
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
          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Overview</h2>
            <p className="text-[16px] md:text-[17px] text-[#66635F] font-light leading-relaxed">
              Self-hosting <code>coder/code-server</code> allows running standard VS Code binaries inside isolated Linux containers, accessible from any web browser on any client device. All configuration profiles, active build terminals, and node processes remain persisted on a central high-availability host, preventing environment configuration drift and local resources drainage.
            </p>
          </div>

          {/* Developer Utility & Documentation */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Developer Utility & Documentation</h2>
            <div className="bg-[#F6F3ED] border border-[rgba(0,0,0,0.08)] rounded-md p-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Terminal className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Persistent Shell Sessions</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Terminal commands, background compilers, and dev servers keep running seamlessly inside the container namespace even when the browser tab is closed. Reconnecting instantly restores the exact console state.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Hardware Acceleration & Offloading</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Offloads compile-heavy scripts, Docker builds, and testing pipelines from local client machines to dedicated server processors, drastically improving battery life and thermal execution on laptops and mobile devices.
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
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Port Forwarding & API Expositions</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Enables developers to test local development endpoints (e.g. ports 3000 or 8000) by forwarding them securely through custom domain routing paths protected by Zero-Trust proxy tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Specifications */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Key Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Zero-Trust Boundaries</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Authentication headers and credentials checks prevent any public access to command shells or workspace files.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Activity className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Compute Allocations</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Dedicated system resource constraints keep compiles fast and isolates neighboring services.</p>
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
                  <span>Configured coder/code-server workspace</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Isolated container terminal access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>SSH key forwarding and git integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Port forwarding configurations dashboard</span>
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
