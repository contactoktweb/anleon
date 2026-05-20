"use client"

import { Check, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Básico",
    description: "Para emprendedores",
    features: [
      "Diseño de aviso básico",
      "Fabricación estándar",
      "1 revisión de diseño",
      "Instalación incluida",
      "Garantía 6 meses",
    ],
    featured: false,
  },
  {
    name: "Avanzado",
    description: "Para empresas en crecimiento",
    features: [
      "Diseño personalizado",
      "Fabricación premium",
      "3 revisiones de diseño",
      "Instalación profesional",
      "Iluminación LED",
      "Garantía 1 año",
      "Soporte prioritario",
    ],
    featured: true,
  },
  {
    name: "Corporativo",
    description: "Solución completa",
    features: [
      "Diseño exclusivo",
      "Fabricación de alta gama",
      "Revisiones ilimitadas",
      "Instalación VIP",
      "Sistema de iluminación avanzado",
      "Garantía 2 años",
      "Soporte 24/7",
      "Mantenimiento incluido",
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="precios" className="relative py-20 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Precios</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Planes adaptados
            <span className="text-gradient"> a ti</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada plan incluye diseño, fabricación e instalación profesional.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.featured 
                  ? "bg-gradient-to-b from-primary/20 to-primary/5 border-2 border-primary/50 scale-[1.02]" 
                  : "bg-card border border-border hover:border-primary/30"
              } card-hover`}
            >
              {/* Featured badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-xs font-medium rounded-full shadow-lg shadow-primary/25">
                    <Star className="w-3 h-3 fill-current" />
                    Popular
                  </span>
                </div>
              )}
              
              {/* Neon glow for featured */}
              {plan.featured && (
                <div className="absolute inset-0 rounded-2xl animate-pulse-glow opacity-30" />
              )}
              
              <div className="relative">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-muted-foreground text-sm">Solicita cotización personalizada</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.featured ? "bg-primary" : "bg-primary/20"
                      }`}>
                        <Check className={`w-3 h-3 ${plan.featured ? "text-white" : "text-primary"}`} />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="#contacto"
                  className={`w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl font-medium transition-all ${
                    plan.featured 
                      ? "neon-button bg-primary text-white hover:bg-primary/90" 
                      : "bg-secondary text-foreground hover:bg-secondary/80 border border-border hover:border-primary/30"
                  }`}
                >
                  Cotizar ahora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
