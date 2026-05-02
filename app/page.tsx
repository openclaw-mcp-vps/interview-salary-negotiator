export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Software Engineers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Leaving Money<br />on the Table
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste a job posting and get a data-driven salary negotiation script tailored to the company&apos;s funding stage, your location, and live market rates — in seconds.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get SalaryScript — $9/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. Instant access.</p>
      </section>

      {/* Features */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "📊", title: "Market Data", desc: "Pulls real salary ranges for your role, stack, and city." },
          { icon: "🏦", title: "Funding Intel", desc: "Adjusts targets based on company stage and recent rounds." },
          { icon: "🗣️", title: "Script Ready", desc: "Word-for-word talking points you can use in the call." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            {[
              "Unlimited negotiation scripts",
              "Live market salary data",
              "Company funding analysis",
              "Location-adjusted ranges",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Start for $9/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it generate the script?",
              a: "You paste the job posting URL or text. We extract the role, company, and location, then combine that with live salary APIs and funding data to produce a personalized negotiation script."
            },
            {
              q: "What if I want to cancel?",
              a: "Cancel anytime from your billing portal — no questions asked. You keep access until the end of your billing period."
            },
            {
              q: "Is this only for software engineers?",
              a: "It's optimized for software engineers right now, with role-specific market data for SWE, frontend, backend, and ML roles."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} SalaryScript. All rights reserved.
      </footer>
    </main>
  );
}
