import Link from "next/link"
import { ArrowLeft, Workflow, Check, Zap, Code, Globe, Blocks, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function N8nPage() {
  const mailtoLink = `mailto:purchases@luckylinux.dev?subject=n8n%20Workflow%20Account%20Rental&body=Hi%2C%0A%0AI%20am%20interested%20in%20renting%20an%20n8n%20workflow%20automation%20account.%0A%0APlease%20provide%20me%20with%20more%20details%20about%3A%0A-%20Account%20setup%0A-%20Available%20features%0A-%20Workflow%20execution%20limits%0A-%20Payment%20process%0A%0AName%3A%20%0AEmail%3A%20%0APhone%3A%20%0A%0AThank%20you!`

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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-rose-500/10 mb-6">
            <Workflow className="w-10 h-10 text-rose-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            n8n Workflow Automation
          </h1>
          <p className="text-xl text-zinc-400 mb-2">Automate Everything, Build Anything</p>
          <p className="text-lg text-emerald-400 font-semibold">Just ₹49/month</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">What is n8n?</h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              n8n is a powerful workflow automation platform that lets you connect apps, automate tasks, and build custom integrations without coding. With your rented n8n account, you get access to a fully managed instance ready to automate your business processes.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <Blocks className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">350+ Integrations</h3>
                  <p className="text-zinc-500">Connect with popular services like Slack, Gmail, Google Sheets, GitHub, and many more.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <Code className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Visual Workflow Editor</h3>
                  <p className="text-zinc-500">Build complex automations with an intuitive drag-and-drop interface. No coding required.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Advanced Automation</h3>
                  <p className="text-zinc-500">Schedule workflows, trigger on events, use conditions, loops, and custom code when needed.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-100 mb-2">Always Accessible</h3>
                  <p className="text-zinc-500">Access your workflows from anywhere with a secure web interface.</p>
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
                  <span className="text-zinc-300">Personal n8n member account on managed infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Access to 350+ app integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Unlimited workflow creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Scheduled and webhook-triggered executions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Execution history and logging</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">~ 24/7 server uptime</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Regular updates and maintenance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Use Cases */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-zinc-100">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Social Media Automation</h3>
                <p className="text-zinc-500 text-sm">Schedule posts, cross-post content, and manage multiple platforms</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Data Synchronization</h3>
                <p className="text-zinc-500 text-sm">Sync data between CRM, databases, and spreadsheets automatically</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">Email Workflows</h3>
                <p className="text-zinc-500 text-sm">Automate email responses, notifications, and follow-ups</p>
              </div>
              <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-zinc-100 mb-2">API Integrations</h3>
                <p className="text-zinc-500 text-sm">Connect custom APIs and build tailored integrations</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Automating Today</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
              Get your personal n8n account and start building powerful automations immediately. Monthly billing, cancel anytime.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-rose-500/20 border-0"
              asChild
            >
              <a href={mailtoLink}>Rent n8n Account</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
