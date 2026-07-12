"use client"

import React from "react"
import Link from "next/link"
import { Github, ArrowUpRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { AnimatedText } from "./AnimatedText"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  name: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  outcome: string
  imageUrl: string
  index: number
  status?: string
  images?: string[]
}

export function ProjectCard({
  name,
  description,
  tags,
  githubUrl,
  liveUrl,
  outcome,
  imageUrl,
  index,
  status,
  images
}: ProjectCardProps) {
  const isEven = index % 2 === 0
  const hasMultipleImages = images && images.length > 1
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)

  React.useEffect(() => {
    if (!hasMultipleImages || !isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [hasMultipleImages, isPlaying, images])

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (images) {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (images) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 md:gap-16 py-12 md:py-20 ${isEven ? "" : "lg:flex-row-reverse"
      }`}>
      {/* Visual Showcase (Visuals support the content) */}
      <AnimatedText delay={0.2} duration={0.8} y={15} className="w-full lg:w-1/2">
        <div className="relative group flex flex-col gap-3 p-3 border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] rounded-md transition-all hover:scale-[1.01] duration-300">
          {hasMultipleImages ? (
            <div className="relative w-full aspect-[16/12] max-h-[480px] overflow-hidden rounded-xs bg-[#F6F3ED] flex items-center justify-center">
              {/* Slides */}
              {images.map((img, idx) => (
                <div
                  key={img}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-in-out",
                    idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                >
                  <img
                    src={img}
                    alt={`${name} Slide ${idx + 1}`}
                    className="w-full h-full object-contain object-center select-none"
                  />
                </div>
              ))}
            </div>
          ) : imageUrl === "placeholder" ? (
            <div className="w-full aspect-[16/12] max-h-[480px] flex flex-col items-center justify-center p-8 bg-[#151515] text-center font-mono select-none rounded-xs">
              <div className="text-[28px] md:text-3xl text-[#B36A2E] animate-pulse mb-3">
                [ ]
              </div>
              <span className="text-[12px] uppercase tracking-wider text-[rgba(255,255,255,0.68)]">
                Mockup currently compiling...
              </span>
              <p className="text-[10px] text-[#66635F] mt-2 max-w-xs leading-normal">
                AI agents are busy polishing the pixels. Interface preview will render soon.
              </p>
            </div>
          ) : imageUrl.includes("drive.google.com") ? (
            <div className="w-full aspect-[16/10.5] max-h-[380px] overflow-hidden rounded-xs bg-black">
              <iframe
                src={imageUrl}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`${name} Overview Video`}
              />
            </div>
          ) : imageUrl.endsWith(".webm") ? (
            <div className="w-full overflow-hidden rounded-xs">
              <video
                src={imageUrl}
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-auto object-cover object-center max-h-[380px] select-none"
              />
            </div>
          ) : (
            <div className="w-full overflow-hidden rounded-xs">
              <img
                src={imageUrl}
                alt={`${name} Interface Mockup`}
                className="w-full h-auto object-cover object-center max-h-[380px] select-none"
              />
            </div>
          )}

          {/* Controls Bar (only rendered when hasMultipleImages is true) */}
          {hasMultipleImages && (
            <div className="flex items-center justify-between w-full px-3 py-2 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.06)] rounded-xs">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="text-[#66635F] hover:text-[#1C1C1C] active:scale-95 transition-all p-1 cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={togglePlay}
                  className="text-[#66635F] hover:text-[#1C1C1C] active:scale-95 transition-all p-1 cursor-pointer"
                  aria-label={isPlaying ? "Pause Slideshow" : "Start Slideshow"}
                >
                  {isPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="text-[#66635F] hover:text-[#1C1C1C] active:scale-95 transition-all p-1 cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex gap-1.5 items-center">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentIndex(idx)
                    }}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all cursor-pointer",
                      idx === currentIndex 
                        ? "bg-[#B36A2E] w-4" 
                        : "bg-[#66635F]/20"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </AnimatedText>

      {/* Project Details */}
      <AnimatedText delay={0.3} duration={0.8} y={15} className="w-full lg:w-1/2 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-[12px] uppercase font-mono tracking-widest text-[#B36A2E] font-medium">
              Project {String(index + 1).padStart(2, "0")}
            </span>
            {status && (
              <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.05em] text-[#B36A2E] border border-[#B36A2E]/25 bg-[#B36A2E]/5 rounded-xs select-none">
                {status}
              </span>
            )}
          </div>
          <h3 className="text-3xl md:text-4xl text-[#1C1C1C] font-normal leading-tight">
            {name}
          </h3>
        </div>

        <p className="text-[16px] md:text-[17px] text-[#66635F] font-light leading-relaxed">
          {description}
        </p>

        <div className="space-y-4 pt-4 border-t border-[rgba(0,0,0,0.06)]">
          <div>
            <span className="text-[11px] uppercase font-mono tracking-wider text-[#66635F] block mb-1">
              Key Engineering Outcome
            </span>
            <p className="text-[14px] text-[#1C1C1C] font-light italic">
              {outcome}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[12px] font-mono text-[#66635F] bg-[#F6F3ED] border border-[rgba(0,0,0,0.06)] rounded-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 pt-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[14px] font-medium text-[#1C1C1C] hover:text-[#B36A2E] transition-colors"
            >
              Launch Service
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#66635F] hover:text-[#1C1C1C] transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </Link>
          )}
        </div>
      </AnimatedText>
    </div>
  )
}
