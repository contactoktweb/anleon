"use client"

const values = [
  {
    number: "01",
    title: "Cumplidos",
    description: "Entregamos cada proyecto en el tiempo acordado. Tu deadline es nuestra prioridad.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    number: "02", 
    title: "Experiencia",
    description: "Dos décadas perfeccionando el arte de la publicidad visual con resultados excepcionales.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Instalación",
    description: "Equipo profesional para la instalación segura y precisa de todos nuestros productos.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
]

export function About() {
  return (
    <section id="nosotros" className="relative py-32 bg-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Sobre Nosotros</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Materializando tus
              <span className="text-gradient"> sueños </span>
              desde 2004
            </h2>
          </div>
          
          <div className="lg:pt-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Somos una agencia especializada en soluciones de publicidad visual. Combinamos creatividad con experiencia técnica para transformar tu visión en realidad.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Desde avisos luminosos hasta impresión de gran formato, cada proyecto refleja nuestro compromiso con la calidad, la puntualidad y la satisfacción del cliente.
            </p>
          </div>
        </div>
        
        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {values.map((value) => (
            <div 
              key={value.number}
              className="group relative p-8 bg-secondary/50 border border-border rounded-2xl card-hover overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all group-hover:animate-pulse-glow">
                    {value.icon}
                  </div>
                  <span className="text-5xl font-bold text-border group-hover:text-primary/20 transition-colors">{value.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
