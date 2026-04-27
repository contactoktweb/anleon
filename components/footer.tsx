"use client"

import Link from "next/link"
import { ArrowUpRight, Zap } from "lucide-react"

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
]

const services = [
  "Avisos 3D",
  "Avisos Luminosos", 
  "Litografía",
  "Gran Formato",
  "Señalización",
  "Neón Flex",
]

const socials = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="w-11 h-11 bg-primary rounded-lg flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">ANLEON</span>
                <span className="text-[10px] text-primary font-medium tracking-[0.3em] block">PUBLICIDAD</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Más de 20 años transformando ideas en realidad. Tu marca merece brillar con soluciones de publicidad visual de alta calidad.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  aria-label={social.label}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Navegación
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Servicios
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    href="#servicios" 
                    className="text-muted-foreground hover:text-primary transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {service}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              ¿Listo para empezar?
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Contáctanos y hagamos realidad tu proyecto.
            </p>
            <Link
              href="#contacto"
              className="neon-button inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary/90 transition-all"
            >
              <Zap className="w-4 h-4" />
              Cotizar ahora
            </Link>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Anleon Publicidad. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Desarrollado con <span className="text-primary">♥</span> por{" "}
            <span className="text-primary font-medium hover:underline cursor-pointer">K&T CODE</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
