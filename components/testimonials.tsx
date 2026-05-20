"use client"

import { Star, Quote } from "lucide-react"
import React from "react"

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
  {
    content: "El diseño y la instalación de los vinilos decorativos fueron perfectos. Transformaron por completo el ambiente de nuestra tienda.",
    name: "Camila Sánchez",
    role: "Emprendedora",
    rating: 5,
  },
  {
    content: "Su atención al detalle es impresionante. Nos ayudaron desde el concepto hasta la instalación final del aviso luminoso.",
    name: "Roberto Gómez",
    role: "Gerente de Operaciones",
    rating: 5,
  }
]

export function Testimonials() {
  // Duplicate array to create a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section id="testimonios" className="relative py-20 bg-[#050505] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(0,102,255,0.8)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-primary font-bold mb-4 tracking-[0.2em] text-sm uppercase px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
            Voces de Éxito
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white drop-shadow-lg">
            El Impacto de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Nuestro Trabajo</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light">
            No solo fabricamos anuncios, construimos la imagen de tu marca. Esto es lo que opinan quienes ya confiaron en nosotros.
          </p>
        </div>
      </div>
        
      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full pb-10 flex overflow-hidden mask-edges">
        {/* Left/Right fading edges */}
        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee hover:[animation-play-state:paused] flex gap-6 md:gap-8 px-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="w-[300px] md:w-[400px] shrink-0 p-8 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-3xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,102,255,0.3)] group relative"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all" />
              
              <Quote className="w-10 h-10 text-primary/40 mb-6 group-hover:text-primary transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                ))}
              </div>
              
              <p className="text-zinc-300 text-lg leading-relaxed mb-8 font-light italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 p-[2px]">
                  <div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
