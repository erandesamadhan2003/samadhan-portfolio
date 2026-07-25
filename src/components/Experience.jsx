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

const experiences = [
  {
    period: 'Oct 2025 – Jan 2026',
    location: 'Hybrid',
    role: 'FullStack Developer Intern',
    subtitle: 'Large-Scale ERP System — 5L+ Users',
    company: 'iTSoft Developers',
    accentColor: '#38bdf8',
    bgColor: 'rgba(56,189,248,0.08)',
    milestones: [
      { label: 'Enterprise Architecture', desc: 'Angular + Material + Signals with scalable modular design' },
      { label: '5L+ User Scale', desc: 'Role-based workflows for Students, Faculty, and Admins' },
      { label: 'ERP Modules Built', desc: 'Admission, Attendance, Results, Library, Hostel, Fees' },
      { label: 'C# API Integration', desc: 'Authentication, access control & enterprise workflows' },
    ],
  },
  {
    period: 'Feb 2025 – Jul 2026',
    location: 'Hybrid',
    role: 'Project Intern',
    subtitle: 'Mid-Day Meal & Attendance System',
    company: 'Government of Bhilwara, Rajasthan',
    accentColor: '#4ade80',
    bgColor: 'rgba(74,222,128,0.08)',
    milestones: [
      { label: 'AI Face Recognition', desc: 'MobileFaceNet (ONNX Runtime) via Python FastAPI ML microservice' },
      { label: 'Async ML Job Queue', desc: 'Redis + BullMQ for offline-first sync across mobile clients' },
      { label: 'Cross-Platform Stack', desc: 'Node.js, React, React Native, PostgreSQL in production' },
      { label: 'Production Deployment', desc: 'Automated student attendance & meal counting at scale' },
    ],
  },
]

function ExperienceCard({ exp, delay }) {
  return (
    <FadeIn delay={delay}>
      <div
        className="glass rounded-2xl p-6 flex flex-col h-full transition-all duration-300"
        onMouseEnter={e => e.currentTarget.style.borderColor = exp.accentColor + '50'}
        onMouseLeave={e => e.currentTarget.style.borderColor = ''}
      >
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3 gap-2 flex-wrap">
            <span
              className="font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-lg"
              style={{ color: exp.accentColor, background: exp.bgColor }}
            >
              {exp.period}
            </span>
            <span className="font-mono text-[9px] text-[#888] bg-[#242424] px-2 py-1 rounded">
              {exp.location}
            </span>
          </div>
          <h3 className="font-sora font-bold text-lg text-[#F5F5F5]">{exp.role}</h3>
          <p className="text-[#bbb] text-xs mt-1">{exp.subtitle}</p>
        </div>

        <p className="font-sora font-semibold text-xs mb-4" style={{ color: exp.accentColor }}>
          {exp.company}
        </p>

        {/* Milestones */}
        <div className="space-y-2.5 flex-1">
          {exp.milestones.map((m, i) => (
            <motion.div
              key={m.label}
              className="flex items-start gap-2.5"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2, duration: 0.3 }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: exp.accentColor, boxShadow: `0 0 6px ${exp.accentColor}88` }}
              />
              <div>
                <p className="text-[#F5F5F5] font-semibold text-xs">{m.label}</p>
                <p className="text-[#999] text-[10px] mt-0.5 leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

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
          {/* Internships */}
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} delay={0.1 + i * 0.08} />
          ))}

          {/* Education */}
          <FadeIn delay={0.26}>
            <div className="glass rounded-2xl p-6 flex flex-col h-full hover:border-[rgba(255,179,71,0.3)] transition-all duration-300">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#FFB347] bg-[#FFB347]/10 px-3 py-1 rounded-lg inline-block">
                  Aug 2023 – May 2027
                </span>
                <h3 className="font-sora font-bold text-lg text-[#F5F5F5] mt-3">Bachelor of Technology</h3>
                <p className="text-[#bbb] text-xs mt-1">Information Technology</p>
                <p className="font-sora font-semibold text-[#FFB347] text-xs mt-3">IIIT Vadodara</p>
              </div>

              <div className="space-y-2 mt-5 flex-1">
                {[
                  { label: 'CGPA', value: '7.8 / 10', color: '#FFB347' },
                  { label: 'Hackathons', value: '10+', color: '#FF7A00' },
                  { label: 'Best Placement', value: '🏆 1st', color: '#FF7A00' },
                ].map(stat => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ background: 'rgba(255,179,71,0.06)', border: '1px solid rgba(255,179,71,0.15)' }}
                  >
                    <span className="text-[#bbb] text-xs">{stat.label}</span>
                    <span className="font-sora font-bold text-sm" style={{ color: stat.color }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

