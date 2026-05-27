import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { WhatsappButton } from '@/components/whatsapp-button'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Anleon Publicidad | Tu Lo Sueñas, Nosotros Lo Construimos',
  description: 'Más de 20 años materializando tus sueños en publicidad. Avisos luminosos, litografía, gran formato y más. Calidad y compromiso garantizado.',
  keywords: 'publicidad, avisos luminosos, litografía, gran formato, señalización, neón, 3D, impresión',
  generator: 'v0.app',
  icons: {
    icon: '/logo.webp',
    apple: '/logo.webp',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <WhatsappButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
