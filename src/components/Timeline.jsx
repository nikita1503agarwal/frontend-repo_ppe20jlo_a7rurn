import { motion } from 'framer-motion'

const items = [
  { title: 'Software Engineer', org: 'Freelance', period: '2023 — Present', desc: 'Building modern interfaces, dashboards, and internal tools with React and FastAPI.' },
  { title: 'B.Tech CSE', org: 'MAKAUT', period: '2019 — 2023', desc: 'Focused on software engineering, data structures, and web technologies.' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Experience & Education</h2>
          <p className="mt-2 text-white/70">A concise timeline of roles and milestones.</p>
        </div>
        <div className="relative pl-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/20 to-white/10" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[13px] top-2 h-3.5 w-3.5 rounded-full bg-fuchsia-500 shadow-[0_0_0_6px_rgba(168,85,247,0.2)]" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-medium">{it.title} · <span className="text-white/70">{it.org}</span></div>
                    <div className="text-sm text-white/60">{it.period}</div>
                  </div>
                  <p className="mt-2 text-white/75">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
