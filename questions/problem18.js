// Problem 18) Calculate the average of the numbers in an array of numbers

// as we know the formula of calculating the average is : sum of total numbers/total values of present numbers

// let's define an array to do so 
// let arr = [2,1,5,3,9];
// let sum = 0;
// for(i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(`The sum of the total numbers in the array is : ${sum}`);
// let average = sum/arr.length;
// console.log(`While its average is : ${average}`);

// let's do the same in lesser steps this time with for..of loops (because it deals with the values)

// let arr = [2,1,5,3,9];
// let sum = 0;
// for(values of arr){
//     sum+=values;
// }
// console.log(`The sum of the total numbers in the array is : ${sum}`);
// let average = sum/arr.length;
// console.log(`While its average is : ${average}`);

// now let's try to pass array values(which basically means the array itself) as parameter to a function, that will do the task for us 
// for iterating over the values of an array , we will use the for..of loop 

let sum = 0;
let average = 0;
const findAverage = (arr) => {
    for (value of arr) {
        sum += value;
    }
    return average = (sum / arr.length).toFixed(1); //to fix the numerics placed after the floating point, to 1 only eg-> 1.7
}
let foundAverage = Number(findAverage([1,3,1]));  //as we are getting output in string, so to convert it into a number
console.log(foundAverage);
console.log(typeof foundAverage);