"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react"
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

  return (
    <section id="contacto" className="relative py-32 bg-background overflow-hidden">
      {/* Neon accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">Contacto</span>
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
                  className="group flex items-center gap-4 p-4 bg-secondary/50 border border-border rounded-xl hover:border-primary/30 transition-all card-hover"
                >
                  <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all group-hover:animate-pulse-glow">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                    <div className="font-medium group-hover:text-primary transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="relative p-8 md:p-10 bg-secondary/30 border border-border rounded-3xl">
            {/* Neon border accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="tu@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                    placeholder="+57 300 000 0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-4 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full neon-button bg-primary text-white hover:bg-primary/90 rounded-xl h-14 text-base font-medium"
              >
                <Send className="w-4 h-4 mr-2" />
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
