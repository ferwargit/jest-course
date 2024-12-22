const fetchPromise = require("./fetchPromise");

test.skip("fetchPromise is 'Hi'", () => {
    return expect(fetchPromise(true)).resolves.toBe("Hi")
})

test.skip("fetchPromise throws", () => {
    return expect(fetchPromise(false)).rejects.toThrow("error")
})