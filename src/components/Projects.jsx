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
  FaCloud as Cloud,
  FaCodeBranch as GitBranch,
  FaCube as Cube,
  FaLayerGroup as Layers,
  FaKey as Key,
  FaXmark as XMark,
  FaExpand as ExpandIcon,
} from 'react-icons/fa6'
import { SiKubernetes, SiHelm, SiGithubactions } from 'react-icons/si'

const FILTERS = ['All', 'DevOps', 'Blockchain', 'Systems', 'Full Stack', 'Real-Time', 'Mobile']

const projects = [
  {
    title: 'EmPay HRMS',
    subtitle: 'HR & Payroll Management System',
    desc: 'Production-grade cloud-native HRMS on Azure Kubernetes Service — automated CI/CD via GitHub Actions, Terraform-managed infrastructure, and full DevOps pipeline.',
    stack: ['React + Vite', 'Node.js', 'PostgreSQL 15', 'Redis 6', 'AKS', 'Terraform', 'Helm', 'GitHub Actions'],
    github: 'https://github.com/erandesamadhan2003/EmPay_HRMS',
    accent: '#38bdf8', icon: Cloud, tag: 'DevOps + Full Stack', filter: ['Full Stack', 'DevOps'],
  },
  {
    title: 'CoCode',
    subtitle: 'Real-Time Collaborative Code Editor',
    desc: '50+ concurrent users, low-latency sync via WebSockets, shared rooms, real-time code updates. HackIIITV 2025 winning project.',
    stack: ['React.js', 'Node.js', 'Socket.io', 'WebSockets'],
    github: 'https://github.com/erandesamadhan2003/hackIIITV',
    accent: '#34d399', icon: Zap, tag: '🏆 HackIIITV Winner', filter: 'Real-Time',
  },
  {
    title: 'SecureVote',
    subtitle: 'Blockchain E-Voting DApp',
    desc: 'Decentralized e-voting platform on Ethereum with Solidity smart contracts. Role-based access control, cryptographic verification, and immutable voting records — zero centralized manipulation risk.',
    stack: ['Solidity', 'Ethereum', 'Ethers.js', 'Hardhat', 'OpenZeppelin'],
    github: 'https://github.com/erandesamadhan2003/SecureVote-Blockchain',
    accent: '#a78bfa', icon: ShieldCheck, tag: 'Blockchain', filter: 'Blockchain',
  },
  {
    title: 'WalletPulse',
    subtitle: 'Personal Finance Management System',
    desc: 'Comprehensive finance platform — expense tracking, budget planning, financial analytics, real-time dashboards with interactive charts.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js'],
    github: 'https://github.com/erandesamadhan2003/WalletPulse',
    accent: '#4ade80', icon: Wallet, tag: 'Full Stack + DevOps', filter: ['Full Stack', 'DevOps'],
  },
  {
    title: 'High-Availability Module Hot-Swap',
    subtitle: 'Infrastructure Engineering',
    desc: 'Zero-downtime module hot-swapping system. Advanced process management, dynamic loading, and fault-tolerant system design for production workloads.',
    stack: ['C++', 'Linux', 'IPC', 'Process Management', 'Dynamic Loading'],
    github: 'https://github.com/erandesamadhan2003/High-Availability-Module-Hot-Swap',
    accent: '#facc15', icon: RefreshCw, tag: 'Systems', filter: 'Systems',
  },
  {
    title: 'Custom HTTP Server',
    subtitle: 'Network Systems Programming',
    desc: 'HTTP/1.1 server from scratch — request parsing, response generation, connection handling, static file serving. Zero frameworks.',
    stack: ['C++', 'TCP/IP', 'HTTP Protocol', 'POSIX Sockets'],
    github: 'https://github.com/erandesamadhan2003/HTTP-Server',
    accent: '#fb923c', icon: Server, tag: 'Systems', filter: 'Systems',
  },
  {
    title: 'Custom Unix Shell',
    subtitle: 'Systems Programming in C++',
    desc: 'Feature-rich shell from scratch — command parsing, execution, piping, chaining, process management, intelligent tab-completion. Replicates core Unix shell behavior.',
    stack: ['C++', 'Unix System Calls', 'Process Management'],
    github: 'https://github.com/erandesamadhan2003/shell',
    accent: '#f472b6', icon: Terminal, tag: 'Systems', filter: 'Systems',
  },
  {
    title: 'SketchNSnort',
    subtitle: 'Real-Time Multiplayer Drawing Game',
    desc: 'Multiplayer drawing game with real-time canvas sync, live game state across players, and low-latency interaction at scale.',
    stack: ['React.js', 'Node.js', 'WebSockets', 'Socket.io', 'Canvas API'],
    github: 'https://github.com/erandesamadhan2003/Scribble',
    accent: '#22d3ee', icon: Gamepad2, tag: 'Real-Time', filter: 'Real-Time',
  },
  {
    title: 'Redis (C++)',
    subtitle: 'In-development Redis-compatible server in C++',
    desc: 'Implementing a Redis-like in-memory key-value store in C++ — core commands, persistence, and pub/sub. Currently in active development.',
    stack: ['C++', 'TCP/IP', 'Persistence', 'Pub/Sub'],
    github: 'https://github.com/erandesamadhan2003/Redis',
    accent: '#f87171', icon: Database, tag: 'Systems', filter: 'Systems',
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

function ArchModal({ onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
          onClick={onClose}
        />
        <motion.div
          className="relative z-10 w-full max-w-5xl rounded-2xl overflow-hidden"
          style={{
            border: '1px solid rgba(34,211,238,0.25)',
            boxShadow: '0 0 80px rgba(34,211,238,0.12), 0 40px 80px rgba(0,0,0,0.7)',
            background: '#0A0A0A',
          }}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-5 py-3 border-b"
            style={{ borderColor: 'rgba(34,211,238,0.15)', background: 'rgba(34,211,238,0.04)' }}
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#22d3ee]">
              EmPay HRMS — DevOps Architecture
            </span>
            <button
              onClick={onClose}
              className="flex items-center justify-center w-8 h-8 rounded-lg text-[#555] hover:text-[#22d3ee] hover:bg-[rgba(34,211,238,0.1)] transition-all"
            >
              <XMark size={16} />
            </button>
          </div>
          {/* Full image */}
          <img
            src="/DevOpsArchitecture.png"
            alt="EmPay HRMS DevOps Architecture"
            className="w-full h-auto block"
            style={{ maxHeight: '80vh', objectFit: 'contain' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

const PIPELINE_STEPS = [
  { label: 'Git Push', icon: GitBranch, color: '#a78bfa' },
  { label: 'CI Tests', icon: Zap, color: '#4ade80' },
  { label: 'Build & Push', icon: Cube, color: '#22d3ee' },
  { label: 'Helm Deploy', icon: SiHelm, color: '#FF7A00' },
  { label: 'Live ✓', icon: Cloud, color: '#4ade80' },
]

const TECH_GROUPS = [
  {
    label: 'Application',
    icon: Layers,
    color: '#38bdf8',
    items: ['React + Vite', 'Node.js + Express', 'PostgreSQL 15', 'Redis 6 Alpine', 'Swagger UI'],
  },
  {
    label: 'Cloud & Infra',
    icon: Cloud,
    color: '#22d3ee',
    items: ['Azure (AKS)', 'Azure Container Registry', 'Azure Key Vault', 'Log Analytics', 'VNet + NSGs'],
  },
  {
    label: 'DevOps',
    icon: SiGithubactions,
    color: '#FF7A00',
    items: ['GitHub Actions (3 workflows)', 'Terraform IaC', 'Helm Chart', 'NGINX Ingress', 'HPA Autoscaling'],
  },
  {
    label: 'Security',
    icon: Key,
    color: '#f472b6',
    items: ['Azure Key Vault CSI', 'OIDC Workload Identity', 'AcrPull RBAC', 'Helm --atomic rollback'],
  },
]

function FeaturedProjectCard({ onViewArch }) {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      className="mb-8 rounded-2xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'linear-gradient(135deg, rgba(34,211,238,0.06) 0%, rgba(15,15,15,0.95) 60%)',
        border: '1px solid rgba(34,211,238,0.2)',
        boxShadow: '0 0 60px rgba(34,211,238,0.06), 0 20px 60px rgba(0,0,0,0.4)',
      }}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full" style={{ background: 'linear-gradient(90deg,#22d3ee,#a78bfa,transparent)' }} />

      {/* Featured badge */}
      <div className="absolute top-5 right-5 z-10">
        <span
          className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full"
          style={{ background: 'rgba(34,211,238,0.15)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
        >
          ⭐ Featured · DevOps Showcase
        </span>
      </div>

      <div className="p-6 lg:p-8 flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center gap-4 pr-28">
          <div
            className="flex items-center justify-center rounded-2xl flex-shrink-0"
            style={{
              width: 56, height: 56,
              background: 'rgba(34,211,238,0.12)',
              border: '1.5px solid rgba(34,211,238,0.35)',
              boxShadow: '0 0 24px rgba(34,211,238,0.18)',
            }}
          >
            <SiKubernetes size={28} style={{ color: '#22d3ee', filter: 'drop-shadow(0 0 6px #22d3ee88)' }} />
          </div>
          <div>
            <h3 className="font-sora font-extrabold text-xl text-[#F5F5F5] leading-tight">EmPay HRMS</h3>
            <p className="font-mono text-[11px] text-[#22d3ee] mt-0.5">Production · Cloud-Native · AKS</p>
          </div>
        </div>

        <p className="text-[#bbb] text-sm leading-relaxed max-w-2xl">
          A production-grade, cloud-native HR & Payroll Management System deployed on{' '}
          <span className="text-[#22d3ee]">Azure Kubernetes Service</span> with a fully automated{' '}
          <span className="text-[#FF7A00]">GitHub Actions CI/CD pipeline</span> and{' '}
          <span className="text-[#a78bfa]">Terraform-managed infrastructure</span>.
        </p>

        {/* CI/CD Pipeline */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#888] mb-3">CI/CD Pipeline</p>
          <div className="flex items-center gap-1 flex-wrap">
            {PIPELINE_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-1">
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-mono"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}30`, color: step.color }}
                >
                  <step.icon size={10} />
                  {step.label}
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <span className="text-[#444] text-xs">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech groups (expandable) */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 overflow-hidden"
            >
              {TECH_GROUPS.map((g) => (
                <div
                  key={g.label}
                  className="rounded-xl p-3"
                  style={{ background: `${g.color}08`, border: `1px solid ${g.color}20` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <g.icon size={12} style={{ color: g.color }} />
                    <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: g.color }}>{g.label}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {g.items.map((item) => (
                      <span key={item} className="text-[11px] text-[#aaa] font-mono">· {item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href="https://github.com/erandesamadhan2003/EmPay_HRMS"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: 'rgba(34,211,238,0.1)', border: '1px solid rgba(34,211,238,0.3)', color: '#22d3ee' }}
          >
            <Github size={14} /> View on GitHub <ExternalLink size={10} />
          </a>
          <button
            onClick={onViewArch}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:-translate-y-0.5"
            style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.3)', color: '#a78bfa' }}
          >
            <ExpandIcon size={13} /> Architecture Diagram
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#888' }}
          >
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            {expanded ? 'Less Details' : 'Full Stack Details'}
          </button>
        </div>
      </div>

      {/* Glow */}
      <div
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#22d3ee' }}
      />
    </motion.div>
  )
}

function ProjectCard({ project, index, onViewArch }) {
  return (
    <motion.div
      className="glass rounded-2xl overflow-hidden h-full flex flex-col group transition-all duration-300 relative"
      whileHover={{ y: -6, boxShadow: `0 20px 60px ${project.accent}30` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.07, duration: 0.5 }}
      style={{
        background: `linear-gradient(160deg, ${project.accent}05 0%, rgba(10,10,10,0.95) 60%)`,
        border: `1px solid ${project.accent}20`,
      }}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg,${project.accent},${project.accent}40,transparent)` }} />

      <div className="p-6 flex flex-col h-full">
        {/* Header row: icon + tag */}
        <div className="flex items-start justify-between mb-5">
          {/* Icon container */}
          <div
            className="flex items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
            style={{
              width: 52,
              height: 52,
              background: `${project.accent}15`,
              border: `1.5px solid ${project.accent}40`,
              boxShadow: `0 0 20px ${project.accent}18`,
            }}
          >
            <project.icon
              size={26}
              style={{
                color: project.accent,
                filter: `drop-shadow(0 0 5px ${project.accent}99)`,
              }}
            />
          </div>

          <span
            className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md mt-1"
            style={{
              color: project.accent,
              background: `${project.accent}12`,
              border: `1px solid ${project.accent}30`,
            }}
          >
            {project.tag}
          </span>
        </div>

        <h3
          className="font-sora font-bold text-base mb-0.5 transition-colors"
          style={{ color: '#F5F5F5' }}
        >
          {project.title}
        </h3>
        <p className="font-mono text-[10px] mb-3" style={{ color: `${project.accent}90` }}>{project.subtitle}</p>
        <p className="text-[#aaa] text-xs leading-relaxed flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5 my-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[9px] px-2 py-0.5 rounded font-mono"
              style={{
                background: `${project.accent}08`,
                color: `${project.accent}cc`,
                border: `1px solid ${project.accent}20`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="border-t pt-4 flex items-center gap-3 flex-wrap" style={{ borderColor: `${project.accent}15` }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold transition-colors"
            style={{ color: `${project.accent}99` }}
            onMouseEnter={e => e.currentTarget.style.color = project.accent}
            onMouseLeave={e => e.currentTarget.style.color = `${project.accent}99`}
          >
            <Github size={14} /> View Source <ExternalLink size={10} />
          </a>
          {onViewArch && (
            <button
              onClick={onViewArch}
              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
              style={{ color: '#a78bfa99' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a78bfa'}
              onMouseLeave={e => e.currentTarget.style.color = '#a78bfa99'}
            >
              <ExpandIcon size={11} /> Architecture
            </button>
          )}
        </div>
      </div>

      {/* Hover glow corner */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-2xl pointer-events-none"
        style={{ background: project.accent }}
      />
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showAll, setShowAll] = useState(false)
  const [showArch, setShowArch] = useState(false)

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
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onViewArch={project.title === 'EmPay HRMS' ? () => setShowArch(true) : undefined}
              />
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

      {/* Architecture Diagram Modal */}
      {showArch && <ArchModal onClose={() => setShowArch(false)} />}
    </section>
  )
}