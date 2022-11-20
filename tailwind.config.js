const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		'./index.html',
		'./src/**/*.{js,ts,vue}'
	],
	darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
			colors: {
				primary: colors.red['600'],
				secondary: colors.cyan['500'],
				grey: colors.gray['50'],
				'blue-100-accent': '#82b1ff',
				'blue-200-accent': '#448aff',
				'blue-400-accent': '#2979ff',
				'blue-700-accent': '#2962ff',
			},
			fontFamily: {
				gothic: ['GOTHIC', 'sans-serif'],
			},
		},
  },
  plugins: [
		plugin(function({ addBase }) {
			addBase({
				'html': { fontSize: '16px' },
			})
		}),
	],
}
