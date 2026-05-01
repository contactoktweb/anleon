"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

function NeonParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating orbs */}
      <div className="neon-orb" style={{ left: '10%', top: '20%', animationDelay: '0s' }} />
      <div className="neon-orb" style={{ left: '80%', top: '30%', animationDelay: '2s' }} />
      <div className="neon-orb" style={{ left: '25%', top: '70%', animationDelay: '4s' }} />
      <div className="neon-orb" style={{ left: '70%', top: '60%', animationDelay: '1s' }} />
      <div className="neon-orb" style={{ left: '50%', top: '40%', animationDelay: '3s' }} />
      <div className="neon-orb neon-orb-lg" style={{ left: '15%', top: '50%', animationDelay: '1.5s' }} />
      <div className="neon-orb neon-orb-lg" style={{ left: '85%', top: '70%', animationDelay: '3.5s' }} />
      
      {/* Shooting beams */}
      <div className="shooting-beam" style={{ top: '25%', animationDelay: '0s' }} />
      <div className="shooting-beam" style={{ top: '50%', animationDelay: '4s' }} />
      <div className="shooting-beam" style={{ top: '75%', animationDelay: '8s' }} />
    </div>
  )
}

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Animated neon particles */}
      <NeonParticles />
      
      {/* Intense Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 z-10 pt-20 pb-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[80vh]">
          
          {/* Left column - Main Typography */}
          <div className="col-span-1 lg:col-span-6 space-y-8 z-20">
            
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-3 animate-fade-in-up bg-zinc-900/50 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.2)]">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs text-zinc-300 font-semibold uppercase tracking-[0.2em]">
                Diseño & Fabricación Premium
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]">
                <span className="block text-white drop-shadow-md">Creamos</span>
                <span className="block text-white drop-shadow-md">impacto</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 filter drop-shadow-[0_0_15px_rgba(0,102,255,0.8)] pb-2">
                  visual.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed animate-fade-in-up font-light" style={{ animationDelay: '0.2s' }}>
              Transformamos marcas en experiencias visuales memorables. Especialistas en <strong className="text-white font-medium">publicidad exterior, letreros 3D y rotulación</strong> con más de 20 años destacando en el mercado.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(0,102,255,0.6)] rounded-full px-8 h-14 text-base font-bold transition-all duration-300 group border border-primary/50"
              >
                <Link href="#contacto">
                  Cotizar mi proyecto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-14 text-base text-white border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <Link href="#portafolio">
                  Explorar trabajos
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Spectacular Visual Collage */}
          <div className="col-span-1 lg:col-span-6 relative h-[500px] md:h-[600px] lg:h-[700px] w-full animate-fade-in-up flex justify-center items-center mt-10 lg:mt-0" style={{ animationDelay: '0.4s' }}>
            
            {/* Ambient Glow behind images */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-cyan-500/20 rounded-full blur-[80px] scale-75 animate-pulse-glow" />

            {/* Main Center Image */}
            <div 
              className="absolute z-20 w-[65%] md:w-[55%] aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(0,102,255,0.3)] animate-float" 
              style={{ animationDuration: '6s' }}
            >
              <Image 
                src="/images/proyecto-letrero-luminoso-1.jpg" 
                alt="Letrero Luminoso Destacado" 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="bg-primary/20 border border-primary/50 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-2 shadow-[0_0_10px_rgba(0,102,255,0.5)]">
                  OBRA DESTACADA
                </div>
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight">Avisos Luminosos 3D</h3>
              </div>
            </div>
            
            {/* Back Right Image */}
            <div 
              className="absolute z-10 w-[50%] md:w-[45%] aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl opacity-90 animate-float translate-x-[45%] -translate-y-[15%] rotate-6" 
              style={{ animationDuration: '8s', animationDelay: '1s' }}
            >
              <Image 
                src="/images/proyecto-aviso-nube.jpg" 
                alt="Proyecto Creativo Anleon" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-[#0066ff]/20 mix-blend-overlay" />
            </div>

            {/* Front Left Floating Badge/Image */}
            <div 
              className="absolute z-30 w-[45%] md:w-[40%] aspect-[4/3] rounded-[1.5rem] overflow-hidden border border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.6)] animate-float -translate-x-[50%] translate-y-[30%] -rotate-3" 
              style={{ animationDuration: '7s', animationDelay: '2s' }}
            >
              <Image 
                src="/images/proyecto-banner-gran-formato.jpg" 
                alt="Impresión en Gran Formato" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-2 border border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  <span className="text-white font-bold text-xl">20+</span>
                </div>
                <span className="text-white font-semibold text-sm drop-shadow-md">Años de Experiencia</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-sm text-zinc-500 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="hidden md:flex items-center gap-6">
            <span className="font-mono uppercase tracking-wider text-xs">Medellín, Colombia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,102,255,0.8)]" />
            <span className="font-mono uppercase tracking-wider text-xs hover:text-white transition-colors cursor-pointer">info@anleon.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-12 h-px bg-zinc-700" />
            <span className="text-[10px] tracking-[0.3em] font-bold text-zinc-400">SCROLL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
