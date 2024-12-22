const myFunction = require('./myFunction');

test('throw on invalid input', () => {
    expect(() => {
        myFunction(invalidInput);
    }).toThrow();
});