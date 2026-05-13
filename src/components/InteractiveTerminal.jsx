import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const commands = {
    help: {
        desc: 'Shows all available commands',
        execute: () => `
Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  about        Show information about Samadhan
  skills       List technical skills & expertise
  projects     View featured projects & work
  experience   Show work experience & education
  achievements Show accomplishments & milestones
  contact      Display contact information
  whoami       Show current user profile
  social       Display social media links
  tech-stack   Show full technology stack
  clear        Clear the terminal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type 'help <command>' for more details.
    `,
    },
    about: {
        desc: 'Information about Samadhan',
        execute: () => `
┌─────────────────────────────────────────────────────────────┐
│                    ABOUT SAMADHAN ERANDE                    │
└─────────────────────────────────────────────────────────────┘

Full Stack Engineer | DevOps Engineer | Blockchain Developer

📍 Location: IIIT Vadodara, India
🎓 Education: B.Tech in Information Technology (2023-2027)
💼 Current: Project Intern @ Indian Knowledge Systems

Core Expertise:
  • Building scalable cloud-native systems
  • Real-time collaborative applications
  • DevOps infrastructure & automation
  • Full-stack web & mobile development
  • Smart contracts & blockchain protocols

Philosophy: "Production-grade code, built with precision."
    `,
    },
    skills: {
        desc: 'Show technical skills',
        execute: () => `
╔═══════════════════════════════════════════════════════════╗
║                   TECHNICAL SKILLS MAP                    ║
╚═══════════════════════════════════════════════════════════╝

🔧 DevOps & Cloud:
   Linux (95%) | Docker (92%) | Kubernetes (85%) | CI/CD (90%)
   AWS (76%) | Azure (72%) | Terraform (80%) | Prometheus (75%)

🎨 Frontend:
   JavaScript (94%) | React.js (92%) | TypeScript (85%)
   HTML5/CSS3 (90%) | React Native (82%) | WebSockets (88%)

⚙️  Backend:
   Node.js (90%) | Express.js (88%) | REST APIs (92%)
   Python (80%) | C/C++ (85%)

💾 Databases:
   PostgreSQL (80%) | MongoDB (85%) | MySQL (78%)
   Supabase (82%) | Firebase (79%)

⛓️  Blockchain:
   Ethereum (80%) | Solidity (78%) | Smart Contracts (82%)
   Hardhat (78%) | Ethers.js (80%)

Type 'tech-stack' for full details.
    `,
    },
    projects: {
        desc: 'View featured projects',
        execute: () => `
╔═══════════════════════════════════════════════════════════╗
║                    FEATURED PROJECTS                      ║
╚═══════════════════════════════════════════════════════════╝

📦 HackIIITV 2025 Winner
   Real-time collaborative coding platform with low-latency
   synchronization and intelligent code assistance.
   Stack: React, Node.js, WebSockets, PostgreSQL

📱 Cross-Platform Mobile App
   95% code reuse across Android & iOS with React Native.
   Redux state management · RESTful APIs · Shipped to production

🔗 Smart Contract Solutions
   Developed secure Ethereum smart contracts with OpenZeppelin.
   Audited and deployed on mainnet.

🌐 Full Stack Web Applications
   20+ projects built with modern tech stack.
   Deployed on AWS | Azure | Docker containers

Check portfolio at: https://github.com/erandesamadhan2003
    `,
    },
    experience: {
        desc: 'Work experience & education',
        execute: () => `
╔═══════════════════════════════════════════════════════════╗
║               EXPERIENCE & EDUCATION                      ║
╚═══════════════════════════════════════════════════════════╝

💼 Project Intern | Aug 2025 - Jan 2026
   Indian Knowledge Systems · Remote
   Role: React Native Developer
   
   Achievements:
   ✓ Cross-platform app with 95% code reuse
   ✓ Redux state management implementation
   ✓ RESTful API integration
   ✓ Feature delivery ahead of schedule

🎓 Bachelor of Technology | Aug 2023 - May 2027
   IIIT Vadodara · Information Technology
   
   Metrics:
   • Current CGPA: 7.8 / 10
   • Hackathons Attended: 10+
   • Hackathon Placement: 1st Place (HackIIITV 2025)

📊 Additional:
   10+ hackathons participated
   20+ projects completed
   400+ DSA problems solved
    `,
    },
    achievements: {
        desc: 'Accomplishments & milestones',
        execute: () => `
╔═══════════════════════════════════════════════════════════╗
║                   ACHIEVEMENTS                            ║
╚═══════════════════════════════════════════════════════════╝

🏆 HackIIITV 2025 Winner
   1st Place among 50+ competing teams
   Built real-time collaborative coding platform
   with low-latency sync & AI-powered features

🎯 Hackathon Regular
   10+ hackathons attended across college & competitions
   Fast prototyping, collaboration under pressure
   Consistent finisher & award winner

📈 Professional Growth:
   • Full Stack Engineer certified
   • DevOps infrastructure expertise
   • Blockchain smart contract developer
   • 400+ DSA problems solved on LeetCode/GeeksforGeeks

🚀 Project Impact:
   • 20+ production projects deployed
   • 95% code reuse achieved on mobile platforms
   • Real-time systems handling 1000+ concurrent users
   • Smart contracts on Ethereum mainnet

💡 Recognition:
   • Recognized for code quality & scalability
   • Mentor to junior developers
   • Open source contributor
    `,
    },
    contact: {
        desc: 'Contact information',
        execute: () => `
╔═══════════════════════════════════════════════════════════╗
║                 CONTACT INFORMATION                       ║
╚═══════════════════════════════════════════════════════════╝

📧 Email: erandesamadhan2003@gmail.com
🔗 GitHub: https://github.com/erandesamadhan2003
💼 LinkedIn: https://www.linkedin.com/in/samadhan-erande-103712326/

📍 Based in: Vadodara, India
🎓 Institution: IIIT Vadodara

Available for:
  ✓ Full-stack development opportunities
  ✓ DevOps & infrastructure roles
  ✓ Blockchain development projects
  ✓ Technical consulting
  ✓ Collaboration & open source

Response time: Usually within 24 hours
Status: Open for opportunities ✓
    `,
    },
    whoami: {
        desc: 'User profile',
        execute: () => `
┌─────────────────────────────────────────────────────────┐
│                    CURRENT USER PROFILE                 │
└─────────────────────────────────────────────────────────┘

user@portfolio:~$ whoami
samadhan-erande

Attributes:
  name: "Samadhan Erande"
  role: "Full Stack Engineer | DevOps | Blockchain"
  experience: "Intern @ Indian Knowledge Systems"
  skills: ["Cloud", "Frontend", "Backend", "DevOps", "Web3"]
  status: "Open for Opportunities"
  university: "IIIT Vadodara"
  cgpa: 7.8
  projects_built: 20
  hackathons: 10

Last login: $(date)
Session type: interactive-terminal
    `,
    },
    social: {
        desc: 'Social media & links',
        execute: () => `
╔═══════════════════════════════════════════════════════════╗
║              SOCIAL MEDIA & LINKS                         ║
╚═══════════════════════════════════════════════════════════╝

🌐 GitHub
   https://github.com/erandesamadhan2003
   Active contributor, 20+ public repositories

💼 LinkedIn
   https://www.linkedin.com/in/samadhan-erande-103712326/
   Connected with 500+ professionals

📧 Email
   erandesamadhan2003@gmail.com
   Response time: ~24 hours

🐙 Portfolio
   View live projects and code samples
   Interactive demonstrations & case studies

🔔 Stay Updated:
   Follow for latest projects, blog posts, and updates!
    `,
    },
    'tech-stack': {
        desc: 'Full technology stack details',
        execute: () => `
╔═══════════════════════════════════════════════════════════╗
║               COMPLETE TECHNOLOGY STACK                   ║
╚═══════════════════════════════════════════════════════════╝

🎨 FRONTEND:
   Frameworks: React.js • React Native • Angular
   Languages: TypeScript • JavaScript • HTML5/CSS3
   Libraries: Framer Motion • Tailwind CSS • Redux
   Tools: Vite • Webpack • Babel

⚙️  BACKEND:
   Runtime: Node.js • Express.js
   Languages: Python • C/C++ • JavaScript
   APIs: REST • WebSockets • GraphQL
   Authentication: JWT • OAuth2

☁️  CLOUD & DEVOPS:
   Platforms: AWS • Azure • GCP
   Containers: Docker • Kubernetes
   IaC: Terraform • Helm
   CI/CD: GitHub Actions • GitLab CI
   Monitoring: Prometheus • Grafana

💾 DATABASES:
   Relational: PostgreSQL • MySQL
   NoSQL: MongoDB • Firebase
   Real-time: Supabase • Firebase Realtime DB

⛓️  BLOCKCHAIN:
   Network: Ethereum
   Languages: Solidity
   Tools: Hardhat • Ethers.js • OpenZeppelin
   Contracts: ERC20 • ERC721 • Custom Protocols

🛠️  DEV TOOLS:
   Version Control: Git • GitHub
   Code Quality: ESLint • Prettier
   Testing: Jest • Mocha
   Documentation: Swagger • JSDoc

Operating Systems: Linux • macOS • Windows
Deployment: Vercel • Netlify • AWS • DigitalOcean
    `,
    },
    clear: {
        desc: 'Clear terminal',
        execute: () => null, // Special case handled in component
    },
}

function Terminal() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-40px' })
    const [history, setHistory] = useState([
        {
            type: 'output',
            content: `Welcome to Samadhan's Interactive Portfolio Terminal
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type 'help' for available commands or start exploring!`,
        },
    ])
    const [input, setInput] = useState('')
    const [commandHistory, setCommandHistory] = useState([])
    const [historyIndex, setHistoryIndex] = useState(-1)
    const endRef = useRef(null)
    const bodyRef = useRef(null)

    useEffect(() => {
        if (bodyRef.current) {
            bodyRef.current.scrollTop = bodyRef.current.scrollHeight
        }
    }, [history])

    const executeCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase()

        if (trimmed === 'clear') {
            setHistory([])
            setInput('')
            return
        }

        if (trimmed === '') return

        // Add to command history
        setCommandHistory([...commandHistory, cmd])
        setHistoryIndex(-1)

        // Add command to display
        setHistory([...history, { type: 'input', content: cmd }])

        // Find and execute command
        const [baseCmd, ...args] = trimmed.split(' ')
        const command = commands[baseCmd]

        if (command) {
            const output = command.execute(args.join(' '))
            if (output !== null) {
                setHistory((prev) => [...prev, { type: 'output', content: output }])
            }
        } else if (trimmed === 'echo samadhan') {
            setHistory((prev) => [
                ...prev,
                { type: 'output', content: '✨ Samadhan Erande - Full Stack Engineer ✨' },
            ])
        } else {
            setHistory((prev) => [
                ...prev,
                {
                    type: 'output',
                    content: `Command not found: ${baseCmd}\nType 'help' for available commands.`,
                },
            ])
        }

        setInput('')
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            executeCommand(input)
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            if (historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1
                setHistoryIndex(newIndex)
                setInput(commandHistory[commandHistory.length - 1 - newIndex])
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1
                setHistoryIndex(newIndex)
                setInput(commandHistory[commandHistory.length - 1 - newIndex])
            } else if (historyIndex === 0) {
                setHistoryIndex(-1)
                setInput('')
            }
        }
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden border border-[rgba(255,122,0,0.15)]"
        >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-[rgba(255,255,255,0.06)]">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="ml-3 font-mono text-[11px] text-[#666]">
                    samadhan@portfolio:/home ~
                </span>
                <span className="ml-auto font-mono text-[10px] text-[#FF7A00] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] inline-block pulse-dot" />
                    INTERACTIVE
                </span>
            </div>

            {/* Terminal body */}
            <div ref={bodyRef} className="bg-[#0A0A0A] p-6 space-y-3 font-mono text-sm overflow-y-auto max-h-96">
                <AnimatePresence>
                    {history.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {line.type === 'input' ? (
                                <div className="text-[#FF7A00]">
                                    <span className="text-[#666]">$ </span>
                                    {line.content}
                                </div>
                            ) : (
                                <div className="text-[#C0C0C0] whitespace-pre-wrap break-words text-xs leading-relaxed">
                                    {line.content}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Current input line */}
                <div className="flex items-center gap-2 text-[#FF7A00]">
                    <span className="text-[#666]">$ </span>
                    <input
                        ref={endRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none font-mono text-[#FF7A00] placeholder-[#444]"
                        placeholder="Type a command..."
                    />
                    <span className="animate-pulse text-[#FF7A00]">▌</span>
                </div>
            </div>

            {/* Quick help footer */}
            <div className="bg-[#141414] px-6 py-3 border-t border-[rgba(255,255,255,0.06)] text-[10px] text-[#666] font-mono">
                Try: <span className="text-[#FF7A00]">help</span> •{' '}
                <span className="text-[#FF7A00]">about</span> •{' '}
                <span className="text-[#FF7A00]">skills</span> •{' '}
                <span className="text-[#FF7A00]">projects</span> •{' '}
                <span className="text-[#FF7A00]">contact</span>
            </div>
        </motion.div>
    )
}

function FadeIn({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-40px' })
    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

export { Terminal }

export default function InteractiveTerminal() {
    return (
        <section id="terminal" className="relative overflow-hidden">
            <div className="absolute left-1/2 top-1/4 w-64 h-64 bg-[#FF7A00]/5 blur-[100px] rounded-full" />

            <div className="w-full mx-auto">
                <FadeIn delay={0.1}>
                    <Terminal />
                </FadeIn>

                <FadeIn delay={0.2} className="mt-10">
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { cmd: 'help', desc: 'View all commands' },
                            { cmd: 'skills', desc: 'Technical expertise' },
                            { cmd: 'projects', desc: 'Featured work' },
                        ].map((item) => (
                            <div key={item.cmd} className="glass rounded-xl p-4 text-center hover:border-[rgba(255,122,0,0.3)] transition-all">
                                <p className="font-mono text-[#FF7A00] font-semibold mb-1">
                                    $ {item.cmd}
                                </p>
                                <p className="text-[#888] text-xs">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
