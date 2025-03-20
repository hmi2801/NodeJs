// Program 1: Powers of 2 till 256 is reached
//-------------------------------------------------------------------------------
let n = parseInt(process.argv[2]);
console.log(`Powers of 2 up to 256:`);
for (let i = 0; i <= n && Math.pow(2, i) <= 256; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}

// Program 2: Magic Number Finder
//-------------------------------------------------------------------------------
const readline = require('readline-sync');
let low = 1, high = 100;
console.log("Think of a number between 1 and 100.");
while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let response = readline.question(`Is your number greater than ${mid}? (yes/no): `);
    if (response.toLowerCase() === "yes") {
        low = mid + 1;
    } else {
        high = mid;
    }
}
console.log(`Your magic number is: ${low}`);

// Program 3: Flip Coin till Heads or Tails wins 11 times
//-------------------------------------------------------------------------------
let heads = 0, tails = 0;
while (heads < 11 && tails < 11) {
    let flip = Math.floor(Math.random() * 2);
    if (flip === 0) {
        heads++;
        console.log("Heads");
    } else {
        tails++;
        console.log("Tails");
    }
}
console.log(`Final Result - Heads: ${heads}, Tails: ${tails}`);

// Program 4: Gambler Simulation
//-------------------------------------------------------------------------------
let money = 100, goal = 200, bets = 0, wins = 0;
while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random() < 0.5 ? -1 : 1; // 50% chance to win or lose
    if (betResult === 1) {
        money++;
        wins++;
    } else {
        money--;
    }
}
console.log(`Total Bets: ${bets}, Wins: ${wins}, Final Money: Rs ${money}`);
