import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(168,85,247,0.08),transparent),radial-gradient(600px_200px_at_90%_30%,rgba(59,130,246,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-bold text-white tracking-tight">About</h2>
            <p className="mt-3 text-white/70">A concise, recruiter‑friendly profile crafted from your LinkedIn.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-white/85 leading-relaxed">
                Engineer focused on building clean, performant interfaces and reliable backend services. I enjoy solving ambiguous problems, collaborating across functions, and delivering work that balances aesthetics with measurable impact. Comfortable across the stack with modern JavaScript frameworks, API design, and cloud tooling.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-white/80">UI Engineering</div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-white/80">Full‑stack Web</div>
                <div className="rounded-xl bg-white/5 border border-white/10 p-3 text-white/80">System Design</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
