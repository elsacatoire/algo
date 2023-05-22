function areAnagrams(word1, word2) {
    if (word1.length !== word2.lenth) {
        return false
    }
    return word1 === word2
}
module.exports = areAnagrams