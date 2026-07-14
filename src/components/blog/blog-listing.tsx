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
          className="rounded-3xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center text-slate-500"
        >
          No articles in this category yet. Check back soon.
        </motion.p>
      )}

      <div className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-600 px-6 py-12 text-center text-white sm:px-10">
        <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Ready to put these guides into action?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Start free and turn checklists into a living application workspace for
          you and your partner.
        </p>
        <Button asChild size="lg" variant="secondary" className="mt-8">
          <Link href="/register">
            Start free
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
