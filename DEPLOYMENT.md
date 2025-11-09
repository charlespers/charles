# Deployment Instructions

This site is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

## Setup (One-time)

### Step 1: Enable GitHub Pages in Repository Settings

1. Go to your repository on GitHub: `https://github.com/charlespers/charles`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Configure Environment Protection Rules (if needed)

If you see an error about branch protection rules:

1. Go to **Settings** → **Environments** in your repository
2. Click on **github-pages** environment (or create it if it doesn't exist)
3. Under **Deployment branches**, make sure **main** is allowed
4. If there are protection rules blocking it, either:
   - Remove the protection rules for this environment, OR
   - Add your GitHub username as a required reviewer

### Step 3: Verify Workflow Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, ensure it's set to:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

## Manual Deployment (Alternative)

If automatic deployment doesn't work, you can deploy manually:

```bash
npm run build
npm run deploy
```

Note: This requires the `gh-pages` package. If it's not installed:

```bash
npm install --save-dev gh-pages
```

## Troubleshooting

### Error: "Branch 'main' is not allowed to deploy"

- **Solution**: Go to Settings → Environments → github-pages and ensure "main" branch is in the allowed deployment branches list

### Error: "Workflow permissions"

- **Solution**: Go to Settings → Actions → General and enable "Read and write permissions"

### Error: "Pages source not set"

- **Solution**: Go to Settings → Pages and select "GitHub Actions" as the source

### The site doesn't update after deployment

- Wait 1-2 minutes for GitHub Pages to rebuild
- Clear your browser cache
- Check the Actions tab to see if deployment succeeded

## Build Configuration

- **Base path**: `/charles/` (configured in `vite.config.js`)
- **Build output**: `dist/` folder
- **Deployment URL**: `https://charlespers.github.io/charles/`
