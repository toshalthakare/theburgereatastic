const phrases = [
  'Camp Style Burgers',
  'Loaded Cheese Fries',
  'Refreshing Mojitos',
  'Thick Cold Coffee',
  'Made Fresh Daily',
  'Pune Flavours in Nashik',
]

export function Marquee() {
  const items = [...phrases, ...phrases, ...phrases] // Repeat more to fill screen on larger displays
  return (
    <div className="relative z-10 -rotate-1 sm:-rotate-2 scale-[1.02] overflow-hidden border-y-2 border-accent/25 bg-gradient-to-r from-primary to-primary/90 py-4 text-primary-foreground shadow-lg my-6 md:my-10">
      <div className="flex w-max animate-[marquee_30s_linear_infinite] items-center gap-12">
        {items.map((p, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-heading text-sm sm:text-base font-extrabold uppercase tracking-widest whitespace-nowrap">
              {p}
            </span>
            <span aria-hidden="true" className="text-accent animate-pulse text-lg">
              ★
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
