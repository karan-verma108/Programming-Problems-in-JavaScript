// Problem 26) Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"
 
// we need to find prime numbes in a given range of numbers 

// let num1 = 6;
// let num2 = 15;

// for(i=num1; i<num2;i++){
//     let isPrime = true;
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             isPrime = false;
//             break;
//         }
//     }

//     if(isPrime){
//         console.log(i);
//     }
// }

// let's do this by using a function 

const print_Primes = (num1,num2) =>{
    let primes = [];
    for(i=num1;i<num2;i++){
        let isPrime = true;
        for(j=2;j<i;j++){
            if(i%j==0){
                isPrime = false;
            }
        }
        if(isPrime){
            primes.push(i);
        }
    }
    return primes;
}

let result = print_Primes(4,8);
console.log(result);