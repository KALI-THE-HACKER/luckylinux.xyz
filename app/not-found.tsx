"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Home, AlertCircle } from "lucide-react"

export default function NotFound() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  const [timestamp, setTimestamp] = useState("")

  useEffect(() => {
    setMounted(true)
    setTimestamp(new Date().toISOString())
  }, [])

  return (
    <div className="min-h-screen bg-[#F9F7F3] text-[#1C1C1C] flex flex-col font-sans selection:bg-[#B36A2E]/10 selection:text-[#B36A2E] theme-transition items-center justify-center p-6 md:p-12 relative overflow-hidden">
      {/* Decorative background grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="w-full max-w-2xl relative z-10 space-y-12">
        {/* Editorial Top bar */}
        <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.08)] pb-4 font-mono text-[11px] uppercase tracking-widest text-[#66635F]">
          <span>luckylinux.dev</span>
          <span className="flex items-center gap-1.5 text-[#B36A2E]">
            <AlertCircle className="w-3.5 h-3.5" /> ROUTING EXCEPTION
          </span>
        </div>

        {/* Huge Serif Header */}
        <div className="space-y-4">
          <span className="font-mono text-[#B36A2E] text-[13px] tracking-wider uppercase block font-semibold">
            ERROR CODE: 404
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-normal text-[#1C1C1C] tracking-tight leading-none">
            Page Unresolved
          </h1>
          <p className="text-lg md:text-xl text-[#66635F] font-serif font-light italic leading-normal">
            The requested path does not map to any active containers or proxy endpoints in this self-hosted universe.
          </p>
        </div>

        {/* Monospace configuration dump / stack trace mock */}
        <div className="bg-[#151515] border border-[rgba(255,255,255,0.08)] rounded-md p-6 overflow-x-auto shadow-xs font-mono text-[13px] text-[#F7F5F1]">
          <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.06)] mb-4 text-[11px] text-[rgba(255,255,255,0.45)] uppercase tracking-wider">
            <span>router_diagnostics.log</span>
            <span>v1.0.0</span>
          </div>
          <pre className="leading-relaxed">
{`---
status: 404_NOT_FOUND
request_uri: ${mounted ? pathname || "/" : "..."}
timestamp: ${mounted ? timestamp : "..."}
unmapped_route: true
gateway_resolution: failed
action_required: redirect_to_origin`}
          </pre>
        </div>

        {/* Editorial CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1C1C1C] text-[#F9F7F3] rounded-md hover:bg-[#2c2c2c] transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 font-medium text-[14px]"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[#1C1C1C] border border-[rgba(0,0,0,0.12)] rounded-md hover:bg-[#F6F3ED] transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 font-medium text-[14px] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-[#66635F]" />
            Go Back
          </button>
        </div>

        {/* Bottom system footer */}
        <div className="border-t border-[rgba(0,0,0,0.08)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#66635F] uppercase tracking-wider">
          <span>HOST: self-hosted-universe</span>
          <span>© {mounted ? new Date().getFullYear() : 2026} LUCKylinux. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </div>
  )
}
