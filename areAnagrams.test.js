const areAnagrams = require('./areAnagrams.js')

// Rock 'n' test !
test('simpliest test', () => {
    expect(areAnagrams('oui', 'oui')).toBeTruthy()
})
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
test('check accent', () => {
    const result = areAnagrams('cuve', 'vécu')
    expect(result).toBeTruthy()
})
test('blank and spaces', () => {
    const result = areAnagrams('Marcel Proust', 'Compulser art')
    expect(result).toBeTruthy()
})
