
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    main functions for    /    \   \   \
//    ||  || || ||     is it a aplindrome ?     ||  ||  ||

// import/export functions
module.exports = isPalindrome


function isPalindrome(word) {
    // Convertir le mot en minuscules et supprimer les espaces
    const withoutAccent = word.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    const cleanedWord = withoutAccent.toLowerCase().replace(/\s/g, '');

    // Comparer le mot avec son inversion
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||
console.log(isPalindrome('radar'));
