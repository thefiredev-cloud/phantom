'use client'
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/5 bg-[#0a0a0f]/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">
          PHAN<span className="text-[#7c3aed]">TOM</span>
        </span>
        <a href="#waitlist" className="px-4 py-2 text-sm font-semibold bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-lg transition-colors">
          Join Waitlist
        </a>
      </div>
    </nav>
  )
}
