// Problem 25) Print the first 100 prime numbers

// now we need to print the first 100 prime numbers 

for (i = 2; i < 100; i++) {
    debugger;
    let isPrime = true;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}