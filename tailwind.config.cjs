/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		color: {
			black: '#000814'
		},
		extend: {
			colors: {
				newLightYellow: '#ffd60a',
				newYellow: '#ffc300',
				newLightBlue: '#003566',
				newDarkBlue: '#001d3d'
			}
		}
	},
	plugins: []
}
