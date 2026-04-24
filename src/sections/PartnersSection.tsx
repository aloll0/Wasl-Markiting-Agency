import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const partners = [
  { name: 'Next.js', logo: 'Next.js' },
  { name: 'Salla', logo: 'Salla' },
  { name: 'Figma', logo: 'Figma' },
  { name: 'Zid', logo: 'Zid' },
  { name: 'React', logo: 'React' },
  { name: 'Shopify', logo: 'Shopify' },
  { name: 'WordPress', logo: 'WordPress' },
]

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-20 px-6 border-t border-brand-border overflow-hidden">
      <div className="max-w-[1000px] mx-auto">
        <FadeIn className="text-center mb-10">
          <p className="text-xs font-medium tracking-[0.05em] text-brand-muted uppercase">
            Trusted by industry leaders
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-10"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: 'linear',
              }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[120px]"
                >
                  <div className="text-2xl md:text-3xl font-bold text-brand-tertiary opacity-60 hover:opacity-100 transition">
                    {partner.logo}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}