// Problem 32) Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

// let arr2 = [4,3,6,8];
// let arr1 = [1,2,3,4];

// let checkValues = [1,2,3];
// let result = checkValues.every(value => arr1.includes(value));
// console.log(result);

// const arrFun = (arr1, arr2, checkValues) => {
//     let isPresent = true;
//     if (checkValues.every(value => arr1.includes(value))) {
//         return arr1;
//     }
//     else if (checkValues.every(value => arr2.includes(value))){
//         return arr2;
//     }
//     else{
//         return 0;
//     }
// }

// let values = arrFun([1, 2, 3, 4], [2, 3, 5, 6], [2, 6, 3]);
// console.log(values);

// const arr = [2,4,6,8];
// const isDivisible = (ele) => ele%2==0;
// console.log(arr.every(isDivisible));

// let's do this with a function now 

const usingEvery = (arr) =>{
    let isDivisible_by_2 = (ele) => ele%2==0;
    return arr.every(isDivisible_by_2);
}

let result = usingEvery([10,20,75,40]);
console.log(result);