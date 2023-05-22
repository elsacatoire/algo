function areAnagrams(word1, word2) {
    if (word1.length != word2.length) {
        return false
    }
    console.log('pouet');
    const sortedW1 = word1.toLowerCase().split('').sort().join('')
    const sortedW2 = word2.toLowerCase().split('').sort().join('')
    return sortedW1 == sortedW2
}
console.log(areAnagrams('oui', 'oui'));
module.exports = areAnagrams