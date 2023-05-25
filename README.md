#algo



function isPrime(number) {
    if (number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

//console.log(isPrime(7)); // Affiche true
//console.log(isPrime(12)); // Affiche false


function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    return result;
}

//console.log(factorial(5)); // Affiche 120



function reverseString(str) {
    return str.split('').reverse().join('');
}

//console.log(reverseString('Hello')); // Affiche "olleH"


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

//console.log(findMax([3, 8, 2, 10, 5])); // Affiche 10

