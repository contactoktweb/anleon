"use client"

import React, { useRef, useEffect, useState } from "react"
import { Target, Eye, Heart, Sparkles } from "lucide-react"

const values = [
  {
    number: "01",
    title: "Cumplidos",
    description: "Entregamos cada proyecto en el tiempo acordado. Tu deadline es nuestra prioridad.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Experiencia",
    description: "Dos décadas perfeccionando el arte de la publicidad visual con resultados excepcionales.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Instalación",
    description: "Equipo profesional para la instalación segura y precisa de todos nuestros productos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
]

const missionVisionValues = [
  { icon: Target, title: "Misión", description: "Impulsar el éxito de nuestros clientes con soluciones publicitarias innovadoras." },
  { icon: Eye, title: "Visión", description: "Ser la agencia referente en publicidad visual, reconocida por nuestra excelencia." },
  { icon: Heart, title: "Valores", description: "Compromiso, calidad, innovación y respeto en cada proyecto." },
]

function HudCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative p-8 bg-zinc-950/40 border border-transparent select-none overflow-hidden">
      <div className="absolute -inset-px bg-gradient-to-r from-primary/30 to-cyan-500/30 opacity-100 blur-[1px]" />
      <div className="absolute inset-px bg-zinc-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_0)] bg-[size:12px_12px] opacity-100" />
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-cyan-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-cyan-400 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary group-hover:w-4 group-hover:h-4 transition-all duration-300" />
      <div className="relative z-10 flex flex-col justify-between h-full">
        {children}
      </div>
    </div>
  )
}

export function About() {
  const topGridRef = useRef<HTMLDivElement>(null)
  const bottomGridRef = useRef<HTMLDivElement>(null)
  const [topVisible, setTopVisible] = useState(false)
  const [bottomVisible, setBottomVisible] = useState(false)

  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }

    const topObserver = new IntersectionObserver(([entry]) => {
      setTopVisible(entry.isIntersecting)
    }, observerOptions)

    const bottomObserver = new IntersectionObserver(([entry]) => {
      setBottomVisible(entry.isIntersecting)
    }, observerOptions)

    if (topGridRef.current) topObserver.observe(topGridRef.current)
    if (bottomGridRef.current) bottomObserver.observe(bottomGridRef.current)

    return () => {
      topObserver.disconnect()
      bottomObserver.disconnect()
    }
  }, [])

  return (
    <section id="nosotros" className="relative py-20 bg-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="relative max-w-[1440px] mx-auto px-6">

        {/* Section Header - same layout as other sections */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            {/* Cosmic HUD Badge */}
            <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent group overflow-hidden mb-4">
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:animate-cosmic-shine" />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs text-zinc-300 font-semibold uppercase tracking-[0.2em] relative z-10">
                Sobre Nosotros
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Materializando tus
              <span className="text-gradient"> sueños </span>
              desde 2004
            </h2>
          </div>

          <div className="lg:pt-8">
            <div className="relative p-6 bg-zinc-950/40 border-l-2 border-primary backdrop-blur-sm shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)]">
              {/* Telemetry profile tag */}
              <div className="absolute -top-3 right-4 bg-zinc-900 border border-zinc-850 px-2 py-0.5 text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                [SYS.ANLEON]
              </div>
              <div className="space-y-4">
                <p className="text-lg text-zinc-200 leading-relaxed font-light">
                  Somos una agencia especializada en soluciones de <span className="text-primary font-medium">publicidad visual</span>. Combinamos creatividad con experiencia técnica para transformar tu visión en realidad.
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed font-light">
                  Desde <span className="text-cyan-400 font-medium">avisos luminosos</span> hasta <span className="text-cyan-400 font-medium">impresión de gran formato</span>, cada proyecto refleja nuestro compromiso con la calidad, la puntualidad y la satisfacción del cliente.
                </p>
              </div>
            </div>
          </div>
        </div>



        {/* Values Grid - full width 3 columns */}
        <div ref={topGridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 overflow-hidden pb-4">
          {values.map((value, idx) => (
            <div
              key={value.number}
              className={`transition-all duration-1000 ease-out ${
                topVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <HudCard>
                <div className="flex justify-between items-start mb-6">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40 group-hover:border-cyan-400 group-hover:animate-[spin_10s_linear_infinite] transition-all" />
                    <div className="text-primary relative z-10 flex items-center justify-center">
                      {value.icon}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                    [SYS.{value.number}]
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-3 bg-cyan-500 inline-block opacity-100" />
                    {value.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {value.description}
                  </p>
                </div>
              </HudCard>
            </div>
          ))}
        </div>



        {/* Horizontal pipeline connector */}
        <div className="relative mb-6 hidden sm:flex items-center justify-between px-[16.5%]">
          <div className="absolute inset-x-[16.5%] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-primary" />
          {missionVisionValues.map((_, idx) => (
            <div key={idx} className="relative z-10 flex h-4 w-4 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_6px_#06b6d4]" />
            </div>
          ))}
        </div>

        {/* Mission / Vision / Values Grid - full width 3 columns */}
        <div ref={bottomGridRef} className="grid sm:grid-cols-3 gap-6 overflow-hidden pt-4">
          {missionVisionValues.map((item, idx) => (
            <div
              key={item.title}
              className={`transition-all duration-1000 ease-out ${
                bottomVisible ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <HudCard>
                <div className="flex justify-between items-start mb-6">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40 group-hover:border-cyan-400 group-hover:animate-[spin_10s_linear_infinite] transition-all" />
                    <div className="text-primary relative z-10 flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest bg-zinc-900 px-2 py-0.5 border border-zinc-800">
                    [COR.{String(idx + 1).padStart(2, '0')}]
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1 h-3 bg-cyan-500 inline-block opacity-100" />
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </HudCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
