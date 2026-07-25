import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub as Github,
  FaLinkedin as Linkedin,
  FaEnvelope as Mail,
  FaArrowDown as ArrowDown,
  FaFilePdf as FilePdf,
  FaXmark as XMark,
  FaDownload as DownloadIcon,
} from 'react-icons/fa6'
import {
  SiKubernetes as KubernetesIcon,
  SiReact as ReactIcon,
  SiEthereum as EthereumIcon,
  SiCplusplus as CppIcon,
} from 'react-icons/si'

const titles = [
  'Building Scalable Systems',
  'Engineering Cloud Infrastructure',
  'Architecting Real-Time Applications',
  'Linux • Kubernetes • Blockchain',
  'Creating Production-Grade Platforms',
]

const floatingCards = [
  {
    label: 'DevOps Engineer',
    sublabel: 'K8s · Docker · Terraform',
    icon: KubernetesIcon,
    iconColor: '#22d3ee',
    glowColor: 'rgba(34,211,238,0.2)',
    borderColor: 'rgba(34,211,238,0.3)',
    bgFrom: 'rgba(6,182,212,0.18)',
    bgTo: 'rgba(6,182,212,0.04)',
    top: '18%',
    left: '62%',
    delay: 0,
  },
  {
    label: 'Full Stack Developer',
    sublabel: 'React · Node · Postgres',
    icon: ReactIcon,
    iconColor: '#38bdf8',
    glowColor: 'rgba(56,189,248,0.2)',
    borderColor: 'rgba(56,189,248,0.3)',
    bgFrom: 'rgba(14,165,233,0.18)',
    bgTo: 'rgba(14,165,233,0.04)',
    top: '60%',
    left: '51%',
    delay: 1,
  },
  {
    label: 'Blockchain Developer',
    sublabel: 'Solidity · Ethereum · Web3',
    icon: EthereumIcon,
    iconColor: '#a78bfa',
    glowColor: 'rgba(167,139,250,0.2)',
    borderColor: 'rgba(167,139,250,0.3)',
    bgFrom: 'rgba(139,92,246,0.18)',
    bgTo: 'rgba(139,92,246,0.04)',
    top: '82%',
    left: '72%',
    delay: 0.5,
  },
  {
    label: 'Systems Programmer',
    sublabel: 'C++ · Linux · POSIX',
    icon: CppIcon,
    iconColor: '#4ade80',
    glowColor: 'rgba(74,222,128,0.2)',
    borderColor: 'rgba(74,222,128,0.3)',
    bgFrom: 'rgba(34,197,94,0.18)',
    bgTo: 'rgba(34,197,94,0.04)',
    top: '35%',
    left: '83%',
    delay: 1.5,
  },
]

function ResumeModal({ onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal panel */}
        <motion.div
          className="relative z-10 w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: '#0F0F0F',
            border: '1px solid rgba(255,179,71,0.25)',
            boxShadow: '0 0 80px rgba(255,122,0,0.15), 0 40px 80px rgba(0,0,0,0.7)',
          }}
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Title bar */}
          <div
            className="flex items-center justify-between px-5 py-3 border-b flex-shrink-0"
            style={{ borderColor: 'rgba(255,179,71,0.15)', background: 'rgba(255,122,0,0.04)' }}
          >
            <div className="flex items-center gap-3">
              <FilePdf size={14} style={{ color: '#FFB347' }} />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#FFB347]">Resume — Samadhan Erande</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/Samadhan_Subhash_Erande.pdf"
                download="Samadhan_Subhash_Erande.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(255,179,71,0.12)', border: '1px solid rgba(255,179,71,0.3)', color: '#FFB347' }}
              >
                <DownloadIcon size={11} /> Download
              </a>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-8 h-8 rounded-lg text-[#555] hover:text-[#FF7A00] hover:bg-[rgba(255,122,0,0.1)] transition-all"
              >
                <XMark size={16} />
              </button>
            </div>
          </div>

          {/* PDF iframe */}
          <div className="flex-1 overflow-hidden">
            <iframe
              src="/Samadhan_Subhash_Erande.pdf"
              className="w-full h-full"
              title="Samadhan Erande Resume"
              style={{ border: 'none', background: '#1a1a1a' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [showResume, setShowResume] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titles.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Glow orbs */}
      <div className="absolute top-[-150px] right-[-80px] w-[600px] h-[600px] rounded-full bg-[#FF7A00]/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#FFB347]/6 blur-[120px]" />

      {/* Floating domain cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          className="absolute hidden lg:flex items-center gap-3 rounded-2xl px-4 py-3 font-mono backdrop-blur-xl"
          style={{
            top: card.top,
            left: card.left,
            background: `linear-gradient(135deg, ${card.bgFrom}, ${card.bgTo})`,
            border: `1px solid ${card.borderColor}`,
            boxShadow: `0 12px 35px rgba(0,0,0,0.35), 0 0 24px ${card.glowColor}`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { delay: card.delay + 1, duration: 0.5 },
            scale: { delay: card.delay + 1, duration: 0.5 },
            y: { delay: card.delay + 1, duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Brand icon */}
          <div
            className="flex items-center justify-center rounded-xl flex-shrink-0"
            style={{
              width: 44,
              height: 44,
              background: `${card.iconColor}18`,
              border: `1px solid ${card.iconColor}40`,
            }}
          >
            <card.icon
              size={24}
              style={{
                color: card.iconColor,
                filter: `drop-shadow(0 0 6px ${card.iconColor}cc)`,
              }}
            />
          </div>

          {/* Label + sublabel */}
          <div className="flex flex-col leading-none gap-[5px]">
            <span
              className="text-[13px] font-bold tracking-wide"
              style={{ color: '#EDE8DE' }}
            >
              {card.label}
            </span>
            <span
              className="text-[9px] tracking-widest uppercase"
              style={{ color: card.iconColor, opacity: 0.85 }}
            >
              {card.sublabel}
            </span>
          </div>

          {/* Pulse dot */}
          <span
            className="ml-1 w-1.5 h-1.5 rounded-full pulse-dot flex-shrink-0"
            style={{ background: '#FF7A00' }}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        {/* Left */}
        <div>
          <motion.h1
            className="font-sora font-extrabold text-5xl lg:text-7xl leading-[1.05] mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="text-[#F5F5F5]">Samadhan</span>
            <span className="inline-block w-4 lg:w-6" aria-hidden="true" />
            <span className="gradient-text text-glow">Erande</span>
          </motion.h1>

          <motion.p
            className="font-mono text-sm text-[#888] tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Full Stack Engineer • DevOps Engineer • Blockchain Developer
          </motion.p>

          {/* Animated subtitle */}
          <div className="h-8 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={titleIndex}
                className="text-[#C0C0C0] text-lg font-light"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {titles[titleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-[#FF7A00] text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-[#FFB347] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,122,0,0.35)]"
            >
              View Projects →
            </a>
            <a
              href="https://github.com/erandesamadhan2003"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 glass text-[#EAE4D5] font-semibold text-sm rounded-lg hover:border-[rgba(255,122,0,0.4)] transition-all hover:-translate-y-0.5"
            >
              GitHub Profile
            </a>
            <button
              onClick={() => setShowResume(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,179,71,0.25)]"
              style={{
                background: 'linear-gradient(135deg, rgba(255,179,71,0.15), rgba(255,122,0,0.08))',
                border: '1px solid rgba(255,179,71,0.35)',
                color: '#FFB347',
              }}
            >
              <FilePdf size={14} />
              Resume
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { href: 'https://www.linkedin.com/in/samadhan-erande-103712326/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
              { href: 'https://github.com/erandesamadhan2003', icon: <Github size={16} />, label: 'GitHub' },
              { href: 'mailto:erandesamadhan2003@gmail.com', icon: <Mail size={16} />, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#666] hover:text-[#FF7A00] text-xs transition-colors duration-200"
              >
                {s.icon}
                <span className="font-mono">{s.label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right – Photo Card */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative float">
            {/* Animated border ring */}
            <div className="absolute -inset-[3px] rounded-3xl animated-border opacity-80 blur-[1px]" />
            <div className="absolute -inset-[3px] rounded-3xl animated-border opacity-40" />

            {/* Glass card */}
            <div className="relative glass rounded-3xl overflow-hidden w-72 h-96 lg:w-80 lg:h-[440px]">
              <img
                src="/samadhan.jpg"
                alt="Samadhan Erande"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/60 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl px-4 py-3">
                <p className="font-sora font-bold text-sm text-[#F5F5F5]">Samadhan Erande</p>
                <p className="font-mono text-[10px] text-[#FF7A00] mt-0.5">IIIT Vadodara · B.Tech IT</p>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              className="absolute -left-12 top-12 glass px-3 py-2 rounded-xl text-center float-delay"
              animate={{ x: [0, -4, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="font-sora font-bold text-lg text-[#FF7A00]">20+</p>
              <p className="font-mono text-[9px] text-[#888]">Projects</p>
            </motion.div>

            <motion.div
              className="absolute -right-12 bottom-20 glass px-3 py-2 rounded-xl text-center"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <p className="font-sora font-bold text-lg text-[#FFB347]">10+</p>
              <p className="font-mono text-[9px] text-[#888]">Hackathons</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes marqueeLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Resume PDF Modal */}
      {showResume && <ResumeModal onClose={() => setShowResume(false)} />}
    </section>
  )
}