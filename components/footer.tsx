"use client"

import React, { useRef, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Facebook, Instagram } from "lucide-react"

const Tiktok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

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
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "TikTok", href: "#", Icon: Tiktok },
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animation base classes
  const transitionClass = "transition-all duration-1000 ease-out"
  const titleAnim = isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
  const textAnim = isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"

  return (
    <footer ref={footerRef} className="relative bg-[#050505] border-t border-primary/20 overflow-hidden">

      
      {/* Top HUD Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* HUD Corner Accents for Footer Content Box */}
        <div className="absolute top-8 left-6 w-8 h-8 border-t-2 border-l-2 border-primary/40 pointer-events-none hidden md:block" />
        <div className="absolute top-8 right-6 w-8 h-8 border-t-2 border-r-2 border-cyan-400/40 pointer-events-none hidden md:block" />

        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className={`${transitionClass} ${titleAnim}`}>
              <Link href="/" className="flex items-center gap-3 mb-6 group">
                <div className="relative">
                  <div className="w-12 h-12 flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                    <Image src="/logo.webp" alt="Anleon Logo" width={48} height={48} className="object-contain w-full h-full" />
                  </div>
                </div>
                <div>
                  <span className="text-lg font-bold tracking-tight">ANLEON</span>
                  <span className="text-[10px] text-primary font-medium tracking-[0.3em] block">PUBLICIDAD</span>
                </div>
              </Link>
            </div>
            <p className={`text-zinc-400 text-sm leading-relaxed mb-6 font-mono tracking-tight ${transitionClass} ${textAnim} delay-100`}>
              Más de 20 años orbitando la excelencia visual. Forjamos la identidad de tu marca con tecnología de punta y un nivel de detalle intergaláctico.
            </p>
            <div className={`flex gap-4 ${transitionClass} ${textAnim} delay-200`}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="relative w-10 h-10 bg-transparent border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all group overflow-hidden"
                  aria-label={social.label}
                >
                  {/* HUD Corner small */}
                  <span className="absolute top-0 left-0 w-1 h-1 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <social.Icon className="w-4 h-4 relative z-10 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className={`font-mono text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-zinc-100 ${transitionClass} ${titleAnim} delay-100`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
              </span>
              Navegación
            </h4>
            <ul className={`space-y-3 ${transitionClass} ${textAnim} delay-200`}>
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
            <h4 className={`font-mono text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-zinc-100 ${transitionClass} ${titleAnim} delay-200`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2 w-2 bg-primary shadow-[0_0_8px_#0066ff]"></span>
              </span>
              Servicios
            </h4>
            <ul className={`space-y-3 ${transitionClass} ${textAnim} delay-300`}>
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* CTA */}
          <div>
            <h4 className={`font-mono text-sm uppercase tracking-[0.2em] mb-6 flex items-center gap-3 text-zinc-100 ${transitionClass} ${titleAnim} delay-300`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-none h-2 w-2 bg-cyan-500 shadow-[0_0_8px_#06b6d4]"></span>
              </span>
              Iniciar Misión
            </h4>
            <div className={`${transitionClass} ${textAnim} delay-500`}>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Contáctanos y hagamos realidad tu proyecto.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary/20 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Anleon Publicidad. Todos los derechos reservados.
          </p>
          <a 
            href="https://www.kytcode.lat" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-muted-foreground hover:text-white transition-colors flex items-center gap-1 group"
          >
            Desarrollado por K&T
            <span className="text-white transition-transform group-hover:scale-110">♥</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
