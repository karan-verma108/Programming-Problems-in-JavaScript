// Problem 35 ) Calculate the sum of first 100 prime numbers

// let's first find first 100 prime numbers 


let sum = 0;
let count = 0;
for (i = 2; count < 100; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        sum += i;
        count++;
    }
}
console.log(sum);
// console.log(count);
console.log(i-1);