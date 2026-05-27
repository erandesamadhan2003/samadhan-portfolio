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

const internshipMilestones = [
  { label: 'Cross-platform app', status: 'shipped', desc: '95% code reuse across Android & iOS' },
  { label: 'Redux state management', status: 'shipped', desc: 'Efficient data handling at scale' },
  { label: 'RESTful API integration', status: 'shipped', desc: 'Stable application performance' },
  { label: 'Feature delivery', status: 'shipped', desc: 'Delivered key features ahead of schedule' },
]

const erpMilestones = [
  { label: 'Enterprise architecture', status: 'shipped', desc: 'Modular design with Angular & Signals' },
  { label: 'ERP modules', status: 'shipped', desc: 'Built Admission, Attendance, Results, Library, Hostel, Fees' },
  { label: 'C# API integration', status: 'shipped', desc: 'Authentication & access control workflows' },
  { label: 'Scale to 5L+ users', status: 'in-progress', desc: 'Supporting role-based workflows for Students, Faculty, Admins' },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {/* First Internship */}
          <FadeIn delay={0.1}>
            <div className="glass rounded-2xl p-6 flex flex-col h-full hover:border-[rgba(255,122,0,0.3)] transition-all">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-lg">Aug 2025 – Jan 2026</span>
                  <span className="font-mono text-[9px] text-[#888] bg-[#242424] px-2 py-1 rounded">Remote</span>
                </div>
                <h3 className="font-sora font-bold text-lg text-[#F5F5F5]">Project Intern</h3>
                <p className="text-[#C0C0C0] text-xs mt-1">React Native Developer</p>
              </div>

              <p className="font-sora font-semibold text-[#FF7A00] text-xs mb-4">
                Indian Knowledge Systems
              </p>

              {/* Milestones */}
              <div className="space-y-2 flex-1">
                {internshipMilestones.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="flex items-start gap-2 text-xs"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.2, duration: 0.3 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF7A00] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-[#F5F5F5] font-semibold text-xs">{m.label}</p>
                      <p className="text-[#888] text-[10px] mt-0.5">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ERP System Internship */}
          <FadeIn delay={0.15}>
            <div className="glass rounded-2xl p-6 flex flex-col h-full hover:border-[rgba(255,122,0,0.3)] transition-all">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-lg">Feb 2026 – May 2026</span>
                  <span className="font-mono text-[9px] text-[#888] bg-[#242424] px-2 py-1 rounded">Hybrid</span>
                </div>
                <h3 className="font-sora font-bold text-lg text-[#F5F5F5]">FullStack Developer Intern</h3>
                <p className="text-[#C0C0C0] text-xs mt-1">MVP ERP System Development</p>
              </div>

              <p className="font-sora font-semibold text-[#FF7A00] text-xs mb-3">
                Enterprise ERP Platform
              </p>

              <p className="text-[#888] text-[11px] mb-4 leading-relaxed">
                Large-scale system serving 5L+ users with role-based workflows for Students, Faculty, and Admins.
              </p>

              {/* Milestones */}
              <div className="space-y-2 flex-1">
                {erpMilestones.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="flex items-start gap-2 text-xs"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.25, duration: 0.3 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FF7A00] mt-1.5 shrink-0" />
                    <div>
                      <p className="text-[#F5F5F5] font-semibold text-xs">{m.label}</p>
                      <p className="text-[#888] text-[10px] mt-0.5">{m.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Education */}
          <FadeIn delay={0.2}>
            <div className="glass rounded-2xl p-6 flex flex-col h-full hover:border-[rgba(255,179,71,0.3)] transition-all">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#FFB347] bg-[#FFB347]/10 px-3 py-1 rounded-lg inline-block">Aug 2023 – May 2027</span>
                <h3 className="font-sora font-bold text-lg text-[#F5F5F5] mt-3">Bachelor of Technology</h3>
                <p className="text-[#C0C0C0] text-xs mt-1">Information Technology</p>
                <p className="font-sora font-semibold text-[#FFB347] text-xs mt-3">
                  IIIT Vadodara
                </p>
              </div>

              <div className="space-y-2 mt-4 flex-1">
                <div className="flex items-center justify-between p-3 bg-[#242424] rounded-lg">
                  <span className="text-[#888] text-xs">CGPA</span>
                  <span className="font-sora font-bold text-[#FFB347] text-sm">7.8 / 10</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#242424] rounded-lg">
                  <span className="text-[#888] text-xs">Hackathons</span>
                  <span className="font-sora font-bold text-[#FF7A00] text-sm">10+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#242424] rounded-lg">
                  <span className="text-[#888] text-xs">Best Placement</span>
                  <span className="font-sora font-bold text-[#FF7A00] text-sm">🏆 1st</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
