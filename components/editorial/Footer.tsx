"use client"

import React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] bg-[#F9F7F3] py-16 select-none">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 text-[14px]">
        {/* Left Information */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-[#1C1C1C] font-light">
            © {currentYear} Luckylinux. All rights reserved.
          </p>
          <p className="text-[#66635F] text-[12px] font-mono">
            Built with Next.js, React, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Right Socials & Links */}
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/KALI-THE-HACKER"
            className="text-[#66635F] hover:text-[#1C1C1C] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com/in/luckylinux"
            className="text-[#66635F] hover:text-[#1C1C1C] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:admin@luckylinux.dev"
            className="text-[#66635F] hover:text-[#1C1C1C] transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
