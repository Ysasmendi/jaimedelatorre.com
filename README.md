# jaimedelatorre.com

Personal website for Jaime de la Torre. Built with Eleventy and prepared for GitHub Pages.

## Content

- `src/_data/career.json`: companies, years and one-line descriptions.
- `src/_data/site.json`: email, social links and metadata.
- `src/index.njk`: portrait, introduction, expandable biography and experience.
- `src/assets/timeline.js`: magnification and active year within the independently scrolling chronology.
- `src/assets/about.js`: biography dialog.
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

The four LinkedIn articles imported in September 2026 are HTML posts under `src/posts/`, preserving the original text, formatting, language and publication date. All four are published. Their images are hosted locally under `src/assets/posts/`. Each article links to its original through `sourceUrl`; `lang`, `cover`, `coverAlt` and optional `coverCaption` control article presentation. Raw LinkedIn page exports are not included in the repository.

## Local preview

```sh
npm ci
npm run dev
```

Open http://localhost:8080. `npm run build` generates `_site/`.

## Hosting

GitHub Pages publishes `main` through `.github/workflows/pages.yml`. The website is live at `https://jaimedelatorre.com`, with HTTPS enforced and `www` redirected to the apex domain. DNS is managed in Squarespace; preserve the separate Proton Mail records when changing website records.

| Host | Type | Value |
| --- | --- | --- |
| @ | A | 185.199.108.153 |
| @ | A | 185.199.109.153 |
| @ | A | 185.199.110.153 |
| @ | A | 185.199.111.153 |
| www | CNAME | ysasmendi.github.io |

The `contact@jaimedelatorre.com` mailbox is configured separately. The site uses a `mailto:` link.

Inter is self-hosted under the included SIL Open Font License. Portrait supplied by Jaime de la Torre. No analytics, tracking scripts or third-party runtime requests.

Hobby pictograms use Tabler Icons (MIT; license in `src/assets/icons/LICENSE.txt`), plus custom padel, kitesurfing, analog watch, scuba mask and tank, and DJ-with-headphones pictograms. Edit labels and order in `src/_data/hobbies.json`. Article pictograms are custom SVGs in `src/_includes/blog-icons/`, selected through the post's `icon` field.

The home page stays within the viewport; only the chronology scrolls. On screens up to 1000px wide and 600px high, the home page scrolls normally so all experience remains reachable. The blog index and individual articles scroll beneath the persistent site header. Contact uses normal document scrolling and offers a keyboard-accessible copy-email button with success and failure feedback.

The portrait uses `jaime-desktop.webp` (1024 × 1536) and `jaime-mobile.webp` (320 × 480, selected at widths up to 680px). Both preserve the edited portrait and mobile framing. The edited source `src/assets/jaime-jtyy.png` and supplied original `src/assets/jaime.jpg` remain available. The shirt embroidery reads “J.T.Y.Y.”.

Default social previews use `src/assets/social-card.png` (1200 × 630), designed in `scripts/social-card.html`. To regenerate it, open that HTML file in a browser at 1200 × 630, wait for fonts and images to load, and save a viewport screenshot to the PNG path. Article previews keep their own cover images; Open Graph and Twitter metadata use absolute HTTPS image URLs.

D-DIN is self-hosted for the header under its SIL Open Font License (`src/assets/fonts/d-din/`). The ChatGPT/OpenAI hobby icon comes from Simple Icons; source and trademark attribution are in `src/assets/icons/OPENAI.txt`.
