import React from "react"
import { cn } from "@/lib/utils"
import { AnimatedText } from "./AnimatedText"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  chapterNumber?: string
  chapterLabel?: string
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className,
  chapterNumber,
  chapterLabel
}: SectionHeadingProps) {
  const hasChapter = chapterNumber && chapterLabel

  return (
    <div className={cn("mb-20 space-y-4 max-w-2xl", className)}>
      {hasChapter && (
        <AnimatedText 
          delay={0.05} 
          y={8} 
          as="span" 
          className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#66635F] opacity-70 block mb-2"
        >
          {chapterNumber} — {chapterLabel}
        </AnimatedText>
      )}
      <AnimatedText delay={0.1} y={12} as="h2" className="text-4xl md:text-5xl text-[#1C1C1C] font-normal leading-tight">
        {title}
      </AnimatedText>
      {subtitle && (
        <AnimatedText delay={0.2} y={8} as="p" className="text-[17px] md:text-[19px] text-[#66635F] font-light leading-relaxed">
          {subtitle}
        </AnimatedText>
      )}
    </div>
  )
}
