# Study Desk

A personal study site. Drop `.md` and `.pdf` files into `content/`, push to GitHub, and Vercel or Netlify publishes them.

Built with Next.js, TypeScript and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. New files in `content/` appear after you save.

## Add your files

```
content/
├── eee-3105/
│   ├── _folder.json          { "title": "EEE 3105", "order": 1 }
│   ├── 01-transmission.md
│   └── 02-lecture-slides.pdf
└── computer-vision/
    └── cnn-basics.md
```

- Folders become sidebar sections, and they can be nested.
- Start names with numbers (`01-`, `02-`) to set the order.
- Page title: `title:` in the file's frontmatter, else the first `# Heading`, else the file name.
- Names starting with `_` or `.` are ignored. Use `_drafts/` for work in progress.
- Put images and PDFs next to your notes and link them with relative paths.
- Delete `content/getting-started/` when you no longer need it.

Optional frontmatter in a note:

```md
---
title: Sag and Tension
description: One line shown in search and page metadata
order: 2
updated: 2026-10-29
tags: [exam, chapter-2]
---
```

## Deploy

1. Push this folder to a GitHub repository.
2. **Vercel**: import the repo at vercel.com/new. No settings to change.
3. **Netlify**: import the repo at app.netlify.com. It detects Next.js on its own.

Every `git push` publishes the new version.

### Keep it private

A deployed site is public by default. Options:

- Keep the GitHub repo private (the site itself is still public).
- Use Vercel Deployment Protection or Netlify password protection (paid plans).
- Or leave out files you would not want others to read.

GitHub blocks files over 100 MB, so compress large PDFs.

## Customise

- `site.config.ts` sets the site title and description.
- Colours and fonts are in `src/app/globals.css`.
- Components are in `src/components/`, content handling is in `src/lib/content.ts`.

## Good to know

- PDF titles are searchable. PDF text is not.
- "Mark as read" and "Continue" are stored in the browser (localStorage), so they are per device.
- Search covers the first 8,000 characters of each note.
