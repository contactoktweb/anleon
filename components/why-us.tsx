"use client"

import { Target, Eye, Heart, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

const reasons = [
  {
    number: "01",
    title: "Experiencia comprobada",
    description: "Más de 20 años transformando marcas en referentes visuales de su industria.",
  },
  {
    number: "02",
    title: "Calidad premium",
    description: "Materiales de primera y procesos de fabricación con los más altos estándares.",
  },
  {
    number: "03",
    title: "Servicio integral",
    description: "Desde el diseño hasta la instalación, te acompañamos en cada paso del proceso.",
  },
  {
    number: "04",
    title: "Garantía total",
    description: "Respaldamos cada proyecto con garantía extendida y soporte técnico continuo.",
  },
]

const values = [
  { icon: Target, title: "Misión", description: "Impulsar el éxito de nuestros clientes con soluciones publicitarias innovadoras." },
  { icon: Eye, title: "Visión", description: "Ser la agencia referente en publicidad visual, reconocida por nuestra excelencia." },
  { icon: Heart, title: "Valores", description: "Compromiso, calidad, innovación y respeto en cada proyecto." },
]

export function WhyUs() {
  return (
    <section className="relative overflow-hidden">
      {/* DARK Section - Reasons */}
      <div className="relative py-32 bg-background">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Accent glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Por qué elegirnos</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              La diferencia está en
              <br />
              <span className="neon-text text-primary">los detalles</span>
            </h2>
          </div>
          
          {/* Reasons - Horizontal scroll style on mobile, grid on desktop */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={reason.number}
                className="group relative p-8 bg-card border border-border rounded-3xl hover:border-primary/30 transition-all duration-500 card-hover"
              >
                {/* Large number background */}
                <span className="absolute top-6 right-6 text-8xl font-bold text-border/50 group-hover:text-primary/20 transition-colors">
                  {reason.number}
                </span>
                
                <div className="relative">
                  {/* Checkmark */}
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* LIGHT Section - Mission, Vision, Values */}
      <div className="relative py-32 bg-foreground">
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Values in horizontal layout */}
          <div className="grid lg:grid-cols-3 gap-0 lg:divide-x divide-background/10">
            {values.map((value, index) => (
              <div key={value.title} className="group p-8 lg:p-12 text-center lg:text-left">
                <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-6 group-hover:bg-primary transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-primary group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-background mb-3">{value.title}</h3>
                <p className="text-background/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* DARK Section - Stats Banner */}
      <div className="relative py-20 bg-background overflow-hidden">
        {/* Animated border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Stats in a row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-16">
              <div className="text-center lg:text-left">
                <div className="text-5xl md:text-6xl font-bold text-primary mb-1">20+</div>
                <div className="text-muted-foreground">Años</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center lg:text-left">
                <div className="text-5xl md:text-6xl font-bold text-foreground mb-1">500+</div>
                <div className="text-muted-foreground">Proyectos</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-border" />
              <div className="text-center lg:text-left">
                <div className="text-5xl md:text-6xl font-bold text-foreground mb-1">200+</div>
                <div className="text-muted-foreground">Clientes</div>
              </div>
            </div>
            
            {/* CTA */}
            <Link 
              href="#contacto"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all"
            >
              <span className="text-foreground font-medium">Únete a ellos</span>
              <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  )
}
