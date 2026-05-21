"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Eye, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

// Categorize the images reasonably
const projects = [
  { src: "/images/proyecto-letrero-luminoso-1.webp", title: "Letrero Luminoso 1", category: "Avisos", type: "Instalación exterior" },
  { src: "/images/proyecto-letrero-luminoso-2.webp", title: "Letrero Luminoso 2", category: "Avisos", type: "Instalación interior" },
  { src: "/images/proyecto-aviso-nube.webp", title: "Aviso Nube", category: "Avisos", type: "Aviso temático" },
  { src: "/images/proyecto-aviso-1.webp", title: "Aviso Corporativo 1", category: "Avisos", type: "Fabricación e instalación" },
  { src: "/images/proyecto-aviso-2.webp", title: "Aviso Corporativo 2", category: "Avisos", type: "Fabricación e instalación" },
  { src: "/images/proyecto-aviso-4.webp", title: "Aviso Corporativo 4", category: "Avisos", type: "Instalaciones" },
  { src: "/images/proyecto-aviso-6.webp", title: "Aviso Corporativo 6", category: "Avisos", type: "Letrero acrílico" },
  { src: "/images/proyecto-aviso-11.webp", title: "Aviso Corporativo 11", category: "Avisos", type: "Letrero acrílico" },
  { src: "/images/proyecto-aviso-17.webp", title: "Instalación 17", category: "Avisos", type: "Trabajo en terreno" },
  { src: "/images/proyecto-aviso-19.webp", title: "Aviso 19", category: "Avisos", type: "Letras 3D" },
  { src: "/images/proyecto-aviso-25.webp", title: "Aviso 25", category: "Avisos", type: "Letras 3D" },
  { src: "/images/proyecto-aviso-26.webp", title: "Aviso 26", category: "Avisos", type: "Fabricación en acrílico" },
  { src: "/images/proyecto-aviso-46.webp", title: "Aviso 46", category: "Avisos", type: "Aviso iluminado" },
  { src: "/images/proyecto-aviso-47.webp", title: "Aviso 47", category: "Avisos", type: "Aviso iluminado" },
  { src: "/images/proyecto-aviso-57.webp", title: "Instalación 57", category: "Avisos", type: "Montaje" },
  { src: "/images/proyecto-aviso-59.webp", title: "Instalación 59", category: "Avisos", type: "Montaje" },
  { src: "/images/proyecto-aviso-62.webp", title: "Aviso 62", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-aviso-66.webp", title: "Aviso 66", category: "Avisos", type: "Letrero comercial" },
  { src: "/images/proyecto-aviso-80.webp", title: "Aviso 80", category: "Avisos", type: "Letrero comercial" },


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

  // AVISOS (Fachadas e Instalaciones)
  { src: "/fachada1.webp", title: "Montaje Fachada Exterior", category: "Avisos", type: "Instalación completa" },
  { src: "/fachada2.webp", title: "Estructura Exterior Local", category: "Avisos", type: "Montaje de estructura" },
  { src: "/gran-formato/fACHADA-1-768x507.jpg.webp", title: "Aviso de Entrada", category: "Avisos", type: "Fachada e iluminación" },
  { src: "/gran-formato/fACHADA-2-768x516.jpg.webp", title: "Letrero de Altura", category: "Avisos", type: "Montaje exterior" },

  // GRAN FORMATO
  { src: "/gran-formato/AnleonProductos-1-1024x576.webp", title: "Impresión Banner 13 Oz", category: "Gran Formato", type: "Impresión de alta calidad" },
  { src: "/gran-formato/Anleon-Horizontal-2.webp", title: "Arañas y estructuras", category: "Gran Formato", type: "Estructuras portátiles" },
  { src: "/gran-formato/AnleonProductos-2-1024x576.webp", title: "Vinilo de automóviles", category: "Gran Formato", type: "Impresión de alta calidad" },
  { src: "/gran-formato/AnleonProductos-4-1024x576.webp", title: "Impresión Vinilo", category: "Gran Formato", type: "Impresión de alta calidad" },

  // LITOGRAFIA
  { src: "/litografia/lit_1-8.jpeg", title: "Talonarios", category: "Litografía", type: "Impresión offset" },
  { src: "/litografia/lit_1-10.jpeg", title: "Tarjetas corporativas", category: "Litografía", type: "Tarjetas de presentación" },
  { src: "/litografia/lit_1-9.jpeg", title: "Volantes promocionales", category: "Litografía", type: "Publicidad masiva" },
  { src: "/litografia/lit_1-12.jpeg", title: "Impresión Comercial", category: "Litografía", type: "Formatos impresos" }
]

// Categories hardcoded to strictly match the requested order
const categories = ["Avisos", "Litografía", "Gran Formato", "Otros", "Todos"]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Avisos")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)
  const [lightboxTitle, setLightboxTitle] = useState<string>("")
  
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
  }

  return (
    <section id="portafolio" className="relative py-20 bg-secondary overflow-hidden">
      {/* Background decoration */}
      <style>{`
        @keyframes shimmer-text {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-6 z-10">
        {/* Header */}
        <div className="flex flex-col gap-8 mb-12">
          <div>
            {/* Cosmic HUD Badge */}
            <div className="relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent group overflow-hidden relative mb-4">
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-400 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              
              {/* Cosmic shine */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent -translate-x-full group-hover:animate-cosmic-shine" />
              
              {/* Blinking orbital dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
              </span>
              
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs text-zinc-300 font-semibold uppercase tracking-[0.2em] relative z-10">
                Portafolio
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Nuestros
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0066ff 0%, #00ccff 30%, #ffffff 50%, #00ccff 70%, #0066ff 100%)',
                  backgroundSize: '200% auto',
                  animation: 'shimmer-text 3s linear infinite'
                }}
              > Proyectos</span>
            </h2>
          </div>
          
        </div>
        
        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`relative px-5 py-2 md:px-8 md:py-2.5 text-xs md:text-sm font-mono font-bold uppercase tracking-widest transition-all duration-300 border ${
                  isActive 
                    ? 'bg-primary/10 border-primary text-white shadow-[0_0_20px_rgba(0,102,255,0.4)]' 
                    : 'bg-black/30 backdrop-blur-sm border-white/10 text-zinc-400 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5'
                }`}
              >
                {/* HUD Corner Accents for active state */}
                {isActive && (
                  <>
                    <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-cyan-400" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-cyan-400" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-cosmic-shine pointer-events-none" />
                  </>
                )}
                {cat}
              </button>
            )
          })}
        </div>
        
        {/* Holographic 3D Carousel */}
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center perspective-[2000px] mt-12 overflow-hidden">
          {filteredProjects.map((project, index) => {
            // Calculate relative position
            let relativeIndex = index - currentIndex;
            if (relativeIndex > Math.floor(filteredProjects.length / 2)) {
              relativeIndex -= filteredProjects.length;
            } else if (relativeIndex < -Math.floor(filteredProjects.length / 2)) {
              relativeIndex += filteredProjects.length;
            }

            // Only render items close to the center for performance and visuals
            if (Math.abs(relativeIndex) > 3) return null;

            const isActive = relativeIndex === 0;
            
            // Positioning logic based on index
            let transform = `translate3d(0, 0, 0) scale(1)`;
            let zIndex = 50;
            let opacity = 1;
            
            if (!isActive) {
              const sign = Math.sign(relativeIndex);
              const absIndex = Math.abs(relativeIndex);
              // Shift horizontally, push back in Z, rotate slightly
              const translateX = sign * (150 + absIndex * 80);
              const translateZ = -absIndex * 250;
              const rotateY = -sign * 35; // Fold inwards like a book
              
              transform = `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg)`;
              zIndex = 50 - absIndex;
              opacity = Math.max(0, 1 - absIndex * 0.3);
            }

            return (
              <div 
                key={`${project.src}-${index}`}
                className={`absolute w-[280px] sm:w-[320px] md:w-[400px] lg:w-[480px] aspect-[4/5] transition-all duration-700 ease-out cursor-pointer ${isActive ? 'shadow-[0_0_50px_rgba(0,102,255,0.4)]' : ''}`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transformStyle: 'preserve-3d'
                }}
                onClick={() => {
                  if (relativeIndex > 0) nextSlide();
                  if (relativeIndex < 0) prevSlide();
                }}
              >
                {/* Frame wrapper */}
                <div className={`w-full h-full relative rounded-xl overflow-hidden bg-zinc-950 border transition-colors duration-500 flex flex-col group ${isActive ? 'border-primary/50' : 'border-white/10'}`}>
                  
                  {/* Holographic glowing borders when active */}
                  {isActive && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-cyan-500/10 mix-blend-overlay" />
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
                      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
                      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#06b6d4]" />
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_10px_#0066ff]" />
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative flex-grow w-full overflow-hidden bg-black">
                    <Image 
                      src={project.src}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-1000 ${isActive ? 'group-hover:scale-105' : ''}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Dark overlay for inactive */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-black/60 transition-opacity duration-700" />
                    )}
                    {/* View icon when active & hovered */}
                    {isActive && (
                       <button
                         onClick={(e) => { e.stopPropagation(); setLightboxSrc(project.src); setLightboxTitle(project.title); }}
                         className="absolute top-4 right-4 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 border border-white/20 z-30 hover:bg-white/20 cursor-pointer"
                         aria-label="Ver imagen completa"
                       >
                         <Eye className="w-5 h-5 text-white" />
                       </button>
                    )}
                  </div>

                  {/* Tech Data Bar at bottom */}
                  <div className={`relative p-5 border-t transition-all duration-500 z-30 ${isActive ? 'bg-gradient-to-b from-zinc-950 to-zinc-900 border-primary/30' : 'bg-zinc-950 border-white/10'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`inline-block px-2.5 py-1 border backdrop-blur-md rounded text-[10px] font-mono uppercase tracking-widest transition-colors duration-500 ${isActive ? 'bg-primary/20 border-primary/30 text-primary-foreground' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                        {project.category}
                      </span>
                      {isActive && (
                        <span className="font-mono text-xs text-primary animate-pulse">
                          [{String(index + 1).padStart(2, '0')}/{String(filteredProjects.length).padStart(2, '0')}]
                        </span>
                      )}
                    </div>
                    <h3 className={`font-bold line-clamp-1 transition-all duration-500 ${isActive ? 'text-2xl text-white' : 'text-lg text-zinc-500'}`}>
                      {project.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-10 mt-2 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                      <p className="text-zinc-400 text-sm font-light truncate">
                        {project.type}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )
          })}

          {/* Navigation Controls */}
          {filteredProjects.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                aria-label="Anterior proyecto"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-white/10 bg-black/50 backdrop-blur flex items-center justify-center text-white hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-400/10 transition-all duration-300 group shadow-[0_0_15px_rgba(0,0,0,0.5)]"
                aria-label="Siguiente proyecto"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}


        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxSrc(null)}
              className="absolute -top-12 right-0 text-white/70 hover:text-white text-sm font-mono uppercase tracking-widest flex items-center gap-2 transition-colors"
              aria-label="Cerrar"
            >
              [ESC] Cerrar ✕
            </button>
            {/* HUD corners */}
            <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-cyan-400 pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-primary pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-primary pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-cyan-400 pointer-events-none" />
            {/* Image */}
            <div className="relative w-full max-h-[80vh] overflow-hidden">
              <Image
                src={lightboxSrc}
                alt={lightboxTitle}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Title bar */}
            <div className="mt-4 flex items-center gap-3">
              <span className="w-4 h-[1px] bg-cyan-500" />
              <p className="text-white font-bold tracking-wider text-sm uppercase">{lightboxTitle}</p>
              <span className="w-4 h-[1px] bg-cyan-500" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
