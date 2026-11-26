# mohanraamvk-portfolio

My personal site: CV, work, projects and contact details in one place.

**Live:** https://mohanraamvk.github.io/mohanraamvk-portfolio/

## Stack

React + TypeScript, built with Vite, styled with Tailwind v4. No backend, it's a single static page.
Deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
```

## Editing

- Text (experience, projects, education, etc.) is in `src/data.ts`
- Layout is in `src/App.tsx`
- Colours for dark/light mode are CSS variables at the top of `src/styles.css`
- To update the CV, replace `public/resume.pdf`

## Todo

- [ ] Project pages with screenshots
- [ ] Swedish version
- [ ] Custom domain
