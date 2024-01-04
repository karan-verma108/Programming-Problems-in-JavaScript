// Problem 22) Create a function that will find the nth Fibonacci number using recursion

// let's first create a function that will take n as its paramter 

// const fibonacci = (n) =>{
//     debugger;
//     if(n<=1){
//         return n;
//     }
//     else{
//         return fibonacci(n-1) + fibonacci(n-2);   // 
//     }
// }

// // now let's call the function and save its value to a variable

// let result = fibonacci(5);
// console.log(result);

// let's take another example of recursion in a fucntion

const factorial = (num) =>{
    debugger;
    if(num===0){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}

let result = factorial(4);
console.log(result);