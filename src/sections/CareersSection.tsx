import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const jobs = [
  {
    title: 'Senior Product Designer',
    department: 'Design',
    location: 'Remote',
  },
  {
    title: 'Frontend Engineer',
    department: 'Engineering',
    location: 'Remote',
  },
  {
    title: 'Growth Marketing Manager',
    department: 'Marketing',
    location: 'Remote',
  },
]

export default function CareersSection() {
  return (
    <section id="careers" className="py-24 md:py-[120px] px-6 bg-brand-surface">
      <div className="max-w-[1000px] mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Join our team
          </h2>
          <p className="text-base md:text-lg text-brand-muted max-w-xl mx-auto">
            We're always looking for talented individuals.
          </p>
        </FadeIn>

        {/* Job List */}
        <div className="divide-y divide-brand-border border-t border-brand-border">
          {jobs.map((job, i) => (
            <FadeIn key={job.title} delay={i * 0.1}>
              <motion.a
                href="#"
                whileHover={{ backgroundColor: 'rgba(28, 28, 30, 1)' }}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 px-4 group transition-colors duration-200 border-b border-brand-border"
              >
                <div>
                  <h4 className="text-lg font-semibold text-white group-hover:text-brand-pink transition-colors duration-200">
                    {job.title}
                  </h4>
                  <p className="text-xs font-medium tracking-wider text-brand-tertiary uppercase mt-1">
                    {job.department}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-brand-muted">{job.location}</span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Apply <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
