import React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  as?: React.ElementType
}

export function Container({ children, className, as: Component = "div", ...props }: ContainerProps) {
  return (
    <Component className={cn("max-w-5xl mx-auto px-6 md:px-12 w-full", className)} {...props}>
      {children}
    </Component>
  )
}
