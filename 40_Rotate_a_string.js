// Write a JavaScript program to rotate the string 'wrestlemania' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// let str = 'wrestlemania';

// // let's first convert this string into an array 

// let str_to_arr = str.split('');
// // console.log(str_to_arr);
// let lastItem = str_to_arr.pop();
// let arrOfStr = str_to_arr.unshift(lastItem);

// // console.log(str_to_arr);

// let arr_to_str = str_to_arr.join('');
// console.log(arr_to_str);

// let's do the same with a function 

const rotateArr = (str) =>{
    let str_to_arr = str.split('');
    let lastItem = str_to_arr.pop();
    str_to_arr.unshift(lastItem);

    let arr_to_str = str_to_arr.join('');
    return arr_to_str;
}

let result = rotateArr('wrestlemania');
console.log(result);