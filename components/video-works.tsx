"use client"

import React, { useRef, useEffect, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

const videos = [
  { src: "/trabajo1.mp4", title: "Letreros 3D y Neón", description: "Fabricación e instalación de letreros luminosos con acrílico y neón flex." },
  { src: "/trabajo2.mp4", title: "Señalización Corporativa", description: "Proyectos de señalización interior y exterior para grandes empresas." },
  { src: "/trabajo3.mp4", title: "Impresión Gran Formato", description: "Rotulación vehicular y fachadas con impresión de alta resolución." }
]

export function VideoWorks() {
  const [playingStates, setPlayingStates] = useState<boolean[]>(videos.map(() => false))
  const [mutedStates, setMutedStates] = useState<boolean[]>(videos.map(() => true))
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    // Attempt to autoplay muted videos on load (many browsers require this to be triggered by interaction, but muted usually works)
    videoRefs.current.forEach((vid, idx) => {
      if (vid) {
        vid.play().then(() => {
          setPlayingStates(prev => {
            const newStates = [...prev]
            newStates[idx] = true
            return newStates
          })
        }).catch(() => {
          // Auto-play was prevented
        })
      }
    })
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
    <section className="py-32 bg-background relative" id="video-trabajos">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Galería Multimedia</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Nuestros Trabajos en <span className="text-primary neon-text">Acción</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
