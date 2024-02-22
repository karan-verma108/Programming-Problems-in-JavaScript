// Problem-4) calculate sum of numbers within an array

// let's first create an array whose sum we will calculate 
// This task can easily be achieved by using reduce method in js, that reduces an array's elements to a single number 

// let arrOfNum = [2,42,9,1,6];
// // let sumOfArr = arrOfNum.reduce((accumulator, currVal)=>{
// //         return accumulator+currVal;
// // });
// // console.log(sumOfArr);

// // we can also use for loop for the same 
// let sum = 0;
// for(i=0; i<arrOfNum.length;i++){
//     sum += arrOfNum[i];
// }
// console.log(sum);

// same process with positive and negative numbers 
// let newArr = [2,1,-4,6,-3]
// let sum = 0;

// for(i=0;i<newArr.length;i++){
//     sum += newArr[i];
// }
// console.log(sum);

// same process with integers and decimas 
// let newArr = [2,1.5,4,6.1,3]
// let sum = 0;

// for(i=0;i<newArr.length;i++){
//     sum += newArr[i];
// }
// console.log(sum);

// now adding two arrays of the previous two types 

let firstArr = [2, 1, 4];
let secondArr = [2, 1.5, 4, 6.1, 3];

let firstArrSum = firstArr.reduce((accumulator, currVal) => {
    return accumulator + currVal;
})

let secondArrSum = secondArr.reduce((acc, currVal) => {
    return acc + currVal;
})

// let's print both the values first 
console.log(`The value of the sum of first array is ${firstArrSum}`);
console.log(`The value of the sum of second array is ${secondArrSum}`);

let sumOfBothArr = (firstArrSum + secondArrSum); //storing the value of the sum of both arrays in a variable called sumOfBothArr

// checking if the sum of first array is a negative value, if that's the case then we get unwanted result, so using ternary operator 
// to fix it 
const filter = (firstArrSum<0) ? sumOfBothArr.toFixed(1) : sumOfBothArr;
console.log(filter);