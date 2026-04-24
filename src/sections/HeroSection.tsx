import { motion } from 'framer-motion'
import NebulaBackground from '../components/NebulaBackground'
import MagneticButton from '../components/MagneticButton'

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden">
      <NebulaBackground />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-medium tracking-[0.1em] text-brand-pink uppercase mb-6"
        >
          Wasl Markiting Agency
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-white leading-tight tracking-tight mb-6"
        >
          We build products that people{' '}
          <span className="text-brand-pink">love.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Wasl is a full-service digital agency crafting exceptional web and mobile
          experiences for ambitious brands.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton className="bg-white hover:bg-[#E4E4E7] text-black font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 w-full sm:w-auto">
            View Our Work
          </MagneticButton>
          <MagneticButton className="bg-transparent border border-brand-border hover:border-brand-tertiary text-white font-medium px-8 py-3.5 rounded-lg transition-colors duration-200 w-full sm:w-auto">
            Get in Touch
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-brand-tertiary rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-brand-pink rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
