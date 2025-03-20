// Run with: node script.js <n>
let n = parseInt(process.argv[2]);

console.log(`Powers of 2 up to 2^${n}:`);
for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}

//-----------------------------------------------------------

// Run with: node script.js <n>
let n = parseInt(process.argv[2]);
let harmonic = 0;

for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log(`Harmonic Number H(${n}) = ${harmonic.toFixed(4)}`);

//-------------------------------------------------------------------

// Run with: node script.js <number>
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let num = parseInt(process.argv[2]);
console.log(`${num} is ${isPrime(num) ? "a Prime" : "Not a Prime"} Number`);


//------------------------------------------------------------------------------------

// Run with: node script.js <start> <end>
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

console.log(`Prime numbers between ${start} and ${end}:`);
for (let i = start; i <= end; i++) {
    if (isPrime(i)) console.log(i);
}

//----------------------------------------------------------------------------------------

// Run with: node script.js <n>
function factorial(n) {
    if (n < 0) return "Invalid input";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

let n = parseInt(process.argv[2]);
console.log(`Factorial of ${n} is: ${factorial(n)}`);


//------------------------------------------------------------------

// Run with: node script.js <N>
function primeFactorization(N) {
    let factors = [];

    for (let i = 2; i * i <= N; i++) {
        while (N % i === 0) {
            factors.push(i);
            N /= i;
        }
    }
    if (N > 1) factors.push(N);

    return factors;
}

let N = parseInt(process.argv[2]);
console.log(`Prime factors of ${N}: ${primeFactorization(N).join(", ")}`);


//--------------------------------------------------------------------------------------------