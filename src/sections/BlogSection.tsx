import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const articles = [
  {
    title: 'The Future of AI in Design',
    excerpt:
      'How artificial intelligence is reshaping the creative process and what it means for designers.',
    image: '/images/blog/ai-design.jpg',
    category: 'TECHNOLOGY',
    date: 'OCT 24, 2024',
  },
  {
    title: 'Scaling Frontend Architecture',
    excerpt:
      'Best practices for maintaining large-scale React applications and component libraries.',
    image: '/images/blog/frontend-arch.jpg',
    category: 'DEVELOPMENT',
    date: 'OCT 18, 2024',
  },
  {
    title: 'Design Systems 101',
    excerpt:
      'Building a cohesive design system that bridges the gap between design and development.',
    image: '/images/blog/design-systems.jpg',
    category: 'DESIGN',
    date: 'OCT 10, 2024',
  },
]

export default function BlogSection() {
  return (
    <section id="insights" className="py-24 md:py-[120px] px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="flex items-end justify-between mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Latest Insights
            </h2>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand-pink hover:gap-2 transition-all duration-200"
            >
              Read all articles <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <FadeIn key={article.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-surface mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Meta */}
                <p className="text-xs font-medium tracking-wider text-brand-tertiary mb-2">
                  {article.category} &bull; {article.date}
                </p>

                {/* Title */}
                <h4 className="text-lg font-semibold text-white group-hover:text-brand-pink transition-colors duration-200 mb-2">
                  {article.title}
                </h4>

                {/* Excerpt */}
                <p className="text-sm text-brand-muted line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        {/* Mobile "View all" link */}
        <FadeIn className="mt-10 sm:hidden text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-brand-pink"
          >
            Read all articles <ArrowUpRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
