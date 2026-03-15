This repository now ships a plain static version of the site that can be hosted directly on GitHub Pages.

## Static site

The deployable site lives at the repository root:

- `index.html`
- `styles.css`
- `script.js`
- `public/` for images, PDFs, and icons

There is no build step required for the new version. GitHub Pages can serve it as-is.

## Local preview

You can preview it with any simple static server. For example:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`.

## GitHub Pages

1. Push this repository to GitHub.
2. In the repository settings, enable GitHub Pages for the branch you want to publish.
3. Serve from the repository root.

The `.nojekyll` file is included so GitHub Pages treats the repo as a plain static site.

## Legacy React source

The previous React source is still in the repo under `src/` and `public/index.html` as a fallback reference while you validate the migration. Once you're happy with the static version, those old app files can be removed.
