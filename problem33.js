// Problem 33) Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

// const arrFun = (arr1, arr2) =>{  //for instance, arr1=[1,2,3,4] and arr2=[5,4,9,10] | expected output -> [1,2,3]
//     let newArr = [];

//     for(elements of arr1){
//         if(!(arr2.includes(elements))){
//             newArr.push(elements);
//         }
//     }
//     return newArr;
// }

// let result = arrFun([1,2,3,4], [5,4,9,10]);
// console.log(result);

// let's also follow the opposite approach 
// Create a function that will receive two arrays and will return an array with elements that are in the second array but not in the first

const arrFun = (arr1,arr2) =>{  //suppose arr1 = [12,3,4,6] and arr2 = [3,0,9,8,12] | expected output -> [0,9,8]
    let newArr = [];

    for(i=0;i<arr2.length;i++){
        if(!(arr1.includes(arr2[i]))){
            newArr.push(arr2[i]);
        }
    }
    return newArr;
}

let result = arrFun([12,3,4,6], [3,0,9,8,12]);
console.log(result);