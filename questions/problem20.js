// Problem 20 ) Find the maximum number in an array of numbers

// let's first try to first solve this problem by soring the array and popping out the last element (the biggest)

// let arr = [2,6,19,3,9];
// for(i=0;i<arr.length;i++){
//     for(k=0;k<arr.length;k++){
//         if(arr[k]>arr[k+1]){
//             let temp = arr[k];
//             arr[k] = arr[k+1];
//             arr[k+1] = temp; 
//         }
//     }
// }
// // console.log(arr);   //we get [ 2, 3, 6, 9, 19 ]

// let sortedArr = arr;

// // now let's find the biggest number of the array by popping out the last item 
// let biggest_Num = sortedArr.pop();
// console.log(biggest_Num);

// let's use a function to do so and pass array as a parameter 

// let biggest_Num;
// const sortArr = (arr) =>{
//     for(i=0;i<arr.length;i++){
//         for(k=0;k<arr.length;k++){
//             if(arr[k]>arr[k+1]){
//                 let temp = arr[k];
//                 arr[k] = arr[k+1];
//                 arr[k+1] = temp;
//             }
//         }
//     }
//     return biggest_Num = arr.pop();
// }

// let result = sortArr([2,1,4,55,32,104,2,333,4]);
// console.log(`The biggest value out of it is : ${result}`);

// another way of doing so without having to do the sorting part 

const maxFun = (arr) =>{
    let max = arr[0];   //this variable will be used when comparing with other values of the array

    for(i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i];  //updating the max variable with the current biggest value per iteration
        }
    }
    return max;  //returning the max value
}

let maxValue = maxFun([2,1,55,32,104,2,333,4]);  //using function expression to store maxFun() value to a variable
console.log(maxValue);