
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    main functions for    /    \   \   \
//    ||  || || ||  additionning array elements ||  ||  ||

// import/export functions
module.exports = sumArray

function sumArray(array) {
    let sum = 0
    const len = array.length
    for (let i = 0; i < len; i++) {
        sum = sum + array[i];
    }
    return sum
}

//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||
console.log(sumArray([1, 3, 5]));
