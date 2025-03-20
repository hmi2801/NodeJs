// Run with: node script.js <digit>
let digit = parseInt(process.argv[2]);

switch (digit) {
    case 0: console.log("Zero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    case 6: console.log("Six"); break;
    case 7: console.log("Seven"); break;
    case 8: console.log("Eight"); break;
    case 9: console.log("Nine"); break;
    default: console.log("Please enter a single-digit number (0-9)");
}


//-----------------------------------------------------------------------------------

// Run with: node script.js <dayNumber>
let dayNumber = parseInt(process.argv[2]);

switch (dayNumber) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Please enter a number between 1 and 7");
}


//-----------------------------------------------------------------------------------

// Run with: node script.js <number>
let number = parseInt(process.argv[2]);

switch (number) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    case 10000: console.log("Ten Thousand"); break;
    case 100000: console.log("Lakh"); break;
    case 1000000: console.log("Ten Lakh"); break;
    default: console.log("Invalid Input. Enter values like 1, 10, 100, 1000, ...");
}


//------------------------------------------------------------------------------------------------

// Run with: node script.js <choice> <value>
let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (choice) {
    case 1: console.log(`${value} Feet = ${value * 12} Inches`); break;
    case 2: console.log(`${value} Feet = ${(value * 0.3048).toFixed(2)} Meters`); break;
    case 3: console.log(`${value} Inches = ${(value / 12).toFixed(2)} Feet`); break;
    case 4: console.log(`${value} Meters = ${(value * 3.28084).toFixed(2)} Feet`); break;
    default: console.log("Invalid Choice. Use:\n1 for Feet to Inch\n2 for Feet to Meter\n3 for Inch to Feet\n4 for Meter to Feet");
}
