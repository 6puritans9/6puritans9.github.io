import { describe, it, expect, beforeEach } from 'vitest';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import Counter from '^/routes/Counter.svelte';

describe('counter test', () => {
	beforeEach(() => {
		render(Counter);
	});

	it('renders with two buttons', async () => {
		const buttons = page.getByRole('button');
		await expect.element(buttons.first()).toBeInTheDocument();
		await expect.element(buttons.nth(1)).toBeInTheDocument();
	});
});
