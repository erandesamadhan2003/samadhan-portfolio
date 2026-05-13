import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const end = parseInt(target)
    const duration = 1500
    const step = duration / end
    const timer = setInterval(() => {
      start += Math.ceil(end / 60)
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, step)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

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

const achievements = [
  {
    icon: '🏆',
    title: 'HackIIITV 2025 Winner',
    subtitle: '1st Place · IIIT Vadodara · April 2025',
    desc: 'Secured 1st place among 50+ competing teams by building a real-time collaborative coding platform with low-latency synchronization and intelligent code assistance.',
    metric: '50+',
    metricLabel: 'Teams Beaten',
    color: '#FF7A00',
  },
  {
    icon: '🏁',
    title: 'Hackathon Regular',
    subtitle: '10+ Hackathons Attended',
    desc: 'Participated in 10+ hackathons across college and competitive events, building fast prototypes, collaborating under pressure, and turning ideas into demos quickly.',
    metric: '10',
    metricLabel: 'Hackathons Attended',
    color: '#FFB347',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 relative">
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-[#FF7A00]/6 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="section-label mb-4">05 — Achievements</p>
          <h2 className="font-sora font-extrabold text-4xl lg:text-5xl text-[#F5F5F5] mb-16 leading-tight">
            Milestones & <span className="text-[#FF7A00]">Recognition</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {achievements.map((ach, i) => (
            <FadeIn key={ach.title} delay={i * 0.15}>
              <motion.div
                className="glass rounded-2xl p-8 glass-hover transition-all duration-300 group relative overflow-hidden"
                whileHover={{ y: -4 }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: ach.color }}
                />

                <div className="relative z-10">
                  <div className="text-5xl mb-5">{ach.icon}</div>

                  <div className="flex items-end justify-between mb-4 gap-4 flex-wrap">
                    <div>
                      <h3 className="font-sora font-bold text-xl text-[#F5F5F5] group-hover:text-[#FF7A00] transition-colors">
                        {ach.title}
                      </h3>
                      <p className="font-mono text-[11px] text-[#666] mt-1">{ach.subtitle}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-sora font-extrabold text-4xl" style={{ color: ach.color }}>
                        <AnimatedCounter target={ach.metric.replace('+', '')} suffix="+" />
                      </p>
                      <p className="font-mono text-[10px] text-[#666] uppercase tracking-wider">{ach.metricLabel}</p>
                    </div>
                  </div>

                  <p className="text-[#888] text-sm leading-relaxed">{ach.desc}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Stats row */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '20', suffix: '+', label: 'Projects Built' },
              { value: '50', suffix: '+', label: 'Teams Competed' },
              { value: '95', suffix: '%', label: 'Code Reuse (RN)' },
              { value: '7', suffix: '.8', label: 'CGPA Score' },
            ].map((stat, i) => (
              <div key={stat.label} className="glass rounded-xl p-5 text-center">
                <p className="font-sora font-extrabold text-3xl text-[#FF7A00]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-mono text-[10px] text-[#666] uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
