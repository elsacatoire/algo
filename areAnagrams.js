
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    main functions for    /    \   \   \
//    ||  || || ||       annagrams              ||  ||  ||

// import/export functions
module.exports = areAnagrams

//1. on s'affranchit des accents
//2. on classe les lettres de chaque mmot dans l'ordre alpha pour les comparer
function areAnagrams(word1, word2) {
    let normalizedWord1 = deleteAccent(word1)
    let normalizedWord2 = deleteAccent(word2)
    const sortedW1 = normalizedWord1.toLowerCase().split('').sort().join('')
    const sortedW2 = normalizedWord2.toLowerCase().split('').sort().join('')
    return sortedW1 == sortedW2
}

function deleteAccent(word) {
    let modifiedWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return modifiedWord
}

//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||
//console.log(areAnagrams('silent', 'listen'));