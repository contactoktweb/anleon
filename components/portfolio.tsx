"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Eye } from "lucide-react"

const categories = ["Todos", "Avisos", "Gran Formato", "Letreros Luminosos", "Instalaciones"]

// Categorize the 20 images reasonably
const projects = [
  { src: "/images/proyecto-letrero-luminoso-1.jpg", title: "Letrero Luminoso 1", category: "Letreros Luminosos", type: "Instalación exterior" },
  { src: "/images/proyecto-letrero-luminoso-2.jpg", title: "Letrero Luminoso 2", category: "Letreros Luminosos", type: "Instalación interior" },
  { src: "/images/proyecto-aviso-nube.jpg", title: "Aviso Nube", category: "Avisos", type: "Aviso temático" },
  { src: "/images/proyecto-aviso-1.jpeg", title: "Aviso Corporativo 1", category: "Avisos", type: "Fabricación e instalación" },
  { src: "/images/proyecto-aviso-2.jpg", title: "Aviso Corporativo 2", category: "Avisos", type: "Fabricación e instalación" },
  { src: "/images/proyecto-aviso-4.jpg", title: "Aviso Corporativo 4", category: "Avisos", type: "Instalaciones" },
  { src: "/images/proyecto-aviso-6.jpg", title: "Aviso Corporativo 6", category: "Avisos", type: "Letrero acrílico" },
  { src: "/images/proyecto-aviso-11.jpg", title: "Aviso Corporativo 11", category: "Avisos", type: "Letrero acrílico" },
  { src: "/images/proyecto-aviso-17.jpg", title: "Instalación 17", category: "Instalaciones", type: "Trabajo en terreno" },
  { src: "/images/proyecto-aviso-19.jpg", title: "Aviso 19", category: "Avisos", type: "Letras 3D" },
  { src: "/images/proyecto-aviso-25.jpg", title: "Aviso 25", category: "Avisos", type: "Letras 3D" },
  { src: "/images/proyecto-aviso-26.jpg", title: "Aviso 26", category: "Avisos", type: "Fabricación en acrílico" },
  { src: "/images/proyecto-aviso-46.jpg", title: "Aviso 46", category: "Avisos", type: "Aviso iluminado" },
  { src: "/images/proyecto-aviso-47.jpg", title: "Aviso 47", category: "Avisos", type: "Aviso iluminado" },
  { src: "/images/proyecto-aviso-57.jpg", title: "Instalación 57", category: "Instalaciones", type: "Montaje" },
  { src: "/images/proyecto-aviso-59.jpg", title: "Instalación 59", category: "Instalaciones", type: "Montaje" },
  { src: "/images/proyecto-aviso-62.jpg", title: "Aviso 62", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-aviso-66.jpg", title: "Aviso 66", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-aviso-80.jpg", title: "Aviso 80", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-banner-gran-formato.jpg", title: "Banner Gran Formato", category: "Gran Formato", type: "Impresión alta calidad" },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portafolio" className="relative py-32 bg-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="inline-block text-primary font-bold mb-4 tracking-[0.2em] text-sm uppercase px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10">
              Portafolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Nuestros
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400"> Proyectos</span>
            </h2>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full border transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white border-primary shadow-[0_0_15px_rgba(0,102,255,0.5)]" 
                    : "border-border text-zinc-400 hover:text-white hover:border-primary/50 bg-zinc-900/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 border border-white/10"
            >
              {/* Actual Image */}
              <Image 
                src={project.src}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              {/* Neon glow border on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                boxShadow: 'inset 0 0 0 2px rgba(0, 102, 255, 0.5), inset 0 0 20px rgba(0, 102, 255, 0.3)'
              }} />
              
              {/* View icon */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 border border-white/20">
                <Eye className="w-5 h-5 text-white" />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 backdrop-blur-md rounded-full text-xs text-primary-foreground font-semibold mb-3 shadow-[0_0_10px_rgba(0,102,255,0.3)]">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">{project.title}</h3>
                  <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-1">
                    {project.type}
                  </p>
                </div>
              </div>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                <ArrowUpRight className="w-6 h-6 text-primary drop-shadow-[0_0_5px_rgba(0,102,255,0.8)]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
