import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden pt-24">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />
              Open to full‑time roles & select freelance projects
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Nayan Mondal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-4 max-w-xl text-base sm:text-lg text-white/80"
            >
              Software Engineer specializing in modern web apps, smooth interactions, and scalable systems. I design, build, and ship premium experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#projects" className="rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow hover:opacity-95">
                View Projects
              </a>
              <a href="#contact" className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/15">
                Contact
              </a>
              <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">
                Download Resume
              </a>
            </motion.div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}
