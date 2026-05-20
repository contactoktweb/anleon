"use client"

import React, { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowLeftRight, Sparkles } from "lucide-react"

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [titleVisible, setTitleVisible] = useState(false)

  // ── True spider-web animated background ─────────────────────────────
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const NODE_COUNT = 60
    const MAX_DIST   = 380 // Large distance = big, wide irregular shapes
    let   animId: number

    const CYAN = { r: 6,  g: 182, b: 212 }   // #06b6d4
    const BLUE = { r: 0,  g: 102, b: 255 }   // #0066ff

    type Node = { x: number; y: number; vx: number; vy: number }
    // Initialize nodes spreading across potentially wider screens
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * Math.max(canvas.width, window.innerWidth),
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        
        // Bounce off edges with a larger margin so they don't bunch up visibly
        if (n.x < -100 || n.x > canvas.width + 100)  n.vx *= -1
        if (n.y < -100 || n.y > canvas.height + 100) n.vy *= -1
      }

      // Draw irregular jagged connections (edges)
      ctx.lineWidth = 0.7 // balanced line width
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distSq = dx * dx + dy * dy
          
          if (distSq < MAX_DIST * MAX_DIST) {
            const dist = Math.sqrt(distSq)
            // Balanced fade out
            const alpha = (1 - dist / MAX_DIST) * 0.35
            const color = (i + j) % 3 === 0 ? BLUE : CYAN
            
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(${color.r},${color.g},${color.b},${alpha})`
            ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  useEffect(() => {
    const cleanup = initCanvas()
    return cleanup
  }, [initCanvas])
  // ────────────────────────────────────────────────────────────────────

  // Title drop-from-sky animation via IntersectionObserver
  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const width = rect.width
    const position = Math.max(0, Math.min(100, (x / width) * 100))
    setSliderPosition(position)
  }

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX)
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX)

  return (
    <section className="relative py-20 bg-white text-zinc-900 overflow-hidden" id="transformacion">
      {/* Animated spider-web canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-12">
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
            <span className="text-xs text-zinc-600 font-semibold uppercase tracking-[0.2em] relative z-10">
              Antes & Después
            </span>
          </div>
          <h2
            ref={titleRef}
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-zinc-900"
            aria-label="Nuestras Transformaciones"
          >
            {["Nuestras", "Transformaciones"].map((word, i) => (
              <span
                key={word}
                className="inline-block mr-[0.25em] transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${i * 150}ms`,
                  opacity: titleVisible ? 1 : 0,
                  transform: titleVisible ? 'translateY(0)' : 'translateY(-90px)'
                }}
              >
                {word}
              </span>
            ))}
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Descubre el antes y después de nuestros proyectos. Desliza el control para ver la diferencia y el impacto de nuestro trabajo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative select-none group border border-zinc-200">
          <div 
            ref={containerRef}
            className="relative w-full overflow-hidden cursor-ew-resize"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* Image After (Background - Dictates container height) */}
            <div className="relative w-full">
              <img 
                src="/fachada2.webp" 
                alt="Fachada después de la remodelación" 
                className="w-full h-auto block pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-md shadow-sm z-10">
                Después
              </div>
            </div>

            {/* Image Before (Foreground, clipped) */}
            <div 
              className="absolute inset-0 w-full h-full"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <img 
                src="/fachada1.webp" 
                alt="Fachada antes de la remodelación" 
                className="absolute inset-0 w-full h-full object-fill pointer-events-none"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-md shadow-sm">
                Antes
              </div>
            </div>

            {/* Slider Handle Divider */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_10px_rgba(0,0,0,0.5)]"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110 border border-neutral-200">
                <ArrowLeftRight className="w-5 h-5 text-neutral-600" />
              </div>
            </div>

            {/* Overlay to handle accessible sliding via range input */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              aria-label="Porcentaje de comparación de imagen"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
