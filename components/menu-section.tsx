'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import type { MenuCategory, MenuItem } from '@/lib/menu-data'
import { Flame, Sparkles, Award } from 'lucide-react'

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
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
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

// Indian standard Veg/Non-Veg indicator dot
function FoodDot({ isVeg }: { isVeg: boolean }) {
  return (
    <span
      className={`flex size-4.5 shrink-0 items-center justify-center border-[1.5px] rounded-[3px] p-[2px] ${
        isVeg ? 'border-emerald-600/80 bg-emerald-500/5' : 'border-rose-600/80 bg-rose-500/5'
      }`}
      title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
    >
      <span
        className={`size-2.5 rounded-full ${
          isVeg ? 'bg-emerald-600' : 'bg-rose-600'
        }`}
      />
    </span>
  )
}

const tagStyles: Record<NonNullable<MenuItem['tag']>, { bg: string; text: string; icon?: React.ReactNode }> = {
  Bestseller: {
    bg: 'bg-amber-500/10 border border-amber-500/20',
    text: 'text-amber-600 dark:text-amber-400',
    icon: <Award className="size-3" />,
  },
  Spicy: {
    bg: 'bg-rose-500/10 border border-rose-500/20',
    text: 'text-rose-600 dark:text-rose-400',
    icon: <Flame className="size-3" />,
  },
  New: {
    bg: 'bg-emerald-500/10 border border-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
    icon: <Sparkles className="size-3" />,
  },
  Veg: {
    bg: 'bg-emerald-500/10 border border-emerald-500/20',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  'Non-Veg': {
    bg: 'bg-rose-500/10 border border-rose-500/20',
    text: 'text-rose-600 dark:text-rose-400',
  },
}

export function MenuSection({
  category,
  reverse,
}: {
  category: MenuCategory
  reverse?: boolean
}) {
  return (
    <section id={category.id} className={`scroll-mt-20 py-16 md:py-24 overflow-hidden transition-colors duration-500 ${
      reverse ? 'bg-secondary/25 dark:bg-secondary/8 border-y border-border/30 shadow-[inset_0_4px_12px_rgba(0,0,0,0.015)]' : ''
    }`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          
          {/* Left Column: Category Image Card */}
          <div className={`${reverse ? 'md:order-2' : ''} group`}>
            <div className="sticky top-28">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] border-4 border-card shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:scale-[1.01] group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.18)]">
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10 pointer-events-none" />
                  <Image
                    src={category.image || '/placeholder.svg'}
                    alt={category.title}
                    width={640}
                    height={640}
                    className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-8 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {category.title}
                </h2>
                <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
                  {category.blurb}
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Menu List */}
          <div className={reverse ? 'md:order-1' : ''}>
            <ul className="flex flex-col gap-2">
              {category.items.map((item, index) => {
                // Determine if item is veg
                const isVeg =
                  category.id === 'veg-burgers' ||
                  item.tag === 'Veg' ||
                  (category.id !== 'nonveg-burgers' &&
                    item.tag !== 'Non-Veg' &&
                    !item.name.toLowerCase().includes('chicken') &&
                    !item.name.toLowerCase().includes('nuggets') &&
                    !item.name.toLowerCase().includes('strips'));

                return (
                  <li key={item.name}>
                    <Reveal>
                      <div
                        className="group/item flex items-start justify-between gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-border/60 hover:bg-card/60 hover:shadow-sm hover:-translate-y-0.5"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="flex gap-3">
                          {/* Standard Indian Veg/Non Veg indicator */}
                          <div className="pt-1">
                            <FoodDot isVeg={isVeg} />
                          </div>
                          
                          <div>
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h3 className="font-heading text-lg font-bold text-foreground/95 transition-colors group-hover/item:text-primary">
                                {item.name}
                              </h3>
                              {item.tag && (
                                <span
                                  className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                                    tagStyles[item.tag]?.bg || ''
                                  } ${tagStyles[item.tag]?.text || ''}`}
                                >
                                  {tagStyles[item.tag]?.icon}
                                  {item.tag}
                                </span>
                              )}
                            </div>
                            <p className="mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground group-hover/item:text-muted-foreground/90">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <span className="shrink-0 font-heading text-xl font-extrabold text-primary transition-transform duration-300 group-hover/item:scale-105">
                          ₹{item.price}
                        </span>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
