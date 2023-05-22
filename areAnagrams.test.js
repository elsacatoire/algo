const areAnagrams = require('./areAnagrams.js')

test('pas un anagrame', () => {
    const result = areAnagrams('chat', 'lait')
    expect(result).toBeFalsy
})