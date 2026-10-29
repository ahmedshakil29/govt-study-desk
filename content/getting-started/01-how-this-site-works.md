---
title: How this site works
description: Where to put your files and how they show up.
tags: [guide]
---

Everything lives in the `content` folder. Each **folder** becomes a section in the sidebar, and each **.md** or **.pdf** file becomes a page.

## Adding files

1. Copy your files into `content/`, for example `content/eee-3105/ch1-transmission.md`.
2. Save. The dev server shows the change right away.
3. Commit and push to GitHub. Vercel or Netlify rebuilds the site on its own.

```bash
git add .
git commit -m "add chapter 1 notes"
git push
```

## Ordering and names

- Start a file or folder name with a number to control order: `01-intro.md`, `02-theory.md`.
- The page title comes from `title:` at the top of the file, then from the first `# Heading`, then from the file name.
- To rename a folder in the sidebar, add a `_folder.json` file inside it: `{ "title": "EEE 3105", "order": 1 }`.
- Files and folders that start with `_` or `.` are ignored, so `_drafts/` stays private to you.

## PDFs

PDFs open in a built-in viewer with download and open-in-new-tab buttons. Their titles are searchable, but their text is not. For notes you search often, Markdown works better.

## Linking and images

Link to another note with a relative path, like [the cheatsheet](./02-markdown-cheatsheet.md). Images and PDFs next to your notes work the same way: `![diagram](./images/circuit.png)`.

## Reading tools

- Press `/` anywhere to search.
- Use **Mark as read** on any page to track progress. It is saved in your browser only.
- The home page remembers the last page you opened.
