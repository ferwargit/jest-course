function fetchPromise(isComplete) {
    return new Promise((resolve, reject) => {
        if (isComplete) {
            setTimeout(() => resolve('Hi'), 1000)
        }
        else {
            setTimeout(() => reject(new Error('error')), 1000)
        }
    })
}

module.exports = fetchPromise