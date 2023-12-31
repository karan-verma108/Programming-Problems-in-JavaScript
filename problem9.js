// Problem-9) return a boolean 'true' if a number is divisible by 10

// let's do this without a function first 

// let num = 11;
// let solution = num % 10 == 0 ? true : false;
// console.log(solution);  //output : false

// let's do the same by using a function 

const checkNum = (num) =>{
    return num%10==0? true : false;
}

let solution = checkNum(20); //using function expression to store checkNum() function's output to a variable called solution
console.log(solution);