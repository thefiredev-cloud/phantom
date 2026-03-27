import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <section className="py-12 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '200', label: 'Max Agent Capacity' },
            { value: '24/7', label: 'Always On' },
            { value: '92%', label: 'Task Accuracy' },
            { value: '87%', label: 'Cost Reduction' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-[#7c3aed]">{s.value}</div>
              <div className="text-sm text-[#94a3b8] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}
