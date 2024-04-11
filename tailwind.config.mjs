/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily:{
				'goblin': ["Permanent Marker", 'cursive', 'sans-serif'],
				'custom': ["Poppins", 'sans-serif']
			},
			backgroundColor: {
				'node': '#346f18',
				'js': '#f7e04f',
				'css': '#3177b9',
				'html': '#e55138',
				'postgres': '#478fca',
				'react': '#61d2f1',
			},
			colors: {
				'node': '#346f18',
				'js': '#f7e04f',
				'css': '#3177b9',
				'html': '#e55138',
				'postgres': '#478fca',
				'react': '#61d2f1',
			}
		},
	},
	plugins: [],
}
