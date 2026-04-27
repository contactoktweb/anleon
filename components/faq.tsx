"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la fabricación de un aviso?",
    answer: "El tiempo varía según el tipo y complejidad. Un aviso estándar puede estar listo en 5-7 días hábiles. Para proyectos más elaborados, el tiempo puede ser de 10-15 días hábiles."
  },
  {
    question: "¿Hacen instalaciones fuera de la ciudad?",
    answer: "Sí, realizamos instalaciones en todo el territorio colombiano. Para instalaciones fuera de Bogotá, coordinamos la logística y transporte de manera eficiente."
  },
  {
    question: "¿Cómo puedo obtener una cotización?",
    answer: "Puedes solicitar una cotización a través del formulario de contacto, por WhatsApp o llamando a nuestras líneas. Solo necesitamos saber el tipo de aviso, medidas y si requieres instalación."
  },
  {
    question: "¿Qué garantía ofrecen en sus productos?",
    answer: "Todos nuestros productos cuentan con garantía. Los avisos luminosos tienen garantía de 1 a 2 años dependiendo del paquete. La garantía cubre el sistema eléctrico, materiales y mano de obra."
  },
  {
    question: "¿Ofrecen servicio de diseño?",
    answer: "Por supuesto. Contamos con diseñadores profesionales. Podemos trabajar con tu diseño existente o crear uno completamente nuevo. El servicio de diseño está incluido en nuestros paquetes."
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-medium mb-4 tracking-wide text-sm uppercase">FAQ</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Preguntas
            <span className="text-gradient"> frecuentes</span>
          </h2>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? "border-primary/30 bg-primary/5" 
                  : "border-border bg-card hover:border-primary/20"
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-medium transition-colors ${openIndex === index ? "text-primary" : ""}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === index 
                    ? "bg-primary text-white rotate-0" 
                    : "bg-secondary text-muted-foreground"
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
