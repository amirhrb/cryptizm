/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primaryColor)',
        layout: 'var(--bgLayoutColor)',
        container: 'var(--bgContainerColor)',
        contrast: 'var(--contrastColor)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
