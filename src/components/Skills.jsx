import { motion } from 'framer-motion'

const skills = {
  'Frontend': ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
  'Backend': ['Node.js', 'Express', 'FastAPI', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'Vercel', 'Figma']
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Skills</h2>
          <p className="mt-2 text-white/70">A curated set of tools and technologies I use to build polished products.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, list], i) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <h3 className="text-white font-semibold mb-4">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/90">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
