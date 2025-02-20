const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#52D2B8",
				secondary: "#1c1fd318",
				light: "#FDFFFC",
				dark: "#1A1423",

			},
			width: {
				"standard-xl": "min(95%,1900px)",
				"standard": "min(95%,1250px)"
			}
		},
		screens: {
			'xs': '475px',
			...defaultTheme.screens
		}
	},
	plugins: [],
}
