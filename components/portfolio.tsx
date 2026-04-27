"use client"

import { useState } from "react"
import { ArrowUpRight, Eye } from "lucide-react"

const categories = ["Todos", "Avisos", "Gran Formato", "Litografía", "Neón"]

const projects = [
  { 
    title: "Centro Comercial Plaza", 
    category: "Avisos", 
    type: "Letras 3D iluminadas",
    gradient: "from-blue-600/80 to-cyan-500/80",
  },
  { 
    title: "Restaurante El Sabor", 
    category: "Neón", 
    type: "Neón flex personalizado",
    gradient: "from-primary/80 to-blue-500/80",
  },
  { 
    title: "Edificio Corporativo", 
    category: "Gran Formato", 
    type: "Señalética completa",
    gradient: "from-indigo-600/80 to-primary/80",
  },
  { 
    title: "Festival de Música", 
    category: "Gran Formato", 
    type: "Vallas y banners",
    gradient: "from-cyan-500/80 to-blue-600/80",
  },
  { 
    title: "Empresa Constructora", 
    category: "Litografía", 
    type: "Papelería corporativa",
    gradient: "from-blue-500/80 to-indigo-600/80",
  },
  { 
    title: "Hotel Premium", 
    category: "Avisos", 
    type: "Fachada luminosa LED",
    gradient: "from-primary/80 to-cyan-400/80",
  },
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
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Portafolio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Proyectos
              <span className="text-gradient"> destacados</span>
            </h2>
          </div>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm rounded-xl border transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/25" 
                    : "border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer card-hover"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              {/* Neon glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                boxShadow: 'inset 0 0 60px rgba(0, 102, 255, 0.3)'
              }} />
              
              {/* View icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <Eye className="w-4 h-4 text-white" />
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.type}
                  </p>
                </div>
              </div>
              
              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
