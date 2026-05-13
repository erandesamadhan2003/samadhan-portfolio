import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
  FaPaperPlane as Send,
  FaArrowUpRightFromSquare as ArrowUpRight,
} from 'react-icons/fa6'

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

const socials = [
  {
    label: 'GitHub',
    handle: 'erandesamadhan2003',
    href: 'https://github.com/erandesamadhan2003',
    icon: <Github size={20} />,
  },
  {
    label: 'LinkedIn',
    handle: 'samadhan-erande-103712326',
    href: 'https://www.linkedin.com/in/samadhan-erande-103712326/',
    icon: <Linkedin size={20} />,
  },
  {
    label: 'Email',
    handle: 'erandesamadhan2003@gmail.com',
    href: 'mailto:erandesamadhan2003@gmail.com',
    icon: <Mail size={20} />,
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailtoLink = `mailto:erandesamadhan2003@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailtoLink
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#FF7A00]/7 blur-[120px] rounded-full" />
      <div className="absolute right-1/4 top-0 w-64 h-64 bg-[#FFB347]/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="section-label mb-4">06 — Contact</p>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-[#F5F5F5] mb-4 leading-tight">
            Connect & <span className="text-[#FF7A00]">Collaborate</span>
          </h2>
          <p className="text-[#888] mb-16 max-w-xl">
            Open to full-time roles, internships, and interesting engineering projects. Let's build something serious together.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeIn delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-[#666] block mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-[#1C1C1C] border border-[rgba(255,122,0,0.15)] rounded-xl px-4 py-3 text-sm text-[#EAE4D5] placeholder-[#444] focus:outline-none focus:border-[rgba(255,122,0,0.5)] transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-[#666] block mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-[#1C1C1C] border border-[rgba(255,122,0,0.15)] rounded-xl px-4 py-3 text-sm text-[#EAE4D5] placeholder-[#444] focus:outline-none focus:border-[rgba(255,122,0,0.5)] transition-colors"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-[#666] block mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full bg-[#1C1C1C] border border-[rgba(255,122,0,0.15)] rounded-xl px-4 py-3 text-sm text-[#EAE4D5] placeholder-[#444] focus:outline-none focus:border-[rgba(255,122,0,0.5)] transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3.5 bg-[#FF7A00] text-black font-bold text-sm uppercase tracking-wider rounded-xl hover:bg-[#FFB347] transition-all duration-200 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {sent ? '✓ Message Sent!' : (
                  <>
                    <Send size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </FadeIn>

          {/* Socials & info */}
          <FadeIn delay={0.2} className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#666] mb-5">Reach Out Directly</p>
              <div className="space-y-4">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#242424] rounded-xl group hover:bg-[#2a2a2a] transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <div className="text-[#FF7A00]">{s.icon}</div>
                    <div className="flex-1">
                      <p className="text-[#F5F5F5] text-sm font-semibold">{s.label}</p>
                      <p className="font-mono text-[10px] text-[#666] mt-0.5 truncate">{s.handle}</p>
                    </div>
                    <ArrowUpRight size={14} className="text-[#444] group-hover:text-[#FF7A00] transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#666] mb-3">Status</p>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#FF7A00] pulse-dot" />
                <p className="text-[#C0C0C0] text-sm">
                  Available for <span className="text-[#F5F5F5] font-semibold">full-time roles</span> & <span className="text-[#F5F5F5] font-semibold">internships</span>
                </p>
              </div>
              <p className="text-[#666] text-xs mt-2 font-mono">Based in India · Open to remote & relocation</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
