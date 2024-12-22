const fetchPromise2 = require("./fetchPromise2");

test('the data is peanut butter', async () => {
    const data = await fetchPromise2();
    expect(data).toBe('peanut butter');
});