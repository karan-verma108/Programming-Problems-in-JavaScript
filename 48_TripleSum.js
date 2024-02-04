// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.

/* let num1 = 4;
 let num2 = 4;
 let sum = num1 + num2;

 num1===num2 ? sum = 3*sum : sum;

 console.log(sum); */

// let's do it with a function 

const tripleSum = (num1,num2) =>{
    let sum = num1+num2;
    num1===num2? sum = 3*sum: sum;
    return sum;
}

let result = tripleSum(3,3);
console.log(result);