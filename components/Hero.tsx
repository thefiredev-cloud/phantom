'use client'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('./Scene3D'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden dot-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-20">
        <div className="order-2 md:order-1">
          <Scene3D />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 text-[#7c3aed] text-xs font-semibold uppercase tracking-wider">
            Ghost Workforce
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-none animate-fade-in-up">
            200 Agents.<br />
            <span className="text-[#7c3aed]">3 Humans.</span>
          </h1>
          <p className="text-lg text-[#94a3b8] leading-relaxed animate-fade-in-up delay-100">
            Ghost workforce platform — deploy 50-200 AI agents that handle your entire back office. You just steer.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
            <a href="#waitlist" className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors animate-pulse-glow">
              Deploy Your Workforce
            </a>
            <a href="#features" className="px-6 py-3 border border-white/10 hover:border-white/30 text-white/70 hover:text-white font-semibold rounded-lg transition-colors">
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
