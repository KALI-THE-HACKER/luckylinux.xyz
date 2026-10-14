"use client"

import React from "react"
import Link from "next/link"
import { Github, ArrowUpRight, ChevronLeft, ChevronRight, Play, Pause, X, Maximize2, Volume2, VolumeX } from "lucide-react"
import { AnimatedText } from "./AnimatedText"
import { cn } from "@/lib/utils"

interface MediaItem {
  url: string
  /** Short label shown in the tab strip */
  caption?: string
}

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
  videoUrlDesktop?: string
  videoUrlMobile?: string
  /** Video-only carousel — takes priority over imageUrl/images */
  mediaItems?: MediaItem[]
}

// ─── Lightbox ────────────────────────────────────────────────────────────────
function VideoLightbox({
  src,
  caption,
  startTime = 0,
  initialMuted = false,
  initialPaused = false,
  onSyncTime,
  onClose,
}: {
  src: string
  caption?: string
  startTime?: number
  initialMuted?: boolean
  initialPaused?: boolean
  onSyncTime?: (time: number) => void
  onClose: (exitTime: number, exitMuted: boolean, exitPaused: boolean) => void
}) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const isInitializedRef = React.useRef(false)

  const initVideo = React.useCallback(() => {
    const v = videoRef.current
    if (!v || isInitializedRef.current) return
    isInitializedRef.current = true

    if (startTime > 0) {
      try {
        v.currentTime = startTime
      } catch {}
    }
    v.muted = initialMuted

    if (!initialPaused) {
      v.play().catch(() => {
        // Fallback to muted if browser blocks unmuted playback
        v.muted = true
        v.play().catch(() => {})
      })
    }
  }, [startTime, initialMuted, initialPaused])

  const handleClose = React.useCallback(() => {
    const v = videoRef.current
    const exitTime = v ? v.currentTime : startTime
    const exitMuted = v ? v.muted : initialMuted
    const exitPaused = v ? v.paused : initialPaused
    onClose(exitTime, exitMuted, exitPaused)
  }, [onClose, startTime, initialMuted, initialPaused])

  // Close on Escape
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [handleClose])

  // Lock body scroll
  React.useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = originalOverflow }
  }, [])

  // Sync if metadata is already available
  React.useEffect(() => {
    const v = videoRef.current
    if (v && v.readyState >= 1) {
      initVideo()
    }
  }, [initVideo])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={handleClose}
    >
      {/* Dialog */}
      <div
        className="relative w-full max-w-6xl mx-4 flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-1">
          {caption && (
            <span className="text-[11px] font-mono uppercase tracking-widest text-white/50">
              {caption}
            </span>
          )}
          <button
            type="button"
            onClick={handleClose}
            className="ml-auto p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video */}
        <div className="relative w-full overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-white/10">
          <video
            ref={videoRef}
            src={src}
            onLoadedMetadata={initVideo}
            onTimeUpdate={() => {
              if (videoRef.current && onSyncTime) {
                onSyncTime(videoRef.current.currentTime)
              }
            }}
            muted={initialMuted}
            playsInline
            loop
            controls
            crossOrigin="anonymous"
            suppressHydrationWarning
            className="w-full h-auto max-h-[85vh] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
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
  images,
  videoUrlDesktop,
  videoUrlMobile,
  mediaItems,
}: ProjectCardProps) {
  const isEven = index % 2 === 0
  const hasMultipleImages = images && images.length > 1
  const hasMediaItems = mediaItems && mediaItems.length > 0

  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [viewMode, setViewMode] = React.useState<"desktop" | "mobile">("desktop")

  // Lightbox state with playback sync
  const [lightboxState, setLightboxState] = React.useState<{
    src: string
    caption?: string
    startTime: number
    initialMuted: boolean
    initialPaused: boolean
  } | null>(null)

  // Mute state — starts muted (required by browser autoplay policy)
  const [isMuted, setIsMuted] = React.useState(true)

  // Refs for carousel video elements
  const videoRefs = React.useRef<Record<number, HTMLVideoElement | null>>({})
  // Ref for active expanded video element (to sync currentTime on close)
  const activeSourceVideoRef = React.useRef<HTMLVideoElement | null>(null)
  const desktopMobileVideoRef = React.useRef<HTMLVideoElement | null>(null)
  const singleVideoRef = React.useRef<HTMLVideoElement | null>(null)
  // Ref for the card container (used by IntersectionObserver)
  const cardRef = React.useRef<HTMLDivElement>(null)

  // ── Viewport detection: unmute + play when ≥40% visible ──────────────────
  React.useEffect(() => {
    if (!hasMediaItems) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (lightboxState) return // Don't interrupt while lightbox is open
          const el = videoRefs.current[currentIndex]
          if (!el) return
          if (entry.isIntersecting) {
            el.muted = false
            el.play().catch(() => {
              // Browser blocked unmuted play — fall back to muted
              el.muted = true
              setIsMuted(true)
              el.play().catch(() => {})
            })
            setIsMuted(false)
          } else {
            el.muted = true
            el.pause()
            setIsMuted(true)
          }
        })
      },
      { threshold: 0.4 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMediaItems, currentIndex, !!lightboxState])

  // Sync mute state to all video elements whenever isMuted changes
  React.useEffect(() => {
    if (!hasMediaItems || !mediaItems) return
    mediaItems.forEach((_, idx) => {
      const el = videoRefs.current[idx]
      if (el) el.muted = isMuted
    })
  }, [isMuted, hasMediaItems, mediaItems])

  // Autoplay/pause per-slide in the mediaItems carousel
  React.useEffect(() => {
    if (!hasMediaItems || !mediaItems) return
    mediaItems.forEach((item, idx) => {
      const el = videoRefs.current[idx]
      if (!el) return
      if (idx === currentIndex) {
        el.currentTime = 0
        el.muted = isMuted
        el.play().catch(() => {})
      } else {
        el.pause()
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, hasMediaItems, mediaItems])

  // Legacy image slideshow autoplay
  React.useEffect(() => {
    if (!hasMultipleImages || !isPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images!.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [hasMultipleImages, isPlaying, images])

  const mediaCount = mediaItems?.length ?? 0

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    const len = hasMediaItems ? mediaCount : images?.length ?? 0
    setCurrentIndex((prev) => (prev + 1) % len)
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    const len = hasMediaItems ? mediaCount : images?.length ?? 0
    setCurrentIndex((prev) => (prev - 1 + len) % len)
  }

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(!isPlaying)
  }

  const openLightbox = (src: string, caption?: string, sourceEl?: HTMLVideoElement | null) => {
    activeSourceVideoRef.current = sourceEl ?? null
    const startTime = sourceEl ? sourceEl.currentTime : 0
    const isPaused = sourceEl ? sourceEl.paused : false
    const muted = sourceEl ? sourceEl.muted : isMuted

    // Pause small video so audio doesn't double
    if (sourceEl) {
      sourceEl.pause()
    }

    setLightboxState({
      src,
      caption,
      startTime,
      initialMuted: muted,
      initialPaused: isPaused,
    })
  }

  const closeLightbox = (exitTime: number, exitMuted: boolean, exitPaused: boolean) => {
    const sourceEl = activeSourceVideoRef.current
    if (sourceEl) {
      try {
        sourceEl.currentTime = exitTime
        sourceEl.muted = exitMuted
        setIsMuted(exitMuted)
        if (!exitPaused) {
          sourceEl.play().catch(() => {
            sourceEl.muted = true
            setIsMuted(true)
            sourceEl.play().catch(() => {})
          })
        }
      } catch (err) {
        console.warn("Could not sync video on lightbox close", err)
      }
    }
    setLightboxState(null)
  }

  const handleSyncTime = (time: number) => {
    const el = activeSourceVideoRef.current
    if (el) {
      el.currentTime = time
    }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    const next = !isMuted
    setIsMuted(next)
    const el = videoRefs.current[currentIndex]
    if (el) {
      el.muted = next
      if (!next) el.play().catch(() => { el.muted = true; setIsMuted(true) })
    }
  }

  return (
    <>
      {/* ── Lightbox ── */}
      {lightboxState && (
        <VideoLightbox
          src={lightboxState.src}
          caption={lightboxState.caption}
          startTime={lightboxState.startTime}
          initialMuted={lightboxState.initialMuted}
          initialPaused={lightboxState.initialPaused}
          onSyncTime={handleSyncTime}
          onClose={closeLightbox}
        />
      )}

      <div ref={cardRef} className={`flex flex-col lg:flex-row items-start gap-12 md:gap-16 py-12 md:py-20 ${isEven ? "" : "lg:flex-row-reverse"}`}>

        {/* ── Visual Showcase ── */}
        <AnimatedText delay={0.2} duration={0.8} y={15} className="w-full lg:w-[55%]">
          <div className="relative group flex flex-col gap-3 p-3 border border-[rgba(0,0,0,0.08)] bg-[#F6F3ED] rounded-md transition-all hover:scale-[1.005] duration-300">

            {hasMediaItems && mediaItems ? (
              /* ── Video-only carousel ───────────────────────────────────── */
              <div className="flex flex-col gap-3 w-full">
                {/* Slide container */}
                <div className="relative w-full overflow-hidden rounded-sm bg-[#0D0D0D]" style={{ minHeight: 300 }}>
                  {mediaItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "absolute inset-0 transition-opacity duration-500 ease-in-out flex items-center justify-center",
                        idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      )}
                    >
                      {/* Clickable expand overlay */}
                      <button
                        type="button"
                        aria-label="Expand video"
                        onClick={() => openLightbox(item.url, item.caption ?? name, videoRefs.current[idx])}
                        className="absolute inset-0 z-20 w-full h-full cursor-pointer group/expand"
                      >
                        {/* Expand hint */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover/expand:opacity-100 transition-opacity duration-200 bg-black/60 backdrop-blur-sm rounded-md px-2.5 py-1.5 flex items-center gap-1.5 pointer-events-none">
                          <Maximize2 className="w-3.5 h-3.5 text-white" />
                          <span className="text-[11px] font-mono text-white uppercase tracking-wider">Expand</span>
                        </div>
                      </button>

                      <video
                        ref={(el) => { videoRefs.current[idx] = el }}
                        src={item.url}
                        muted
                        playsInline
                        loop
                        crossOrigin="anonymous"
                        suppressHydrationWarning
                        className="w-full h-auto object-contain select-none max-h-[520px] pointer-events-none"
                      />
                    </div>
                  ))}
                </div>

                {/* Controls bar */}
                <div className="flex items-center justify-between w-full px-3 py-2 bg-[rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.06)] rounded-xs">
                  {/* Left: nav + label */}
                  <div className="flex items-center gap-1.5">
                    {mediaCount > 1 && (
                      <>
                        <button type="button" onClick={prevSlide} className="text-[#66635F] hover:text-[#1C1C1C] active:scale-90 transition-all p-1 cursor-pointer" aria-label="Previous video">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button type="button" onClick={nextSlide} className="text-[#66635F] hover:text-[#1C1C1C] active:scale-90 transition-all p-1 cursor-pointer" aria-label="Next video">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                    {mediaItems[currentIndex]?.caption && (
                      <span className="text-[11px] font-mono text-[#66635F] uppercase tracking-wider ml-1 truncate max-w-[200px]">
                        {mediaItems[currentIndex].caption}
                      </span>
                    )}
                  </div>

                  {/* Right: mute toggle + dots + expand */}
                  <div className="flex items-center gap-3">
                    {/* Mute / Unmute */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      className={cn(
                        "inline-flex items-center gap-1 text-[11px] font-mono transition-all cursor-pointer border rounded-xs px-2 py-1",
                        isMuted
                          ? "text-[#66635F] border-[rgba(0,0,0,0.08)] hover:text-[#1C1C1C] hover:border-[rgba(0,0,0,0.2)]"
                          : "text-[#B36A2E] border-[#B36A2E]/30 bg-[#B36A2E]/5 hover:bg-[#B36A2E]/10"
                      )}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      <span>{isMuted ? "Unmute" : "Mute"}</span>
                    </button>

                    {mediaCount > 1 && (
                      <div className="flex gap-1.5 items-center">
                        {mediaItems.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx) }}
                            className={cn(
                              "rounded-full transition-all duration-200 cursor-pointer h-2",
                              idx === currentIndex ? "bg-[#B36A2E] w-5" : "bg-[#66635F]/25 w-2 hover:bg-[#66635F]/50"
                            )}
                            aria-label={`Go to video ${idx + 1}`}
                          />
                        ))}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => openLightbox(mediaItems[currentIndex].url, mediaItems[currentIndex].caption ?? name, videoRefs.current[currentIndex])}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-[#66635F] hover:text-[#1C1C1C] transition-colors cursor-pointer border border-[rgba(0,0,0,0.08)] rounded-xs px-2 py-1 hover:border-[rgba(0,0,0,0.2)]"
                      aria-label="Open full view"
                    >
                      <Maximize2 className="w-3 h-3" />
                      Full view
                    </button>
                  </div>
                </div>
              </div>

            ) : videoUrlDesktop && videoUrlMobile ? (
              <div className="flex flex-col gap-3 w-full">
                <div
                  className={cn(
                    "relative w-full overflow-hidden rounded-xs bg-[#0D0D0D] flex items-center justify-center transition-all duration-500 ease-in-out cursor-pointer group/vd",
                    viewMode === "desktop" ? "max-h-[520px]" : "max-h-[750px]"
                  )}
                  onClick={() => openLightbox(viewMode === "desktop" ? videoUrlDesktop : videoUrlMobile, `${name} (${viewMode})`, desktopMobileVideoRef.current)}
                >
                  <video
                    ref={desktopMobileVideoRef}
                    key={viewMode}
                    src={viewMode === "desktop" ? videoUrlDesktop : videoUrlMobile}
                    muted playsInline autoPlay loop
                    crossOrigin="anonymous"
                    suppressHydrationWarning
                    className={cn(
                      "w-full h-auto object-contain select-none transition-all duration-500 ease-in-out",
                      viewMode === "desktop" ? "max-h-[520px]" : "max-h-[750px]"
                    )}
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover/vd:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-white" />
                    <span className="text-[11px] font-mono text-white uppercase tracking-wider">Expand</span>
                  </div>
                </div>
                <div className="flex items-center justify-between w-full px-3 py-2 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.06)] rounded-xs">
                  <span className="text-[11px] font-mono text-[#66635F] uppercase tracking-wider pl-1">Demo Mode</span>
                  <div className="flex bg-[#1C1C1C] rounded-full p-0.5 shadow-sm select-none">
                    <button type="button" onClick={(e) => { e.stopPropagation(); setViewMode("desktop") }}
                      className={cn("px-3 py-1 text-[11px] font-mono rounded-full transition-all duration-200 cursor-pointer",
                        viewMode === "desktop" ? "bg-[#F7F5F1] text-[#1C1C1C] font-semibold" : "text-[rgba(255,255,255,0.6)] hover:text-white"
                      )}>Desktop</button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); setViewMode("mobile") }}
                      className={cn("px-3 py-1 text-[11px] font-mono rounded-full transition-all duration-200 cursor-pointer",
                        viewMode === "mobile" ? "bg-[#F7F5F1] text-[#1C1C1C] font-semibold" : "text-[rgba(255,255,255,0.6)] hover:text-white"
                      )}>Mobile</button>
                  </div>
                </div>
              </div>

            ) : hasMultipleImages ? (
              <div className="relative w-full aspect-[16/12] max-h-[520px] overflow-hidden rounded-xs bg-[#F6F3ED] flex items-center justify-center">
                {images!.map((img, idx) => (
                  <div key={img} className={cn("absolute inset-0 transition-opacity duration-500 ease-in-out", idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0")}>
                    <img src={img} alt={`${name} Slide ${idx + 1}`} className="w-full h-full object-contain object-center select-none" />
                  </div>
                ))}
              </div>

            ) : imageUrl === "placeholder" ? (
              <div className="w-full aspect-[16/12] max-h-[520px] flex flex-col items-center justify-center p-8 bg-[#151515] text-center font-mono select-none rounded-xs">
                <div className="text-[28px] md:text-3xl text-[#B36A2E] animate-pulse mb-3">[ ]</div>
                <span className="text-[12px] uppercase tracking-wider text-[rgba(255,255,255,0.68)]">Mockup currently compiling...</span>
                <p className="text-[10px] text-[#66635F] mt-2 max-w-xs leading-normal">AI agents are busy polishing the pixels. Interface preview will render soon.</p>
              </div>

            ) : imageUrl.includes("drive.google.com") ? (
              <div className="w-full aspect-[16/10.5] max-h-[520px] overflow-hidden rounded-xs bg-black">
                <iframe src={imageUrl} className="w-full h-full border-0" allow="autoplay; encrypted-media" allowFullScreen title={`${name} Overview Video`} />
              </div>

            ) : imageUrl.endsWith(".webm") || imageUrl.endsWith(".mp4") ? (
              <div
                className="w-full overflow-hidden rounded-xs relative cursor-pointer group/sv"
                onClick={() => openLightbox(imageUrl, name, singleVideoRef.current)}
              >
                <video ref={singleVideoRef} src={imageUrl} muted playsInline autoPlay loop crossOrigin="anonymous" suppressHydrationWarning className="w-full h-auto object-cover object-center max-h-[520px] select-none" />
                <div className="absolute top-3 right-3 opacity-0 group-hover/sv:opacity-100 transition-opacity bg-black/60 backdrop-blur-sm rounded-md px-2.5 py-1.5 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                  <span className="text-[11px] font-mono text-white uppercase tracking-wider">Expand</span>
                </div>
              </div>

            ) : (
              <div className="w-full overflow-hidden rounded-xs">
                <img src={imageUrl} alt={`${name} Interface Mockup`} className="w-full h-auto object-cover object-center max-h-[520px] select-none" />
              </div>
            )}

            {/* Legacy controls bar (images slideshow only) */}
            {!hasMediaItems && hasMultipleImages && (
              <div className="flex items-center justify-between w-full px-3 py-2 bg-[rgba(0,0,0,0.02)] border border-[rgba(0,0,0,0.06)] rounded-xs">
                <div className="flex items-center gap-3">
                  <button type="button" onClick={prevSlide} className="text-[#66635F] hover:text-[#1C1C1C] active:scale-95 transition-all p-1 cursor-pointer" aria-label="Previous Slide">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button type="button" onClick={togglePlay} className="text-[#66635F] hover:text-[#1C1C1C] active:scale-95 transition-all p-1 cursor-pointer" aria-label={isPlaying ? "Pause Slideshow" : "Start Slideshow"}>
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                  <button type="button" onClick={nextSlide} className="text-[#66635F] hover:text-[#1C1C1C] active:scale-95 transition-all p-1 cursor-pointer" aria-label="Next Slide">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex gap-1.5 items-center">
                  {images!.map((_, idx) => (
                    <button key={idx} type="button" onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx) }}
                      className={cn("w-2 h-2 rounded-full transition-all cursor-pointer", idx === currentIndex ? "bg-[#B36A2E] w-4" : "bg-[#66635F]/20")}
                      aria-label={`Go to slide ${idx + 1}`} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </AnimatedText>

        {/* ── Project Details ── */}
        <AnimatedText delay={0.3} duration={0.8} y={15} className="w-full lg:w-[45%] space-y-6">
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
            <h3 className="text-3xl md:text-4xl text-[#1C1C1C] font-normal leading-tight">{name}</h3>
          </div>

          <p className="text-[16px] md:text-[17px] text-[#66635F] font-light leading-relaxed">{description}</p>

          <div className="space-y-4 pt-4 border-t border-[rgba(0,0,0,0.06)]">
            <div>
              <span className="text-[11px] uppercase font-mono tracking-wider text-[#66635F] block mb-1">Key Engineering Outcome</span>
              <p className="text-[14px] text-[#1C1C1C] font-light italic">{outcome}</p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[12px] font-mono text-[#66635F] bg-[#F6F3ED] border border-[rgba(0,0,0,0.06)] rounded-xs">{tag}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4">
            {liveUrl && (
              <Link href={liveUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[14px] font-medium text-[#1C1C1C] hover:text-[#B36A2E] transition-colors">
                Launch Service <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}
            {githubUrl && (
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[14px] font-medium text-[#66635F] hover:text-[#1C1C1C] transition-colors">
                <Github className="w-4 h-4" /> Source Code
              </Link>
            )}
          </div>
        </AnimatedText>
      </div>
    </>
  )
}
