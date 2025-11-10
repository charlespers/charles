import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Determine base path based on environment
// For GitHub Pages: /charles/
// For Vercel: / (set VITE_BASE_PATH=/ in Vercel environment variables)
// Default to / for Vercel deployments, /charles/ for GitHub Pages
const getBasePath = () => {
  // Check for explicit override
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }
  // Vercel sets VERCEL=1 during build
  if (process.env.VERCEL === '1' || process.env.VERCEL) {
    return '/';
  }
  // Default to GitHub Pages path
  return '/charles/';
};

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
});
