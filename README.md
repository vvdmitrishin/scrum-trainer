# Scrum Trainer

A collection of **self-contained, browser-based Scrum practice trainers**. Each trainer is a single HTML file with all CSS/JS inline — no build step, no dependencies, no server. Open it in a browser (or straight from the file system) and go. Works fully offline.

## Trainers

| Trainer | Topic | Open |
|---------|-------|------|
| **PSM I — Scrum Master** | Professional Scrum Master I practice exam (Scrum Guide 2020). 48 questions, timed exam mode + instant-feedback practice mode, 85% pass mark. | [`psm-i/index.html`](psm-i/index.html) |

The hub page [`index.html`](index.html) links to every trainer.

## How to use

- **Locally:** open `index.html` (the hub) or any trainer's `index.html` directly in a browser — double-click works, no server needed.
- **Hosted:** if deployed to GitHub Pages / Netlify, just visit the URL (handy on a phone).

Progress (attempts, best/last score) is stored per-browser in `localStorage`.

## Adding a new trainer

1. Create a folder: `your-trainer/`
2. Add a single self-contained `your-trainer/index.html` (all HTML/CSS/JS inline).
3. Add a card for it in the hub `index.html` (copy an existing `<a class="card">` block).
4. Add a row to the table above.

Keep each trainer dependency-free so it stays openable from `file://` and trivial to host.
