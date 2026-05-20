"use client"

import { useState, useEffect, useRef } from "react"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = [
  { id: "avisos", label: "Avisos" },
  { id: "litografia", label: "Litografía" },
  { id: "gran-formato", label: "Gran Formato" },
  { id: "otros", label: "Otros" }
]

const services = [
  // AVISOS
  { title: "Avisos en 3D", description: "Letras y logos volumétricos en acrílico, metal o madera con acabados premium.", category: "avisos", image: "/avisos/Letra_SinLuz.jpg.webp" },
  { title: "Nubes Encantoneradas", description: "Avisos con siluetas personalizadas, cantos de aluminio iluminados y luz LED.", category: "avisos", image: "/avisos/IMG-20230925-WA0077.jpg.webp" },
  { title: "Caja de Luz con Apliques", description: "Cajas iluminadas con acrílico y apliques en relieve para una mayor tridimensionalidad.", category: "avisos", image: "/avisos/IMG_20230829_173014-300x225.jpg.webp" },
  { title: "Doble Cara con Luz", description: "Avisos salientes a doble cara con iluminación LED para locales comerciales.", category: "avisos", image: "/avisos/IMG-20221014-WA0104.jpg.webp" },
  { title: "Avisos Exteriores con Base Alocubond", description: "Letreros de alta durabilidad montados sobre paneles de aluminio compuesto.", category: "avisos", image: "/avisos/IMG-20220216-WA0102.jpg.webp" },
  { title: "Neón Flex", description: "Diseños y frases personalizadas con iluminación neón de bajo consumo.", category: "avisos", image: "/images/news-neon-tech.webp" },
  // LITOGRAFIA
  { title: "Talonarios", description: "Talonarios membretados e impresos para facturas, recibos, comandas y cuentas de cobro.", category: "litografia", image: "/litografia/talonarios.webp" },
  { title: "Plegables", description: "Folletos plegables (dípticos, trípticos) de alta calidad para presentar tus productos o servicios.", category: "litografia", image: "/litografia/plegables.webp" },
  // GRAN FORMATO
  { title: "Vinilos Decorativos", description: "Vinilos de alta resolución para decoración de interiores y exteriores.", category: "gran-formato", image: "/gran-formato/AnleonProductos-1-1024x576.webp" },
  { title: "Pendones", description: "Pendones publicitarios en diferentes materiales y medidas, ideales para eventos y promociones.", category: "gran-formato", image: "/gran-formato/Anleon-Horizontal-2.webp" },
  { title: "Señalización", description: "Señalética corporativa y de seguridad para oficinas, centros comerciales e industrias.", category: "gran-formato", image: "/gran-formato/Anleon-Horizontal-3-1536x864.webp" },
  { title: "Acrílicos", description: "Piezas en acrílico cortadas con láser, buzones, tableros y exhibidores.", category: "gran-formato", image: "/gran-formato/AnleonProductos-2-1024x576.webp" },
  // OTROS
  { title: "Tarjetas con Filtro UV", description: "Tarjetas de presentación con brillo UV parcial para resaltar logotipos y detalles especiales.", category: "otros", image: "/otros/tarjetas_uv.webp" },
  { title: "Volantes por 1.000", description: "Paquete de volantes impresos a full color en papel propalcote, ideales para campañas publicitarias.", category: "otros", image: "/otros/volantes_mil.webp" },
  { title: "Cartas de menú", description: "Diseño e impresión de menús y cartas para restaurantes y cafeterías, resistentes y duraderos.", category: "otros", image: "/otros/cartas_menu.webp" },
  { title: "Promocionales", description: "Artículos publicitarios personalizados como bolígrafos, tazas, libretas y más para tu marca.", category: "otros", image: "/otros/promocionales.webp" }
]

export function Services() {
  const [activeTab, setActiveTab] = useState("todos")

  const filteredServices = activeTab === "todos" 
    ? services 
    : services.filter(s => s.category === activeTab)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95')
            entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    const cards = document.querySelectorAll('.scroll-card')
    cards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [filteredServices])

  const buzzRef = useRef<HTMLDivElement>(null)
  const [isBuzzing, setIsBuzzing] = useState(false)

  useEffect(() => {
    const buzzObserver = new IntersectionObserver(
      ([entry]) => {
        setIsBuzzing(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )
    if (buzzRef.current) buzzObserver.observe(buzzRef.current)
    return () => buzzObserver.disconnect()
  }, [])

  return (
    <section id="servicios" className="py-32 bg-slate-100 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative horizontal lines scattered in background */}
      <div className="absolute left-16 top-1/4 w-24 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent pointer-events-none" />
      <div className="absolute right-16 top-2/3 w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent pointer-events-none" />
      <div className="absolute left-1/3 bottom-24 w-16 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent pointer-events-none" />

      {/* Animated lateral lines & Buzz */}
      <style>{`
        @keyframes beam-up {
          0%   { transform: translateY(100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        @keyframes beam-down {
          0%   { transform: translateY(-100%); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes buzz {
          0% { transform: translateX(0); }
          10% { transform: translateX(-4px) rotate(-1deg); }
          20% { transform: translateX(4px) rotate(1deg); }
          30% { transform: translateX(-4px) rotate(-1deg); }
          40% { transform: translateX(4px) rotate(1deg); }
          50% { transform: translateX(-2px) rotate(-0.5deg); }
          60% { transform: translateX(2px) rotate(0.5deg); }
          70% { transform: translateX(-2px) rotate(-0.5deg); }
          80% { transform: translateX(2px) rotate(0.5deg); }
          100% { transform: translateX(0); }
        }
        .animate-buzz {
          animation: buzz 0.6s ease-out forwards;
        }
      `}</style>

      {/* Left line — beam moves UP */}
      <div className="absolute left-6 top-0 bottom-0 w-[2px] overflow-hidden pointer-events-none bg-cyan-500/10">
        <div style={{ animation: 'beam-up 4s linear infinite' }} className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-cyan-500 to-transparent" />
      </div>

      {/* Right line — beam moves DOWN */}
      <div className="absolute right-6 top-0 bottom-0 w-[2px] overflow-hidden pointer-events-none bg-cyan-500/10">
        <div style={{ animation: 'beam-down 4s linear infinite' }} className="absolute inset-x-0 h-1/3 bg-gradient-to-t from-transparent via-cyan-500 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header section with telemetry HUD (Light Theme) */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12 items-end mb-20">
          <div className="space-y-6">
            <div className="relative inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 group overflow-hidden shadow-[inset_2px_2px_4px_#cbd5e1,inset_-2px_-2px_4px_#ffffff]">
              {/* Sci-Fi HUD Corners */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-500 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-500 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-primary group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
              
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
              <span className="text-xs text-slate-700 font-bold uppercase tracking-[0.2em] relative z-10">Servicios</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-800 leading-[1.1]">
              Producción
              <br />
              <span className="text-primary">Visual</span>
            </h2>
          </div>
          <div className="lg:pt-8" ref={buzzRef}>
            <div className={`relative p-6 bg-slate-100 shadow-[inset_6px_6px_12px_#cbd5e1,inset_-6px_-6px_12px_#ffffff] ${isBuzzing ? 'animate-buzz' : ''}`}>
              {/* Subtle cyan top line */}
              <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
              {/* Telemetry services tag */}
              <div className="absolute -top-3 right-4 bg-white px-2 py-0.5 text-[9px] font-mono text-slate-500 uppercase tracking-widest shadow-sm">
                [SYS.CATALOG]
              </div>
              <div className="space-y-2">
                <p className="text-slate-700 text-lg leading-relaxed font-semibold">
                  Cada proyecto es una oportunidad de hacer que tu <span className="text-primary font-bold">marca destaque</span>.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Explora y descubre nuestras <span className="text-cyan-600 font-bold">especialidades</span> en diseño, producción e instalación publicitaria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cyan horizontal divider after header */}
        <div className="flex items-center gap-3 mb-12 -mt-4">
          <div className="h-[1px] w-8 bg-cyan-500/60" />
          <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/40 via-cyan-300/20 to-transparent" />
        </div>

        {/* ── Category Tabs (Neumorphic) ── */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 ${isBuzzing ? 'animate-buzz' : ''}`} style={{ animationDelay: '150ms' }}>
          <button
            onClick={() => setActiveTab("todos")}
            className={`relative px-8 py-3 text-sm font-bold uppercase tracking-wider text-cyan-600 transition-all duration-300 group ${
              activeTab === "todos"
                ? "bg-slate-100 shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff]"
                : "bg-slate-100 shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff]"
            }`}
          >
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            Todos
          </button>
          
          {categories.map((cat) => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-8 py-3 text-sm font-bold uppercase tracking-wider text-cyan-600 transition-all duration-300 group ${
                  isActive
                    ? "bg-slate-100 shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff]"
                    : "bg-slate-100 shadow-[4px_4px_8px_#cbd5e1,-4px_-4px_8px_#ffffff] hover:shadow-[inset_2px_2px_5px_#cbd5e1,inset_-2px_-2px_5px_#ffffff]"
                }`}
              >
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* ── Concave Neumorphism Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cards-container">
          {filteredServices.map((service, idx) => (
            <Link
              key={service.title}
              href="#contacto"
              style={{ transitionDelay: `${(idx % 3) * 150}ms` }}
              className="scroll-card opacity-0 translate-y-12 scale-95 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group"
            >
              {/* Sunken (Concave) Container with Sci-Fi accents */}
              <div className="relative flex flex-col h-full bg-slate-100 p-4 shadow-[inset_8px_8px_16px_#cbd5e1,inset_-8px_-8px_16px_#ffffff] transition-all duration-500 group-hover:shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff]">

                {/* Top accent line on card */}
                <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                {/* Extruded (Convex) Image Wrapper */}
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] transition-transform duration-500 group-hover:scale-[0.98] z-10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Neumorphic Category Pill inside Image */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md shadow-lg text-[10px] text-slate-800 font-mono font-bold uppercase tracking-widest">
                      {categories.find(c => c.id === service.category)?.label || service.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-grow flex flex-col px-2 pb-4">
                  {/* Subtle cyan accent before title */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-[1.5px] bg-cyan-500/60" />
                    <div className="w-2 h-[1.5px] bg-cyan-400/30" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold mb-3 text-slate-800 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-slate-500 font-medium mb-4 flex-grow">
                    {service.description}
                  </p>

                  {/* Bottom accent line — larger, more prominent */}
                  <div className="w-full h-[2px] bg-gradient-to-r from-primary via-cyan-400 to-transparent mt-auto" />
                  
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
