"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
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
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Animated neon particles */}
      <NeonParticles />
      
      {/* Subtle gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />

      {/* Grid lines */}
      <div className="absolute inset-0">
        <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent" />
        <div className="absolute right-[30%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent" />
        <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative w-full max-w-7xl mx-auto px-6">
        
        {/* Bento-style layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-center min-h-[80vh] py-20">
          
          {/* Left column - Main content */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-3 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
                Disponibles para proyectos
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9]">
                <span className="block text-foreground">Creamos</span>
                <span className="block text-foreground">impacto</span>
                <span className="block text-primary">visual</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transformamos ideas en experiencias visuales memorables. 
              Especialistas en publicidad exterior y rotulación desde hace más de 20 años.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 h-14 text-base font-medium group"
              >
                <Link href="#contacto">
                  Comenzar proyecto
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 h-14 text-base border-border hover:bg-card hover:border-primary/50"
              >
                <Link href="#portafolio">
                  Ver trabajos
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Feature cards */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            
            {/* Card 1 - Large */}
            <div className="col-span-2 group relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-8 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <span className="text-6xl md:text-7xl font-bold text-primary">20+</span>
                <div className="w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
              </div>
              <p className="text-muted-foreground">
                Años creando soluciones publicitarias que destacan y perduran
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-6 hover:border-primary/40 transition-all duration-300">
              <span className="text-4xl font-bold text-foreground block mb-3">500+</span>
              <p className="text-sm text-muted-foreground">Proyectos exitosos</p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-6 hover:border-primary/40 transition-all duration-300">
              <span className="text-4xl font-bold text-foreground block mb-3">100%</span>
              <p className="text-sm text-muted-foreground">Calidad garantizada</p>
            </div>

            {/* Services row */}
            <div className="col-span-2 flex flex-wrap gap-2">
              {["Neón LED", "Avisos", "Litografía", "Gran Formato"].map((service) => (
                <span 
                  key={service}
                  className="px-4 py-2 text-xs font-medium text-muted-foreground bg-card border border-border rounded-full hover:border-primary/40 hover:text-foreground transition-colors cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="hidden md:flex items-center gap-6">
            <span>Medellín, Colombia</span>
            <span className="w-1 h-1 rounded-full bg-primary" />
            <span>info@anleon.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-border" />
            <span className="text-xs tracking-wider">SCROLL</span>
          </div>
        </div>
      </div>
    </section>
  )
}
