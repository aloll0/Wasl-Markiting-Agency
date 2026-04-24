import { motion } from 'framer-motion'
import { Zap, Palette, Code2, ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const services = [
  {
    icon: Zap,
    title: 'Strategy',
    description:
      'We define the roadmap. User research, competitive analysis, and product strategy to ensure market fit.',
    link: '#',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'Pixel-perfect interfaces. We craft intuitive, beautiful user experiences for web and mobile.',
    link: '#',
  },
  {
    icon: Code2,
    title: 'Development',
    description:
      'Robust engineering. We build scalable frontends and backends with modern technologies.',
    link: '#',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-[120px] px-6 bg-brand-surface">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            What we do
          </h2>
          <p className="text-base md:text-lg text-brand-muted max-w-xl mx-auto">
            We offer a comprehensive suite of digital services.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: '#52525B' }}
                transition={{ duration: 0.3 }}
                className="bg-brand-dark border border-brand-border rounded-2xl p-8 md:p-10 h-full"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-brand-pink" />
                </div>

                {/* Title */}
                <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>

                {/* Description */}
                <p className="text-base text-brand-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <a
                  href={service.link}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-pink hover:gap-2.5 transition-all duration-200"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
