"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Eye } from "lucide-react"

const categories = ["Todos", "Avisos", "Gran Formato", "Letreros Luminosos", "Instalaciones"]

// Categorize the images reasonably
const projects = [
  { src: "/images/proyecto-letrero-luminoso-1.webp", title: "Letrero Luminoso 1", category: "Letreros Luminosos", type: "Instalación exterior" },
  { src: "/images/proyecto-letrero-luminoso-2.webp", title: "Letrero Luminoso 2", category: "Letreros Luminosos", type: "Instalación interior" },
  { src: "/images/proyecto-aviso-nube.webp", title: "Aviso Nube", category: "Avisos", type: "Aviso temático" },
  { src: "/images/proyecto-aviso-1.webp", title: "Aviso Corporativo 1", category: "Avisos", type: "Fabricación e instalación" },
  { src: "/images/proyecto-aviso-2.webp", title: "Aviso Corporativo 2", category: "Avisos", type: "Fabricación e instalación" },
  { src: "/images/proyecto-aviso-4.webp", title: "Aviso Corporativo 4", category: "Avisos", type: "Instalaciones" },
  { src: "/images/proyecto-aviso-6.webp", title: "Aviso Corporativo 6", category: "Avisos", type: "Letrero acrílico" },
  { src: "/images/proyecto-aviso-11.webp", title: "Aviso Corporativo 11", category: "Avisos", type: "Letrero acrílico" },
  { src: "/images/proyecto-aviso-17.webp", title: "Instalación 17", category: "Instalaciones", type: "Trabajo en terreno" },
  { src: "/images/proyecto-aviso-19.webp", title: "Aviso 19", category: "Avisos", type: "Letras 3D" },
  { src: "/images/proyecto-aviso-25.webp", title: "Aviso 25", category: "Avisos", type: "Letras 3D" },
  { src: "/images/proyecto-aviso-26.webp", title: "Aviso 26", category: "Avisos", type: "Fabricación en acrílico" },
  { src: "/images/proyecto-aviso-46.webp", title: "Aviso 46", category: "Avisos", type: "Aviso iluminado" },
  { src: "/images/proyecto-aviso-47.webp", title: "Aviso 47", category: "Avisos", type: "Aviso iluminado" },
  { src: "/images/proyecto-aviso-57.webp", title: "Instalación 57", category: "Instalaciones", type: "Montaje" },
  { src: "/images/proyecto-aviso-59.webp", title: "Instalación 59", category: "Instalaciones", type: "Montaje" },
  { src: "/images/proyecto-aviso-62.webp", title: "Aviso 62", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-aviso-66.webp", title: "Aviso 66", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-aviso-80.webp", title: "Aviso 80", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-banner-gran-formato.webp", title: "Banner Gran Formato", category: "Gran Formato", type: "Impresión alta calidad" },

  // AVISOS ADICIONALES
  { src: "/avisos/1a214ab5-af14-4032-b8fe-2682bc3d66f2-261x300.jpg.webp", title: "Aviso Volumétrico", category: "Avisos", type: "Letrero en acrílico" },
  { src: "/avisos/20240801_115617-225x300.jpg.webp", title: "Letrero de Tienda", category: "Avisos", type: "Aviso comercial" },
  { src: "/avisos/20240823_111053-225x300.jpg.webp", title: "Aviso Luminoso LED", category: "Avisos", type: "Caja de luz" },
  { src: "/avisos/Anleon-Horizontal-300x169.jpg.webp", title: "Luminoso Anleon", category: "Avisos", type: "Letrero retroiluminado" },
  { src: "/avisos/IMG-20221110-WA0077.jpg.webp", title: "Letras de Canal", category: "Avisos", type: "Letras 3D iluminadas" },
  { src: "/avisos/IMG-20221116-WA0143-copia.jpg.webp", title: "Aviso Exterior Premium", category: "Avisos", type: "Fachada comercial" },
  { src: "/avisos/IMG-20230920-WA0168.jpg.webp", title: "Letrero de Acrílico", category: "Avisos", type: "Aviso corporativo" },
  { src: "/avisos/IMG-20230921-WA0124.jpg.webp", title: "Iluminación Neon LED", category: "Avisos", type: "Aviso personalizado" },
  { src: "/avisos/IMG-20230925-WA0073.jpg.webp", title: "Aviso de Letras 3D", category: "Avisos", type: "Acrílico moldeado" },
  { src: "/avisos/IMG-20231019-WA0209.jpg.webp", title: "Letrero de Fachada", category: "Avisos", type: "Instalación en altura" },
  { src: "/avisos/IMG-20240210-WA0079.jpg.webp", title: "Caja Luminosa Comercial", category: "Avisos", type: "Aviso de doble cara" },
  { src: "/avisos/WhatsApp-Image-2025-01-10-at-4.42.47-PM-300x300.webp", title: "Placa Corporativa", category: "Avisos", type: "Aviso en acrílico" },
  { src: "/avisos/WhatsApp-Image-2025-01-10-at-4.50.41-PM-300x258.webp", title: "Neon Flex Diseñado", category: "Avisos", type: "Decoración interior" },

  // INSTALACIONES ADICIONALES
  { src: "/fachada1.webp", title: "Montaje Fachada Exterior", category: "Instalaciones", type: "Instalación completa" },
  { src: "/fachada2.webp", title: "Estructura Exterior Local", category: "Instalaciones", type: "Montaje de estructura" },
  { src: "/gran-formato/fACHADA-1-768x507.jpg.webp", title: "Aviso de Entrada", category: "Instalaciones", type: "Fachada e iluminación" },
  { src: "/gran-formato/fACHADA-2-768x516.jpg.webp", title: "Letrero de Altura", category: "Instalaciones", type: "Montaje exterior" },

  // GRAN FORMATO ADICIONALES
  { src: "/gran-formato/Anleon-Horizontal-1-1536x864.jpg.webp", title: "Valla Publicitaria", category: "Gran Formato", type: "Banner gran escala" },
  { src: "/gran-formato/Anleon-Horizontal-1536x864.jpg.webp", title: "Estructura de Valla", category: "Gran Formato", type: "Montaje metálico" },
  { src: "/gran-formato/Anleon-Horizontal-2.webp", title: "Decoración en Vinilo", category: "Gran Formato", type: "Vinilo adhesivo pared" },
  { src: "/gran-formato/Anleon-Horizontal-3-1536x864.webp", title: "Señalización de Seguridad", category: "Gran Formato", type: "Avisos industriales" },
  { src: "/gran-formato/Anleon-Horizontal-4.webp", title: "Vidriera con Vinilo", category: "Gran Formato", type: "Vinilo microperforado" },
  { src: "/gran-formato/Anleon-Horizontal-7.webp", title: "Impresión de Gran Escala", category: "Gran Formato", type: "Banner publicitario" },
  { src: "/gran-formato/AnleonProductos-4-1024x576.webp", title: "Vinilos Corporativos", category: "Gran Formato", type: "Instalación en vidrio" },
  { src: "/images/news-large-format.webp", title: "Impresión de Banner", category: "Gran Formato", type: "Publicidad exterior" },
  { src: "/images/news-outdoor-trends.webp", title: "Valla de Carretera", category: "Gran Formato", type: "Instalación en terreno" }
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
