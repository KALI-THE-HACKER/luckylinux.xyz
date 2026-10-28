import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts, getAllTags } from '@/lib/mdx';
import { Calendar, Tag, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | Lucky Verma',
  description: 'Technical writeups, project postmortems, and learning notes on backend engineering, infrastructure, and networking.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luckylinux.dev/blog',
    siteName: "Lucky Verma's Blog",
    title: 'Blog | Lucky Verma',
    description: 'Technical writeups, project postmortems, and learning notes.',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-12 lg:py-20">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#1C1C1C] mb-4">
          Blog
        </h1>
        <p className="text-lg text-[#66635F] max-w-2xl mx-auto">
          Technical writeups, project postmortems, and learning notes on backend engineering, 
          infrastructure, networking, and the occasional deep dive.
        </p>
      </header>

      {/* Tag Filter */}
      {tags.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Link
            href="/blog"
            className="px-3 py-1.5 text-sm font-medium rounded-full bg-[#1C1C1C] text-[#F9F7F3] hover:bg-[#333333] transition-colors"
          >
            All posts
          </Link>
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="px-3 py-1.5 text-sm font-medium rounded-full border border-[rgba(0,0,0,0.08)] text-[#66635F] hover:bg-[#F6F3ED] hover:text-[#1C1C1C] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      )}

      {/* Posts Grid */}
      {posts.length === 0 ? (
        <div className="text-center py-16">
          <div className="size-12 rounded-xl bg-surface border border-border grid place-items-center text-muted-foreground mx-auto mb-4">
            <Calendar className="size-6 opacity-70" />
          </div>
          <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">No posts yet</h3>
          <p className="text-[#66635F]">Check back soon for new content.</p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(post => (
            <article
              key={post.slug}
              className="group bg-[#F9F7F3] border border-[rgba(0,0,0,0.08)] rounded-2xl p-6 md:p-8 hover:border-[#B36A2E]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-xs text-[#66635F] mb-3">
                <time dateTime={post.meta.date}>
                  <Calendar className="size-3.5 inline-block align-middle mr-1" />
                  {new Date(post.meta.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span className="flex items-center gap-1">
                  <Clock className="size-3.5 inline-block align-middle mr-1" />
                  {post.meta.readingTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl font-normal text-[#1C1C1C] mb-3 group-hover:text-[#B36A2E] transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.meta.title}
                </Link>
              </h2>

              <p className="text-[#66635F] mb-4 line-clamp-3">
                {post.meta.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.meta.tags.slice(0, 4).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium bg-[#F6F3ED] text-[#66635F] rounded-full border border-[rgba(0,0,0,0.08)]"
                  >
                    {tag}
                  </span>
                ))}
                {post.meta.tags.length > 4 && (
                  <span className="px-2 py-0.5 text-xs font-medium bg-[#F6F3ED] text-[#66635F] rounded-full border border-[rgba(0,0,0,0.08)]">
                    +{post.meta.tags.length - 4}
                  </span>
                )}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B36A2E] hover:text-[#1C1C1C] transition-colors group"
              >
                Read more
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
