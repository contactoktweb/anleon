"use client"

import { useState, useRef, useEffect } from "react"
import { Phone, Mail, MapPin, Send, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 (1) 234 5678",
    href: "tel:+5712345678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@anleonpublicidad.com",
    href: "mailto:info@anleonpublicidad.com",
  },
  {
    icon: MapPin,
    label: "Dirección",
    value: "Bogotá, Colombia",
    href: "#",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+57 300 000 0000",
    href: "https://wa.me/573000000000",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Gracias por contactarnos. Te responderemos pronto.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const sectionRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAnimating(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" className="relative py-20 bg-background overflow-hidden">
      {/* Pop animation keyframes */}
      <style>{`
        @keyframes pop-in {
          0% { transform: scale(0.95); opacity: 0; }
          50% { transform: scale(1.02); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in {
          animation: pop-in 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
      {/* Neon accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      

      
      <div className="relative max-w-7xl mx-auto px-6">
        <div 
          ref={sectionRef}
          className={`grid lg:grid-cols-2 gap-16 ${isAnimating ? 'animate-pop-in' : 'opacity-0 scale-95'}`}
        >
          {/* Left Column - Info */}
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
                Contacto
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Hablemos de tu
              <span className="neon-text text-primary"> proyecto</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Cuéntanos tu idea y te daremos la mejor solución publicitaria para hacer brillar tu marca.
            </p>
            
            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="group relative flex items-center gap-4 p-4 bg-secondary/50 rounded-none transition-all card-hover"
                >
                  {/* Open corner borders for card */}
                  <div className="absolute top-0 left-2 right-2 h-[1px] bg-border group-hover:bg-primary/30 transition-colors" />
                  <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-border group-hover:bg-primary/30 transition-colors" />
                  <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-border group-hover:bg-primary/30 transition-colors" />
                  <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-border group-hover:bg-primary/30 transition-colors" />

                  <div className="relative w-12 h-12 shrink-0 bg-primary/10 rounded-none flex items-center justify-center group-hover:bg-primary transition-all group-hover:animate-pulse-glow">
                    {/* Open corner borders for icon */}
                    <div className="absolute top-0 left-1 right-1 h-[1px] bg-primary/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-0 left-1 right-1 h-[1px] bg-primary/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute left-0 top-1 bottom-1 w-[1px] bg-primary/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute right-0 top-1 bottom-1 w-[1px] bg-primary/20 group-hover:bg-transparent transition-colors" />
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors relative z-10" />
                  </div>
                  <div className="min-w-0 flex-1 relative z-10">
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors break-all">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="relative p-8 md:p-10 bg-secondary/30 rounded-none">
            {/* Open corner borders for form wrapper */}
            <div className="absolute top-0 left-4 right-4 h-[1px] bg-border" />
            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-border" />
            <div className="absolute left-0 top-4 bottom-4 w-[1px] bg-border" />
            <div className="absolute right-0 top-4 bottom-4 w-[1px] bg-border" />
            {/* Neon border accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Nombre
                </label>
                <div className="relative group">
                  {/* Open corner borders for input */}
                  <div className="absolute top-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-4 bg-card rounded-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 border-none transition-all"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <div className="relative group">
                    <div className="absolute top-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-card rounded-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 border-none transition-all"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                    Teléfono
                  </label>
                  <div className="relative group">
                    <div className="absolute top-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 bg-card rounded-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 border-none transition-all"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Mensaje
                </label>
                <div className="relative group">
                  <div className="absolute top-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <div className="absolute right-0 top-2 bottom-2 w-[1px] bg-border group-focus-within:bg-primary/50 transition-colors pointer-events-none" />
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-4 bg-card rounded-none text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 border-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="relative w-full inline-flex items-center justify-center px-8 h-14 bg-primary text-white hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] transition-all duration-300 group overflow-hidden font-bold text-base select-none"
              >
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-white group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
                <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-cyan-300 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-cyan-300 group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-white group-hover:w-3.5 group-hover:h-3.5 transition-all duration-300" />
                
                {/* Cosmic shine */}
                <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-cosmic-shine" />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  Enviar mensaje
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
