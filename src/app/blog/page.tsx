"use client";

import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import SectionHeading from "@/components/shared/section-heading";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-espresso">
      {/* Hero */}
      <div className="relative h-[35vh] min-h-[250px] flex items-center justify-center mb-12">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
               alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="relative z-10 text-center">
          <p className="font-script text-caramel text-xl mb-2">Stories & Guides</p>
          <h1 className="font-display text-5xl md:text-6xl text-cream tracking-wide">The Journal</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto section-padding">
        <SectionHeading
          subtitle="Coffee Culture"
          title="Latest Articles"
          description="Brewing guides, origin stories, and the culture behind every cup."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <AnimateOnScroll key={post.id} delay={i * 0.05}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-roasted rounded-lg overflow-hidden border border-[rgba(201,162,75,0.08)]
                                hover:border-caramel/20 transition-all duration-500 hover:shadow-glow">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img src={post.image} alt={post.title}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         loading="lazy" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-mocha/80 backdrop-blur-sm
                                     text-cream text-[10px] font-body rounded-pill">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-text-muted-dark/60 text-xs font-body mb-3">
                      <span>{new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} min read</span>
                    </div>
                    <h3 className="font-heading text-lg text-cream group-hover:text-caramel transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-text-muted-dark text-sm font-body leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-caramel text-sm font-body
                                     group-hover:gap-3 transition-all duration-300">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
