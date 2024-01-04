// Problem 31 ) Create a function that will merge two arrays and return the result as a new array

// let arr1 = [1,2,3];  //our first array
// let arr2 = [4,5,6];     //our second array

// for(i=0;i<arr2.length;i++){  
//     arr1.push(arr2[i]);  //pushing the items of second array to first array
// }
// console.log(arr1);

const merge_array = (arr1, arr2) =>{
    for(i=0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

let merged_array = merge_array([1,2,3], [4,5,6]);
console.log(merged_array);