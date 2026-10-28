# Source for Automatic Deployment of luckylinux.dev

This repository contains the source code for **Luckylinux’s Self-Hosted Universe** — the main entry point for my personal domain.

It acts as a gateway to the systems, applications, and experiments I build, host, and run within my self-hosted ecosystem.

---

## Purpose

- Holds the source code for **luckylinux.dev**
- Serves as a central index to self-hosted projects and subdomains
- Designed to be minimal, intentional, and developer-focused
- Acts as the canonical source for automated deployments

---

## Hosting & Deployment

- Hosted on **Cloudflare Pages**
- DNS and domain management handled via the **Cloudflare ecosystem**
- The live site is available at:

  **https://luckylinux.dev**

- Changes pushed to the `production` branch are automatically built and deployed by Cloudflare Pages

---

## Tech Stack

- **Next.js**
- **React**
- **Tailwind CSS**
- Static-first setup with optional dynamic features
## Generation

- **Whole website is generated using Vercel's v0 AI model**

---

**Maintainer:** Lucky Verma

---

## 📝 Blog System

MDX-powered blog with syntax highlighting, reading time, tags, and RSS feed.

### Features
- **MDX Support** - Write posts in Markdown with React components
- **Syntax Highlighting** - Shiki-powered code blocks (dual theme)
- **Reading Time** - Auto-calculated per post
- **Tag System** - Filter posts by topic
- **SEO Optimized** - Open Graph, Twitter Cards, JSON-LD
- **RSS Feed** - Auto-generated at `/blog/rss.xml`

### Adding a New Post

Create a `.mdx` file in `content/posts/`:

```markdown
---
title: "Your Post Title"
date: "2026-01-15"
description: "Brief description for SEO and previews"
tags: ["tag1", "tag2", "tag3"]
readingTime: "5 min read"  # auto-calculated if omitted
coverImage: "/images/cover.png"  # optional
draft: false  # set true to hide from listing
---

Your content here with **Markdown** and `code`.

```python
def hello():
    print("Hello, World!")
```
```

### Pages
- `/blog` - Post listing with tag filter
- `/blog/[slug]` - Individual post with TOC
- `/blog/rss.xml` - RSS 2.0 feed

### Tech Stack
- `next-mdx-remote` for MDX processing
- `shiki` for syntax highlighting
- `@tailwindcss/typography` for prose styling
- `gray-matter` for frontmatter parsing
