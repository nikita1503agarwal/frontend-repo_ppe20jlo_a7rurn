import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">Let’s build something great</h2>
              <p className="mt-3 text-white/70">I’m available for full‑time roles and selected freelance projects. Reach out and I’ll respond within 24 hours.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <a href="mailto:nayan.contact@example.com" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white/90"><Mail size={16}/> Email</a>
                <a href="https://github.com/" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white/90"><Github size={16}/> GitHub</a>
                <a href="https://www.linkedin.com/in/nayanmondall/" target="_blank" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-white/90"><Linkedin size={16}/> LinkedIn</a>
              </div>
            </div>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl bg-black/20 border border-white/10 p-5"
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! This demo doesn\'t send emails here.'); }}
            >
              <div className="grid grid-cols-1 gap-3">
                <input required placeholder="Name" className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white/90 placeholder:text-white/40 outline-none"/>
                <input required type="email" placeholder="Email" className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white/90 placeholder:text-white/40 outline-none"/>
                <textarea required rows="4" placeholder="Message" className="rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-white/90 placeholder:text-white/40 outline-none"/>
                <button className="mt-2 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white">Send Message</button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
