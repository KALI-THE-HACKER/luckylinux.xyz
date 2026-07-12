import React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  id?: string
  className?: string
  background?: "default" | "secondary" | "dark"
}

export function Section({ children, id, className, background = "default", ...props }: SectionProps) {
  return (
    <section
      id={id}
      data-theme={background === "dark" ? "dark" : "light"}
      className={cn(
        "py-24 md:py-32 border-b theme-transition w-full relative overflow-hidden",
        background === "dark"
          ? "bg-editorial-dark border-[rgba(255,255,255,0.08)] text-[#F7F5F1]"
          : background === "secondary"
            ? "bg-[#F6F3ED] border-[rgba(0,0,0,0.06)] text-[#1C1C1C]"
            : "bg-[#F9F7F3] border-[rgba(0,0,0,0.06)] text-[#1C1C1C]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
