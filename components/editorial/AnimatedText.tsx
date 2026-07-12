"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  y?: number
  as?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "p"
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  duration = 0.6,
  y = 15,
  as: Element = "div"
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.4 : duration,
        delay,
        ease: [0.215, 0.61, 0.355, 1] as const, // easeOut cubic
      },
    },
  }

  // Choose the motion tag dynamically
  const MotionComponent = motion[Element]

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
    >
      {children}
    </MotionComponent>
  )
}
