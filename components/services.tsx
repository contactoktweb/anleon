"use client"

import { useState, useEffect, useRef } from "react"
import { Sparkles, Maximize2, BookOpen, Stamp, Car, Printer, Layers, Component } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const categories = [
  { id: "avisos", label: "Avisos" },
  { id: "litografia", label: "Litografía" },
  { id: "gran-formato", label: "Gran Formato" },
  { id: "otros", label: "Otros" }
]

const services = [
  // AVISOS
  { 
    title: "Avisos en 3D", 
    description: "Letras y logos volumétricos en acrílico, metal o madera con acabados premium.", 
    extendedDescription: "Los avisos en 3D son usados en exteriores, sus grandes ventajas se basan principalmente en lo llamativa que es y lo disruptivo vs las cajas de luces usadas comunmente por empresas en el 2000 hacia atrás.",
    category: "avisos", 
    image: "/avisos/Letra_SinLuz.jpg.webp",
    highlight: true,
    gallery: [
      { src: "/avisos/IMG-20240210-WA0079.jpg.webp", title: "Doble cara" },
      { src: "/avisos/IMG-20231019-WA0209.jpg.webp", title: "Caja de luz con apliques" },
      { src: "/avisos/IMG-20230925-WA0077.jpg.webp", title: "Nube encantonerada" },
      { src: "/avisos/IMG-20230925-WA0073.jpg.webp", title: "Aviso sobredimensionado" },
      { src: "/avisos/IMG-20230921-WA0124.jpg.webp", title: "Nube encantonerada" },
      { src: "/avisos/20240801_115617-225x300.jpg.webp", title: "Letras en 3D" },
      { src: "/avisos/20240823_111053-225x300.jpg.webp", title: "Letras en 3D" }
    ]
  },
  { 
    title: "Nubes Encantoneradas", 
    description: "Avisos con siluetas personalizadas, cantos de aluminio iluminados y luz LED.", 
    extendedDescription: "Se caracterizan por no tener una forma convencional como rectangulo o cuadrada, el nombre nube se debe a que la forma la otorga tu propio aviso y genera recordación y llama la atención la forma irregluar y el impacto de tu logo.",
    category: "avisos", 
    image: "/avisos/IMG-20230925-WA0077.jpg.webp", 
    highlight: true,
    gallery: [
      { src: "/avisos/IMG-20230925-WA0077.jpg.webp", title: "Nube encantonerada" },
      { src: "/avisos/Avisos_Anleon-17.jpg.webp", title: "Nube encantonerada" },
      { src: "/avisos/Avisos_Anleon-1.webp", title: "Nube encantonerada" },
      { src: "/avisos/Avisos_Anleon-2.jpg.webp", title: "Nube encantonerada" },
      { src: "/avisos/Avisos_Anleon-6.jpg.webp", title: "Nube encantonerada" },
      { src: "/avisos/Avisos_Anleon-66.jpg.webp", title: "Nube encantonerada" },
      { src: "/avisos/Avisos_Anleon-57.jpg.webp", title: "Nube encantonerada" }
    ]
  },
  { 
    title: "Caja de Luz con Apliques", 
    description: "Cajas iluminadas con acrílico y apliques en relieve para una mayor tridimensionalidad.", 
    extendedDescription: "Es una alternativa más tradicional con un toque elegante al tener apliques modernos. Lo más parecido a una caja de luz con un toque de elegancia al tener apliques en acrílico original que van de acuerdo a tu estilo.",
    category: "avisos", 
    image: "/avisos/IMG_20230829_173014-300x225.jpg.webp", 
    highlight: true,
    gallery: [
      { src: "/avisos/Avisos_Anleon-19.jpg.webp", title: "Caja de luz con apliques" },
      { src: "/avisos/Avisos_Anleon-11.jpg.webp", title: "Caja de luz con apliques" },
      { src: "/avisos/Avisos_Anleon-4.jpg.webp", title: "Caja de luz con apliques" },
      { src: "/avisos/Avisos_Anleon-59.jpg.webp", title: "Caja de luz con apliques" },
      { src: "/avisos/IMG_20230829_173014-300x225.jpg.webp", title: "Caja de luz con apliques" },
      { src: "/avisos/IMG-20220216-WA0102.jpg.webp", title: "Caja de luz con apliques" }
    ]
  },
  { 
    title: "Doble Cara con Luz", 
    description: "Avisos salientes a doble cara con iluminación LED para locales comerciales.", 
    extendedDescription: "También conocidos como rompetráficos son ideales para estar transversal a tu fachada y generar la atención de las personas que pueden ir caminando frentea tu empresa, se usa principalmente con brazos metálicos de anclaje.",
    category: "avisos", 
    image: "/avisos/IMG-20221014-WA0104.jpg.webp", 
    highlight: true,
    gallery: [
      { src: "/avisos/IMG-20221116-WA0143-copia.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/IMG-20221110-WA0077.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/Avisos_Anleon-47.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/Avisos_Anleon-46.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/Avisos_Anleon-25.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/Avisos_Anleon-26.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/Avisos_Anleon-80.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/Avisos_Anleon-62.jpg.webp", title: "Doble cara con luz" },
      { src: "/avisos/IMG-20221014-WA0104.jpg.webp", title: "Doble cara con luz" }
    ]
  },
  { 
    title: "Avisos Exteriores con Base Alocubond", 
    description: "Letreros de alta durabilidad montados sobre paneles de aluminio compuesto.", 
    extendedDescription: "El Alucobond es un panel conformado por dos láminas de aluminio y en el centro contiene un núcleo relleno de un agregado mineral que es difícilmente inflamable o no inflamable, sinónimo de calidad, de construcción sostenible y los más altos estándares de diseño y de durabilidad.\n\nEl Alucobond se emplea para diferentes aplicaciones como sellar e impermeabilizar en la forma más completa y avanzada todo tipo de techos, jardines, juntas para construcción, grietas, remates, chaflanes, traslapes de láminas metálicas o de plástico, tragaluces, ventanas, ductos de aire acondicionado, etc.",
    category: "avisos", 
    image: "/avisos/IMG-20220216-WA0102.jpg.webp", 
    highlight: true,
    video: "/alocuband.mp4" 
  },

  // LITOGRAFIA
  { 
    title: "Talonarios", 
    description: "Talonarios membretados e impresos para facturas, recibos, comandas y cuentas de cobro.", 
    category: "litografia", 
    image: "/litografia/lit_1-8.jpeg", 
    highlight: false,
    gallery: [{ src: "/litografia/lit_1-8.jpeg", title: "Talonarios" }]
  },
  { 
    title: "Tarjetas", 
    description: "Tarjetas de presentación corporativas impresas en diferentes materiales y acabados.", 
    category: "litografia", 
    image: "/litografia/lit_1-10.jpeg", 
    highlight: false,
    gallery: [{ src: "/litografia/lit_1-10.jpeg", title: "Tarjetas" }]
  },
  { 
    title: "Volantes", 
    description: "Volantes promocionales a color, ideales para campañas masivas y publicidad rápida.", 
    category: "litografia", 
    image: "/litografia/lit_1-9.jpeg", 
    highlight: false,
    gallery: [{ src: "/litografia/lit_1-9.jpeg", title: "Volantes" }]
  },
  { 
    title: "Impresión", 
    description: "Servicios de impresión de alta calidad en múltiples formatos.", 
    category: "litografia", 
    image: "/litografia/lit_1-12.jpeg", 
    highlight: false,
    gallery: [{ src: "/litografia/lit_1-12.jpeg", title: "Impresión" }]
  },
  { 
    title: "Plegables", 
    description: "Folletos plegables (dípticos, trípticos) de alta calidad para presentar tus productos o servicios.", 
    category: "litografia", 
    image: "/litografia/plegables.webp", 
    highlight: false,
    icon: BookOpen,
    gallery: []
  },
  { 
    title: "Sellos", 
    description: "Sellos automáticos y de madera, personalizados con el logo y datos de tu empresa.", 
    category: "litografia", 
    image: "/litografia/sellos.webp", 
    highlight: false,
    icon: Stamp,
    gallery: []
  },
  // GRAN FORMATO
  { 
    title: "Impresión Banner 13 Oz", 
    description: "Maximiza tus ideas con impresión en banner 13 onzas", 
    category: "gran-formato", 
    image: "/gran-formato/AnleonProductos-1-1024x576.webp",
    highlight: true,
    gallery: [{ src: "/gran-formato/AnleonProductos-1-1024x576.webp", title: "Impresión Banner 13 Oz" }] 
  },
  { 
    title: "Arañas y estructuras con impresión", 
    description: "Estructuras portátiles y arañas publicitarias con impresión de alta calidad.", 
    category: "gran-formato", 
    image: "/gran-formato/Anleon-Horizontal-2.webp",
    highlight: true,
    icon: Sparkles,
    gallery: [] 
  },
  { 
    title: "Vinilo de automóviles", 
    description: "Maximiza tus ideas con impresión en banner 13 onzas", 
    category: "gran-formato", 
    image: "/gran-formato/AnleonProductos-2-1024x576.webp",
    highlight: true,
    gallery: [{ src: "/gran-formato/AnleonProductos-2-1024x576.webp", title: "Vinilo de automóviles" }] 
  },
  { 
    title: "Impresión Vinilo", 
    description: "Maximiza tus ideas con impresión en banner 13 onzas", 
    category: "gran-formato", 
    image: "/gran-formato/AnleonProductos-4-1024x576.webp",
    highlight: true,
    gallery: [{ src: "/gran-formato/AnleonProductos-4-1024x576.webp", title: "Impresión Vinilo" }] 
  },
  // OTROS
  { 
    title: "Tarjetas con Filtro UV", 
    description: "Tarjetas de presentación con brillo UV parcial para resaltar logotipos y detalles especiales.", 
    category: "otros", 
    image: "",
    icon: Sparkles,
    gallery: [] 
  },
  { 
    title: "Volantes por 1.000", 
    description: "Paquete de volantes impresos a full color en papel propalcote, ideales para campañas publicitarias.", 
    category: "otros", 
    image: "",
    icon: BookOpen,
    gallery: [] 
  },
  { 
    title: "Cartas de menú", 
    description: "Diseño e impresión de menús y cartas para restaurantes y cafeterías, resistentes y duraderos.", 
    category: "otros", 
    image: "",
    icon: BookOpen,
    gallery: [] 
  },
  { 
    title: "Promocionales", 
    description: "Artículos publicitarios personalizados como bolígrafos, tazas, libretas y más para tu marca.", 
    category: "otros", 
    image: "",
    icon: Sparkles,
    gallery: [] 
  }
]

export function Services() {
  const [activeTab, setActiveTab] = useState("avisos")

  const filteredServices = activeTab === "todos" 
    ? services 
    : services.filter(s => s.category === activeTab)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-12', '-translate-x-32', 'translate-x-32', 'scale-95')
            entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100')
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
        </div>

        {/* Video Header for 'Otros' Section */}
        {(activeTab === "otros") && (
          <div className="w-full max-w-5xl mx-auto mb-16 overflow-hidden shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] border-l-8 border-r-8 border-cyan-500 p-3 bg-white relative z-10">
            <div className="relative w-full aspect-video overflow-hidden bg-black shadow-inner">
              <video 
                src="/otros/seccion-otros.mp4" 
                className="w-full h-full object-cover" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
          </div>
        )}

        {/* Highlighted Services (Full Width Layouts) */}
        {filteredServices.filter(s => 'highlight' in s && s.highlight).map((service, idx) => {
          const mediaContent = service.video ? (
            <div className="relative w-full aspect-video overflow-hidden shadow-2xl border border-zinc-200 bg-black">
              <video 
                src={service.video} 
                className="w-full h-full object-cover" 
                controls 
                autoPlay 
                muted 
                loop 
                playsInline 
              />
            </div>
          ) : service.gallery && service.gallery.length === 1 ? (
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden shadow-2xl border border-white/50 group cursor-pointer bg-slate-100">
                  <Image 
                    src={service.gallery[0].src} 
                    alt={service.gallery[0].title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center">
                     <Maximize2 className="text-white w-8 h-8 absolute bottom-6 right-6 opacity-90 drop-shadow-md" />
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-6xl w-[95vw] h-[85vh] bg-transparent border-none shadow-none p-0 flex flex-col justify-center items-center [&>button]:text-white">
                 <div className="relative w-full h-full flex-grow">
                   <Image src={service.gallery[0].src} alt={service.gallery[0].title} fill className="object-contain" />
                 </div>
                 <p className="text-white text-xl md:text-2xl font-bold mt-4 tracking-wide text-center">{service.gallery[0].title}</p>
              </DialogContent>
            </Dialog>
          ) : service.gallery && service.gallery.length > 1 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {service.gallery?.map((img, i) => {
                return (
                  <Dialog key={i}>
                    <DialogTrigger asChild>
                      <div 
                        className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer shadow-sm"
                      >
                        <Image 
                          src={img.src} 
                          alt={img.title} 
                          fill 
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center">
                           <p className="text-white text-sm md:text-base font-bold uppercase tracking-wider">{img.title}</p>
                           <Maximize2 className="text-white w-5 h-5 absolute bottom-3 right-3 opacity-70" />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-6xl w-[95vw] h-[85vh] bg-transparent border-none shadow-none p-0 flex flex-col justify-center items-center [&>button]:text-white">
                       <div className="relative w-full h-full flex-grow">
                         <Image src={img.src} alt={img.title} fill className="object-contain" />
                       </div>
                       <p className="text-white text-xl md:text-2xl font-bold mt-4 tracking-wide text-center">{img.title}</p>
                    </DialogContent>
                  </Dialog>
                );
              })}
            </div>
          ) : 'icon' in service && service.icon ? (
            <div className="relative w-full aspect-[4/3] overflow-hidden shadow-[inset_8px_8px_16px_#cbd5e1,inset_-8px_-8px_16px_#ffffff] bg-slate-100 flex flex-col items-center justify-center p-8 group">
              {(() => {
                const Icon = service.icon;
                return <Icon className="w-32 h-32 md:w-40 md:h-40 text-cyan-400 opacity-60 group-hover:scale-110 transition-transform duration-500 mb-6" />
              })()}
              <p className="text-2xl md:text-3xl font-black text-slate-300 uppercase tracking-widest text-center">{service.title}</p>
            </div>
          ) : null;

          const isGranFormato = service.category === 'gran-formato';
          const isLeftAligned = idx % 2 === 0;

          if (isGranFormato) {
            let WatermarkIcon = null;
            const t = service.title.toLowerCase();
            if (t.includes('banner')) WatermarkIcon = Printer;
            else if (t.includes('automóvil') || t.includes('vehicular') || t.includes('vinilo de auto')) WatermarkIcon = Car;
            else if (t.includes('vinilo')) WatermarkIcon = Layers;
            else WatermarkIcon = Component;

            return (
              <div key={service.title} className={`scroll-card opacity-0 ${isLeftAligned ? '-translate-x-32' : 'translate-x-32'} transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] container mx-auto px-4 md:px-6 mb-16 md:mb-24 max-w-7xl relative z-10`}>
                <div className={`flex flex-col lg:flex-row items-center gap-12 xl:gap-24 ${isLeftAligned ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* The Card (60% width) */}
                  <div className="w-full lg:w-3/5 shrink-0 relative overflow-hidden shadow-[inset_2px_2px_10px_#ffffff,8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] border border-white p-6 md:p-8 bg-slate-50">
                    
                    {/* Animated Blue Background Aurora */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                      <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[100px] rounded-full animate-[spin_12s_linear_infinite] origin-bottom-right" />
                      <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-cyan-400/15 blur-[100px] rounded-full animate-[spin_15s_linear_infinite_reverse] origin-top-left" />
                    </div>

                    <div className="relative z-10 flex flex-col w-full gap-4 md:gap-6 items-center">
                      <h3 className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-primary uppercase tracking-widest text-center">
                        {service.title}
                      </h3>
                      
                      <div className="w-full">
                        {mediaContent}
                      </div>

                      <div className={`w-full bg-primary ${isLeftAligned ? 'border-r-4' : 'border-l-4'} border-cyan-400 p-4 shadow-[8px_8px_16px_#cbd5e1,-8px_-8px_16px_#ffffff]`}>
                        <p className={`text-base md:text-lg text-white font-bold leading-relaxed ${isLeftAligned ? 'text-right' : 'text-left'}`}>
                          {service.extendedDescription || service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* The Watermark Icon (40% width) */}
                  {WatermarkIcon && (
                    <div className="hidden lg:flex w-full lg:w-2/5 justify-center items-center opacity-20 transform hover:scale-110 transition-transform duration-700 pointer-events-none">
                      <WatermarkIcon className="w-56 h-56 xl:w-80 xl:h-80 text-cyan-400 drop-shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
                    </div>
                  )}

                </div>
              </div>
            );
          }

          // AVISOS LAYOUT (Centered 5xl)
          return (
            <div key={service.title} className={`scroll-card opacity-0 ${isLeftAligned ? '-translate-x-32' : 'translate-x-32'} transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] relative w-full max-w-5xl mx-auto mb-16 md:mb-20`}>
              <div className="relative z-10 w-full overflow-hidden shadow-[inset_2px_2px_10px_#ffffff,8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] border border-white p-6 md:p-10 bg-slate-50">
                
                {/* Animated Blue Background Aurora */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                  <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-primary/10 blur-[100px] rounded-full animate-[spin_12s_linear_infinite] origin-bottom-right" />
                  <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-cyan-400/15 blur-[100px] rounded-full animate-[spin_15s_linear_infinite_reverse] origin-top-left" />
                </div>

                <div className="relative z-10 block w-full clear-both">
                  <h3 className="text-3xl md:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-primary uppercase tracking-widest pb-4">
                    {service.title}
                  </h3>

                  <div className={`w-full lg:w-1/2 mb-6 ${idx % 2 === 1 ? 'lg:float-left lg:mr-8' : 'lg:float-right lg:ml-8'}`}>
                    {mediaContent}
                  </div>

                  <div className="text-lg text-slate-500 font-medium leading-relaxed whitespace-pre-line text-justify">
                    {service.extendedDescription || service.description}
                  </div>
                  
                  <div className="clear-both" />
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Normal Cards Container Wrapper (Avisos & Litografia) ── */}
        <div className={`relative w-full ${activeTab === 'litografia' ? 'pt-24 pb-12 mt-8' : ''} ${activeTab === 'otros' ? 'hidden' : ''}`}>
          {/* Full-bleed dark blue background exclusively for Litografia cards */}
          {activeTab === 'litografia' && (
            <div className="absolute inset-0 -left-[100vw] -right-[100vw] bg-[#0A1128] shadow-[inset_0_20px_30px_-10px_rgba(0,0,0,0.5)]" />
          )}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 cards-container">
            {filteredServices
              .filter(s => !('highlight' in s && s.highlight) && s.category !== 'otros')
              .map((service, idx) => {
                
                // --- Original Concave Design for Litografia & Avisos ---
                const cardContent = (
                  <div className="relative flex flex-col h-full bg-slate-100 p-4 shadow-[inset_8px_8px_16px_#cbd5e1,inset_-8px_-8px_16px_#ffffff] transition-all duration-500 group-hover:shadow-[inset_4px_4px_8px_#cbd5e1,inset_-4px_-4px_8px_#ffffff] text-left">
                    {/* Top accent line on card */}
                    <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

                    {/* Extruded (Convex) Image Wrapper or Icon */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 shadow-[6px_6px_12px_#cbd5e1,-6px_-6px_12px_#ffffff] transition-transform duration-500 group-hover:scale-[0.98] z-10 bg-slate-200 flex items-center justify-center">
                      {'icon' in service && service.icon ? (
                        (() => {
                          const Icon = service.icon as any;
                          return <Icon className="w-24 h-24 text-cyan-500/50 group-hover:scale-110 transition-transform duration-500 drop-shadow-sm" />
                        })()
                      ) : (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                      
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
                );

                if (service.gallery && service.gallery.length > 0) {
                  return (
                    <Dialog key={service.title}>
                      <DialogTrigger asChild>
                        <button style={{ transitionDelay: `${(idx % 3) * 150}ms` }} className="scroll-card opacity-0 translate-y-12 scale-95 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group block w-full outline-none">
                          {cardContent}
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] bg-transparent border-none shadow-none p-0 flex flex-col justify-center items-center [&>button]:text-white">
                        <div className="relative w-full h-full flex-grow">
                          <Image src={service.gallery[0].src} alt={service.gallery[0].title} fill className="object-contain" />
                        </div>
                        <p className="text-white text-xl md:text-2xl font-bold mt-4 tracking-wide text-center">{service.gallery[0].title}</p>
                      </DialogContent>
                    </Dialog>
                  )
                }

                return (
                  <Link key={service.title} href="#contacto" style={{ transitionDelay: `${(idx % 3) * 150}ms` }} className="scroll-card opacity-0 translate-y-12 scale-95 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group block">
                    {cardContent}
                  </Link>
                )
              })}
          </div>
        </div>

        {/* ── Otros Section Container (Only when 'todos' or 'otros') ── */}
        {(activeTab === 'todos' || activeTab === 'otros') && (
          <div className="mt-16 w-full relative z-10">
            {/* Video Header for 'Otros' Section */}
            <div className="w-full max-w-5xl mx-auto mb-16 overflow-hidden shadow-[8px_8px_20px_#cbd5e1,-8px_-8px_20px_#ffffff] border-l-8 border-r-8 border-cyan-500 p-3 bg-white relative z-10">
              <div className="relative w-full aspect-video overflow-hidden bg-black shadow-inner">
                <video 
                  src="/otros/seccion-otros.mp4" 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>
            </div>

            {/* Grid for 'Otros' */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 cards-container mt-12">
              {services.filter(s => s.category === 'otros').map((service, idx) => {
                
                // --- Custom Design for "Otros" Cards ---
                const otrosCardContent = (
                  <div className="relative flex flex-col h-full bg-slate-900 border-l-8 border-cyan-500 p-6 md:p-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_#1e3a8a] border-t border-b border-r border-slate-800 text-left">
                    <div className="relative w-full aspect-video mb-6 overflow-hidden bg-slate-950 flex flex-col items-center justify-center border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-inner">
                      {service.image || (service.gallery && service.gallery.length > 0) ? (
                        <Image src={service.image || (service.gallery ? service.gallery[0].src : '')} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
                      ) : 'icon' in service && service.icon ? (
                        <>
                          {(() => {
                            const Icon = service.icon as any;
                            return <Icon className="w-12 h-12 text-cyan-500/30 group-hover:scale-110 transition-transform duration-500 mb-2" />
                          })()}
                          <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">Sin Foto</span>
                        </>
                      ) : (
                        <span className="text-slate-600 text-xs font-bold uppercase tracking-widest">Sin Foto</span>
                      )}
                    </div>
                    <div className="flex items-start gap-4 mb-4 flex-col">
                      <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-widest leading-tight">{service.title}</h3>
                    </div>
                    <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed mb-6">{service.description}</p>
                    <div className="mt-auto pt-6 flex justify-end">
                      <span className="text-cyan-400 font-bold uppercase text-sm tracking-widest group-hover:text-cyan-200 transition-colors">Consultar Ahora →</span>
                    </div>
                  </div>
                );

                return (
                  <Link key={service.title} href="#contacto" style={{ transitionDelay: `${(idx % 2) * 150}ms` }} className="scroll-card opacity-0 translate-y-12 scale-95 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)] group block">
                    {otrosCardContent}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
