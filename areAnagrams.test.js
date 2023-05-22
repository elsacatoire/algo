const areAnagrams = require('./areAnagrams.js')

test('pas un anagrame', () => {
    const result = areAnagrams('chat', 'lait')
    expect(result).toBeFalsy()
})
test('lettres en commun mais longueure différente', () => {
    const result = areAnagrams('chat', 'chatte')
    expect(result).toBeFalsy()
})
test('est un anagramme simple', () => {
    const result = areAnagrams('croupie', 'copieur')
    expect(result).toBeTruthy()
})
test('check Upper/lower case', () => {
    const result = areAnagrams('Chien', 'Niche')
    expect(result).toBeTruthy()
})