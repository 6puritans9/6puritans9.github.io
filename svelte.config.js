import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ fallback: '404.html' }),
		paths: {
			base: process.env.BASE_PATH ?? ''
		},
		alias: {
			'styled-system': './styled-system/*',
			'^': './src',
			'^^': '.'
		},
		prerender: {
			handleHttpError: ({ message }) => {
				throw new Error(message);
			}
		}
	}
};

export default config;
