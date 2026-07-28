import { useEffect, useRef, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Project', to: '/project' },
  { label: 'Contact', to: '/contact' },
]

const nav = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true

      requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0)
        const delta = currentScrollY - lastScrollY.current

        setIsScrolled(currentScrollY > 24)

        // Ignore small/jittery scroll changes caused by mobile momentum bounce
        if (Math.abs(delta) > 8) {
          if (currentScrollY < 96) {
            setIsVisible(true)
          } else if (delta > 0) {
            setIsVisible(false)
          } else {
            setIsVisible(true)
          }
          lastScrollY.current = currentScrollY
        }

        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll while the full-screen mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-transform duration-300 ease-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 transition-colors duration-300 ${
            isScrolled || isMenuOpen
              ? 'bg-slate-900/85 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/10'
              : 'bg-gradient-to-b from-black/40 to-transparent border-b border-transparent'
          }`}
        >
          <Link to="/" aria-label="Home" className="group relative flex h-11 w-11 shrink-0" onClick={() => setIsMenuOpen(false)}>
            <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 rotate-6 transition-transform duration-300 group-hover:rotate-[18deg]"></span>
            <span className="absolute inset-0 rounded-xl bg-slate-900 border border-white/10 -rotate-6 flex items-center justify-center transition-transform duration-300 group-hover:-rotate-[18deg]">
              <span className="font-mono font-bold text-lg bg-gradient-to-br from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                Y
              </span>
            </span>
          </Link>

          <ul className="hidden sm:flex sm:space-x-2 lg:space-x-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to} className='hover:bg-indigo-500/20 hover:text-indigo-300 rounded-full px-4 py-2 text-lg sm:text-xl text-white transition-colors'>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="sm:hidden relative z-[60] text-white active:opacity-70 transition-opacity"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu overlay — guaranteed to sit above all page content */}
      <div
        className={`sm:hidden fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-md transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="h-full flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-semibold transition-colors ${
                  location.pathname === link.to ? 'text-indigo-400' : 'text-white active:text-indigo-300'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default nav