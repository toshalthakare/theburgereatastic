'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Beef } from 'lucide-react'
import { Button } from '@/components/ui/button'

const links = [
  { label: 'Veg Speciality', href: '#veg-speciality' },
  { label: 'Non-Veg Speciality', href: '#non-veg-speciality' },
  { label: 'Veg Burgers', href: '#veg-burgers' },
  { label: 'Bites', href: '#bites' },
  { label: 'Drinks', href: '#beverages' },
  { label: 'Find Us', href: '#location' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-border/60 bg-background/80 backdrop-blur-md py-3 shadow-sm'
          : 'border-transparent bg-background/30 backdrop-blur-sm py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-1 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
        >
          <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform duration-500 group-hover:rotate-[360deg]">
            <Beef className="size-5" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-tight">
            The Burger<span className="text-gradient">Eatastic</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 text-sm font-bold text-foreground/80 transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <Button asChild className="rounded-full font-bold px-6 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
            <a href="#location">Order Now</a>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/50 text-foreground transition-all hover:bg-secondary md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="size-5 transition-transform duration-300 rotate-90" aria-hidden="true" />
          ) : (
            <Menu className="size-5 transition-transform duration-300" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        className={`absolute left-0 right-0 border-b border-border bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden ${
          open
            ? 'top-[100%] opacity-100 translate-y-0 shadow-lg'
            : 'top-[100%] opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-base font-bold text-foreground/85 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <Button
              asChild
              className="w-full rounded-full font-bold py-5 text-base shadow-md"
              onClick={() => setOpen(false)}
            >
              <a href="#location">Order Now</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
