# Portfolio

Data-driven static site for Cameron Olson. The original `Scratch/index.html` is kept untouched for reference; the deployable version lives under `site/` and is driven by a single `content.js` file for easy text updates.

## Quick start
- Install Node 18+ (needed for `fs.cp` in the build script).
- Preview locally: `npm run dev` then open the logged URL (defaults to http://localhost:4173).
- Build deployable files: `npm run build` (outputs to `dist/`).
- Preview the built output: `npm run preview`.

## Editing content
All copy and links are centralized in `site/content.js`. Update the relevant section objects (hero, featured project, experience, projects, research/creative, about, skills, contact, meta tags). The page re-renders entirely from this data; no HTML changes are required for routine edits.

## Styling
Visuals live in `site/styles.css`. Keep the class names aligned with the markup generated in `site/main.js`. Fonts are loaded from Google Fonts in `site/index.html`.

## Deploying
Run `npm run build` and deploy the static `dist/` folder to any host (Netlify, Vercel, S3, GitHub Pages, etc.). The build simply copies the `site/` assets, so you can also deploy `site/` directly if you prefer.

## Notes
- Placeholder research links still use `#`; replace with real URLs in `site/content.js`.
- Meta tags are sourced from `content.meta` and are also seeded in `site/index.html` for crawlers.
