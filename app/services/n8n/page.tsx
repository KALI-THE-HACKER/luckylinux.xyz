import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Workflow, Check, Zap, Code, Globe, Blocks, Settings, ShieldAlert, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "n8n Automation | Self-Hosted Developer Services | Luckylinux",
  description: "Dedicated member accounts for visual workflow automation and node-based API scripting powered by n8n, hosted on Luckylinux's private server.",
  alternates: {
    canonical: "/services/n8n",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luckylinux.dev/services/n8n",
    siteName: "Luckylinux's Self-Hosted Universe",
    title: "n8n Automation | Self-Hosted Developer Services | Luckylinux",
    description: "Visual workflow automation and node-based API scripting hosted on Luckylinux's private server.",
  }
}

export default function N8nPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Self-Hosted n8n Workflow Automation",
    "serviceType": "Visual Workflow Automation",
    "provider": {
      "@type": "Person",
      "name": "Lucky Verma",
      "url": "https://luckylinux.dev"
    },
    "description": "Dedicated member accounts on shared visual workflow automation tool n8n. Link more than 350 third-party APIs, run background cron jobs, and map webhooks effortlessly."
  }
  const mailtoLink = `mailto:admin@luckylinux.dev?subject=Requesting%20Free%20n8n%20Account&body=Hi%2C%0A%0AI%20am%20interested%20in%20setting%20up%20a%20free%20member%20account%20on%20your%20self-hosted%20n8n%20instance.%0A%0AName%3A%20%0AEmail%3A%20%0A%0AThank%20you!`

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
            <Workflow className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl text-[#1C1C1C] font-serif font-normal">
            n8n Automation
          </h1>
          <p className="text-xl text-[#66635F] font-light max-w-lg mx-auto">
            Visual workflow automation and node-based API scripting hosted on my private server.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#66635F]">
            <span className="text-[#B36A2E] font-semibold">Free Developer Hosting</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href="https://n8n.io"
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
              <h4 className="text-[15px] font-semibold text-[#1C1C1C] uppercase font-mono tracking-wider">Free Automation Accounts</h4>
              <p className="text-sm text-[#66635F] leading-relaxed">
                If you want to build automated workflows without paying for cloud plans (like Zapier or Make) or dealing with the overhead of setting up databases, queues, and TLS proxies, you can get a <strong>free member account</strong> on my self-hosted n8n instance. Contact me to get provisioned!
              </p>
              <div className="pt-2">
                <a href={mailtoLink} className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#B36A2E] hover:underline">
                  Request Free n8n Space →
                </a>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Overview</h2>
            <p className="text-[16px] md:text-[17px] text-[#66635F] font-light leading-relaxed">
              n8n is an open-source workflow automation engine that connects APIs, formats data payloads, and designs complex logical loops through a visual editor. Hosted on my local dedicated server, it provides an unlimited playground for automating tasks, triggering scripts via incoming webhooks, or polling data endpoints.
            </p>
          </div>

          {/* Developer Utility & Documentation */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Developer Utility & Documentation</h2>
            <div className="bg-[#F6F3ED] border border-[rgba(0,0,0,0.08)] rounded-md p-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Blocks className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Visual JSON Mapping & Node Loops</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    n8n simplifies mapping complicated JSON payloads between distinct services (e.g. converting custom Webhook data formats into Slack messages or database rows). It supports loops, conditional filters, and custom inline JS or Python scripts.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">API Bridges & Webhook Receivers</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Enables developers to set up instantaneous HTTP endpoints (Webhooks) that listen for external event payloads (e.g. GitHub pushes, Stripe transactions, client form submissions) to trigger automated workflows asynchronously.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Background Automations & Scheduling</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Automations trigger in the background via cron loops or event listeners, keeping scripts running 24/7 without developer maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Blocks className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">350+ Native Integrations</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Link APIs natively, connecting platforms like GitHub, Google Workspace, Slack, and databases.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Code className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Code Nodes</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Embed custom JavaScript or Python scripts inside your automation pipeline for complex data parsing.</p>
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
                  <span>Isolated member account profiles</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Unlimited active workflow triggers</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Webhook URL listener setups</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Daily cluster backups and maintenance</span>
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
