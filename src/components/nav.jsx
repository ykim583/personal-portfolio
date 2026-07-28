import { useEffect, useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const nav = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 80) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <>
      <div
        className={`flex items-center justify-between p-6 sm:p-7 bg-slate-900/70 backdrop-blur-md fixed w-full z-10 transition-transform duration-300 border-b border-white/5 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Link to={"/"} aria-label="Home" className="group relative flex h-11 w-11 shrink-0">
          <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 rotate-6 transition-transform duration-300 group-hover:rotate-[18deg]"></span>
          <span className="absolute inset-0 rounded-xl bg-slate-900 border border-white/10 -rotate-6 flex items-center justify-center transition-transform duration-300 group-hover:-rotate-[18deg]">
            <span className="font-mono font-bold text-lg bg-gradient-to-br from-indigo-300 to-violet-300 bg-clip-text text-transparent">
              Y
            </span>
          </span>
        </Link>

        <ul className="hidden sm:flex sm:space-x-2 lg:space-x-3">
          <li className='hover:bg-indigo-500/20 hover:text-indigo-300 rounded-full px-4 py-2 text-lg sm:text-xl text-white transition-colors'>
            <Link to={"/"}>Home</Link>
          </li>
          <li className='hover:bg-indigo-500/20 hover:text-indigo-300 rounded-full px-4 py-2 text-lg sm:text-xl text-white transition-colors'>
            <Link to={"/project"}>Project</Link>
          </li>
          <li className='hover:bg-indigo-500/20 hover:text-indigo-300 rounded-full px-4 py-2 text-lg sm:text-xl text-white transition-colors'>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-white"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-[72px] w-full bg-slate-900/95 backdrop-blur-md z-10 sm:hidden border-b border-white/5">
          <ul className="flex flex-col text-center">
            <li className='py-4 text-lg text-white border-b border-white/10' onClick={() => setIsMenuOpen(false)}>
              <Link to={"/"}>Home</Link>
            </li>
            <li className='py-4 text-lg text-white border-b border-white/10' onClick={() => setIsMenuOpen(false)}>
              <Link to={"/project"}>Project</Link>
            </li>
            <li className='py-4 text-lg text-white' onClick={() => setIsMenuOpen(false)}>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default nav