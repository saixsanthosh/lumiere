"use client";

import { Phone } from "lucide-react";
import { AnimateOnScroll, StaggerContainer, StaggerItem } from "@/components/shared/motion-wrapper";
import SectionHeading from "@/components/shared/section-heading";
import { InstagramIcon } from "@/components/ui/icons";

const timeline = [
  { year: "2014", title: "The First Roast", text: "A tiny roastery in a Chennai garage, a second-hand roaster, and a dream of perfect coffee." },
  { year: "2016", title: "First Café Opens", text: "Lumière Anna Nagar welcomed its first guests — 20 seats, one espresso machine, and infinite passion." },
  { year: "2018", title: "Direct Trade", text: "We flew to Ethiopia and Colombia to build relationships with the farmers who grow our beans." },
  { year: "2020", title: "Community Hub", text: "Live music nights, latte art workshops, and cupping sessions turned Lumière into a cultural gathering place." },
  { year: "2023", title: "Online Ordering", text: "We launched our digital platform so every neighborhood could experience Lumière at home." },
  { year: "2026", title: "The Future", text: "New locations, a roastery café, and a mission to bring artisan coffee to every corner of the city." },
];

/* CAFÉ OWNER: drop the three photos in /public/team with these exact filenames.
   If a photo is missing, an elegant initials placeholder shows instead. */
const team = [
  { name: "SAI SANTHOSH", image: "/team/sai-santhosh.jpg", instagram: "saixsanthosh", phone: "8925075593" },
  { name: "CINDY", image: "/team/cindy.jpg", instagram: "cindy.zi", phone: "9148239263" },
  { name: "SUSHMEETHA", image: "/team/sushmeetha.jpg", instagram: "sushmii_5", phone: "9094844748" },
];

const initials = (name: string) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

const values = [
  { title: "Craft Over Speed", text: "Every cup is made to order. We never pre-batch, never rush, never compromise." },
  { title: "Transparency", text: "We know every farmer by name. You can trace your coffee from soil to sip." },
  { title: "Community First", text: "We exist to bring people together — over coffee, music, and shared moments." },
  { title: "Sustainability", text: "Compostable packaging, zero food waste programs, and carbon-neutral sourcing goals." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20 bg-espresso">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[350px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&q=80"
               alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="font-script text-caramel text-xl mb-2">Since 2014</p>
          <h1 className="font-display text-5xl md:text-7xl text-cream tracking-wide">Our Story</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-20 max-w-4xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
                 alt="Coffee roasting" className="rounded-lg shadow-card w-full aspect-[3/4] object-cover" />
          </AnimateOnScroll>
          <div>
            <AnimateOnScroll>
              <h2 className="font-display text-3xl md:text-4xl text-cream mb-6 leading-tight">
                A love letter to <span className="text-gradient-gold">exceptional coffee</span>
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <p className="text-text-muted-dark font-body leading-relaxed mb-4">
                Lumière was born from a simple truth: the world deserves better coffee. Not just
                better beans — but a better experience. A place where you can slow down, where
                the aroma wraps around you, where every sip reminds you that the best things in
                life are crafted with care.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2}>
              <p className="text-text-muted-dark font-body leading-relaxed">
                Our founder Arjun Rao left a corporate career in 2014 to chase a dream. Armed with
                a battered Probat roaster and an obsessive love for single-origin beans, he began
                roasting in his garage. Twelve years later, Lumière is Chennai&apos;s most beloved
                artisan café — but the philosophy has never changed: source honestly, roast carefully,
                serve lovingly.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-roasted">
        <div className="max-w-4xl mx-auto section-padding">
          <SectionHeading subtitle="Our Journey" title="A Decade of Craft" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-caramel/20 md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <AnimateOnScroll key={item.year} delay={i * 0.05}>
                  <div className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}>
                    <div className="md:w-1/2 pl-12 md:pl-0">
                      <span className="font-display text-3xl text-caramel">{item.year}</span>
                      <h3 className="font-heading text-lg text-cream mt-1">{item.title}</h3>
                      <p className="text-text-muted-dark text-sm font-body mt-2 leading-relaxed">{item.text}</p>
                    </div>
                    <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-caramel border-2 border-espresso" />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto section-padding">
          <SectionHeading subtitle="What We Believe" title="Our Values" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-6 bg-roasted rounded-lg border border-[rgba(201,162,75,0.08)] hover:border-caramel/20 transition-all">
                  <h3 className="font-heading text-lg text-caramel mb-2">{v.title}</h3>
                  <p className="text-text-muted-dark text-sm font-body leading-relaxed">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-roasted">
        <div className="max-w-5xl mx-auto section-padding">
          <SectionHeading subtitle="The People" title="Meet Our Team" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="text-center group">
                  <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-2xl glass-card flex items-center justify-center">
                    <span className="absolute font-display text-6xl text-caramel/30 select-none">
                      {initials(member.name)}
                    </span>
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
                      className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-heading text-lg text-cream group-hover:text-caramel transition-colors tracking-wide">
                    {member.name}
                  </h3>
                  <a
                    href={`https://instagram.com/${member.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-1.5 text-caramel/80 hover:text-gold-bright text-sm font-body"
                  >
                    <InstagramIcon width={14} height={14} /> @{member.instagram}
                  </a>
                  <a
                    href={`tel:+91${member.phone}`}
                    className="mt-1 flex items-center justify-center gap-1.5 text-text-muted-dark hover:text-caramel text-xs font-body"
                  >
                    <Phone size={12} /> +91 {member.phone}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
