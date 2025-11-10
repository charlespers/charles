// Utility function to get asset paths that work with base path
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Get base URL from Vite (includes trailing slash)
  const base = import.meta.env.BASE_URL;
  // Combine base + path
  return `${base}${cleanPath}`;
};

