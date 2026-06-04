"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { AnimateOnScroll } from "@/components/shared/motion-wrapper";

export default function BlogArticlePage() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-espresso flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-cream mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-caramel font-body hover:underline">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-espresso">
      {/* Hero Image */}
      <div className="relative h-[45vh] min-h-[300px]">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
      </div>

      <article className="max-w-3xl mx-auto section-padding -mt-24 relative z-10">
        <AnimateOnScroll>
          <Link href="/blog" className="inline-flex items-center gap-2 text-caramel text-sm font-body mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={14} /> Back to Journal
          </Link>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <span className="inline-block px-3 py-1 bg-caramel/10 text-caramel text-xs font-body rounded-pill mb-4">
            {post.category}
          </span>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <h1 className="font-display text-4xl md:text-5xl text-cream leading-tight mb-6">
            {post.title}
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.2}>
          <div className="flex items-center gap-4 text-text-muted-dark text-sm font-body mb-10 pb-6 border-b border-[rgba(201,162,75,0.1)]">
            <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
            <span>{new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime} min read</span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.25}>
          <div className="prose-lumiere">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-text-muted-dark font-body text-base leading-[1.8] mb-5">
                {paragraph}
              </p>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[rgba(201,162,75,0.1)]">
            <h3 className="font-heading text-xl text-cream mb-6">More from the Journal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="group flex gap-4 p-3 rounded-lg bg-roasted hover:bg-mocha/40 transition-colors">
                  <img src={r.image} alt={r.title} className="w-20 h-20 object-cover rounded-md shrink-0" />
                  <div>
                    <h4 className="font-heading text-sm text-cream group-hover:text-caramel transition-colors line-clamp-2">
                      {r.title}
                    </h4>
                    <p className="text-text-muted-dark text-xs font-body mt-1">{r.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
