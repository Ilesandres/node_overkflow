const { sum } = require('./index');

test('sum adds two numbers', () => {
	expect(sum(1, 2)).toBe(3);
	expect(sum(-1, 1)).toBe(0);
});

test('sum handles zeros', () => {
	expect(sum(0, 0)).toBe(0);
});
