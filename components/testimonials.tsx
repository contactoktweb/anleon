"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    content: "Excelente servicio y calidad. Mi aviso en 3D quedó espectacular, todos mis clientes lo comentan. Totalmente recomendados.",
    name: "Andrea Torres",
    role: "Propietaria de Restaurante",
    rating: 5,
  },
  {
    content: "Llevamos trabajando con Anleon más de 5 años. La calidad de impresión es impecable y siempre cumplen con los tiempos acordados.",
    name: "Jean Paul Tellez",
    role: "Gerente Comercial",
    rating: 5,
  },
  {
    content: "Profesionales de primera. Hicieron toda la señalización de nuestras oficinas y el resultado superó nuestras expectativas.",
    name: "Tom Gilmore",
    role: "Director de Marketing",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonios" className="relative py-32 bg-foreground overflow-hidden">
      {/* Neon accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Testimonios</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-background">
            Lo que dicen nuestros
            <span className="text-primary"> clientes</span>
          </h2>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-background border border-border rounded-2xl card-hover overflow-hidden"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  &quot;{testimonial.content}&quot;
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                    <span className="text-primary font-semibold group-hover:text-white transition-colors">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-primary transition-colors">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
