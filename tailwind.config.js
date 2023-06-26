import default_theme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', ...default_theme.fontFamily.sans],
				handwriting: ['Delicious Handrawn'],
			},
		},
	},
	plugins: [],
};
