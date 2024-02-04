// Problem 31 ) Create a function that will merge two arrays and return the result as a new array

// let arr1 = [1,2,3];  //our first array
// let arr2 = [4,5,6];     //our second array

// for(i=0;i<arr2.length;i++){  
//     arr1.push(arr2[i]);  //pushing the items of second array to first array
// }
// console.log(arr1);

// const merge_array = (arr1, arr2) =>{
//     for(i=0;i<arr2.length;i++){
//         arr1.push(arr2[i]);
//     }
//     return arr1;
// }

// let merged_array = merge_array([1,2,3], [4,5,6,8]);
// console.log(merged_array);

// let arr1 = [23,1,3,54,90];
// let arr2 = [2,4,6,100,200];
// let arr3 = [];

/*let arr3 = [...arr1,...arr2];
console.log(arr1.concat(arr2));

for(i=0;i<arr1.length;i++){
    arr3.push(arr1[i]);
}

// console.log(arr3);
for(i=0;i<arr2.length;i++){
    arr3.push(arr2[i]);
}
console.log(arr3); */

// let's do it without using push()

// for(i=0;i<arr1.length;i++){
//     arr3[i] = arr1[i];
// }

// now adding the items of arr2 to arr3 

// for(i=0;i<arr2.length;i++){
//     arr3[arr1.length+i] = arr2[i];
// }
// console.log(arr3);

/*let arr1 = [23, 1, 3, 54, 90];
let newArr = [];
for (i = arr1.length-1; i >= 0; i--) {
    debugger;
    newArr.push(arr1[i]);
}

console.log(newArr); */