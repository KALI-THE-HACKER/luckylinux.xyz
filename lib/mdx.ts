import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { visit } from 'unist-util-visit';
import type { Root, Heading } from 'mdast';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  tags: string[];
  readingTime: string;
  coverImage?: string;
  draft?: boolean;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  content: string;
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function extractHeadings(content: string): { level: number; text: string; id: string }[] {
  const headings: { level: number; text: string; id: string }[] = [];
  
  const tree = remark().parse(content);
  visit(tree, 'heading', (node: Heading) => {
    const text = node.children.map((c: any) => c.value).join('');
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    headings.push({
      level: node.depth,
      text,
      id,
    });
  });
  
  return headings;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.mdx') || file.endsWith('.md'))
    .map(file => file.replace(/\.mdx?$/, ''));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const altPath = path.join(postsDirectory, `${slug}.md`);
  
  let filePath = fullPath;
  if (!fs.existsSync(fullPath) && fs.existsSync(altPath)) {
    filePath = altPath;
  }
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const readingTime = calculateReadingTime(content);
  const headings = extractHeadings(content);
  
  return {
    slug,
    meta: {
      title: data.title || slug,
      date: data.date || new Date().toISOString().split('T')[0],
      description: data.description || '',
      tags: data.tags || [],
      readingTime,
      coverImage: data.coverImage,
      draft: data.draft || false,
    },
    content,
  };
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug))
    .filter((post): post is Post => post !== null && !post.meta.draft)
    .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
  return posts;
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter(post => post.meta.tags.includes(tag));
}

export function getAllPostSlugs(): string[] {
  return getPostSlugs();
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  posts.forEach(post => post.meta.tags.forEach(tag => tags.add(tag)));
  return Array.from(tags).sort();
}

export async function mdxToHtml(content: string): Promise<string> {
  // Use remark to convert to HTML
  const result = await remark()
    .use(html)
    .process(content);
  return result.toString();
}
