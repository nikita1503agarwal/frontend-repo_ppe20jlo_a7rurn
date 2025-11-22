import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_400px_at_20%_-10%,rgba(88,28,135,0.25),transparent),radial-gradient(800px_300px_at_80%_-10%,rgba(59,130,246,0.18),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
