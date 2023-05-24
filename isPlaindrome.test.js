
//import function to
const isPalindrome = require('./isPlaindrome')

//lest's Rock'n roll some tests
test('simpliest test', () => {
    expect(isPalindrome('kayak')).toBeTruthy()
})
test('simpliest test2', () => {
    expect(isPalindrome('hello')).toBeFalsy()
})
test('one word with accent', () => {
    expect(isPalindrome('rêver')).toBeTruthy()
})
