"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { getPostsByCategory } from "@/lib/blog";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogFilters } from "@/components/blog/blog-filters";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function BlogListing() {
  const [category, setCategory] = useState("All");

  const posts = useMemo(() => getPostsByCategory(category), [category]);
  const featured = useMemo(
    () => (category === "All" ? blogPosts.filter((p) => p.featured) : []),
    [category]
  );
  const gridPosts = useMemo(() => {
    if (category !== "All") return posts;
    const featuredSlugs = new Set(featured.map((p) => p.slug));
    return posts.filter((p) => !featuredSlugs.has(p.slug));
  }, [category, posts, featured]);

  return (
    <div>
      <div className="mb-12">
        <BlogFilters active={category} onChange={setCategory} />
      </div>

      {featured.length > 0 ? (
        <div className="mb-10 grid gap-6 md:grid-cols-2">
          {featured.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} featured />
          ))}
        </div>
      ) : null}

      {gridPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridPosts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-3xl border border-dashed border-[var(--border-strong)] bg-white px-6 py-16 text-center text-slate-500"
        >
          No articles in this category yet. Check back soon.
        </motion.p>
      )}

      <div className="relative mt-16 overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-14 text-center text-white sm:px-10">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="ambient-glow left-1/2 top-1/2 h-48 w-96 -translate-x-1/2 -translate-y-1/2 bg-[var(--accent)]/25" />
        </div>
        <div className="relative z-10">
          <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
            Ready to put these guides into action?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            Start free and turn checklists into a living plan for you and your
            partner.
          </p>
          <Magnetic strength={0.15} className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/?auth=register">
                Start free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
