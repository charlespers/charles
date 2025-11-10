import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Determine base path based on environment
// For GitHub Pages: /charles/
// For Vercel: / (set VITE_BASE_PATH=/ in Vercel environment variables)
// Default to / for Vercel, but can be overridden
const base = process.env.VITE_BASE_PATH || (process.env.VERCEL ? '/' : '/charles/');

export default defineConfig({
  plugins: [react()],
  base: base,
});
