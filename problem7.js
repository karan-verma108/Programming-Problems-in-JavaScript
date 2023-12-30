// Problem-7) create a function that filters out negative numbers

//let's create an array first

// let arr = [4, -4, 18, 0, -11, -6];

// const filter = (arr) => {

//     let newArr = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// let filteredArr = filter(arr);
// console.log(filteredArr);  //this will result in all the negative numbers being printed

// if we want only the positive numbers printed then follow this approach instead 


let arr = [4, -4, 18, 0, -11, -6];

const filter = (arr) => {

    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let filteredArr = filter(arr);
console.log(filteredArr);  //this will result in all the negative numbers being pr