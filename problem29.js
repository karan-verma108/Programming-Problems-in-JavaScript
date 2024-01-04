// Problem 29) Reverse an array 

// suppose we have an array, arr = [1,2,3,4,5] so the output shoudl be arr = [5,4,3,2,1]

// seems like we'd need to do some sorting here in decending order
// so let's try to do that here 

// const reverse_arr = (arr) => {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr.length; j++) {
//             if (arr[j] < arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// let result = reverse_arr([1, 2, 3, 4, 5]);
// console.log(result);

// although this does the work but only as long as the array is in some specific order like, ascending or descending 
// but to be able to completely reverse an array irrespective of its order 

const reverseArray = (arr) =>{
    let newArr = [];
    for(i=arr.length-1;i>=0;i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

let result = reverseArray([2,1,6,8]);
console.log(result);