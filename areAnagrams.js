function areAnagrams(word1, word2) {
    /*     if (word1.length !== word2.lenth) {
            return false
        } */
    const sortedW1 = word1.split('').sort().join('')
    const sortedW2 = word2.split('').sort().join('')
    return sortedW1 === sortedW2
}
console.log(areAnagrams('listen', 'silent'));
module.exports = areAnagrams