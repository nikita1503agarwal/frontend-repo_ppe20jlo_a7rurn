import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'timeline', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    setOpen(false)
    window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-[0_0_40px_rgba(168,85,247,0.5)]" />
              <span className="text-white/90 font-semibold tracking-tight">Nayan Mondal</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => handleClick(s.id)}
                  className={`px-3 py-2 rounded-xl text-sm transition-colors ${
                    active === s.id
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick('contact')
                }}
                className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-95"
              >
                Hire Me
              </a>
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen((o) => !o)}>
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-3 pb-3">
              <div className="grid grid-cols-2 gap-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleClick(s.id)}
                    className={`px-3 py-2 rounded-xl text-sm text-left ${
                      active === s.id ? 'bg-white/10 text-white' : 'text-white/80'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
                <button
                  onClick={() => handleClick('contact')}
                  className="col-span-2 rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-600 px-4 py-2 text-sm font-medium text-white"
                >
                  Hire Me
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
