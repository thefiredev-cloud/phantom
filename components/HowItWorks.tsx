export default function HowItWorks() {
  const steps = [
    { n: '01', title: 'Map your back office', desc: 'Tell Phantom what functions your back office handles today. We map every workflow, task, and decision point.' },
    { n: '02', title: 'Deploy your agents', desc: 'We configure and deploy your specialized agent workforce. Your 3 humans get a control dashboard. Agents start executing immediately.' },
    { n: '03', title: 'Scale without hiring', desc: 'As your business grows, add agents — not headcount. Same 3 humans, same quality, 10x the volume.' },
  ]

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <div className="text-6xl font-black text-[#7c3aed]/10 mb-4">{s.n}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-[#94a3b8] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
