module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#0a0e27',
        secondary: '#a8a8b3',
        tertiary: '#1a1f3a',
        accent: '#3b82f6',
        'accent-hover': '#2563eb',
        'black-100': '#0f1419',
        'black-200': '#050a0f',
        'white-100': '#f8f9fa',
        'gradient-start': '#3b82f6',
        'gradient-end': '#8b5cf6',
      },
      boxShadow: {
        card: '0 20px 60px -15px rgba(59, 130, 246, 0.3)',
        'card-hover': '0 25px 80px -15px rgba(59, 130, 246, 0.4)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.png)`,
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
