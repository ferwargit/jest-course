const myFunction = require('./myFunction');

test.skip('throw on invalid input', () => {
    expect(() => {
        myFunction(invalidInput);
    }).toThrow();
});