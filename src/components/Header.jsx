import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const LOGO = 'https://www.sheltech-bd.com/images/static/logo.svg'

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/leaders', label: 'Leaders' },
  { to: '/landowner', label: 'Landowner' },
  { to: '/media', label: 'Media' },
  { to: '/customer', label: 'Inquiry' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container-max flex items-center justify-between h-[79px] gap-4">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={LOGO} alt="Sheltech" className="h-10 w-auto brightness-0 invert" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-[15px] transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/sign-in"
            className="text-[15px] text-white/80 hover:text-white border border-white/40 rounded-pill px-5 py-1.5 transition-colors"
          >
            Sign In
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-ink border-t border-white/10 py-3 max-h-[70vh] overflow-y-auto">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-3 text-[15px] ${isActive ? 'text-white' : 'text-white/70'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/sign-in"
            className="block px-6 py-3 text-white"
            onClick={() => setOpen(false)}
          >
            Sign In
          </Link>
        </nav>
      )}
    </header>
  )
}
