## Framework

This project uses Svelte 5 with SvelteKit. Always use Svelte 5 rune syntax:

- `$state()`, `$derived()`, `$effect()` for reactivity
- `$props()` for component props
- `{@render children()}` for slots
- Refer to https://svelte.dev/docs/mcp/overview/llms.txt for Svelte 5 docs

## Styling

This project uses Panda CSS for styling. Refer to the Panda CSS documentation at:

- https://panda-css.com/llms.txt (overview)
- https://panda-css.com/llms-full.txt (full docs)

Use `css()` from `styled-system/css` for atomic styles. The output dir is `styled-system/`.

## Storybook

This project uses Storybook 10 with `@storybook/sveltekit` and `@storybook/addon-svelte-csf`.

- Stories are in `src/stories/` with `.stories.svelte` extension
- The Storybook preview imports `src/app.css` and `styled-system/styles.css`
- Use Svelte CSF format for stories, not the object format

## Testing

This project uses Vitest with two test environments:

- `*.svelte.spec.ts` — browser tests via Playwright (Chromium)
- `*.spec.ts` — server/node tests
- Component tests use `vitest-browser-svelte`
- Do not mix browser and server test files
