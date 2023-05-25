
//import function to
const reverseString = require('./smallAlgo')
const findMax = require("./smallAlgo")

//lest's Rock'n roll some tests
test('simpliest test', () => {
    expect(reverseString("ad")).toBe("da")
})

test('findMax simpliest test', () => {
    expect(findMax([1, 5, 2])).toBe(5)
})