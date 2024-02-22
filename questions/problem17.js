// Problem-17) Calculate the sum of numbers from an array of numbers

// let givenArr = [2, 3, -1, 5, 7, 9, 10, 15, 95];

// we will use a for loop to achieve this task 
// let sum = 0;
// for(i=0;i<givenArr.length;i++){
//     sum+=givenArr[i];
// }

// console.log(sum);

// B) using while loop 

// let sum = 0;
// let i = 0;
// while(i<givenArr.length){
//     sum+=givenArr[i];
//     i++;
// }
// console.log(sum);

// C) using do while loop 

// let givenArr = [2, 3, -1, 5, 7, 9, 10, 15, 95];

// let i = 0;
// let sum = 0;
// do{
//     sum+=givenArr[i];
//     i++;
// }
// while(i<givenArr.length);
// console.log(sum);

// D) using for..of loop 

// let givenArr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// let sum = 0;
// for(elements of givenArr){
//     sum+=elements;  //for..of iterates over the values
// }
// console.log(sum);

// E) using for..in loop
// let givenArr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
// let sum = 0;

// for(elements in givenArr){
//     sum+=givenArr[elements]; //becuase for..in loop iterate over the keys, so we need to write givenArr[elements]
// }
// console.log(sum);

// F) using forEach() method 

let givenArr = [2, 3, -1, 5, 7, 9, 10, 15, 95];
let sum=0;
givenArr.forEach((elements)=>{
    sum+=elements;
})

console.log(sum);