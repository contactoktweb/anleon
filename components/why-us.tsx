"use client"

import React, { useRef, useEffect, useState } from "react"
import { Rocket, Atom, Telescope, ShieldCheck, Sparkles } from "lucide-react"

const reasons = [
  {
    number: "01",
    title: "Trayectoria Estelar",
    description: "Más de dos décadas orbitando el éxito, transformando marcas en constelaciones visuales que dominan su industria.",
    icon: Rocket,
  },
  {
    number: "02",
    title: "Calidad Cuántica",
    description: "Empleamos tecnología de punta y materias primas superiores para forjar estructuras que desafían el espacio y el tiempo.",
    icon: Atom,
  },
  {
    number: "03",
    title: "Misión Integral",
    description: "Desde el despegue creativo hasta el alunizaje de la instalación, nuestra tripulación te acompaña en cada fase de la misión.",
    icon: Telescope,
  },
  {
    number: "04",
    title: "Escudo Deflector",
    description: "Protegemos tu inversión con un campo de fuerza: garantía extendida y soporte técnico de rango galáctico continuo.",
    icon: ShieldCheck,
  },
]

export function WhyUs() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (gridRef.current) {
      observer.observe(gridRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* LIGHT Section - Reasons */}
      <div className="relative pt-8 pb-20 bg-white text-zinc-900">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Accent glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-20">
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
                Por qué elegirnos
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-zinc-900">
              La diferencia está en
              <br />
              <span className="text-primary">los detalles</span>
            </h2>
          </div>
          
          {/* Reasons - Horizontal scroll style on mobile, grid on desktop */}
          <div ref={gridRef} className="grid md:grid-cols-2 gap-6 lg:gap-8 overflow-hidden p-4 -m-4">
            {reasons.map((reason, index) => {
              // Determine starting position based on index
              // 0: Top Left, 1: Top Right, 2: Bottom Left, 3: Bottom Right
              let transformClass = ""
              if (!isVisible) {
                if (index === 0) transformClass = "-translate-x-32 -translate-y-32 opacity-0"
                else if (index === 1) transformClass = "translate-x-32 -translate-y-32 opacity-0"
                else if (index === 2) transformClass = "-translate-x-32 translate-y-32 opacity-0"
                else if (index === 3) transformClass = "translate-x-32 translate-y-32 opacity-0"
              } else {
                transformClass = "translate-x-0 translate-y-0 opacity-100"
              }

              return (
                <div 
                  key={reason.number}
                  className={`relative p-8 bg-white border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-none overflow-hidden transition-all duration-1000 ease-out ${transformClass}`}
                >
                {/* HUD Corner Brackets (Static) */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

                {/* Tech Background Grid & Glow */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    {/* Intergalactic Icon Box */}
                    <div className="relative mt-2 ml-2">
                      {/* Outer targeting frame */}
                      <div className="absolute -inset-2 border border-primary/20 border-dashed rounded-none animate-[spin_15s_linear_infinite]" />
                      
                      {/* Core box */}
                      <div className="relative w-14 h-14 bg-gradient-to-br from-primary to-[#0044ff] shadow-[0_0_15px_rgba(0,102,255,0.4)] rounded-none flex items-center justify-center border border-cyan-400/30">
                        <reason.icon className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      </div>
                      
                      {/* Status indicator */}
                      <div className="absolute -bottom-1 -right-1 flex h-3 w-3 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-none h-1.5 w-1.5 bg-cyan-400"></span>
                      </div>
                    </div>

                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-cyan-500">
                    {reason.title}
                  </h3>
                  <div className="w-10 h-1 bg-cyan-400/30 mb-4" />
                  <p className="text-zinc-600 leading-relaxed text-sm font-medium">
                    {reason.description}
                  </p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </div>


    </section>
  )
}
