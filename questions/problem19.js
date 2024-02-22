// Problem 19 ) Create a function that receives an array of numbers and returns an array containing only the positive numbers

// so yeah let's first create a function then we will see what to do 

// const only_Positive_num = (arr) =>{
//     let result = [];  //creating an empty array to later push the appropriate elements into it after each iteration
//     for(elements of arr){  //using for..of loop to traverse through the values of the array
//         if(elements>=0){ //if the value/element is greater than or equal to 0, meaing it's not a negative number, then only it's true
//             result.push(elements);
//         }
//     }
//     return result;
// }

// let returnedArr = only_Positive_num([2,1,-4,-12]);
// console.log(returnedArr);

// another way to do so is by using filter()

const myArr = (arr) => arr.filter(el => el>=0);

let returnedVal = myArr([2,1,-4,-12]);
console.log(returnedVal);