"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/types";
import { formatBlogDate } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  index?: number;
  featured?: boolean;
}

export function BlogCard({ post, index = 0, featured = false }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={cn("h-full", featured && "md:col-span-2 lg:col-span-2")}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm shadow-slate-900/5 transition-shadow duration-300 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-600/10",
          featured && "md:flex-row"
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden p-6",
            post.gradient,
            featured ? "min-h-[200px] md:w-[42%] md:min-h-full" : "min-h-[160px]"
          )}
        >
          <div className="relative flex h-full flex-col justify-between text-white">
            <span className="inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              {post.category}
            </span>
            <div className="mt-8 hidden md:block">
              <p className="text-sm text-white/80">{post.readTime}</p>
            </div>
          </div>
        </div>

        <div className={cn("flex flex-1 flex-col p-6 sm:p-7", featured && "md:p-8")}>
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
            <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>

          <h2
            className={cn(
              "font-serif font-medium tracking-tight text-slate-900 transition-colors group-hover:text-violet-700",
              featured ? "text-2xl md:text-3xl" : "text-xl"
            )}
          >
            {post.title}
          </h2>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
            {post.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
            <div>
              <p className="text-sm font-semibold text-slate-900">{post.author}</p>
              <p className="text-xs text-slate-500">{post.authorRole}</p>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all group-hover:border-violet-200 group-hover:bg-violet-50 group-hover:text-violet-600">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
