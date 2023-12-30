// Problem-6) sort an array from lowest to highest

// let's first create an array 

let arr = [3, 21, 1, 9, 11, 5];

// defining a function that handles sorting of an array
const sortArr = (arr) => {

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr; //returning the sorted array
}
let sortedArr = sortArr(arr); //creating a function expression (storing function's value to a variable while calling)
console.log(sortedArr);  //printing the function's value as a variable