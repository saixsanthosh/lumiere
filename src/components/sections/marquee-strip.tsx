"use client";

const WORDS = [
  "Single-Origin",
  "Hand-Roasted",
  "Latte Art",
  "Slow Brewed",
  "Farm Traced",
  "Small Batch",
  "Cold Brew",
  "Artisan Bakes",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
    >
      {[0, 1].map((dup) => (
        <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
          {WORDS.map((w) => (
            <span key={w} className="flex items-center">
              <span className="px-8 font-display text-4xl md:text-6xl font-light text-cream/80">
                {w}
              </span>
              <span className="h-2 w-2 rotate-45 bg-caramel/70" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

/** Two-row counter-scrolling marquee with edge fade. */
export default function MarqueeStrip() {
  return (
    <section className="relative overflow-hidden border-y border-caramel/10 bg-roasted py-10 md:py-14">
      <div className="mask-fade-x flex flex-col gap-4">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
