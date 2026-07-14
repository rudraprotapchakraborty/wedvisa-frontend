import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/data";
import { formatBlogDate } from "@/lib/blog";
import { SiteHeader } from "@/components/landing/site-header";
import { Footer } from "@/components/landing/footer";
import { BlogCard } from "@/components/blog/blog-card";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) {
    return { title: "Article not found" };
  }
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <article>
          <header className="relative overflow-hidden border-b border-slate-200/80 pt-32 pb-14 sm:pt-36 sm:pb-16">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-[0.08]`}
            />
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
              <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-700"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to blog
              </Link>

              <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                {post.category}
              </span>

              <h1 className="mt-5 font-serif text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                {post.title}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {post.excerpt}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200/80 pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-semibold text-white">
                  {post.author
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-900">
                    {post.author}
                  </p>
                  <p className="text-xs text-slate-500">{post.authorRole}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <time dateTime={post.publishedAt}>
                    {formatBlogDate(post.publishedAt)}
                  </time>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div
              className={`mb-12 h-48 overflow-hidden rounded-3xl bg-gradient-to-br sm:h-64 ${post.gradient}`}
            >
              <div className="flex h-full items-end p-8">
                <p className="max-w-md font-serif text-2xl font-medium text-white/95 sm:text-3xl">
                  {post.title}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-slate-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center sm:p-10">
              <h2 className="font-serif text-2xl font-medium text-slate-900 sm:text-3xl">
                Put this guide to work
              </h2>
              <p className="mx-auto mt-3 max-w-md text-slate-600">
                Create a free WedVisa workspace and turn advice into a clear
                application plan.
              </p>
              <Button asChild size="lg" variant="gradient" className="mt-6">
                <Link href="/register">
                  Start free
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="border-t border-slate-200 bg-slate-50/80 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
                    Keep reading
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-medium text-slate-900">
                    Related articles
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden text-sm font-semibold text-violet-600 transition hover:text-violet-700 sm:inline"
                >
                  View all
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item, index) => (
                  <BlogCard key={item.slug} post={item} index={index} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
