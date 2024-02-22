// let arr1 = [4,8,12,34,90];  //length = 5
let arr1 = [1,3,5,7,9];  //length = 5
let arr2 = [2,4,6,8,10];  //length = 5
// let arr2 = [5, 20, 78, 113, 330];  //length = 5
let arr3 = [];

// using while loop 
let i = 0;
let j = 0;
let k = 0;
while (i < arr1.length && j < arr2.length) {
    debugger;
    if (arr1[i] < arr2[j]) {
        arr3[k] = arr1[i];
        i++;
    } else {
        arr3[k] = arr2[j];
        j++;
    }
    k++;
}

// while(j<arr2.length){
//     arr3[k] = arr2[j];
//     j++;
//     k++;
// }

console.log(arr3);