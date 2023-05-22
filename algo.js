function areAnagrams(word1, word2) {
    // Convertir les mots en minuscules et supprimer les espaces
    const sortedWord1 = word1.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().replace(/\s/g, '').split('').sort().join('');

    return sortedWord1 === sortedWord2;
}

console.log(areAnagrams('listen', 'silent')); // Affiche true
console.log(areAnagrams('hello', 'world')); // Affiche false


function isPalindrome(word) {
    // Convertir le mot en minuscules et supprimer les espaces
    const cleanedWord = word.toLowerCase().replace(/\s/g, '');

    // Comparer le mot avec son inversion
    return cleanedWord === cleanedWord.split('').reverse().join('');
}

console.log(isPalindrome('radar')); // Affiche true
console.log(isPalindrome('hello')); // Affiche false


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Affiche 15


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

console.log(isPrime(7)); // Affiche true
console.log(isPrime(12)); // Affiche false


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

console.log(factorial(5)); // Affiche 120



function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Hello')); // Affiche "olleH"


function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([3, 8, 2, 10, 5])); // Affiche 10

