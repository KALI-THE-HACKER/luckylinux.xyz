import Link from "next/link"
import { ArrowLeft, Cloud, Check, Shield, Lock, Zap, HardDrive, Terminal, ExternalLink } from "lucide-react"

export default function CloudStoragePage() {
  const createMailtoLink = () => {
    const subject = `Nextcloud Storage Collaboration Request`
    const body = `Hi,

I am interested in collaborating or setting up a shared folder/volume on your self-hosted Nextcloud instance.

Thank you!`

    return `mailto:admin@luckylinux.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
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
            <Cloud className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl text-[#1C1C1C] font-serif font-normal">
            Nextcloud Storage
          </h1>
          <p className="text-xl text-[#66635F] font-light max-w-lg mx-auto">
            Secure, fully encrypted file storage, WebDAV mounts, and document synchronization hosted on my private server.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-mono uppercase tracking-wider text-[#66635F]">
            <span className="text-[#B36A2E] font-semibold">Self-Hosted Infrastructure</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <a
              href="https://nextcloud.com"
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
              Nextcloud provides a private, fully featured cloud storage ecosystem hosted entirely on my own local dedicated hardware. It ensures absolute data sovereignty, eliminating third-party data crawling or telemetry. For developers, Nextcloud offers a unified file storage hub that can be integrated directly with command line sync tools, automated shell backups, and WebDAV api mounts.
            </p>
          </div>

          {/* How It's Helpful for Developers */}
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
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">WebDAV & CLI Ingestion</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Nextcloud exposes standard WebDAV interfaces. Developers can mount their cloud directories directly inside headless server scripts, curl backups, or mount points (e.g. using <code>rclone</code> or <code>davfs2</code>) to manage project assets, database dumps, and deployment archives securely.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <HardDrive className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Automated Backups & Sync</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Maintains persistent, encrypted backups of client logs and database states. With native Nextcloud clients for Linux, macOS, Windows, iOS, and Android, local workstation files stay synchronized without running continuous manual uploads.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Data Sovereignty & Encryption</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">
                    Files are encrypted in transit via SSL/TLS and stored on local encrypted volume mounts. By self-hosting Nextcloud on my own server, I prevent external platforms from indexing codebases, sensitive client datasets, or internal documentation.
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
                    <Shield className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">End-to-End Encryption</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Protects documents and resources behind server-side encryption layers and secure passwords.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-md border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] flex items-center justify-center text-[#B36A2E]">
                    <HardDrive className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[#1C1C1C] mb-1">Collaborative Workspaces</h3>
                  <p className="text-[#66635F] font-light text-[15px] leading-relaxed">Includes Nextcloud Office to edit configuration files, markdown docs, and planning lists collaboratively.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Details */}
          <div className="space-y-6">
            <h2 className="text-3xl text-[#1C1C1C] font-serif font-normal">Self-Hosted Ecosystem</h2>
            <div className="bg-[#F6F3ED] border border-[rgba(0,0,0,0.08)] rounded-md p-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#66635F] font-light text-[15px]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Dedicated Nextcloud account provision</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Desktop & mobile sync support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Automated database/file backups</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#B36A2E]" />
                  <span>Password-secured share links</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#F6F3ED] border border-[rgba(0,0,0,0.08)] rounded-md p-10 text-center space-y-6">
            <h3 className="text-2xl text-[#1C1C1C] font-serif font-normal">Need Shared Developer Volumes?</h3>
            <p className="text-[#66635F] font-light max-w-xl mx-auto text-[15px]">
              If you are working on projects with me and need a shared space or WebDAV target folder for database backups, feel free to contact me to configure a partition.
            </p>
            <a
              href={createMailtoLink()}
              className="inline-flex items-center justify-center px-6 py-3.5 text-[14px] font-medium bg-[#1C1C1C] text-[#F9F7F3] rounded-md hover:bg-[#2c2c2c] transition-all hover:scale-[1.02] duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
