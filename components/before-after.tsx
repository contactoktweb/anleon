"use client"

import React, { useState, useRef } from "react"
import Image from "next/image"
import { ArrowLeftRight } from "lucide-react"

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

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
    <section className="py-20 bg-muted/30" id="transformacion">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Nuestras Transformaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre el antes y después de nuestros proyectos. Desliza el control para ver la diferencia y el impacto de nuestro trabajo.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl relative select-none group border border-border">
          <div 
            ref={containerRef}
            className="relative w-full overflow-hidden cursor-ew-resize"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* Image After (Background - Dictates container height) */}
            <div className="relative w-full">
              <img 
                src="/fachada2.jpg" 
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
                src="/fachada1.jpg" 
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
