// Program 1: Temperature Conversion
//-------------------------------------------------------------------------------
const readline = require('readline-sync');
let choice = readline.question("Choose conversion: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius: ");
if (choice === "1") {
    let degC = parseFloat(readline.question("Enter temperature in Celsius: "));
    if (degC >= 0 && degC <= 100) {
        let degF = (degC * 9/5) + 32;
        console.log(`${degC}°C is ${degF}°F`);
    } else {
        console.log("Temperature out of range!");
    }
} else if (choice === "2") {
    let degF = parseFloat(readline.question("Enter temperature in Fahrenheit: "));
    if (degF >= 32 && degF <= 212) {
        let degC = (degF - 32) * 5/9;
        console.log(`${degF}°F is ${degC}°C`);
    } else {
        console.log("Temperature out of range!");
    }
} else {
    console.log("Invalid choice!");
}

// Program 2: Check if two numbers are Palindromes
//-------------------------------------------------------------------------------
function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}
let num1 = parseInt(readline.question("Enter first number: "));
let num2 = parseInt(readline.question("Enter second number: "));
console.log(`${num1} is ${isPalindrome(num1) ? "a" : "not a"} palindrome.`);
console.log(`${num2} is ${isPalindrome(num2) ? "a" : "not a"} palindrome.`);

// Program 3: Prime and Palindrome Prime Check
//-------------------------------------------------------------------------------
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
let num = parseInt(readline.question("Enter a number: "));
if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
    let palindromeNum = parseInt(num.toString().split('').reverse().join(''));
    console.log(`Its palindrome is ${palindromeNum}, which is ${isPrime(palindromeNum) ? "also" : "not"} a prime number.`);
} else {
    console.log(`${num} is not a prime number.`);
}
