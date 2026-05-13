import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars as Menu, FaXmark as X } from 'react-icons/fa6'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-[#0F0F0F]/90 backdrop-blur-xl border-b border-[rgba(255,122,0,0.12)]' : 'py-6 bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-sora font-extrabold text-lg tracking-tight">
          <span className="text-[#F5F5F5]">SE</span>
          <span className="text-[#FF7A00]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[#888] hover:text-[#FF7A00] text-xs font-medium uppercase tracking-widest transition-colors duration-200 link-hover"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="https://github.com/erandesamadhan2003"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF7A00] text-black text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#FFB347] transition-all duration-200 hover:-translate-y-0.5"
        >
          GitHub ↗
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#EAE4D5]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1C1C1C] border-t border-[rgba(255,122,0,0.12)]"
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-[#888] hover:text-[#FF7A00] text-sm font-medium uppercase tracking-wider transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/erandesamadhan2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex px-5 py-2 bg-[#FF7A00] text-black text-xs font-bold uppercase tracking-wider rounded-md"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
