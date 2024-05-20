function reverseString(str) {
    return str.split('').reverse().join('');
}

function countCharacters(str) {
    return str.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

function findMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...arr);
}

function findMin(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.min(...arr);
}

function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

const filterArray = (arr) => {
    return arr.filter(num => num > 5);
}

function factorialIterative(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPrime(num) {
    if (num <= 1) {
        return false; // 0 and 1 are not prime numbers
    }
    if (num <= 3) {
        return true; // 2 and 3 are prime numbers
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false; // divisible by 2 or 3 are not prime
    }
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}