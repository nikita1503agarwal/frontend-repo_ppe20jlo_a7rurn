import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Smart Portfolio UI',
    desc: 'A cinematic, animated portfolio template with 3D hero and timeline.',
    tags: ['React', 'Framer Motion', 'Spline'],
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'TaskFlow API',
    desc: 'Lightweight task manager with FastAPI and MongoDB, deployed on Render.',
    tags: ['FastAPI', 'MongoDB', 'JWT'],
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Realtime Chat',
    desc: 'Minimal chat experience with socket events and typing indicators.',
    tags: ['WebSocket', 'Node.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSZWFsdGltZSUyMENoYXR8ZW58MHwwfHx8MTc2Mzc4NTYwMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Projects</h2>
            <p className="mt-2 text-white/70">A selection of recent work and experiments.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80">Download Resume</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              </div>
              <div className="p-5">
                <div className="text-white font-semibold">{p.title}</div>
                <div className="mt-1 text-sm text-white/70">{p.desc}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-xs text-white/80">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
