"use client"

import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { AnimatedText } from "./AnimatedText"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoOpacity, setVideoOpacity] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playsInline = true
    video.loop = true

    const handlePlay = () => {
      setVideoOpacity(1)
    }

    video.addEventListener("playing", handlePlay)
    video.play().then(() => {
      setVideoOpacity(1)
    }).catch((err) => {
      console.log("Autoplay blocked:", err)
      setVideoOpacity(1)
    })

    return () => {
      video.removeEventListener("playing", handlePlay)
    }
  }, [])

  return (
    <section className="relative h-[90vh] w-screen flex items-center justify-center overflow-hidden pt-12 pb-12 md:pb-20 select-none">
      {/* Video Background Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
        <video
          ref={videoRef}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4"
          muted
          playsInline
          className="w-full h-full object-cover object-bottom animate-fade-in"
          style={{ opacity: videoOpacity }}
        />
      </div>


      {/* Hero Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center z-20 space-y-6 md:space-y-10 translate-y-[8vh]">
        <div className="space-y-6">
          <AnimatedText delay={0.1} duration={0.8} y={20} as="h1" className="text-5xl md:text-7xl lg:text-7xl text-[#ffffff] leading-[1.05] tracking-tight">
            Documenting the things I build, deploy, and continuously improve.
          </AnimatedText>
        </div>

        {/* Call to Actions */}
        <AnimatedText delay={0.4} duration={0.8} y={10} className="flex justify-center items-center pt-10 md:pt-20">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-medium bg-[#1C1C1C] text-[#F9F7F3] rounded-md hover:bg-[#2c2c2c] transition-all hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-xs"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedText>
      </div>
    </section>
  )
}
