// ./sum.test.js
const sum = require('./sum');

// test('description', testFunction);

test.skip('suma dos números enteros positivos: 1 y 2, esperando obtener 3', () => {
    expect(sum(1, 2)).toBe(3);
});