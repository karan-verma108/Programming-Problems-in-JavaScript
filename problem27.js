// Problem 27) Rotate an array to the left 1 position

// to rotate an array let's first create one

// let arr = [1,2,3,4,5];

// let first_element = arr.shift();  //pops the very first element out of the array
// let rotated_arr = arr.push(first_element);  //pushes the first element at the last index of the array

// console.log(rotated_arr);  //acutally returns the new length of the array
// console.log(arr); //returns the modified array

// now let's do this with a function 

let arr = [22,33,44,55];
const move_array = (arr) =>{
    let first_element = arr.shift(); //takes out the first element of the array
    arr.push(first_element);
    return arr;
}

console.log(`The array before moving it to the last ${arr}`);
let result = move_array([22,33,44,55]);
console.log(result);
console.log(typeof result);