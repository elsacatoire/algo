
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    main functions for    /    \   \   \
//    ||  || || ||   is it a prime number ?     ||  ||  ||

// import/export functions
module.exports = isPrime

//1.
function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            console.log("we're on");
            return false
        }
    }
    if (number % number == 0) {
        return true
    }
}


//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||
console.log(isPrime(13))