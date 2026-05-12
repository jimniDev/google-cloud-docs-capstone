# Google Cloud Docs Capstone

A static HTML prototype for Google Cloud Documentation with AI-powered Skills.

> Previously this was a React/Vite app. It has been migrated to plain HTML +
> CSS + Tailwind (CDN) to keep the prototype simple and fast to iterate on.

---

## What This Project Has

| Page          | URL                            | Notes                              |
| ------------- | ------------------------------ | ---------------------------------- |
| Home          | `pages/home.html`              | Landing / Gemini-style search      |
| Skills        | `pages/skills.html`            | Explainer for what Skills are      |
| Skill Library | `pages/skill-library.html`     | Browse + filter all skills         |
| Skill Detail  | `pages/skill-detail-screen.html` | Step-by-step skill view          |
| Skill on Doc  | `pages/skill-on-doc.html`      | A skill embedded in a docs page    |

All pages share a Google Cloud top nav via
`public/pages/assets/site-header.{css,js}`.

---

## Run it locally

You only need Node.js (for the dev/static server). No build step is required
while editing pages.

```bash
npm run dev
# opens http://localhost:3000 by default
```

Anywhere you would normally edit a React component, edit the matching HTML in
`public/pages/` instead. Refresh the page to see changes.

---

## Project structure

```
google-cloud-docs-capstone/
├── index.html                  ← redirects to pages/home.html
├── public/
│   ├── 404.html
│   ├── favicon.svg
│   ├── icons.svg
│   └── pages/
│       ├── home.html
│       ├── skills.html
│       ├── skill-library.html
│       ├── skill-detail-screen.html
│       ├── skill-on-doc.html
│       └── assets/
│           ├── site-header.css ← shared top nav styles
│           └── site-header.js  ← shared top nav + footer
├── scripts/
│   └── build.mjs               ← copies files into dist/ for GitHub Pages
└── package.json
```

---

## Deploy

`.github/workflows/deploy.yml` runs `node scripts/build.mjs` (which copies
`index.html` and everything in `public/` into `dist/`) and publishes `dist/`
to GitHub Pages.
