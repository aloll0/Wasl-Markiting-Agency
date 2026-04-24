import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 md:py-[120px] px-6">
      <div className="max-w-[600px] mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-base md:text-lg text-brand-muted max-w-[500px] mx-auto">
            Let's create something extraordinary together.
          </p>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-brand-surface border border-brand-border text-white placeholder:text-brand-tertiary px-4 py-3 rounded-lg focus:border-brand-pink focus:outline-none transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-brand-surface border border-brand-border text-white placeholder:text-brand-tertiary px-4 py-3 rounded-lg focus:border-brand-pink focus:outline-none transition-colors duration-200"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
                rows={5}
                className="w-full bg-brand-surface border border-brand-border text-white placeholder:text-brand-tertiary px-4 py-3 rounded-lg focus:border-brand-pink focus:outline-none transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-brand-pink hover:bg-brand-pink-hover text-white font-medium py-4 rounded-lg transition-colors duration-200"
            >
              Send Message
            </motion.button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
