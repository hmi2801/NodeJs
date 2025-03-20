let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 900) + 100); // 3-digit numbers (100-999)
}
console.log("Random Numbers:", numbers);

let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log(`Minimum: ${min}, Maximum: ${max}`);


//-----------------------------------------------------------------------

// Run this with: node script.js <day> <month>
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

let isValid = (month === 3 && day >= 20) ||
              (month === 4) ||
              (month === 5) ||
              (month === 6 && day <= 20);

console.log(isValid);


//----------------------------------------------------------------------------

// Run this with: node script.js <year>
let year = parseInt(process.argv[2]);

if (year >= 1000 && year <= 9999) { // Ensuring a 4-digit year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a Leap Year`);
    } else {
        console.log(`${year} is NOT a Leap Year`);
    }
} else {
    console.log("Please enter a 4-digit year");
}


//--------------------------------------------------------------------------

let coinFlip = Math.random() < 0.5 ? "Heads" : "Tails";
console.log("Coin Flip Result:", coinFlip);

//-----------------------------------------------------------------------------

