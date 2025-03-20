let singleDigit = Math.floor(Math.random() * 10);
console.log("Single Digit Random Number:", singleDigit);


//-------------------------------------------------------------------------


let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice Roll:", diceRoll);


//-----------------------------------------------------------------------------

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let sum = dice1 + dice2;
console.log(`Dice 1: ${dice1}, Dice 2: ${dice2}, Sum: ${sum}`);

//--------------------------------------------------------------------------------

let sum = 0;
for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 90) + 10; // 2-digit numbers (10-99)
    console.log(`Random Number ${i + 1}:`, num);
    sum += num;
}
let average = sum / 5;
console.log(`Sum: ${sum}, Average: ${average}`);


//------------------------------------------------------------------------------------




// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`42 inches = ${feet} feet`);

// b. Convert Rectangular Plot (60 feet × 40 feet) to meters
let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Rectangular Plot: ${lengthMeters}m × ${widthMeters}m`);

// c. Calculate the area of 25 such plots in acres
let areaOnePlot = lengthMeters * widthMeters; // in square meters
let totalAreaMeters = areaOnePlot * 25;
let areaAcres = totalAreaMeters / 4046.86; // 1 acre = 4046.86 sq. meters
console.log(`Total area of 25 plots in acres: ${areaAcres}`);
