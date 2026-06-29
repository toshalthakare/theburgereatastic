'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MapPin, Clock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

// Simple Scroll Reveal Helper
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function Location() {
  return (
    <section id="location" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)]">
            <div className="grid md:grid-cols-2 items-center">
              
              {/* Left Column: Image with Hover Zoom */}
              <div className="relative min-h-80 md:h-full group overflow-hidden">
                <Image
                  src="/images/combo.png"
                  alt="The BurgerEatastic combo meal"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Visual design accent overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Right Column: Contact Details */}
              <div className="flex flex-col gap-8 p-8 sm:p-12">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-foreground border border-accent/20 mb-3">
                    Visit Us
                  </span>
                  <h2 className="font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Come Grab a Bite
                  </h2>
                  <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                    Dine in, take away or order online. We are right in the heart of college street, Nashik.
                  </p>
                </div>

                <ul className="flex flex-col gap-6">
                  <li className="flex items-start gap-4 group/item">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/15 transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                      <MapPin className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Address</span>
                      <span className="text-sm sm:text-base font-semibold leading-relaxed">
                        Behind Raja Burger, College Road, Nashik, Maharashtra 422005
                      </span>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-4 group/item">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/15 transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                      <Clock className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Timings</span>
                      <span className="text-sm sm:text-base font-semibold leading-relaxed">
                        Open Daily · 11:00 AM – 11:30 PM
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-4 group/item">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/15 transition-colors group-hover/item:bg-primary group-hover/item:text-primary-foreground">
                      <Phone className="size-5" aria-hidden="true" />
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Call Us</span>
                      <a
                        href="tel:+919359053780"
                        className="text-sm sm:text-base font-bold leading-relaxed text-foreground transition-colors hover:text-primary underline decoration-dotted decoration-primary/45 hover:decoration-solid"
                      >
                        +91 9359053780
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Button asChild size="lg" className="rounded-full font-bold px-7 shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-300">
                    <a
                      href="https://maps.google.com/?q=The+BurgerEatastic+College+Road+Nashik"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full font-bold px-7 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md active:translate-y-0 transition-all duration-300"
                  >
                    <a href="tel:+919359053780">Call to Order</a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
