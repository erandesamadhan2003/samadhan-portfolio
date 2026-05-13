import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  FaFileContract as ContractIcon,
  FaHammer as Hammer,
  FaMicrosoft as AzureIcon,
  FaMobileScreenButton as MonitorSmartphone,
  FaServer as ApiIcon,
  FaAws as AwsIcon,
  FaRocket as Rocket,
} from 'react-icons/fa6'
import {
  SiAngular as AngularIcon,
  SiCplusplus as CppIcon,
  SiDocker as DockerIcon,
  SiEthers as EthersIcon,
  SiEthereum as EthereumIcon,
  SiExpress as ExpressIcon,
  SiFirebase as FirebaseIcon,
  SiGithubactions as GithubActionsIcon,
  SiHelm as HelmIcon,
  SiJavascript as JavascriptIcon,
  SiKubernetes as KubernetesIcon,
  SiLinux as LinuxIcon,
  SiMongodb as MongoIcon,
  SiMysql as MysqlIcon,
  SiNodedotjs as NodeIcon,
  SiOpenzeppelin as OpenZeppelinIcon,
  SiPostgresql as PostgresIcon,
  SiPrometheus as PrometheusIcon,
  SiPython as PythonIcon,
  SiReact as ReactIcon,
  SiSocketdotio as SocketIcon,
  SiSolidity as SolidityIcon,
  SiSupabase as SupabaseIcon,
  SiTerraform as TerraformIcon,
  SiTypescript as TypescriptIcon,
} from 'react-icons/si'
import InteractiveTerminal from './InteractiveTerminal'

/* ─── DATA ─────────────────────────────────────────────────── */

const NAMESPACES = [
  {
    id: 'devops',
    label: 'namespace/devops',
    status: 'Running',
    accent: '#22d3ee',
    pods: [
      { name: 'Linux', icon: LinuxIcon, color: '#4ade80' },
      { name: 'Docker', icon: DockerIcon, color: '#38bdf8' },
      { name: 'Kubernetes', icon: KubernetesIcon, color: '#22d3ee' },
      { name: 'GitHub Actions', icon: GithubActionsIcon, color: '#a78bfa' },
      { name: 'Terraform', icon: TerraformIcon, color: '#fb923c' },
      { name: 'Prometheus', icon: PrometheusIcon, color: '#f97316' },
      { name: 'Helm', icon: HelmIcon, color: '#fbbf24' },
      { name: 'Azure', icon: AzureIcon, color: '#38bdf8' },
      { name: 'AWS', icon: AwsIcon, color: '#fb923c' },
      { name: 'CI/CD', icon: Rocket, color: '#f59e0b' },
    ],
  },
  {
    id: 'frontend',
    label: 'namespace/frontend',
    status: 'Running',
    accent: '#FF7A00',
    pods: [
      { name: 'React.js', icon: ReactIcon, color: '#22d3ee' },
      { name: 'Angular', icon: AngularIcon, color: '#f87171' },
      { name: 'TypeScript', icon: TypescriptIcon, color: '#38bdf8' },
      { name: 'JavaScript', icon: JavascriptIcon, color: '#facc15' },
      { name: 'React Native', icon: MonitorSmartphone, color: '#f472b6' },
      { name: 'WebSockets', icon: SocketIcon, color: '#34d399' },
    ],
  },
  {
    id: 'backend',
    label: 'namespace/backend',
    status: 'Running',
    accent: '#FFB347',
    pods: [
      { name: 'Node.js', icon: NodeIcon, color: '#4ade80' },
      { name: 'Express.js', icon: ExpressIcon, color: '#fbbf24' },
      { name: 'Python', icon: PythonIcon, color: '#a3e635' },
      { name: 'C / C++', icon: CppIcon, color: '#cbd5e1' },
      { name: 'REST APIs', icon: ApiIcon, color: '#fb923c' },
    ],
  },
  {
    id: 'databases',
    label: 'namespace/databases',
    status: 'Running',
    accent: '#C0C0C0',
    pods: [
      { name: 'MongoDB', icon: MongoIcon, color: '#34d399' },
      { name: 'PostgreSQL', icon: PostgresIcon, color: '#a78bfa' },
      { name: 'MySQL', icon: MysqlIcon, color: '#fbbf24' },
      { name: 'Supabase', icon: SupabaseIcon, color: '#22d3ee' },
      { name: 'Firebase', icon: FirebaseIcon, color: '#fb923c' },
    ],
  },
  {
    id: 'blockchain',
    label: 'namespace/blockchain',
    status: 'Running',
    accent: '#a78bfa',
    pods: [
      { name: 'Ethereum', icon: EthereumIcon, color: '#22d3ee' },
      { name: 'Hardhat', icon: Hammer, color: '#fb923c' },
      { name: 'Ethers.js', icon: EthersIcon, color: '#38bdf8' },
      { name: 'OpenZeppelin', icon: OpenZeppelinIcon, color: '#4ade80' },
      { name: 'Smart Contracts', icon: ContractIcon, color: '#c084fc' },
      { name: 'Solidity', icon: SolidityIcon, color: '#c084fc' },
    ],
  },
]

/* ─── ANIMATED TERMINAL LOG ─────────────────────────────────── */
const LOG_LINES = [
  { t: 0, text: '$ kubectl get namespaces', color: '#FF7A00' },
  { t: 400, text: 'devops        Active   95d', color: '#22d3ee' },
  { t: 700, text: 'frontend      Active   62d', color: '#FF7A00' },
  { t: 1000, text: 'backend       Active   62d', color: '#FFB347' },
  { t: 1300, text: 'databases     Active   58d', color: '#C0C0C0' },
  { t: 1600, text: 'blockchain    Active   41d', color: '#a78bfa' },
  { t: 2100, text: '$ kubectl get pods --all-namespaces | wc -l', color: '#FF7A00' },
  { t: 2600, text: '31', color: '#4ade80' },
  { t: 3000, text: '$ helm list -n devops', color: '#FF7A00' },
  { t: 3400, text: 'monitoring    DEPLOYED   prometheus-2.47.0', color: '#f97316' },
  { t: 3800, text: 'ingress       DEPLOYED   nginx-ingress-4.8.3', color: '#fbbf24' },
  { t: 4200, text: '$ terraform show | grep "resource"', color: '#FF7A00' },
  { t: 4700, text: '# aws_eks_cluster.main: resource "aws_eks_cluster"', color: '#fb923c' },
  { t: 5200, text: '$ All systems operational ✓', color: '#4ade80' },
]

function TerminalLog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [shown, setShown] = useState([])

  useEffect(() => {
    if (!isInView) return
    LOG_LINES.forEach(({ t, text, color }) => {
      setTimeout(() => setShown(prev => [...prev, { text, color }]), t)
    })
  }, [isInView])

  return (
    <div ref={ref}
      className="rounded-2xl overflow-hidden border border-[rgba(255,122,0,0.15)]"
      style={{ background: '#080808' }}
    >
      {/* titlebar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.05)]"
        style={{ background: '#111' }}>
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-[#444]">samadhan@k8s-cluster ~ %</span>
        <span className="ml-auto font-mono text-[10px] text-[#FF7A00] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block animate-pulse" />
          CLUSTER LIVE
        </span>
      </div>
      <div className="p-5 font-mono text-xs space-y-1.5 min-h-[160px]">
        {shown.map((line, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: line.color }}
          >
            {line.text}
          </motion.div>
        ))}
        <motion.span
          className="inline-block w-2 h-4 align-middle"
          style={{ background: '#FF7A00' }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </div>
  )
}

/* ─── POD (individual skill node) ───────────────────────────── */
function Pod({ pod, nsAccent, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      className="relative flex flex-col items-center gap-2 cursor-pointer group"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: 'backOut' }}
      whileHover={{ scale: 1.1, y: -4 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Pod container — hexagonal clip */}
      <div
        className="relative flex items-center justify-center transition-all duration-300"
        style={{
          width: 72, height: 72,
          clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)',
          background: hovered
            ? `linear-gradient(135deg, ${pod.color}30, rgba(15,15,15,0.97))`
            : 'linear-gradient(160deg, rgba(255,255,255,0.06), rgba(10,10,10,0.9))',
          boxShadow: hovered ? `0 0 20px ${pod.color}40` : 'none',
          transition: 'all 0.25s ease',
        }}
      >
        {/* inner border via outline hex */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(50% 0%,93% 25%,93% 75%,50% 100%,7% 75%,7% 25%)',
            background: hovered
              ? `linear-gradient(135deg, ${pod.color}18, transparent)`
              : 'rgba(255,255,255,0.03)',
          }}
        />
        <pod.icon
          size={28}
          style={{
            color: hovered ? pod.color : `${pod.color}99`,
            filter: hovered ? `drop-shadow(0 0 7px ${pod.color}bb)` : 'none',
            transition: 'all 0.25s ease',
            position: 'relative',
            zIndex: 1,
          }}
        />
        {/* status dot */}
        <div
          className="absolute bottom-3 right-3 w-2 h-2 rounded-full"
          style={{ background: '#4ade80', boxShadow: '0 0 6px #4ade8088' }}
        />
      </div>

      {/* Pod label */}
      <span
        className="font-mono text-[10px] text-center leading-tight transition-colors duration-200 max-w-[72px]"
        style={{ color: hovered ? pod.color : '#666' }}
      >
        {pod.name}
      </span>

      {/* Tooltip on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-lg px-2.5 py-1.5 font-mono text-[10px]"
            style={{
              background: '#111',
              border: `1px solid ${pod.color}50`,
              color: pod.color,
              boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
            }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
          >
            pod/{pod.name.toLowerCase().replace(/\s/g, '-')} · Running
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* ─── NAMESPACE CARD ─────────────────────────────────────────── */
function NamespaceCard({ ns, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${ns.accent}25`,
        background: 'rgba(10,10,10,0.85)',
        boxShadow: `inset 0 0 60px ${ns.accent}08`,
      }}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Ambient corner glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${ns.accent}12, transparent 70%)`,
          transform: 'translate(30%, -30%)',
        }}
      />

      {/* Header bar */}
      <div
        className="flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: `${ns.accent}20`, background: `${ns.accent}08` }}
      >
        <div className="flex items-center gap-2.5">
          {/* K8s namespace icon */}
          <div
            className="flex items-center justify-center w-6 h-6 rounded"
            style={{ background: `${ns.accent}20`, border: `1px solid ${ns.accent}40` }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={ns.accent}>
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.09v7.82L12 19.82 4 15.91V8.09L12 4.18z" />
            </svg>
          </div>
          <span className="font-mono text-[11px] tracking-[2px] uppercase" style={{ color: ns.accent }}>
            {ns.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          <span className="font-mono text-[9px] text-[#4ade80] uppercase tracking-widest">{ns.status}</span>
          <span className="font-mono text-[9px] text-[#444] ml-2">{ns.pods.length} pods</span>
        </div>
      </div>

      {/* Pods grid */}
      <div className="p-5">
        {/* connector line top */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full" style={{ background: ns.accent, boxShadow: `0 0 8px ${ns.accent}` }} />
          <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${ns.accent}60, transparent)` }} />
          <span className="font-mono text-[9px] text-[#333] uppercase tracking-widest">
            replica-set/{ns.id}-rs
          </span>
        </div>

        <div className="flex flex-wrap gap-4 justify-start">
          {ns.pods.map((pod, i) => (
            <Pod key={pod.name} pod={pod} nsAccent={ns.accent} index={i} />
          ))}
        </div>

        {/* resource line bottom */}
        <div className="flex items-center gap-3 mt-5 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          <span className="font-mono text-[9px] text-[#333]">cpu: healthy</span>
          <span className="w-px h-3 bg-[#222]" />
          <span className="font-mono text-[9px] text-[#333]">mem: ok</span>
          <span className="w-px h-3 bg-[#222]" />
          <span className="font-mono text-[9px]" style={{ color: `${ns.accent}80` }}>
            last-sync: 0s ago
          </span>
        </div>
      </div>
    </motion.div>
  )
}

/* ─── CLUSTER OVERVIEW BAR ──────────────────────────────────── */
function ClusterHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const total = NAMESPACES.reduce((a, n) => a + n.pods.length, 0)

  return (
    <motion.div
      ref={ref}
      className="rounded-2xl border border-[rgba(255,122,0,0.2)] overflow-hidden mb-8"
      style={{ background: '#0A0A0A' }}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        {/* Cluster name */}
        <div className="flex items-center gap-3">
          <KubernetesIcon size={22} style={{ color: '#22d3ee' }} />
          <div>
            <p className="font-mono text-[12px] text-[#FF7A00] uppercase tracking-[3px]">samadhan-prod-cluster</p>
            <p className="font-mono text-[9px] text-[#444] mt-0.5">v1.28.4 · us-central1-a · GKE</p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6">
          {[
            { label: 'Namespaces', value: NAMESPACES.length, color: '#FF7A00' },
            { label: 'Pods', value: total, color: '#4ade80' },
            { label: 'Services', value: '12', color: '#22d3ee' },
            { label: 'Uptime', value: '99.9%', color: '#a78bfa' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <p className="font-mono font-bold text-lg leading-none" style={{ color: stat.color }}>{stat.value}</p>
              <p className="font-mono text-[9px] text-[#444] mt-0.5 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Health */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
          style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)' }}>
          <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse" />
          <span className="font-mono text-[10px] text-[#4ade80] uppercase tracking-widest">All Systems Operational</span>
        </div>
      </div>

      {/* Namespace bar */}
      <div className="flex border-t border-[rgba(255,255,255,0.04)]">
        {NAMESPACES.map((ns) => (
          <div
            key={ns.id}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 font-mono text-[9px] uppercase tracking-wider transition-colors"
            style={{ color: `${ns.accent}80`, borderRight: '1px solid rgba(255,255,255,0.04)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: ns.accent }} />
            {ns.id}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── MAIN EXPORT ────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] bg-[#FF7A00]/4 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#22d3ee]/4 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-label mb-4">02 — Arsenal</p>
          <h2 className="font-sora font-extrabold text-4xl lg:text-6xl text-[#F5F5F5] mb-3 leading-tight">
            Infrastructure <span className="text-[#FF7A00]">Cluster</span>
          </h2>
          <p className="text-[#555] mb-6 max-w-2xl font-mono text-[12px] leading-relaxed">
            // kubectl describe engineer samadhan-erande · Full Stack · DevOps · Blockchain
          </p>
          <div className="flex flex-wrap gap-3">
            {['Cloud Native', 'Microservices', 'GitOps', 'IaC', 'Web3', 'Real-Time'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[rgba(255,122,0,0.18)] bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Cluster header */}
        <ClusterHeader />

        {/* Namespace grid — masonry-like layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {NAMESPACES.map((ns, i) => (
            <NamespaceCard
              key={ns.id}
              ns={ns}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Live terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <InteractiveTerminal />
        </motion.div>

      </div>
    </section>
  )
}