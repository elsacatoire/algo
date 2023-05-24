function areAnagrams(word1, word2) {
    console.log('pouet');
    let normalizedWord1 = deleteAccent(word1)
    let normalizedWord2 = deleteAccent(word2)
    const sortedW1 = normalizedWord1.toLowerCase().split('').sort().join('')
    const sortedW2 = normalizedWord2.toLowerCase().split('').sort().join('')
    return sortedW1 == sortedW2
}
console.log(areAnagrams('oui', 'oui'));
module.exports = areAnagrams


function deleteAccent(word) {
    let modifiedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return modifiedWord
}

