import { motion } from 'framer-motion'

const services = [
  { title: 'Web Apps', desc: 'Production-grade React apps with clean architecture, API integration, and modern UI.' },
  { title: 'Design to Code', desc: 'Turn Figma files into accessible, responsive, and performant code.' },
  { title: 'Dashboards', desc: 'Data-rich dashboards with charts, filters, and delightful micro-interactions.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Services</h2>
          <p className="mt-2 text-white/70">High‑impact, fast turnaround, and crisp delivery.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="text-white font-semibold">{s.title}</div>
              <div className="mt-2 text-white/75">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
