import { defineConfig } from '@pandacss/dev';

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ['./src/**/*.{js,ts,svelte}', './pages/**/*.{js,ts,svelte}'],

	// Files to exclude
	exclude: [],

	theme: {
		extend: {
			tokens: {
				colors: {
					primary: { value: '#5017E8' },
					secondary: { value: '#abcdef' },
					red: { value: '#CC1C14' },
					green: { value: '#27F2A9' }
				},
				fonts: {
					body: { value: 'system-ui, sans-serif' }
				}
			},
			semanticTokens: {
				colors: {
					success: {
						value: 'colors.green'
					},
					error: {
						value: '{colors.red}'
					}
				}
			}
		}
	},

	outdir: 'styled-system'
});
