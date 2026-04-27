"use client"

import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "Tendencias en Publicidad Exterior 2024",
    excerpt: "Descubre las últimas tendencias en señalización y publicidad exterior que están revolucionando el mercado.",
    date: "15 Mar, 2024",
    category: "Tendencias",
    gradient: "from-blue-600/80 to-cyan-500/80",
  },
  {
    title: "Beneficios de los Avisos LED",
    excerpt: "Los avisos LED ofrecen visibilidad 24/7 y bajo consumo energético. Conoce todas sus ventajas.",
    date: "10 Mar, 2024",
    category: "Consejos",
    gradient: "from-primary/80 to-blue-500/80",
  },
  {
    title: "Cómo Elegir el Aviso Perfecto",
    excerpt: "Guía completa para seleccionar el tipo de aviso ideal para tu marca y ubicación.",
    date: "5 Mar, 2024",
    category: "Guías",
    gradient: "from-indigo-600/80 to-primary/80",
  },
]

export function Blog() {
  return (
    <section id="blog" className="relative py-32 bg-secondary overflow-hidden">
      {/* Neon accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Blog</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Noticias y
              <span className="text-gradient"> artículos</span>
            </h2>
          </div>
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient}`} />
                
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                    backgroundSize: '16px 16px'
                  }} />
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                    {post.category}
                  </span>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Content */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Leer más
                <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
