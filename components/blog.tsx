"use client"

import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const posts = [
  {
    title: "Innovación y Artesanía en Neón",
    excerpt: "Descubre cómo las nuevas tecnologías están revolucionando la fabricación de letreros de neón personalizados.",
    date: "25 Abr, 2026",
    category: "Tecnología",
    image: "/images/news-neon-tech.webp",
  },
  {
    title: "El Impacto del Gran Formato",
    excerpt: "Por qué la impresión a gran escala sigue siendo la mejor opción para captar la atención en espacios comerciales.",
    date: "18 Abr, 2026",
    category: "Consejos",
    image: "/images/news-large-format.webp",
  },
  {
    title: "Tendencias Publicidad Exterior 2026",
    excerpt: "Desde estéticas cyberpunk hasta la integración digital: lo que dominará las calles y fachadas este año.",
    date: "10 Abr, 2026",
    category: "Tendencias",
    image: "/images/news-outdoor-trends.webp",
  },
]

export function Blog() {
  return (
    <section id="blog" className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Neon accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_10px_rgba(0,102,255,0.8)]" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium mb-4 text-xs tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Nuestro Blog
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Noticias y
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400"> artículos</span>
            </h2>
          </div>
          <Link 
            href="#" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group animate-fade-in-up" style={{ animationDelay: '0.1s' }}
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary" />
          </Link>
        </div>
        
        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg group-hover:border-primary/30 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.15)] transition-all duration-500">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs text-white font-medium shadow-sm">
                    {post.category}
                  </span>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              </div>
              
              {/* Content */}
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3 font-mono">
                <Calendar className="w-3.5 h-3.5 text-primary/70" />
                <span>{post.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                Leer artículo completo
                <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
