// const mockCallback = jest.fn(x => 42 + x);
// mockCallback(0);
// mockCallback(1);

test.skip('mock implementation of a basic function', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
})