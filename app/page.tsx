import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { BeforeAfter } from "@/components/before-after"
import { VideoWorks } from "@/components/video-works"
import { WhyUs } from "@/components/why-us"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <VideoWorks />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Blog />
      <Footer />
    </main>
  )
}
