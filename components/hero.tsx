import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden py-8 md:py-16">
      {/* Background organic shape for visual interest */}
      <div className="absolute -top-40 -right-40 -z-10 size-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 -z-10 size-[500px] rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-10 sm:px-6 md:grid-cols-2 md:py-16">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-bold text-primary transition-all duration-300 hover:bg-primary/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <MapPin className="size-4" aria-hidden="true" />
            Serving in Nashik, Maharashtra
          </span>

          <h1 className="text-balance font-heading text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Pune Camp Style
            <span className="block text-gradient mt-1">Burgers, Reborn.</span>
          </h1>

          <p className="max-w-md text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            The BurgerEatastic brings the legendary street burgers of Pune Camp
            to Nashik — stacked patties, gooey cheese, loaded fries, icy mojitos
            and bold coffee.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 text-base font-bold shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all duration-300"
            >
              <a href="#veg-burgers">See the Menu</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base font-bold hover:-translate-y-0.5 hover:bg-secondary hover:shadow-md active:translate-y-0 transition-all duration-300"
            >
              <a href="#location">Find Us</a>
            </Button>
          </div>

          <div className="flex items-center gap-3.5 pt-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-5 fill-accent text-accent animate-pulse-slow"
                  style={{ animationDelay: `${i * 150}ms` }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
              Loved by <span className="text-foreground font-extrabold">5,000+</span> hungry Nashikites
            </p>
          </div>
        </div>

        {/* Right Column: Hero Image with float animations and gradients */}
        <div className="relative mx-auto max-w-md md:max-w-none w-full">
          {/* Circular glow background */}
          <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-primary/30 to-accent/20 blur-3xl animate-pulse-slow" />
          
          {/* Main Burger Container with Bobbing/Floating Animation */}
          <div className="relative animate-float p-4">
            <div className="overflow-hidden rounded-[2.5rem] border-[6px] border-card shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all duration-500 hover:rotate-1 hover:scale-[1.02]">
              <Image
                src="/images/hero-burger.png"
                alt="Juicy camp style double cheeseburger"
                width={720}
                height={720}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Premium Floater: Pricing Badge */}
            <div className="absolute -bottom-2 left-8 flex items-center gap-3.5 rounded-2xl border border-border/80 bg-card/90 backdrop-blur-md px-5 py-3.5 shadow-xl animate-float-delayed">
              <span className="font-heading text-3xl font-extrabold text-primary">
                ₹90
              </span>
              <span className="text-xs font-bold leading-tight text-muted-foreground">
                Burgers
                <br />
                starting at
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
