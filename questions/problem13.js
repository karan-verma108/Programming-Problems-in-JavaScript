// Problem-13) calculate the factorial of a number

// let num = 5;
// let fact = 1;

// for (i = num; i >= 1; i--) {
//     fact*= i;
// }
// console.log(fact);

// using a function 

let fact = 1;
const factorial = (num) =>{
    for(i=num;i>=1;i--){
        fact*=i;
    }
    return fact;
}

let factorialValue = factorial(3);
console.log(factorialValue);