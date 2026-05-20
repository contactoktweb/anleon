"use client"

import { CheckCircle2 } from "lucide-react"

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


    </section>
  )
}
