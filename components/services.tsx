"use client"

import { useState } from "react"
import { ArrowUpRight, Sparkles } from "lucide-react"
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
  {
    title: "Avisos en 3D",
    description: "Letras y logos volumétricos en acrílico, metal o madera con acabados premium.",
    category: "avisos",
    image: "/avisos/Letra_SinLuz.jpg.webp",
  },
  {
    title: "Nubes Encantoneradas",
    description: "Avisos con siluetas personalizadas, cantos de aluminio iluminados y luz LED.",
    category: "avisos",
    image: "/avisos/IMG-20230925-WA0077.jpg.webp",
  },
  {
    title: "Caja de Luz con Apliques",
    description: "Cajas iluminadas con acrílico y apliques en relieve para una mayor tridimensionalidad.",
    category: "avisos",
    image: "/avisos/IMG_20230829_173014-300x225.jpg.webp",
  },
  {
    title: "Doble Cara con Luz",
    description: "Avisos salientes a doble cara con iluminación LED para locales comerciales.",
    category: "avisos",
    image: "/avisos/IMG-20221014-WA0104.jpg.webp",
  },
  {
    title: "Avisos Exteriores con Base Alocubond",
    description: "Letreros de alta durabilidad montados sobre paneles de aluminio compuesto.",
    category: "avisos",
    image: "/avisos/IMG-20220216-WA0102.jpg.webp",
  },
  {
    title: "Neón Flex",
    description: "Diseños y frases personalizadas con iluminación neón de bajo consumo.",
    category: "avisos",
    image: "/images/news-neon-tech.webp",
  },

  // LITOGRAFIA
  {
    title: "Talonarios",
    description: "Talonarios membretados e impresos para facturas, recibos, comandas y cuentas de cobro.",
    category: "litografia",
    image: "/litografia/talonarios.webp",
  },
  {
    title: "Plegables",
    description: "Folletos plegables (dípticos, trípticos) de alta calidad para presentar tus productos o servicios.",
    category: "litografia",
    image: "/litografia/plegables.webp",
  },
  {
    title: "Tarjetas",
    description: "Tarjetas de presentación corporativas y personales con acabados premium y texturas especiales.",
    category: "litografia",
    image: "/litografia/tarjetas.webp",
  },
  {
    title: "Volantes",
    description: "Volantes y flyers publicitarios ideales para campañas masivas de promoción y eventos.",
    category: "litografia",
    image: "/litografia/volantes.webp",
  },
  {
    title: "Sellos",
    description: "Sellos automáticos y de madera totalmente personalizados para firmas y marcas corporativas.",
    category: "litografia",
    image: "/litografia/sellos.webp",
  },

  // GRAN FORMATO
  {
    title: "Banner 10 y 13 oz",
    description: "Lonas de gran resistencia para vallas, pancartas y avisos exteriores.",
    category: "gran-formato",
    image: "/gran-formato/AnleonProductos-1-1024x576.webp",
  },
  {
    title: "Arañas y Estructuras con Impresión",
    description: "Portabanners tipo araña y soportes publicitarios móviles para ferias y locales.",
    category: "gran-formato",
    image: "/gran-formato/aranas.webp",
  },
  {
    title: "Vinilo Adhesivo",
    description: "Vinilos impresos y de corte para decoración de vidrieras, paredes y vehículos.",
    category: "gran-formato",
    image: "/gran-formato/AnleonProductos-2-1024x576.webp",
  },
  {
    title: "Avisos para Empresa",
    description: "Placas corporativas y letreros comerciales de alta calidad para oficinas y locales.",
    category: "gran-formato",
    image: "/gran-formato/avisos_empresa.webp",
  },
  // OTROS
  {
    title: "Tarjetas con Filtro UV",
    description: "Tarjetas de presentación con brillo UV parcial para resaltar logotipos y detalles especiales.",
    category: "otros",
    image: "/otros/tarjetas_uv.webp",
  },
  {
    title: "Volantes por 1.000",
    description: "Paquete de volantes impresos a full color en papel propalcote, ideales para campañas publicitarias.",
    category: "otros",
    image: "/otros/volantes_mil.webp",
  },
  {
    title: "Cartas de menú",
    description: "Diseño e impresión de menús y cartas para restaurantes y cafeterías, resistentes y duraderos.",
    category: "otros",
    image: "/otros/cartas_menu.webp",
  },
  {
    title: "Promocionales",
    description: "Artículos publicitarios personalizados como bolígrafos, tazas, libretas y más para tu marca.",
    category: "otros",
    image: "/otros/promocionales.webp",
  }
]

export function Services() {
  const [activeTab, setActiveTab] = useState("avisos")

  const filteredServices = services.filter(service => service.category === activeTab)

  return (
    <section id="servicios" className="relative py-32 bg-foreground overflow-hidden">
      {/* This is a LIGHT section - inverted colors */}
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-72 h-72 border border-background/5 rounded-full" />
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-background/5 rounded-full" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header with unique layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Servicios</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background">
              Soluciones que
              <br />
              <span className="text-primary">brillan</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-background/60 text-lg max-w-md">
              Cada proyecto es una oportunidad de hacer que tu marca destaque. Descubre nuestras especialidades.
            </p>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-start gap-3 mb-16 border-b border-background/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeTab === cat.id
                  ? "bg-primary text-foreground shadow-lg shadow-primary/20 scale-105"
                  : "bg-background/5 text-background hover:bg-background/10 hover:scale-102"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service) => (
            <Link 
              key={service.title}
              href="#contacto"
              className="group relative overflow-hidden rounded-3xl transition-all duration-500 flex flex-col justify-between bg-background/5 border border-background/5 hover:border-primary/20 hover:bg-background hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="relative h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs text-white font-medium shadow-sm uppercase tracking-wider">
                      {categories.find(c => c.id === service.category)?.label || service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-background group-hover:text-foreground transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed text-background/70 group-hover:text-muted-foreground transition-colors">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow CTA */}
                  <div className="mt-6 pt-6 border-t border-background/10 group-hover:border-foreground/10 flex items-center gap-2 text-background/40 group-hover:text-primary transition-all duration-300">
                    <span className="text-sm font-semibold">Cotizar ahora</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
