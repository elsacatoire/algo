function areAnagrams(word1, word2) {
    console.log('pouet');
    const sortedW1 = word1.toLowerCase().split('').sort().join('')
    const sortedW2 = word2.toLowerCase().split('').sort().join('')
    return sortedW1 == sortedW2
}
console.log(areAnagrams('oui', 'oui'));
module.exports = areAnagrams