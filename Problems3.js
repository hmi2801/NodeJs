// Run with: node script.js <digit>
let digit = parseInt(process.argv[2]);

let numberWords = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

if (digit >= 0 && digit <= 9) {
    console.log(`Number in words: ${numberWords[digit]}`);
} else {
    console.log("Please enter a single-digit number (0-9)");
}

//--------------------------------------------------------------------------------------------------

// Run with: node script.js <dayNumber>
let dayNumber = parseInt(process.argv[2]);

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (dayNumber >= 1 && dayNumber <= 7) {
    console.log(`Day: ${weekdays[dayNumber - 1]}`);
} else {
    console.log("Please enter a number between 1 and 7");
}

//-------------------------------------------------------------------------------------------

// Run with: node script.js <number>
let number = parseInt(process.argv[2]);

let placeValue = {
    1: "Unit",
    10: "Ten",
    100: "Hundred",
    1000: "Thousand",
    10000: "Ten Thousand",
    100000: "Lakh",
    1000000: "Ten Lakh"
};

console.log(placeValue[number] || "Invalid Input");


//---------------------------------------------------------------------------------

// Run with: node script.js <a> <b> <c>
let a = parseInt(process.argv[2]);
let b = parseInt(process.argv[3]);
let c = parseInt(process.argv[4]);

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

let results = [result1, result2, result3, result4];

let max = Math.max(...results);
let min = Math.min(...results);

console.log(`Results:
1. a + b * c  = ${result1}
2. a % b + c  = ${result2}
3. c + a / b  = ${result3}
4. a * b + c  = ${result4}`);

console.log(`Maximum Value: ${max}`);
console.log(`Minimum Value: ${min}`);
