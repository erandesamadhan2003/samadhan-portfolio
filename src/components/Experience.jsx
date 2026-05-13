import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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

const milestones = [
  { label: 'Cross-platform app', status: 'shipped', desc: '95% code reuse across Android & iOS' },
  { label: 'Redux state management', status: 'shipped', desc: 'Efficient data handling at scale' },
  { label: 'RESTful API integration', status: 'shipped', desc: 'Stable application performance' },
  { label: 'Feature delivery', status: 'shipped', desc: 'Delivered key features ahead of schedule' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 w-64 h-64 bg-[#FF7A00]/5 blur-[80px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="section-label mb-4">04 — Experience</p>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-[#F5F5F5] mb-16 leading-tight">
            Engineering <span className="text-[#FF7A00]">Journey</span>
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline card */}
          <FadeIn delay={0.1}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF7A00] via-[#FF7A00]/30 to-transparent" />

              <div className="relative pl-16">
                {/* Dot */}
                <div className="absolute left-[21px] top-8 w-3 h-3 rounded-full bg-[#FF7A00] glow-orange" />

                <div className="glass rounded-2xl p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#FF7A00]">Aug 2025 – Jan 2026</span>
                      <h3 className="font-sora font-bold text-xl text-[#F5F5F5] mt-1">Project Intern</h3>
                      <p className="text-[#C0C0C0] text-sm mt-0.5">React Native Developer</p>
                    </div>
                    <div className="glass px-3 py-1.5 rounded-lg text-xs font-mono text-[#888]">
                      Remote
                    </div>
                  </div>

                  <p className="font-sora font-semibold text-[#FF7A00] mb-6 text-sm">
                    Indian Knowledge Systems
                  </p>

                  {/* Deployment-style milestones */}
                  <div className="space-y-3">
                    {milestones.map((m, i) => (
                      <motion.div
                        key={m.label}
                        className="flex items-start gap-3 p-3 bg-[#242424] rounded-xl"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3, duration: 0.4 }}
                      >
                        <div className="flex items-center gap-1.5 mt-0.5 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                          <span className="font-mono text-[9px] text-[#FF7A00] uppercase">{m.status}</span>
                        </div>
                        <div>
                          <p className="text-[#EAE4D5] text-xs font-semibold">{m.label}</p>
                          <p className="text-[#666] text-[11px] mt-0.5">{m.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFB347]/60 to-transparent" />

              <div className="relative pl-16">
                <div className="absolute left-[21px] top-8 w-3 h-3 rounded-full bg-[#FFB347]" style={{ boxShadow: '0 0 12px rgba(255,179,71,0.5)' }} />

                <div className="glass rounded-2xl p-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#FFB347]">Aug 2023 – May 2027</span>
                  <h3 className="font-sora font-bold text-xl text-[#F5F5F5] mt-1">Bachelor of Technology</h3>
                  <p className="text-[#C0C0C0] text-sm mt-0.5 mb-2">Information Technology</p>
                  <p className="font-sora font-semibold text-[#FFB347] mb-6 text-sm">
                    IIIT Vadodara
                  </p>

                  <div className="space-y-3">
                    <div className="p-3 bg-[#242424] rounded-xl flex items-center justify-between">
                      <span className="text-[#888] text-xs">Current CGPA</span>
                      <span className="font-sora font-bold text-[#FFB347]">7.8 / 10</span>
                    </div>
                    <div className="p-3 bg-[#242424] rounded-xl flex items-center justify-between">
                      <span className="text-[#888] text-xs">Hackathons Attended</span>
                      <span className="font-sora font-bold text-[#FF7A00]">10+</span>
                    </div>
                    <div className="p-3 bg-[#242424] rounded-xl flex items-center justify-between">
                      <span className="text-[#888] text-xs">Hackathon Placement</span>
                      <span className="font-sora font-bold text-[#FF7A00]">🏆 1st Place</span>
                    </div>
                    <div className="p-3 bg-[#242424] rounded-xl flex items-center justify-between">
                      <span className="text-[#888] text-xs">Batch</span>
                      <span className="font-mono text-xs text-[#666]">2023 – 2027</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
