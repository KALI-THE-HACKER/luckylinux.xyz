import { getAllPosts } from '@/lib/mdx';

export async function GET() {
  const posts = getAllPosts();
  const siteUrl = 'https://luckylinux.dev';
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Lucky Verma's Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Technical writeups, project postmortems, and learning notes on backend engineering, infrastructure, and networking.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <generator>Next.js MDX Blog</generator>
    ${posts.map(post => `
    <item>
      <title><![CDATA[${post.meta.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.meta.description}]]></description>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      ${post.meta.tags.map(tag => `<category>${tag}</category>`).join('')}
    </item>
    `).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
