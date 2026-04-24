import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const projects = [
  {
    title: 'Fintech Dashboard',
    category: 'UI/UX DESIGN, DEVELOPMENT',
    image: '/images/projects/fintech-dashboard.jpg',
  },
  {
    title: 'EcoTravel App',
    category: 'MOBILE APP, BRANDING',
    image: '/images/projects/ecotravel-app.jpg',
  },
  {
    title: 'NeonVerse Game',
    category: 'WEB3, UI DESIGN',
    image: '/images/projects/neonverse-game.jpg',
  },
  {
    title: 'Aurora Health',
    category: 'PRODUCT DESIGN, STRATEGY',
    image: '/images/projects/aurora-health.jpg',
  },
]

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-[120px] px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-pink hover:gap-2 transition-all duration-200"
            >
              View all Work <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-brand-surface">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-brand-pink transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-wider text-brand-tertiary uppercase">
                    {project.category}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Mobile "View all" link */}
        <FadeIn className="mt-10 sm:hidden text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-pink"
          >
            View all Work <ArrowUpRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
