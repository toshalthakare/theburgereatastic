import { Beef, Share2, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/10 bg-[#0F0E0E] text-neutral-300">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
        
        {/* Logo and Brand */}
        <div className="flex flex-col gap-3">
          <a href="#top" className="group flex items-center gap-2.5 transition-transform duration-300 hover:scale-102 w-fit">
            <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform duration-500 group-hover:rotate-[360deg]">
              <Beef className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-extrabold text-white tracking-tight">
              The Burger<span className="text-primary">Eatastic</span>
            </span>
          </a>
          <p className="max-w-xs text-xs sm:text-sm leading-relaxed text-neutral-400">
            Pune Camp style burgers, fries, mojitos and coffee — freshly made in Nashik, Maharashtra.
          </p>
        </div>

        {/* Quick links & info */}
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">Contact</span>
          <a href="tel:+919359053780" className="text-sm font-bold text-white hover:text-primary transition-colors">
            +91 9359053780
          </a>
          <span className="text-xs text-neutral-400">College Road, Nashik, India</span>
        </div>

        {/* Social Icons with Hover Transitions */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="Share website"
            className="flex size-11 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
          >
            <Share2 className="size-5" aria-hidden="true" />
          </a>
          <a
            href="#"
            aria-label="Send us a message"
            className="flex size-11 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
          >
            <Send className="size-5" aria-hidden="true" />
          </a>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="border-t border-neutral-900 py-6 bg-[#090808]">
        <p className="px-4 text-center text-xs text-neutral-500 sm:px-6">
          © {new Date().getFullYear()} The BurgerEatastic, Nashik. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
