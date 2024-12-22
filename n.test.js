test.skip('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
});

test.skip('undefined is falsy', () => {
    const n = undefined;
    expect(n).toBeFalsy();
});

test.skip('zero is falsy', () => {
    const n = 0;
    expect(n).toBeFalsy();
});

test.skip('false is falsy', () => {
    const n = false;
    expect(n).toBeFalsy();
});

test.skip('empty string is falsy', () => {
    const n = '';
    expect(n).toBeFalsy();
});
