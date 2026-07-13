"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Menu, X, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -80% 0px", // triggers when section is in top viewport area
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const theme = entry.target.getAttribute("data-theme")
          setIsDarkSection(theme === "dark")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const sections = document.querySelectorAll("section")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b select-none theme-transition",
          isScrolled
            ? isDarkSection
              ? "py-3 bg-[#0D0D0D]/85 backdrop-blur-md border-[rgba(255,255,255,0.08)]"
              : "py-3 bg-[#F9F7F3]/80 backdrop-blur-md border-[rgba(0,0,0,0.08)]"
            : "py-6 bg-transparent border-transparent"
        )}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="group flex flex-col animate-fade-in">
            <span className={cn(
              "font-serif text-2xl font-normal tracking-tight group-hover:opacity-85 transition-opacity theme-transition",
              isDarkSection ? "text-[#F7F5F1]" : "text-[#1C1C1C]"
            )}>
              luckylinux
            </span>
            <span className={cn(
              "text-[10px] tracking-widest uppercase font-mono mt-[-2px] theme-transition",
              isDarkSection ? "text-[rgba(255,255,255,0.45)]" : "text-[#66635F]"
            )}>
              Systems & Infrastructure
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className={cn(
            "hidden md:flex items-center gap-8 text-[15px] font-medium theme-transition",
            isDarkSection ? "text-[rgba(255,255,255,0.68)]" : "text-[#66635F]"
          )}>
            <Link 
              href="#about" 
              className={cn("transition-colors", isDarkSection ? "hover:text-[#F7F5F1]" : "hover:text-[#1C1C1C]")}
            >
              About
            </Link>
            <Link 
              href="#experience" 
              className={cn("transition-colors", isDarkSection ? "hover:text-[#F7F5F1]" : "hover:text-[#1C1C1C]")}
            >
              Experience
            </Link>
            <Link 
              href="#projects" 
              className={cn("transition-colors", isDarkSection ? "hover:text-[#F7F5F1]" : "hover:text-[#1C1C1C]")}
            >
              Projects
            </Link>
            <Link 
              href="#infrastructure" 
              className={cn("transition-colors", isDarkSection ? "hover:text-[#F7F5F1]" : "hover:text-[#1C1C1C]")}
            >
              Systems Lab
            </Link>
            <Link 
              href="#contact" 
              className={cn("transition-colors", isDarkSection ? "hover:text-[#F7F5F1]" : "hover:text-[#1C1C1C]")}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/KALI-THE-HACKER"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-colors theme-transition",
                isDarkSection ? "text-[rgba(255,255,255,0.68)] hover:text-[#F7F5F1]" : "text-[#66635F] hover:text-[#1C1C1C]"
              )}
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/luckylinux"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "transition-colors theme-transition",
                isDarkSection ? "text-[rgba(255,255,255,0.68)] hover:text-[#F7F5F1]" : "text-[#66635F] hover:text-[#1C1C1C]"
              )}
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <a
              href="/lucky-resume-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden sm:inline-flex items-center justify-center px-4 py-2 text-[14px] font-medium rounded-md transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 theme-transition",
                isDarkSection 
                  ? "bg-[#F7F5F1] text-[#0D0D0D] hover:bg-[#F7F5F1]/90" 
                  : "bg-[#1C1C1C] text-[#F9F7F3] hover:bg-[#333333]"
              )}
            >
              Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-1 transition-colors theme-transition",
                isDarkSection ? "text-[#F7F5F1] hover:text-[#B36A2E]" : "text-[#1C1C1C] hover:text-[#B36A2E]"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F9F7F3] pt-28 px-8 flex flex-col md:hidden">
          <nav className="flex flex-col gap-6 text-2xl font-serif text-[#1C1C1C]">
            <Link
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#B36A2E] transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#B36A2E] transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#B36A2E] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#infrastructure"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#B36A2E] transition-colors"
            >
              Systems Lab
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#B36A2E] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="mt-12 pt-8 border-t border-[rgba(0,0,0,0.08)] flex flex-col gap-4">
            <a
              href="/lucky-resume-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center py-3 text-base font-medium bg-[#1C1C1C] text-[#F9F7F3] rounded-md hover:bg-[#333333] transition-all hover:scale-[1.02]"
            >
              Resume
            </a>
          </div>
        </div>
      )}

      {/* Floating Resume button for small screens */}
      <a
        href="/lucky-resume-1.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-3 pl-2 pr-4.5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out sm:hidden group border theme-transition",
          isDarkSection 
            ? "bg-[#F7F5F1]/95 text-[#1C1C1C] border-[rgba(0,0,0,0.1)]"
            : "bg-[#0D0D0D]/95 text-[#F7F5F1] border-[rgba(255,255,255,0.1)]"
        )}
      >
        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#B36A2E]/60 flex-shrink-0">
          <img
            src="/profile_img.png"
            alt="Lucky Verma"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-[13px] font-medium font-mono tracking-wide flex items-center gap-1">
          Resume
          <ArrowUpRight className="w-3.5 h-3.5 text-[#B36A2E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </a>
    </>
  )
}
