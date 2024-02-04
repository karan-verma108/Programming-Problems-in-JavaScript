// Write a JavaScript program to check two given integers whether one is positive and another one is negative

const compareNum = (num1,num2) =>{
    return (num1<0 && num2>0 || num1>0 && num2<0);
}

let result = compareNum(-4,5);
console.log(result);