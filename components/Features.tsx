export default function Features() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      title: 'Agent Deployment',
      desc: 'Spin up 50-200 specialized AI agents in minutes. Pre-configured for accounting, customer service, HR, and operations.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
        </svg>
      ),
      title: 'Task Orchestration',
      desc: 'Intelligent routing ensures every task goes to the right agent. Complex workflows broken down and executed in parallel.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quality Assurance',
      desc: 'Automated QA layer reviews every agent output before it reaches you. Accuracy tracked and improved continuously.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      title: 'Human Oversight',
      desc: 'Your 3 humans see everything. Approve exceptions, adjust priorities, intervene anytime. You steer; agents execute.',
    },
  ]

  return (
    <section id="features" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your back office, ghosted</h2>
        <p className="text-[#94a3b8] max-w-xl mx-auto">200 agents working in silence. You see the outputs. Not the noise.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.03] hover:border-[#7c3aed]/30 transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#7c3aed]/10 text-[#7c3aed] flex items-center justify-center mb-4 group-hover:bg-[#7c3aed]/20 transition-colors">
              {f.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
