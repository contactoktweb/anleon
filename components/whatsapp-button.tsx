"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function WhatsappButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Configure the WhatsApp phone number and message
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573000000000"
  const defaultMessage = encodeURIComponent("¡Hola! Me gustaría recibir más información sobre sus servicios de publicidad visual.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`

  useEffect(() => {
    setIsMounted(true)
    
    // Show the tooltip after 3 seconds for a subtle call to action
    const timer = setTimeout(() => {
      const isDismissed = localStorage.getItem("whatsapp-tooltip-dismissed")
      if (!isDismissed) {
        setShowTooltip(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismissTooltip = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(false)
    localStorage.setItem("whatsapp-tooltip-dismissed", "true")
  }

  if (!isMounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Sleek Premium Glassmorphic Tooltip */}
      {showTooltip && (
        <div 
          className="relative max-w-[260px] bg-card/90 backdrop-blur-md border border-border/80 px-4 py-3 rounded-2xl shadow-2xl animate-fade-in-up text-left flex items-start gap-2.5 transition-all duration-300"
          style={{
            boxShadow: "0 10px 30px -10px rgba(37, 211, 102, 0.15), 0 1px 1px 0 rgba(255, 255, 255, 0.05) inset"
          }}
        >
          {/* Green dot status */}
          <div className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>

          <div className="flex-1">
            <h4 className="text-xs font-semibold text-foreground tracking-wide mb-0.5">
              Anleon Publicidad
            </h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              ¿Tienes algún proyecto en mente? ¡Escríbenos ahora mismo!
            </p>
          </div>

          {/* Close Button */}
          <button 
            onClick={handleDismissTooltip}
            className="text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full p-0.5 transition-all"
            aria-label="Cerrar notificación"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          {/* Tooltip Arrow */}
          <div className="absolute bottom-[-6px] right-6 w-3 h-3 rotate-45 bg-card/90 border-r border-b border-border/80" />
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 select-none"
      >
        {/* Dynamic Ripple Rings (Pulsing Circles) */}
        <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/20 animate-ping opacity-75 duration-1000 pointer-events-none" />
        <span className="absolute -inset-3 rounded-full bg-[#25D366]/10 animate-ping opacity-40 duration-1000 delay-300 pointer-events-none" />

        {/* Glow effect on hover */}
        <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

        {/* Original WhatsApp SVG Logo */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md transform transition-transform duration-300 group-hover:rotate-[6deg]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  )
}
