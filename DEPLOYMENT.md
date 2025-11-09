# Deployment Instructions

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup (One-time)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions" (not "Deploy from a branch")
   - Save the changes

2. **The GitHub Actions workflow will automatically:**
   - Build your site when you push to `main`
   - Deploy it to `https://charlespers.github.io/charles/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run build
npm run deploy
```

Note: This requires the `gh-pages` package to be installed.

## Troubleshooting

- If deployment fails, check the "Actions" tab in your GitHub repository
- Make sure GitHub Pages is set to use "GitHub Actions" as the source
- The base path is set to `/charles/` in `vite.config.js` to match your GitHub Pages URL

