"use client"

import React from "react"

interface TimelineItem {
  organization: string
  role: string
  duration: string
  achievements: React.ReactNode[]
  description?: React.ReactNode
}

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6 md:pl-8 border-l border-[rgba(0,0,0,0.08)] space-y-12 md:space-y-16">
      {items.map((item, index) => (
        <div key={`${item.organization}-${item.role}-${index}`} className="relative group">
          {/* Timeline Node dot */}
          <div className="absolute -left-[31px] md:-left-[39px] top-2.5 w-3.5 h-3.5 rounded-full bg-[#F9F7F3] border-2 border-[#B36A2E] transition-all group-hover:scale-125 duration-300" />
          
          <div className="space-y-3">
            {/* Metadata (date range) */}
            <div className="text-[11px] md:text-[12px] font-mono text-[#B36A2E] tracking-widest uppercase font-semibold">
              {item.duration}
            </div>

            {/* Company / College Header (Heading) */}
            <h3 className="text-3xl md:text-4xl text-[#1C1C1C] font-serif font-light tracking-tight leading-tight pt-0.5">
              {item.organization}
            </h3>

            {/* Job / Education Title (Subtitle) */}
            <div className="text-[17px] md:text-[19px] text-[#1C1C1C] font-sans font-medium tracking-wide leading-snug">
              {item.role}
            </div>

            {/* Description context */}
            {item.description && (
              <p className="text-[16px] md:text-[17px] text-[#66635F] font-light leading-relaxed max-w-3xl pt-0.5">
                {item.description}
              </p>
            )}

            {/* Bulleted achievements */}
            {item.achievements.length > 0 && (
              <ul className="space-y-3 pt-3 max-w-3xl">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-[15px] md:text-[16px] text-[#66635F] font-light leading-relaxed">
                    <span className="text-[#B36A2E]/70 mt-1 select-none font-mono text-xs">—</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
