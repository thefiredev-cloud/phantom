export default function CTA() {
  return (
    <section id="waitlist" className="py-24">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the waitlist</h2>
        <p className="text-[#94a3b8] mb-10">Early access companies get white-glove setup and 60 days free. Limited slots.</p>
        <form action="https://formsubmit.co/tanner@thefiredev.com" method="POST" className="flex flex-col sm:flex-row gap-3 justify-center">
          <input type="hidden" name="_subject" value="Phantom Waitlist" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="email" name="email" required placeholder="your@email.com"
            className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#7c3aed]/50 transition-colors" />
          <button type="submit" className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors whitespace-nowrap animate-pulse-glow">
            Deploy My Workforce
          </button>
        </form>
      </div>
    </section>
  )
}
