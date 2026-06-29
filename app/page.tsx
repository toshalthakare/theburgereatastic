import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Marquee } from '@/components/marquee'
import { MenuSection } from '@/components/menu-section'
import { Location } from '@/components/location'
import { Footer } from '@/components/footer'
import { menu } from '@/lib/menu-data'

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <div className="flex flex-col">
        {menu.map((category, i) => (
          <MenuSection
            key={category.id}
            category={category}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
      <Location />
      <Footer />
    </main>
  )
}
