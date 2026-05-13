import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FaGithub as Github,
  FaArrowUpRightFromSquare as ExternalLink,
  FaChevronDown as ChevronDown,
  FaChevronUp as ChevronUp,
  FaShieldHalved as ShieldCheck,
  FaBolt as Zap,
  FaTerminal as Terminal,
  FaServer as Server,
  FaArrowsRotate as RefreshCw,
  FaGamepad as Gamepad2,
  FaWallet as Wallet,
  FaUsers as Users,
  FaDatabase as Database,
} from 'react-icons/fa6'

const FILTERS = ['All', 'DevOps', 'Blockchain', 'Systems', 'Full Stack', 'Real-Time', 'Mobile']

const projects = [
  {
    title: 'SecureVote',
    subtitle: 'Blockchain E-Voting DApp',
    desc: 'Decentralized e-voting platform on Ethereum with Solidity smart contracts. Role-based access control, cryptographic verification, and immutable voting records — zero centralized manipulation risk.',
    stack: ['Solidity', 'Ethereum', 'Ethers.js', 'Hardhat', 'OpenZeppelin'],
    github: 'https://github.com/erandesamadhan2003/SecureVote-Blockchain',
    accent: '#FF7A00', icon: ShieldCheck, tag: 'Blockchain', filter: 'Blockchain',
  },
  {
    title: 'CoCode',
    subtitle: 'Real-Time Collaborative Code Editor',
    desc: '50+ concurrent users, low-latency sync via WebSockets, shared rooms, real-time code updates. HackIIITV 2025 winning project.',
    stack: ['React.js', 'Node.js', 'Socket.io', 'WebSockets'],
    github: 'https://github.com/erandesamadhan2003/hackIIITV',
    accent: '#FFB347', icon: Zap, tag: '🏆 HackIIITV Winner', filter: 'Real-Time',
  },
  {
    title: 'Custom Unix Shell',
    subtitle: 'Systems Programming in C++',
    desc: 'Feature-rich shell from scratch — command parsing, execution, piping, chaining, process management, intelligent tab-completion. Replicates core Unix shell behavior.',
    stack: ['C++', 'Unix System Calls', 'Process Management'],
    github: 'https://github.com/erandesamadhan2003/shell',
    accent: '#C0C0C0', icon: Terminal, tag: 'Systems', filter: 'Systems',
  },
  {
    title: 'Custom HTTP Server',
    subtitle: 'Network Systems Programming',
    desc: 'HTTP/1.1 server from scratch — request parsing, response generation, connection handling, static file serving. Zero frameworks.',
    stack: ['C++', 'TCP/IP', 'HTTP Protocol', 'POSIX Sockets'],
    github: 'https://github.com/erandesamadhan2003/HTTP-Server',
    accent: '#FF7A00', icon: Server, tag: 'Systems', filter: 'Systems',
  },
  {
    title: 'High-Availability Module Hot-Swap',
    subtitle: 'Infrastructure Engineering',
    desc: 'Zero-downtime module hot-swapping system. Advanced process management, dynamic loading, and fault-tolerant system design for production workloads.',
    stack: ['C++', 'Linux', 'IPC', 'Process Management', 'Dynamic Loading'],
    github: 'https://github.com/erandesamadhan2003/High-Availability-Module-Hot-Swap',
    accent: '#FFB347', icon: RefreshCw, tag: 'Systems', filter: 'Systems',
  },
  {
    title: 'SketchNSnort',
    subtitle: 'Real-Time Multiplayer Drawing Game',
    desc: 'Multiplayer drawing game with real-time canvas sync, live game state across players, and low-latency interaction at scale.',
    stack: ['React.js', 'Node.js', 'WebSockets', 'Socket.io', 'Canvas API'],
    github: 'https://github.com/erandesamadhan2003/Scribble',
    accent: '#C0C0C0', icon: Gamepad2, tag: 'Real-Time', filter: 'Real-Time',
  },
  {
    title: 'WalletPulse',
    subtitle: 'Personal Finance Management System',
    desc: 'Comprehensive finance platform — expense tracking, budget planning, financial analytics, real-time dashboards with interactive charts.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js'],
    github: 'https://github.com/erandesamadhan2003/WalletPulse',
    accent: '#FF7A00', icon: Wallet, tag: 'Full Stack + DevOps', filter: ['Full Stack', 'DevOps'],
  },
  {
    title: 'EmPay HRMS',
    subtitle: 'HR & Payroll Management System',
    desc: 'Full-featured HR management — employee records, attendance, payroll processing, leave management, analytics dashboards.',
    stack: ['React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Redux'],
    github: 'https://github.com/erandesamadhan2003/EmPay_HRMS',
    accent: '#FFB347', icon: Users, tag: 'Full Stack', filter: 'Full Stack',
  },
  {
    title: 'Redis (C++)',
    subtitle: 'In-development Redis-compatible server in C++',
    desc: 'Implementing a Redis-like in-memory key-value store in C++ — core commands, persistence, and pub/sub. Currently in active development.',
    stack: ['C++', 'TCP/IP', 'Persistence', 'Pub/Sub'],
    github: 'https://github.com/erandesamadhan2003/Redis',
    accent: '#C0C0C0', icon: Database, tag: 'Systems', filter: 'Systems',
  },
]

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden h-full flex flex-col group transition-all duration-300 relative"
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.accent}25` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.07, duration: 0.5 }}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg,${project.accent},transparent)` }} />

      <div className="p-6 flex flex-col h-full">
        {/* Header row: icon + tag */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon container — generous size, no clipping */}
          <div
            className="flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105"
            style={{
              width: 52,
              height: 52,
              background: `${project.accent}18`,
              border: `1.5px solid ${project.accent}40`,
              boxShadow: `0 0 20px ${project.accent}15`,
            }}
          >
            <project.icon
              size={26}
              style={{
                color: project.accent,
                filter: `drop-shadow(0 0 4px ${project.accent}88)`,
              }}
            />
          </div>

          <span
            className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md mt-1"
            style={{
              color: project.accent,
              background: `${project.accent}15`,
              border: `1px solid ${project.accent}30`,
            }}
          >
            {project.tag}
          </span>
        </div>

        <h3 className="font-sora font-bold text-base text-[#F5F5F5] mb-0.5 group-hover:text-[#FF7A00] transition-colors">
          {project.title}
        </h3>
        <p className="font-mono text-[10px] text-[#555] mb-3">{project.subtitle}</p>
        <p className="text-[#777] text-xs leading-relaxed flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 my-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] px-2 py-0.5 rounded bg-[#1C1C1C] text-[#666] border border-[rgba(255,255,255,0.05)] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="border-t border-[rgba(255,255,255,0.05)] pt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#666] hover:text-[#FF7A00] transition-colors"
          >
            <Github size={14} /> View Source <ExternalLink size={10} />
          </a>
        </div>
      </div>

      {/* Hover glow corner */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: project.accent }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)

  const matches = (p, f) => {
    if (f === 'All') return true
    if (Array.isArray(p.filter)) return p.filter.includes(f)
    return p.filter === f
  }

  const filtered = projects.filter(p => matches(p, activeFilter))
  const visible = showAll ? filtered : filtered.slice(0, 9)

  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#FFB347]/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <p className="section-label mb-4">03 — Systems</p>
          <h2 className="font-sora font-extrabold text-4xl lg:text-6xl text-[#F5F5F5] mb-4 leading-tight">
            20+ <span className="text-[#FF7A00]">Projects</span> Built
          </h2>
          <p className="text-[#888] mb-8 max-w-xl font-mono text-sm">
            // From blockchain DApps to DevOps pipelines — real systems, real production.
          </p>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f
              const count = f === 'All'
                ? null
                : projects.filter(p => Array.isArray(p.filter) ? p.filter.includes(f) : p.filter === f).length
              return (
                <button
                  key={f}
                  onClick={() => { setActiveFilter(f); setShowAll(false) }}
                  className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-wider border transition-all duration-200 ${isActive
                      ? 'bg-[#FF7A00] text-black border-[#FF7A00]'
                      : 'text-[#666] border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,122,0,0.3)] hover:text-[#FF7A00]'
                    }`}
                >
                  {f}
                  {count !== null && <span className="ml-1.5 opacity-60">{count}</span>}
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {visible.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more */}
        {filtered.length > 9 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 glass rounded-xl text-sm font-semibold text-[#C0C0C0] hover:text-[#FF7A00] hover:border-[rgba(255,122,0,0.3)] transition-all"
            >
              {showAll
                ? <><ChevronUp size={16} /> Show Less</>
                : <><ChevronDown size={16} /> Show All {filtered.length} Projects</>}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}