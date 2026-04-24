import Navbar from '../components/Navbar'
import HeroSection from '../sections/HeroSection'
import WorkSection from '../sections/WorkSection'
import ServicesSection from '../sections/ServicesSection'
import PartnersSection from '../sections/PartnersSection'
import BlogSection from '../sections/BlogSection'
import CareersSection from '../sections/CareersSection'
import ContactSection from '../sections/ContactSection'
import Footer from '../sections/Footer'

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-[100dvh]">
      <Navbar />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <PartnersSection />
      <BlogSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
