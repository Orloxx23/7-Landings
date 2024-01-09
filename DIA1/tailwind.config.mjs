/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF5757',
				primaryDark: '#a41116',
				secondary: '#6BB56D',
			},
		},
	},
	plugins: [],
}
