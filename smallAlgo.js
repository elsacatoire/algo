
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    main functions for    /    \   \   \
//    ||  || || ||  small Algo                  ||  ||  ||

// import/export functions
module.exports = reverseString
module.exports = findMax

function reverseString(string) {
    let reversedString = string.split('').reverse().join('')
    return reversedString
}

function findMax(array) {
    let valueMax = array.sort()

    return valueMax
}

//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||
console.log(reverseString("hello"));
console.log(reverseString("ad"));
console.log(findMax([1, 50, 3]));