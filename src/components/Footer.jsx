export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,122,0,0.1)] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-sora font-extrabold text-lg tracking-tight">
          <span className="text-[#F5F5F5]">SE</span>
          <span className="text-[#FF7A00]">.</span>
        </p>
        <p className="font-mono text-[11px] text-[#444]">
          © {new Date().getFullYear()} Samadhan Erande · Built with React + Framer Motion
        </p>
        <p className="font-mono text-[10px] text-[#FF7A00] uppercase tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] pulse-dot" />
          Available for hire
        </p>
      </div>
    </footer>
  )
}
