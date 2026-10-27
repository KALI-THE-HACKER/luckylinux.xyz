"use client"

import React, { useState, useEffect } from "react"
import { X, Download, ExternalLink, Loader2 } from "lucide-react"
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

interface ResumePreviewProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

const RESUME_URL = "https://cdn.luckylinux.dev/portfolio-assets/lucky-resume-1.pdf"

export function ResumePreview({ isOpen, onOpenChange }: ResumePreviewProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [iframeSrc, setIframeSrc] = useState<string>("")

  useEffect(() => {
    if (isOpen) {
      // Add a small delay to show loading state, then set iframe src
      const timer = setTimeout(() => {
        setIframeSrc(RESUME_URL)
        setIsLoading(false)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setIframeSrc("")
      setIsLoading(true)
    }
  }, [isOpen])

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = RESUME_URL
    link.download = "Lucky_Verma_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b border-[rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-3">
            <Download className="w-4 h-4 text-[#B36A2E]" />
            <h3 className="font-serif text-xl text-[#1C1C1C] font-normal">Resume Preview</h3>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-[#66635F] hover:text-[#B36A2E] hover:bg-[#F6F3ED] transition-colors"
              aria-label="Open in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={RESUME_URL}
              download="Lucky_Verma_Resume.pdf"
              className="p-2 rounded-md text-[#66635F] hover:text-[#B36A2E] hover:bg-[#F6F3ED] transition-colors"
              aria-label="Download resume"
            >
              <Download className="w-4 h-4" />
            </a>
            <DialogClose asChild>
              <button
                className="p-2 rounded-md text-[#66635F] hover:text-[#B36A2E] hover:bg-[#F6F3ED] transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </DialogClose>
          </div>
        </div>

        <div className="relative h-[calc(100%-80px)]">
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-8 h-8 animate-spin text-[#B36A2E]" />
            </div>
          ) : (
            <iframe
              src={iframeSrc}
              className="w-full h-full border-0"
              title="Lucky Verma Resume"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
