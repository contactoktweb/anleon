"use client"

import React, { useRef, useEffect, useState } from "react"
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react"

const videos = [
  { src: "/trabajo1.mp4", title: "Letreros 3D y Neón", description: "Fabricación e instalación de letreros luminosos con acrílico y neón flex." },
  { src: "/trabajo2.mp4", title: "Señalización Corporativa", description: "Proyectos de señalización interior y exterior para grandes empresas." },
  { src: "/trabajo3.mp4", title: "Impresión Gran Formato", description: "Rotulación vehicular y fachadas con impresión de alta resolución." }
]

export function VideoWorks() {
  const [playingStates, setPlayingStates] = useState<boolean[]>(videos.map(() => false))
  const [mutedStates, setMutedStates] = useState<boolean[]>(videos.map(() => true))
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleVisible, setTitleVisible] = useState(false)

  useEffect(() => {
    // Attempt to autoplay muted videos on load
    videoRefs.current.forEach((vid, idx) => {
      if (vid) {
        vid.play().then(() => {
          setPlayingStates(prev => {
            const newStates = [...prev]
            newStates[idx] = true
            return newStates
          })
        }).catch(() => {})
      }
    })
  }, [])

  // Title drop-from-sky animation via IntersectionObserver
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTitleVisible(entry.isIntersecting)
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index]
    if (!video) return

    if (video.paused) {
      video.play()
      setPlayingStates(prev => {
        const newStates = [...prev]
        newStates[index] = true
        return newStates
      })
    } else {
      video.pause()
      setPlayingStates(prev => {
        const newStates = [...prev]
        newStates[index] = false
        return newStates
      })
    }
  }

  const toggleMute = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const video = videoRefs.current[index]
    if (!video) return

    video.muted = !video.muted
    setMutedStates(prev => {
      const newStates = [...prev]
      newStates[index] = video.muted
      return newStates
    })
  }

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="video-trabajos">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          {/* Cosmic HUD Badge */}
          <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent group overflow-hidden relative mb-4">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
            
            {/* Cosmic shine */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:animate-cosmic-shine" />
            
            {/* Blinking orbital dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
            </span>
            
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="text-xs text-zinc-300 font-semibold uppercase tracking-[0.2em] relative z-10">
              Galería Multimedia
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 overflow-hidden"
            aria-label="Nuestros Trabajos en Acción"
          >
            {["Nuestros", "Trabajos", "en"].map((word, i) => (
              <span
                key={word}
                className="inline-block mr-[0.3em] transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${i * 120}ms`,
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible ? 'translateY(0)' : 'translateY(-80px)'
                }}
              >
                {word}
              </span>
            ))}
            {" "}
            <span
              className="inline-block text-primary neon-text transition-all duration-700 ease-out"
              style={{
                transitionDelay: `360ms`,
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(-80px)'
              }}
            >
              Acción
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explora de cerca la calidad, los detalles y el impacto visual de nuestros proyectos terminados a través de estos videos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {videos.map((video, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl aspect-[9/16] md:aspect-[4/5] cursor-pointer"
              onClick={() => togglePlay(idx)}
            >
              <video 
                ref={el => {
                  if (el) {
                    videoRefs.current[idx] = el;
                  }
                }}
                src={video.src}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted={mutedStates[idx]}
                loop
                playsInline
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none transition-opacity duration-300 group-hover:opacity-80" />
              
              {/* Play/Pause Center Button (Shows on pause or initial load) */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${playingStates[idx] ? 'opacity-0' : 'opacity-100'}`}>
                <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center backdrop-blur-md shadow-lg border border-white/20">
                  <Play className="w-8 h-8 ml-1" />
                </div>
              </div>

              {/* Bottom Content Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end mb-3">
                  <h3 className="text-2xl font-bold text-white leading-tight">{video.title}</h3>
                  <button 
                    onClick={(e) => toggleMute(idx, e)}
                    className="p-2.5 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-primary/80 transition-colors pointer-events-auto"
                    aria-label={mutedStates[idx] ? "Unmute video" : "Mute video"}
                  >
                    {mutedStates[idx] ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-white/80 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
