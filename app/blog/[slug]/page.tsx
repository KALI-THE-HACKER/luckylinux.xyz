import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import { remark } from 'remark';
import html from 'remark-html';
import { Calendar, Tag, Clock, ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.meta.title} | Lucky Verma`,
    description: post.meta.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://luckylinux.dev/blog/${slug}`,
      siteName: "Lucky Verma's Blog",
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: post.meta.date,
      tags: post.meta.tags,
      images: post.meta.coverImage ? [post.meta.coverImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.meta.title,
      description: post.meta.description,
      images: post.meta.coverImage ? [post.meta.coverImage] : [],
    },
    other: {
      'article:published_time': post.meta.date,
      'article:tag': post.meta.tags.join(','),
    },
  };
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <article className="max-w-3xl mx-auto px-6 md:px-12 py-12 lg:py-20">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#66635F] hover:text-[#1C1C1C] transition-colors mb-8"
      >
        <ArrowLeft className="size-4" />
        Back to Blog
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.meta.tags.map(tag => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="px-2.5 py-0.5 text-xs font-medium bg-[#F6F3ED] text-[#66635F] rounded-full border border-[rgba(0,0,0,0.08)] hover:bg-[#E8E4DB] transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>

        <h1 className="font-serif text-4xl md:text-5xl font-normal text-[#1C1C1C] mb-4 leading-tight">
          {post.meta.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[#66635F]">
          <time dateTime={post.meta.date} className="flex items-center gap-1.5">
            <Calendar className="size-4" />
            {new Date(post.meta.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="flex items-center gap-1.5">
            <Clock className="size-4" />
            {post.meta.readingTime}
          </span>
        </div>
      </header>

      {/* Cover Image */}
      {post.meta.coverImage && (
        <div className="mb-10 rounded-xl overflow-hidden border border-[rgba(0,0,0,0.08)]">
          <img
            src={post.meta.coverImage}
            alt={post.meta.title}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Content */}
      <div 
        className="prose prose-slate max-w-none text-[#1C1C1C] 
          prose-headings:font-serif prose-headings:text-[#1C1C1C] 
          prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
          prose-a:text-[#B36A2E] prose-a:no-underline hover:prose-a:underline
          prose-code:bg-[#F6F3ED] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-[#1C1C1C] prose-pre:text-[#F7F5F1] prose-pre:rounded-xl
          prose-img:rounded-xl prose-img:border prose-img:border-[rgba(0,0,0,0.08)]
          prose-blockquote:border-l-4 prose-blockquote:border-[#B36A2E] prose-blockquote:bg-[#F6F3ED]
          prose-ul:marker:text-[#B36A2E] prose-ol:marker:text-[#B36A2E]"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-[rgba(0,0,0,0.08)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#66635F] hover:text-[#1C1C1C] transition-colors"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.meta.title)}&url=${encodeURIComponent(`https://luckylinux.dev/blog/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[#66635F] hover:text-[#B36A2E] transition-colors"
            >
              <ExternalLink className="size-4" />
              Share
            </a>
          </div>
        </div>
      </footer>
    </article>
  );
}
