"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, AlertCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100 flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-3xl animate-ping [animation-duration:3s]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-2 h-2 bg-cyan-400/30 rounded-full animate-float" />
        <div className="absolute top-[60%] left-[80%] w-2 h-2 bg-blue-400/30 rounded-full animate-float [animation-delay:1s]" />
        <div className="absolute top-[40%] right-[15%] w-2 h-2 bg-orange-400/30 rounded-full animate-float [animation-delay:2s]" />
        <div className="absolute bottom-[30%] left-[10%] w-2 h-2 bg-red-400/30 rounded-full animate-float [animation-delay:1.5s]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* 404 Animated Number */}
        <div className="relative">
          <div className="text-[150px] md:text-[200px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-zinc-600 via-zinc-400 to-zinc-600 animate-pulse select-none">
            404
          </div>
          <div className="absolute inset-0 text-[150px] md:text-[200px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-red-500/20 via-orange-500/20 to-red-500/20 blur-xl animate-pulse">
            404
          </div>
        </div>

        {/* Error icon with animation */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 flex items-center justify-center animate-bounce [animation-duration:2s]">
              <AlertCircle className="w-8 h-8 text-orange-400" />
            </div>
            <div className="absolute inset-0 w-16 h-16 rounded-full bg-orange-500/20 blur-xl animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-balance">Page Not Found</h1>
          <p className="text-lg md:text-xl text-zinc-400 text-balance">
            This system doesn&apos;t exist in the self-hosted universe.
          </p>
          <p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed text-balance">
            The page you&apos;re looking for might have been removed, renamed, or is temporarily unavailable.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="bg-zinc-100 text-zinc-900 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-zinc-100/20 hover:scale-105"
            asChild
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-700 bg-zinc-900/50 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Additional info */}
        <div className="pt-8">
          <p className="text-xs text-zinc-600 italic">Error Code: 404 | Resource Not Found</p>
        </div>
      </div>
    </div>
  )
}
