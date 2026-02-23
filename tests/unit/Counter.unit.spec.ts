import { describe, it, expect } from 'vitest';

// Extract modulo logic for testing (or import if exported from Counter.svelte)
function modulo(n: number, m: number) {
	return ((n % m) + m) % m;
}

describe('modulo function', () => {
	it('returns correct modulo for positive numbers', () => {
		expect(modulo(5, 3)).toBe(2);
		expect(modulo(10, 4)).toBe(2);
	});

	it('handles negative numbers correctly', () => {
		expect(modulo(-1, 10)).toBe(9);
		expect(modulo(-5, 3)).toBe(1);
		expect(modulo(-10, 4)).toBe(2);
	});

	it('returns 0 for multiples', () => {
		expect(modulo(10, 5)).toBe(0);
		expect(modulo(20, 4)).toBe(0);
	});

	it('handles edge case when n is 0', () => {
		expect(modulo(0, 5)).toBe(0);
	});
});
