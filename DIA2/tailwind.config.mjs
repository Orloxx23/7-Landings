/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#19e68c",
        "primary-dark": "#208c52",
        secondary: "#222326",
      },
    },
  },
  plugins: [],
};
