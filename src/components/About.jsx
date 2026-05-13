import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaMicrochip as Cpu,
  FaCloud as Cloud,
  FaGlobe as Globe,
  FaTerminal as LucideTerminal,
} from 'react-icons/fa6'

const stats = [
  { value: '20+', label: 'Engineering Projects' },
  { value: '10+', label: 'Hackathons' },
  { value: '7.8', label: 'CGPA / 10' },
  { value: '1st', label: 'HackIIITV 2025' },
]

const traits = [
  {
    icon: Cpu,
    title: 'Systems Engineering',
    desc: 'Building low-level systems, backend architectures, and scalable engineering solutions.',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'Working with Docker, Kubernetes, CI/CD pipelines, and cloud-native infrastructure.',
  },
  {
    icon: Globe,
    title: 'Blockchain Development',
    desc: 'Developing Ethereum smart contracts and decentralized applications.',
  },
  {
    icon: LucideTerminal,
    title: 'Linux Environment',
    desc: 'Passionate about Linux systems, shell environments, and terminal-based workflows.',
  },
]

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-60px',
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#FF7A00]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <FadeIn>
          <p className="section-label mb-4">01 — About</p>

          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-[#F5F5F5] mb-12 max-w-3xl leading-tight">
            Engineering Focused.
            <br />
            <span className="text-[#FF7A00]">Building Real Systems.</span>
          </h2>
        </FadeIn>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-10 lg:mb-12">
          {/* About Content */}
          <FadeIn delay={0.1}>
            <div className="space-y-6 text-[#B8B8B8] text-[15px] leading-8">
              <p>
                I’m a Full Stack and DevOps Engineer pursuing B.Tech in Information Technology at IIIT Vadodara. I enjoy building scalable backend systems, cloud infrastructure, and production-focused applications.
              </p>

              <p>
                My interests include distributed systems, Linux environments, cloud-native technologies, blockchain development, and systems programming. I like understanding how systems work internally rather than only using high-level tools.
              </p>

              <p>
                I built a custom Unix shell in C++ to explore process management, piping, and Linux system calls, which strengthened my understanding of operating systems and low-level engineering concepts.
              </p>

              <p>
                I regularly work with technologies like Docker, Kubernetes, Terraform, React, Node.js, and Ethereum smart contracts while building real-world engineering projects and infrastructure solutions.
              </p>

              <p>
                Beyond development, I actively participate in hackathons and engineering competitions, including securing 1st place at{' '}
                <span className="text-[#FF7A00] font-semibold">
                  HackIIITV 2025
                </span>.
              </p>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl p-6 transition-all duration-300 bg-gradient-to-br from-black/60 to-black/40 border border-[rgba(255,255,255,0.03)]"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-sora font-extrabold text-4xl text-[#FF7A00] mb-0">{stat.value}</p>
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/3">
                      <span className="h-2 w-2 rounded-full bg-[#FF7A00]" />
                    </div>
                  </div>

                  <p className="font-mono text-xs text-[#888] uppercase tracking-wider mt-3">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>

        </div>

        {/* Trait Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {traits.map((trait, i) => (
            <FadeIn key={trait.title} delay={0.1 * i}>
              <motion.div
                className="rounded-2xl p-6 h-full transition-all duration-300 group bg-[#0C0C0C] border border-[rgba(255,255,255,0.03)]"
                whileHover={{ y: -6 }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#FF7A00]/10 to-[#FFB347]/8 border border-[rgba(255,255,255,0.03)]">
                    <trait.icon size={20} className="text-[#FF7A00]" />
                  </div>
                </div>

                <h3 className="font-sora font-bold text-sm text-[#F5F5F5] mb-3 group-hover:text-[#FF7A00] transition-colors">
                  {trait.title}
                </h3>

                <p className="text-[#888] text-sm leading-relaxed">{trait.desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}