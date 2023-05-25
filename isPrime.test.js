
//import function to
const isPrime = require('./isPrime')

//lest's Rock'n roll some tests
test('simpliest test', () => {
    expect(isPrime(1)).toBeTruthy()
})
test('simpliest test', () => {
    expect(isPrime(2)).toBeFalsy()
})
