export default function Footer(){
  return (
    <footer className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <div>© {new Date().getFullYear()} Nayan Mondal. All rights reserved.</div>
          <div className="inline-flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse"/>
            <span>Cinematic • Minimal • Futuristic</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
