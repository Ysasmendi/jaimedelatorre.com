# jaimedelatorre.com

Personal website for Jaime de la Torre. Built with Eleventy and prepared for GitHub Pages.

## Content

- `src/_data/career.json`: companies, years and one-line descriptions.
- `src/_data/site.json`: email, social links and metadata.
- `src/index.njk`: portrait and experience.
- `src/blog.njk`: blog index.
- `src/contact.njk`: email and social links.
- `src/assets/style.css`: layout and typography.

## Publish a post

Create `src/posts/my-first-post.md`:

```markdown
---
title: "Post title"
description: "A short description."
date: 2026-09-11
draft: false
---

Write the article in Markdown.
```

Saving to `main` triggers the build. Published posts appear in the blog, at `/blog/my-first-post/`, and in the sitemap. `draft: true` and future dates exclude posts from the generated website. Future posts need a new build after their publication date. If the repository becomes public, draft source files are also public; do not commit confidential content.

The five LinkedIn articles imported in September 2026 are HTML posts under `src/posts/`, preserving the original text, formatting, language and publication date. Four are published; “Start With Why” is kept as a draft and excluded from the blog and sitemap. Their images are hosted locally under `src/assets/posts/`. Each article links to its original through `sourceUrl`; `lang`, `cover`, `coverAlt` and optional `coverCaption` control article presentation. Raw LinkedIn page exports are not included in the repository.

## Local preview

```sh
npm ci
npm run dev
```

Open http://localhost:8080. `npm run build` generates `_site/`.

## Hosting

GitHub Pages uses `.github/workflows/pages.yml`. The custom domain is `jaimedelatorre.com`. Pages must be enabled and DNS configured before the website is live.

| Host | Type | Value |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | ysasmendi.github.io |

The `contact@jaimedelatorre.com` mailbox is configured separately. The site uses a `mailto:` link.

Inter is self-hosted under the included SIL Open Font License. Portrait supplied by Jaime de la Torre. No analytics, tracking scripts or third-party runtime requests.

Hobby pictograms use Tabler Icons (MIT; license in `src/assets/icons/LICENSE.txt`), plus custom padel, kitesurfing, analog watch, scuba tank and DJ controller pictograms. Edit labels and order in `src/_data/hobbies.json`.
