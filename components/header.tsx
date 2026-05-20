"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 flex items-center justify-center group-hover:animate-pulse-glow transition-all">
                <Image src="/logo.webp" alt="Anleon Logo" width={48} height={48} className="object-contain w-full h-full" priority />
              </div>
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold tracking-tight text-foreground">ANLEON</span>
              <span className="text-[10px] text-primary font-medium tracking-[0.3em] block">PUBLICIDAD</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-cyan-400 transition-colors group flex items-center gap-1.5"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono text-[10px] tracking-widest">{'//'}</span>
                <span className="relative z-10 tracking-wide">{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-primary to-cyan-400 group-hover:w-full transition-all duration-500" />
                <span className="absolute top-0 right-0 w-1 h-1 border-t border-r border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <span className="absolute bottom-0 left-0 w-1 h-1 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="#contacto"
              className="relative inline-flex items-center justify-center px-6 h-10 bg-primary text-white hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all duration-300 group overflow-hidden font-bold text-sm select-none"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-300 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-300 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              
              {/* Cosmic shine */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-cosmic-shine" />
              
              <span className="relative z-10">Cotizar Proyecto</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 hover:bg-secondary rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border relative overflow-hidden">

          
          <nav className="flex flex-col p-6 gap-2 relative z-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="relative py-3 px-4 text-muted-foreground hover:text-cyan-400 hover:bg-primary/5 border border-transparent hover:border-primary/20 rounded-none transition-all group flex items-center gap-3 overflow-hidden"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-mono text-xs">{'//'}</span>
                <span className="tracking-wide">{item.label}</span>
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400 scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
              </Link>
            ))}
            <Link 
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="relative mt-4 inline-flex items-center justify-center w-full px-6 h-12 bg-primary text-white hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all duration-300 group overflow-hidden font-bold text-base select-none"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-300 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-300 group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white group-hover:w-2.5 group-hover:h-2.5 transition-all duration-300" />
              
              {/* Cosmic shine */}
              <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-cosmic-shine" />
              
              <span className="relative z-10">Cotizar Proyecto</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
