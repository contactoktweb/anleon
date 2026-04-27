"use client"

import { ArrowUpRight, Box, Lightbulb, FileText, Maximize2, Signpost, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Lightbulb,
    title: "Avisos Luminosos",
    description: "Iluminación LED de alta eficiencia para máxima visibilidad 24/7.",
    number: "01",
    featured: true,
  },
  {
    icon: Box,
    title: "Avisos 3D",
    description: "Letras y logos volumétricos con acabados premium que destacan tu marca.",
    number: "02",
    featured: false,
  },
  {
    icon: Zap,
    title: "Neón Flex",
    description: "Letreros con efecto neón moderno, versátil y bajo consumo energético.",
    number: "03",
    featured: true,
  },
  {
    icon: Maximize2,
    title: "Gran Formato",
    description: "Vallas, murales y banners de gran escala con colores vibrantes.",
    number: "04",
    featured: false,
  },
  {
    icon: FileText,
    title: "Litografía",
    description: "Impresión de alta calidad para materiales corporativos y promocionales.",
    number: "05",
    featured: false,
  },
  {
    icon: Signpost,
    title: "Señalización",
    description: "Sistemas de señalética profesional para espacios comerciales.",
    number: "06",
    featured: false,
  },
]

export function Services() {
  return (
    <section id="servicios" className="relative py-32 bg-foreground overflow-hidden">
      {/* This is a LIGHT section - inverted colors */}
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 border border-background/5 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-background/5 rounded-full" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header with unique layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-7">
            <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Servicios</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background">
              Soluciones que
              <br />
              <span className="text-primary">brillan</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-background/60 text-lg max-w-md">
              Cada proyecto es una oportunidad de hacer que tu marca destaque. Descubre nuestras especialidades.
            </p>
          </div>
        </div>
        
        {/* Services - Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {services.map((service, index) => (
            <Link 
              key={service.title}
              href="#contacto"
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                service.featured 
                  ? 'bg-background p-8 md:p-10 lg:row-span-2' 
                  : 'bg-background/5 p-6 md:p-8 hover:bg-background'
              }`}
            >
              {/* Number */}
              <span className={`absolute top-6 right-6 text-7xl font-bold transition-colors duration-300 ${
                service.featured 
                  ? 'text-primary/10 group-hover:text-primary/20' 
                  : 'text-background/10 group-hover:text-primary/20'
              }`}>
                {service.number}
              </span>
              
              <div className="relative h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  service.featured
                    ? 'bg-primary text-foreground group-hover:animate-pulse-glow'
                    : 'bg-background/10 text-background group-hover:bg-primary group-hover:text-foreground'
                }`}>
                  <service.icon className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`text-xl md:text-2xl font-semibold mb-3 transition-colors ${
                    service.featured 
                      ? 'text-foreground group-hover:text-primary' 
                      : 'text-background group-hover:text-foreground'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm md:text-base leading-relaxed transition-colors ${
                    service.featured 
                      ? 'text-muted-foreground' 
                      : 'text-background/60 group-hover:text-muted-foreground'
                  }`}>
                    {service.description}
                  </p>
                </div>
                
                {/* Arrow */}
                <div className={`mt-6 flex items-center gap-2 transition-all duration-300 ${
                  service.featured 
                    ? 'text-primary' 
                    : 'text-background/40 group-hover:text-primary'
                }`}>
                  <span className="text-sm font-medium">Ver más</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
              
              {/* Hover glow for featured cards */}
              {service.featured && (
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              )}
            </Link>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 md:p-10 bg-background rounded-3xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">?</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">¿No encuentras lo que buscas?</h3>
              <p className="text-muted-foreground">Contáctanos para soluciones personalizadas</p>
            </div>
          </div>
          <Link 
            href="#contacto"
            className="neon-button inline-flex items-center gap-2 px-8 py-4 bg-primary text-foreground rounded-xl font-medium hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            Cotizar proyecto
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
