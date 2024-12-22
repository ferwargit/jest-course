// ./sum.test.js
const sum = require('./sum');

test.skip('dos mas dos es cuatro', () => {
    expect(sum(2 + 2)).toBe(4);
    // expect(sum(2, 2)).toBe(4);
});