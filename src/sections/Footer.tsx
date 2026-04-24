import { useState } from 'react'
import { Diamond, Twitter, Linkedin, Instagram, Dribbble } from 'lucide-react'

const sitemapLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Insights', href: '#insights' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'Twitter', href: '#', icon: Twitter },
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'Dribbble', href: '#', icon: Dribbble },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert('Thanks for subscribing!')
      setEmail('')
    }
  }

  return (
    <footer className="pt-16 md:pt-[60px] pb-8 px-6 border-t border-brand-border bg-brand-dark">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Diamond className="w-5 h-5 text-brand-pink" />
              <span className="text-lg font-semibold text-white">Wasl</span>
            </a>
            <p className="text-sm text-brand-muted">
              Crafting digital experiences.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h5 className="text-xs font-medium tracking-wider text-white uppercase mb-4">
              Sitemap
            </h5>
            <ul className="space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-xs font-medium tracking-wider text-white uppercase mb-4">
              Social
            </h5>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors duration-200 inline-flex items-center gap-2"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h5 className="text-xs font-medium tracking-wider text-white uppercase mb-4">
              Stay Updated
            </h5>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="flex-1 min-w-0 bg-brand-surface border border-brand-border text-white placeholder:text-brand-tertiary text-sm px-3 py-2 rounded-lg focus:border-brand-pink focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-brand-border hover:bg-brand-tertiary text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-tertiary">
            &copy; 2026 Wasl Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-brand-tertiary">
            <a href="#" className="hover:text-brand-muted transition-colors">
              Privacy Policy
            </a>
            <span>&bull;</span>
            <a href="#" className="hover:text-brand-muted transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
