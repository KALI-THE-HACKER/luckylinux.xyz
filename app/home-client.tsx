"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Terminal,
  ShieldCheck,
  Sun,
  Moon,
  ExternalLink
} from "lucide-react"

import { Navbar } from "@/components/editorial/Navbar"
import { Hero } from "@/components/editorial/Hero"
import { Section } from "@/components/editorial/Section"
import { SectionHeading } from "@/components/editorial/SectionHeading"
import { ProjectCard } from "@/components/editorial/ProjectCard"
import { Timeline } from "@/components/editorial/Timeline"
import { Footer } from "@/components/editorial/Footer"
import { Container } from "@/components/editorial/Container"
import { AnimatedText } from "@/components/editorial/AnimatedText"

export default function HomeClient() {
  const projects = [
    {
      name: "OpportuneAI",
      description: "An AI-powered job discovery and application copilot that aggregates opportunities from multiple job platforms and transforms unstructured listings into structured, searchable data. It combines large language models with an intelligent background worker pipeline to recommend the most relevant opportunities based on a candidate's resume, skills, and preferences.",
      tags: ["FastAPI", "LangChain", "LangGraph", "PostgreSQL", "Playwright", "Redis", "RQ", "Gemini", "OpenRouter"],
      githubUrl: "https://github.com/KALI-THE-HACKER/OpportuneAI",
      outcome: "Architected a modular AI-powered job aggregation platform featuring provider-based ingestion, content-hash deduplication, asynchronous processing with Redis Queue, and resume-aware job ranking.",
      imageUrl: "placeholder",
      status: "Under Development"
    },
    {
      name: "Railsplit",
      description: "An intelligent transit engine designed to solve the Indian Railways waitlist dilemma. By parsing journey maps, identifying efficient intermediate junctions, and analyzing availability datasets, it helps travelers find confirmed tickets via split-booking legs.",
      tags: ["ReactJS", "FastAPI", "Docker", "Redis", "SSE", "Playwright"],
      liveUrl: "https://railsplit.luckylinux.dev",
      githubUrl: "https://github.com/KALI-THE-HACKER/Railsplit",
      outcome: "Designed a custom search-space pruning algorithm using ellipse-constrained station selection for fast split-route optimization.",
      imageUrl: "/railsplit-mockup.png",
      images: ["/railsplit-mockup.png", "/railsplit-backend-logic-chart.png"]
    },
    {
      name: "ChronoCare",
      description: "A health management platform featuring a clickable 3D human body mapper mapping medical history and timeline. It integrates an Agentic RAG chat assistant to resolve patient queries securely based on localized medical records.",
      tags: ["ReactJS", "TailwindCSS", "FastAPI", "ChromaDB", "MySQL", "Agentic AI"],
      githubUrl: "https://github.com/KALI-THE-HACKER/chronocare",
      outcome: "Built an interactive 3D human body mapper synced with relational schemas, integrated with a vector database RAG search pipeline.",
      imageUrl: "/chronocare-mockup.webm"
    },
    {
      name: "SysSight",
      description: "A robust, real-time system monitoring platform designed to track and visualize system metrics across multiple hosts. It aggregates performance diagnostics (CPU, Memory, Disk, Network) via lightweight Python agents, streams telemetry via WebSockets, and manages Redis-cached process details with threshold-based email alerts.",
      tags: ["React", "FastAPI", "WebSockets", "Redis", "MySQL", "psutil"],
      githubUrl: "https://github.com/KALI-THE-HACKER/SysSight",
      outcome: "Built a real-time multi-host system monitoring platform with live metrics, process tracking, and WebSocket-based dashboards.",
      imageUrl: "https://drive.google.com/file/d/1ov2ELtmHcK2qYQLUp7gR4b1L-HhqLdUv/preview"
    },
    {
      name: "Server Dashboard",
      description: "A custom hosting controller built for single-host environment orchestration. Provides real-time CPU/RAM telemetry, active service controls, and authenticated terminal shells exposed securely through custom WebSocket tunnels.",
      tags: ["WebSockets", "FastAPI", "Psutil", "React", "JWT", "Systems"],
      githubUrl: "https://github.com/KALI-THE-HACKER/server-dashboard",
      outcome: "Eliminated public SSH exposures by establishing a token-authenticated web based terminal connection directly integrated with Host Process isolation. So that I can control my server from anywhere any device.",
      imageUrl: "/dashboard-mockup.png",
      videoUrlDesktop: "/server-dash-desktop-demo.mp4",
      videoUrlMobile: "/server-dash-mobile-demo.mp4"
    }
  ]

  const otherProjects = [
    {
      name: "Network.K",
      type: "Mobile Application",
      description: "A campus social networking app designed for NITK students. It helps users connect with peers, share resources, collaborate on projects, and stay updated with college events.",
      tags: ["Flutter", "SQLite", "REST API", "Provider"],
      link: "https://github.com/KALI-THE-HACKER/NetworkK"
    },
    {
      name: "CTFd Docker Challenges",
      type: "Open Source Contribution",
      description: "Contributed to an open-source CTFd Docker challenges plugin, improving container-based challenge deployment.",
      tags: ["Docker", "CTFd", "Security", "Python"],
      link: "https://github.com/KALI-THE-HACKER/CTFd-docker-plugin"
    },
    {
      name: "Alarmmate",
      type: "Mobile Application",
      description: "A lightweight, robust Android alarm scheduler built with Flutter. Provides multiple alarm presets, highly accurate scheduling algorithms, and reliable wake-up alerts.",
      tags: ["Flutter", "Hive DB", "Provider", "Dart SDK"],
      link: "https://github.com/KALI-THE-HACKER/Alarmmate"
    },
    {
      name: "Ultimate Alarm Clock",
      type: "Open Source Contribution",
      description: "Contributed a randomized ringtone selection feature to the Ultimate Alarm Clock project under the CCExtractor open-source organization.",
      tags: ["Flutter", "Git", "Open Source", "CCExtractor"],
      link: "https://github.com/CCExtractor/ultimate_alarm_clock/pull/642"
    },
    {
      name: "XpenseX",
      type: "Web Application",
      description: "A personal finance dashboard mapping transaction histories, budgets, and savings goals. Built with Docker orchestration, Nginx gateways, and Azure Cloud hosting.",
      tags: ["CI/CD", "Nginx", "Azure", "Docker", "FastAPI", "React"],
      link: "https://github.com/KALI-THE-HACKER/xpensex"
    }
  ]

  const timelineItems = [
    {
      organization: "National Institute of Technology Karnataka, Surathkal",
      role: "B.Tech in Computational & Data Science",
      duration: "August 2024 — April 2028",
      description: "Focusing on Computational Mathematics, Data Structures, Algorithms, Machine Learning, and Systems Engineering.",
      achievements: [
        "Studying core theoretical and practical computer science, advanced algebra, database management, and network models.",
        "Applying academic systems theory to hands-on lab environments and container orchestration platforms."
      ]
    },
    {
      organization: "Katha AI",
      role: "Developer",
      duration: "June 2025 — Present",
      description: <>Industry Project under <Link href="https://cse.nitk.ac.in/faculty/mohit-p-tahiliani" target="_blank" className="inline-flex items-center gap-1 hover:text-[#B36A2E] underline transition-colors">Prof. Mohit P. Tahiliani<ExternalLink className="w-3.5 h-3.5 text-[#B36A2E] shrink-0" /></Link>, CSE Department, NITK</>,
      achievements: [
        <>Developed core frontend and backend modules for an AI-powered storytelling platform using <span className="font-medium text-[#2E2C2A]">React</span>, <span className="font-medium text-[#2E2C2A]">Django REST Framework</span>, and <span className="font-medium text-[#2E2C2A]">PostgreSQL</span>.</>,
        <>Integrated <span className="font-medium text-[#2E2C2A]">Cloudflare R2</span> for scalable media delivery and developed REST APIs for books, scenes, metadata, and AI-generated multimedia assets.</>
      ]
    },
    {
      organization: "Web Enthusiasts’ Club, NITK",
      role: "Systems SIG Secretary",
      duration: "Sep 2025 — Present",
      description: "Managing campus systems infrastructure, orchestrating CTF competitions, and leading SIG workflows.",
      achievements: [
        <>Promoted from <span className="font-medium text-[#2E2C2A]">Systems SIG Executive</span> (Sep 2025–Mar 2026) to <span className="font-medium text-[#2E2C2A]">Systems SIG Secretary</span> (Apr 2026–Present).</>,
        <>Designed and managed the infrastructure for <span className="font-medium text-[#2E2C2A]">WECCTF</span>, serving <span className="font-medium text-[#2E2C2A]">400+ participants</span> using <span className="font-medium text-[#2E2C2A]">CTFd</span> with support for static and <span className="font-medium text-[#2E2C2A]">10+ Docker-based</span> challenges.</>,
        <>Architected a <span className="font-medium text-[#2E2C2A]">hybrid deployment</span> by combining institutional servers with a <span className="font-medium text-[#2E2C2A]">remote Azure Docker Engine</span>, enabling scalable containerized challenge hosting.</>,
        <>Built the <span className="font-medium text-[#2E2C2A]">WECCTF Archive</span> with challenge write-ups and solutions.</>,
        <>Contributed to the open-source <span className="font-medium text-[#2E2C2A]">CTFd Docker Challenges Plugin</span>.</>
      ]
    },
    {
      organization: "180 Degrees Consulting, NITK",
      role: "Developer",
      duration: "Sep 2025 — Present",
      description: "Building and deploying full-stack web applications for real-world clients.",
      achievements: [
        <>Built and deployed <span className="font-medium text-[#2E2C2A]">full-stack web applications</span> for real-world clients using modern web technologies.</>,
        <>Developed backend APIs, managed databases, and automated deployments using <span className="font-medium text-[#2E2C2A]">Docker</span> and DevOps workflows.</>,
        <>Collaborated with cross-functional teams to deliver scalable, production-ready software solutions.</>
      ]
    }
  ]

  const expertise = [
    {
      category: "Programming Languages",
      items: [
        "Python",
        "C++",
        "Rust",
        "TypeScript",
        "JavaScript",
        "SQL"
      ]
    },
    {
      category: "Systems & DevOps",
      items: [
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Jenkins, Gitea",
        "Azure, AWS",
        "Cloudflare",
        "Nginx",
        "System Design",
      ]
    },
    {
      category: "Backend",
      items: [
        "FastAPI",
        "Django",
        "SQLAlchemy",
        "REST APIs",
        "Redis",
        "webSockets",
        "WebRTC",
        "Server-Sent Events"
      ]
    },
    {
      category: "AI",
      items: [
        "LangGraph",
        "LangChain",
        "RAG",
        "AI Agents",
        "Gemini API"
      ]
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "Supabase",
        "SQLite"
      ]
    },
    {
      category: "Frontend",
      items: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Flutter",
        "Firebase"
      ]
    },
    {
      category: "Developer Tools",
      items: [
        "Git",
        "GitLab",
        "Playwright",
        "Postman",
      ]
    },
    {
      category: "Hacking Tools",
      tagline: "which I tried learning when I was 16yo 😅",
      items: [
        "Burp Suite",
        "Metasploit",
        "Aircrack-ng",
        "John the Ripper",
        "Ghidra",
        "Hydra",
        "Wireshark",
        "Ettercap",
        "SQLmap",
        "Nmap",
        "and a lot more..."
      ]
    }
  ];

  const services = [
    {
      title: "NextCloud - Encrypted Cloud Storage",
      description: "A private instance of Nextcloud offering full file syncing, calendar management, and Google Drive-like web interfaces. Powered by local databases and encrypted volume mounts.",
      link: "/services/cloud-storage",
      officialName: "nextcloud.com",
      officialUrl: "https://nextcloud.com"
    },
    {
      title: "n8n - Workflow Automation",
      description: "Dedicated member account on our shared visual workflow automation tool. Link more than 350 third-party APIs, run background cron jobs, and map webhooks effortlessly.",
      link: "/services/n8n",
      officialName: "n8n.io",
      officialUrl: "https://n8n.io"
    },
    {
      title: "Plausible - Web Analytics",
      description: "Privacy-first, cookie-free audience tracking powered by Plausible Analytics. Gather user visit patterns, geographical demographics, and browser metadata with zero tracking banners.",
      link: "/services/analytics",
      officialName: "plausible.io",
      officialUrl: "https://plausible.io"
    },
    {
      title: "VSCode Server",
      description: "A private, zero-dependency VS Code workspace containerized and hosted on dedicated server hardware. Access your code editor from any remote browser with persistent sandboxed terminal sessions.",
      link: "/services/code-server",
      officialName: "github.com/coder/code-server",
      officialUrl: "https://github.com/coder/code-server"
    }
  ]

  const [cloud_infra_image_light, setCloud_infra_image_light] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-[#F9F7F3] text-[#1C1C1C] flex flex-col font-sans selection:bg-[#B36A2E]/10 selection:text-[#B36A2E] theme-transition">
      <Navbar />

      <main className="flex-1">
        {/* Cinematic Hero */}
        <Hero />

        {/* About Section */}
        <Section id="about">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left: Tagline, Overview, Buttons */}
              <div className="lg:col-span-7 space-y-8 animate-fade-in">
                <div className="space-y-3">
                  <span className="text-[12px] uppercase font-mono tracking-widest text-[#B36A2E] font-semibold">
                    Overview
                  </span>
                  <h2 className="text-4xl md:text-5xl text-[#1C1C1C] font-normal font-serif leading-tight">
                    Building software, infrastructure, and everything in between.
                  </h2>
                </div>

                <div className="text-[16px] md:text-[17px] text-[#66635F] font-light leading-relaxed space-y-6">
                  <p>
                    I'm a Data Science student at NITK Surathkal with a strong interest in backend engineering, distributed systems, and cloud infrastructure. I build AI-powered applications, developer tools, and scalable backend services while exploring the technologies that power them.
                  </p>
                  <p>
                    Alongside my projects, I maintain a self-hosted infrastructure where I experiment with Linux, Docker, networking, reverse proxies, databases, and automation. This website documents my work, technical explorations, open-source contributions, and the systems I continue to build and improve.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Link
                    href="#projects"
                    className="inline-flex items-center justify-center px-6 py-3 bg-[#1C1C1C] text-[#F9F7F3] rounded-md hover:bg-[#2c2c2c] transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-xs text-[15px] font-medium"
                  >
                    View selected work
                  </Link>
                  <Link
                    href="#infrastructure"
                    className="inline-flex items-center gap-1.5 text-[15px] font-medium text-[#1C1C1C] hover:text-[#B36A2E] transition-colors group"
                  >
                    Explore systems
                    <span className="group-hover:translate-x-1 transition-transform duration-200 font-mono">→</span>
                  </Link>
                </div>
              </div>

              {/* Right: Profile Image */}
              <div className="lg:col-span-5 flex justify-center animate-fade-in">
                <div className="relative w-full max-w-[340px] aspect-square rounded-md overflow-hidden border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] shadow-xs">
                  <img
                    src="/profile_img.png"
                    alt="Luckylinux's Profile"
                    className="w-full h-full object-cover select-none"
                  />
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Experience Timeline Section */}
        <Section id="experience">
          <Container>
            <SectionHeading
              title="Experience & Education"
              subtitle="The experiences that shaped my skills and perspective."
            />
            <Timeline items={timelineItems} />
          </Container>
        </Section>

        {/* Selected Work */}
        <Section id="projects" background="dark" className="py-32 md:py-48 border-t border-b">
          <Container>
            <SectionHeading
              title="Selected Work"
              subtitle="A collection of projects built to solve real problems through thoughtful engineering."
            />
            <div className="space-y-12">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                  outcome={project.outcome}
                  imageUrl={project.imageUrl}
                  index={index}
                  status={project.status}
                  images={project.images}
                  videoUrlDesktop={(project as any).videoUrlDesktop}
                  videoUrlMobile={(project as any).videoUrlMobile}
                />
              ))}
            </div>

            {/* Grid for additional projects */}
            <div className="mt-24 pt-16 border-t border-[rgba(255,255,255,0.08)]">
              <SectionHeading
                title="Additional Projects & Contributions"
                subtitle="Other software applications, mobile utility projects, and contributions to open source repositories."
                className="mb-12 animate-fade-in"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {otherProjects.map((proj, idx) => (
                  <AnimatedText
                    key={proj.name}
                    delay={0.1 * idx}
                    y={10}
                    className="flex flex-col justify-between p-6 bg-[#151515] border border-[rgba(255,255,255,0.06)] rounded-xs space-y-4 hover:border-[rgba(255,255,255,0.12)] transition-all duration-200"
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#B36A2E] block font-medium">
                        {proj.type}
                      </span>
                      <h4 className="text-xl text-[#F7F5F1] font-serif font-normal">
                        {proj.name}
                      </h4>
                      <p className="text-[14px] text-[rgba(255,255,255,0.68)] leading-relaxed font-light">
                        {proj.description}
                      </p>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-[rgba(255,255,255,0.06)] flex flex-col justify-end">
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {proj.tags.map(t => (
                          <span key={t} className="px-1.5 py-0.5 text-[10px] font-mono text-[rgba(255,255,255,0.68)] bg-[#151515] rounded-xs border border-[rgba(255,255,255,0.04)]">
                            {t}
                          </span>
                        ))}
                      </div>

                      {proj.link && (
                        <Link
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[12px] font-mono text-[#F7F5F1] hover:text-[#B36A2E] transition-colors border-b border-[#F7F5F1] hover:border-[#B36A2E] pb-0.5 w-fit"
                        >
                          View Repository
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </AnimatedText>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Rentable Services Section */}
        <Section id="infrastructure">
          <Container>
            <SectionHeading
              title="Self-Hosted Infrastructure"
              subtitle="Encrypted, cookie-free cloud tools configured and managed for privacy-conscious developers."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {services.map((service, index) => (
                <AnimatedText
                  key={service.title}
                  delay={0.1 * (index + 1)}
                  y={12}
                  className="space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-2xl text-[#1C1C1C] font-normal font-serif">
                      {service.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] text-[#66635F] leading-relaxed font-light">
                      {service.description}
                    </p>
                    {service.officialUrl && (
                      <div className="flex items-center gap-1.5 text-[12px] font-mono text-[#66635F] pt-1">
                        <ExternalLink className="w-3.5 h-3.5 text-[#B36A2E]/80" />
                        <span>Official Project:</span>
                        <a
                          href={service.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-[#B36A2E] transition-colors font-medium"
                        >
                          {service.officialName}
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="pt-2">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-1 text-[13px] font-mono text-[#1C1C1C] hover:text-[#B36A2E] transition-colors border-b border-[#1C1C1C] hover:border-[#B36A2E] pb-0.5"
                    >
                      Provision Service
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </AnimatedText>
              ))}
            </div>
          </Container>
        </Section>

        {/* Achievements Section */}
        <Section id="achievements" background="secondary">
          <Container>
            <SectionHeading
              title="Achievements & Milestones"
              subtitle="Understated engineering markers, open-source work, and community leadership."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-[15px] md:text-[16px] text-[#66635F] leading-relaxed font-light">
              <AnimatedText delay={0.1} className="space-y-4 p-6 bg-[#F9F7F3] border border-[rgba(0,0,0,0.06)] rounded-sm relative">
                <Link
                  href="https://www.linkedin.com/in/luckylinux/details/honors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-[#B36A2E]/60 hover:text-[#B36A2E] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <span className="font-mono text-[#B36A2E] text-[12px] tracking-wider uppercase block">
                  Hackathons
                </span>
                <h4 className="text-xl text-[#1C1C1C] font-serif font-normal">
                  Engineer&apos;s Day Hackathon
                </h4>
                <div className="flex items-start gap-2 text-[14px] md:text-[15px]">
                  <span className="shrink-0 text-base">🥈</span>
                  <span>
                    Secured <span className="font-medium text-[#2E2C2A]">2nd Place</span> among <span className="font-medium text-[#2E2C2A]">40+ teams</span> at the Engineer&apos;s Day <span className="font-medium text-[#2E2C2A]">Hackathon</span> with an <span className="font-medium text-[#2E2C2A]">AI-powered healthcare platform</span>.
                  </span>
                </div>
              </AnimatedText>

              <AnimatedText delay={0.2} className="space-y-4 p-6 bg-[#F9F7F3] border border-[rgba(0,0,0,0.06)] rounded-sm relative">
                <Link
                  href="https://www.linkedin.com/in/luckylinux/details/honors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-[#B36A2E]/60 hover:text-[#B36A2E] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <span className="font-mono text-[#B36A2E] text-[12px] tracking-wider uppercase block">
                  Cybersecurity Events
                </span>
                <h4 className="text-xl text-[#1C1C1C] font-serif font-normal">
                  Capture The Flag (CTF) Competitions
                </h4>
                <div className="space-y-2 text-[14px] md:text-[15px]">
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 text-base">🏆</span>
                    <span>
                      <strong className="font-medium text-[#2E2C2A]">1st Place</strong> – Sherlocked CTF (IET NITK), 250+ participants
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="shrink-0 text-base">🥉</span>
                    <span>
                      <strong className="font-medium text-[#2E2C2A]">3rd Place</strong> – Incub8 CTF (E-Cell NITK), 450+ participants
                    </span>
                  </div>
                </div>
              </AnimatedText>
            </div>
          </Container>
        </Section>

        {/* Technical Expertise Section */}
        <Section id="expertise">
          <Container>
            <SectionHeading
              title="Technical Expertise"
              subtitle="Tools and technologies behind the products I engineer."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {expertise.map((group, index) => (
                <AnimatedText
                  key={group.category}
                  delay={0.1 * index}
                  y={10}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-2xl text-[#1C1C1C] border-b border-[rgba(0,0,0,0.08)] pb-2 font-normal">
                    {group.category}
                    {group.tagline && (
                      <span className="block text-[12px] font-sans font-light text-[#66635F] italic mt-1 leading-normal font-normal">
                        {group.tagline}
                      </span>
                    )}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-[14px] font-mono text-[#66635F] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B36A2E]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </AnimatedText>
              ))}
            </div>
          </Container>
        </Section>

        {/* Systems Lab */}
        <Section id="infrastructure" background="dark" className="font-mono text-[14px] py-32 md:py-48">
          <Container>
            <SectionHeading
              title="Systems Lab"
              subtitle="Detailed architectural documentation and configuration mappings of my self-hosted server environment."
            />

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 md:gap-4 border-b border-[rgba(255,255,255,0.08)] pb-4 mb-10">
              {[
                { id: "overview", name: "Overview" },
                { id: "routing", name: "Routing & Configs" },
                { id: "security", name: "Security & Services" },
                { id: "why-self-host", name: "Why Self-Host?" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-[12px] md:text-[13px] uppercase tracking-wider transition-all duration-200 border-b-2 font-mono cursor-pointer ${activeTab === tab.id
                    ? "border-[#B36A2E] text-[#F7F5F1] font-bold"
                    : "border-transparent text-[rgba(255,255,255,0.45)] hover:text-[#F7F5F1]"
                    }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>

            {activeTab === "overview" && (
              <div className="space-y-12 animate-fade-in w-full">
                {/* Specs/Text in a horizontal 3-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[rgba(255,255,255,0.68)] border-b border-[rgba(255,255,255,0.06)] pb-8">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold">
                      Overview
                    </span>
                    <p className="leading-relaxed font-sans font-light text-[14px]">
                      This is a local self-hosted server used for learning, experimentation, and running real production services. The infrastructure provides hands-on experience with system administration, networking, and DevOps practices while serving actual applications to users.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold">
                      Networking & Ingress
                    </span>
                    <p className="leading-relaxed font-sans font-light text-[14px]">
                      Services are exposed securely to the internet using Cloudflare Tunnel without opening any inbound ports on the router or firewall. This eliminates the need for port forwarding and provides an additional layer of security through Cloudflare's edge network.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold">
                      Architecture Overview
                    </span>
                    <p className="leading-relaxed font-sans font-light text-[14px]">
                      Cloudflare acts as the public-facing endpoint, routing requests through an encrypted tunnel to the local server. Nginx then handles internal routing to appropriate services based on hostname and path.
                    </p>
                  </div>
                </div>

                {/* Architecture visualization image & caption (Full Width) */}
                <div className="bg-[#151515] border border-[rgba(255,255,255,0.08)] rounded-md overflow-hidden flex flex-col w-full">
                  <div className="flex items-center justify-between w-full px-6 py-4 border-b border-[rgba(255,255,255,0.08)]">
                    <span className="text-[11px] uppercase tracking-wider text-[rgba(255,255,255,0.68)] font-mono">
                      VISUAL SCHEMATIC OVERVIEW
                    </span>
                    <button
                      onClick={() => setCloud_infra_image_light(!cloud_infra_image_light)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.1em] border border-[rgba(255,255,255,0.15)] rounded-xs text-[rgba(255,255,255,0.68)] hover:text-[#F7F5F1] hover:border-[#8c5330] transition-all duration-200 cursor-pointer"
                    >
                      {cloud_infra_image_light ? (
                        <>
                          <Moon className="w-3.5 h-3.5" />
                          Switch to Dark
                        </>
                      ) : (
                        <>
                          <Sun className="w-3.5 h-3.5" />
                          Switch to Light
                        </>
                      )}
                    </button>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 bg-transparent gap-4">
                    <img
                      src={cloud_infra_image_light ? "/cloud-infrastructure-light.png" : "/cloud-infrastructure.png"}
                      alt="Server Infrastructure Architecture Diagram"
                      className="w-full max-w-4xl h-auto select-none rounded-xs"
                    />
                    <div className="text-[12px] md:text-[13px] text-[rgba(255,255,255,0.5)] font-mono text-center border-t border-[rgba(255,255,255,0.06)] pt-4 w-full">
                      The request flow follows this path:{" "}
                      <span className="text-[#F7F5F1]">Users</span>{" "}
                      <span className="text-white/30">→</span>{" "}
                      <span className="text-amber-500">Cloudflare Edge</span>{" "}
                      <span className="text-white/30">→</span>{" "}
                      <span className="text-amber-500">Cloudflare Tunnel</span>{" "}
                      <span className="text-white/30">→</span>{" "}
                      <span className="text-[#B36A2E]">Nginx Reverse Proxy</span>{" "}
                      <span className="text-white/30">→</span>{" "}
                      <span className="text-emerald-500">Internal Services</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "routing" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* Description Text */}
                <div className="lg:col-span-1 space-y-6 text-[rgba(255,255,255,0.68)]">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold">
                      Networking & Exposure
                    </span>
                    <p className="leading-relaxed font-sans font-light text-[15px]">
                      Cloudflare Tunnel (cloudflared) is configured to map multiple subdomains to internal services. The tunnel daemon runs locally and maintains persistent connections to Cloudflare's edge network, eliminating the need for publicly exposed IP addresses or open inbound ports.
                    </p>
                    <p className="leading-relaxed font-sans font-light text-[15px]">
                      Most hostnames terminate at <span className="text-[#B36A2E] font-mono font-medium">localhost:443</span>, where Nginx handles reverse proxying based on the Host header. Some services connect directly to their specific ports for performance or compatibility reasons.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold">
                      Nginx Reverse Proxy
                    </span>
                    <p className="leading-relaxed font-sans font-light text-[15px]">
                      Nginx acts as the single entry point for HTTPS traffic from the Cloudflare Tunnel. It routes requests to internal services and applications based on the Host header, enabling multiple services to share the same external port (443).
                    </p>
                  </div>
                </div>

                {/* Configurations Snippets */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Cloud Tunnel yaml config snippet */}
                  <div className="bg-[#151515] border border-[rgba(255,255,255,0.08)] rounded-md p-6 overflow-x-auto shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.06)] mb-4 text-[12px] text-[rgba(255,255,255,0.68)]">
                      <span>config/cloudflared.yml</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> SECURE TUNNEL</span>
                    </div>
                    <pre className="text-[13px] text-[#F7F5F1] leading-relaxed">
                      {`ingress:
  - hostname: server.luckylinux.dev
    service: https://localhost:443
  - hostname: railsplit-server.luckylinux.dev
    service: http://127.0.0.1:3108
  - hostname: n8n.luckylinux.dev
    service: https://localhost:443
  - hostname: chronocare-server.luckylinux.dev
    service: http://127.0.0.1:3102
  - hostname: code.luckylinux.dev
    service: https://localhost:443
  - hostname: analytics.luckylinux.dev
    service: https://localhost:443
  - hostname: ssh.luckylinux.dev
    service: ssh://localhost:22 #(secured)
  - hostname: openwisp2.luckylinux.dev
    service: http://127.0.0.1:80
  - hostname: cloud.luckylinux.dev
    service: https://localhost:443
  - service: http_status:404`}
                    </pre>
                  </div>

                  {/* Nginx config excerpt */}
                  <div className="bg-[#151515] border border-[rgba(255,255,255,0.08)] rounded-md p-6 overflow-x-auto shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.06)] mb-4 text-[12px] text-[rgba(255,255,255,0.68)]">
                      <span>nginx/conf.d/hardening.conf</span>
                      <span className="flex items-center gap-1.5"><Terminal className="w-3.5 h-3.5 text-[#B36A2E]" /> NGINX ORIGIN</span>
                    </div>
                    <pre className="text-[13px] text-[#F7F5F1] leading-relaxed">
                      {`# Reverse proxy hardening (excerpt)
server_tokens off;

# Preserve real client IP from Cloudflare Tunnel
real_ip_header CF-Connecting-IP;

# Basic rate limiting
limit_req_zone $binary_remote_addr zone=global:20m rate=10r/s;

# TLS termination at Nginx (origin)
ssl_protocols TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers off;`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "security" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                {/* TLS & Services */}
                <div className="lg:col-span-1 space-y-6 text-[rgba(255,255,255,0.68)]">
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold">
                      TLS & Certificates
                    </span>
                    <p className="leading-relaxed font-sans font-light text-[15px]">
                      Cloudflare CA Origin Certificates secure the connection between Cloudflare and the local server. Public TLS termination occurs at Cloudflare's edge, with origin certificates securing the tunnel-to-Nginx connection.
                    </p>
                    <p className="leading-relaxed font-sans font-light text-[15px]">
                      This setup provides end-to-end encryption: <span className="text-emerald-500 font-mono text-[13px] block mt-1">Browser → Cloudflare (public cert) → Tunnel (encrypted) → Nginx (origin cert) → Services</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold">
                      Services Hosted
                    </span>
                    <p className="leading-relaxed font-sans font-light text-[15px]">
                      All services run on a private internal network and are only accessible via the reverse proxy. Direct access to service ports is blocked by the host firewall.
                    </p>
                    <ul className="space-y-1.5 font-sans font-light text-[14px] text-[rgba(255,255,255,0.8)] mt-2">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B36A2E]" />
                        <a href="https://nextcloud.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#B36A2E] flex items-center gap-1 transition-colors font-medium">
                          Nextcloud <ExternalLink className="w-3 h-3 text-[rgba(255,255,255,0.4)]" />
                        </a>{" "}
                        - Cloud storage & sync
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B36A2E]" />
                        <a href="https://n8n.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#B36A2E] flex items-center gap-1 transition-colors font-medium">
                          n8n <ExternalLink className="w-3 h-3 text-[rgba(255,255,255,0.4)]" />
                        </a>{" "}
                        - Workflow automation
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B36A2E]" />
                        <a href="https://plausible.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#B36A2E] flex items-center gap-1 transition-colors font-medium">
                          Plausible <ExternalLink className="w-3 h-3 text-[rgba(255,255,255,0.4)]" />
                        </a>{" "}
                        - Web analytics
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B36A2E]" />
                        <a href="https://github.com/coder/code-server" target="_blank" rel="noopener noreferrer" className="hover:text-[#B36A2E] flex items-center gap-1 transition-colors font-medium">
                          Code Server <ExternalLink className="w-3 h-3 text-[rgba(255,255,255,0.4)]" />
                        </a>{" "}
                        - Web-based VS Code
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B36A2E]" />
                        <strong>Custom Apps</strong> - Backend and frontend services
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Security Notes Grid */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-[#151515] border border-[rgba(255,255,255,0.08)] rounded-md p-8 shadow-xs">
                    <span className="text-[11px] uppercase tracking-wider text-[#F7F5F1] block font-bold mb-6 font-mono">
                      [SECURITY HARDENING MATRIX]
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-5 border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <h5 className="text-[14px] font-sans font-semibold text-[#F7F5F1]">No Inbound Exposure</h5>
                        </div>
                        <p className="text-[13px] font-sans font-light text-[rgba(255,255,255,0.6)] leading-relaxed">
                          All public services route exclusively through Cloudflare Tunnel daemon connections. No inbound router/firewall ports are open to the internet.
                        </p>
                      </div>

                      <div className="p-5 border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <h5 className="text-[14px] font-sans font-semibold text-[#F7F5F1]">Firewall Isolation</h5>
                        </div>
                        <p className="text-[13px] font-sans font-light text-[rgba(255,255,255,0.6)] leading-relaxed">
                          UFW firewall blocks direct access to all service ports on the host system, ensuring all traffic must route via local Nginx.
                        </p>
                      </div>

                      <div className="p-5 border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <h5 className="text-[14px] font-sans font-semibold text-[#F7F5F1]">Service Isolation</h5>
                        </div>
                        <p className="text-[13px] font-sans font-light text-[rgba(255,255,255,0.6)] leading-relaxed">
                          Applications run in isolated Docker containers with minimal privileges, restricting directory traversal and process escaping.
                        </p>
                      </div>

                      <div className="p-5 border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] rounded-sm space-y-2">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" />
                          <h5 className="text-[14px] font-sans font-semibold text-[#F7F5F1]">TLS Hardening</h5>
                        </div>
                        <p className="text-[13px] font-sans font-light text-[rgba(255,255,255,0.6)] leading-relaxed">
                          End-to-end encryption from browser to internal services, hardened with modern TLS 1.3 protocol and strong cipher limits.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "why-self-host" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {[
                  {
                    title: "Complete Infrastructure Control",
                    desc: "Total ownership of the technology stack—from hardware configuration to the virtualized application layer—enabling custom networking parameters, custom resource limits, and unlimited scaling without platform constraints."
                  },
                  {
                    title: "Privacy by Design",
                    desc: "Zero third-party data crawling, tracking cookies, or metadata collection. Complete data sovereignty over configuration lists, analytics histories, database dumps, and developer logs."
                  },
                  {
                    title: "Engineering at Scale",
                    desc: "Hands-on experience managing production-grade infrastructure, learning containerized deployment pipelines, handling hardware telemetry, troubleshooting system limits, and managing Nginx web gateways."
                  },
                  {
                    title: "Production-Ready Systems",
                    desc: "Real-world infrastructure serving live workloads and processing actual payloads. Every application is optimized for continuous uptime, hardware limits, and secure web availability."
                  }
                ].map((item, idx) => (
                  <div
                    key={item.title}
                    className="p-6 md:p-8 bg-[#151515] border border-[rgba(255,255,255,0.08)] rounded-md flex flex-col justify-between space-y-4 font-mono text-[14px]"
                  >
                    <div className="space-y-3">
                      <span className="font-mono text-[#B36A2E] text-[12px] tracking-wider uppercase block font-bold">
                        Pillar [0{idx + 1}]
                      </span>
                      <h4 className="text-xl text-[#F7F5F1] font-serif font-normal">
                        {item.title}
                      </h4>
                      <p className="text-[14px] font-sans font-light text-[rgba(255,255,255,0.68)] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Container>
        </Section>

        {/* Contact Section */}
        <Section id="contact">
          <Container className="text-center space-y-12 py-12">
            <div className="space-y-6">
              <AnimatedText delay={0.1} className="text-4xl md:text-6xl text-[#1C1C1C]">
                Let&apos;s build something meaningful.
              </AnimatedText>
              <AnimatedText delay={0.2} className="text-[18px] md:text-[20px] text-[#66635F] font-light max-w-xl mx-auto">
                Seeking opportunities in Systems Architecture, Cloud Infrastructure, and Backend Engineering.
              </AnimatedText>
            </div>

            <AnimatedText delay={0.3} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:admin@luckylinux.dev"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1C1C] text-[#F9F7F3] rounded-md hover:bg-[#2c2c2c] transition-all hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                <Mail className="w-4 h-4" />
                admin@luckylinux.dev
              </a>
              <a
                href="https://linkedin.com/in/luckylinux"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-[#1C1C1C] border border-[rgba(0,0,0,0.12)] rounded-md hover:bg-[#F6F3ED] transition-all hover:scale-[1.02] active:scale-[0.98] duration-200"
              >
                <Linkedin className="w-4 h-4 text-[#66635F]" />
                Connect on LinkedIn
              </a>
            </AnimatedText>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  )
}
