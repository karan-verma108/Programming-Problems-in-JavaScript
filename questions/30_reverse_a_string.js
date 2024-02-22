// Problem 30) Reverse a string 

// const reverse_string = (str) =>{



// }

// let str = 'abcdef';
// let newArr = [];

// let str_to_arr = str.split('');  //now it's an array
// console.log(str_to_arr);

// for(i=str_to_arr.length-1; i>=0;i--){
//     newArr.push(str_to_arr[i]);
// }

// // console.log(newArr); //we got the reversed array now we have to convert it into a string

// let reveresed_string = newArr.join('');
// console.log(reveresed_string);

// let's do the same using a function 

// const reverse_String = (str) =>{

//     let str_to_arr = str.split(''); //string to array converted because we want to perform the array method push()
//     let emptyArr = []; //this will store the reversed array that will later be converted to the string
//     for(i=str_to_arr.length-1;i>=0;i--){
//         emptyArr.push(str_to_arr[i]);
//     }
//     return emptyArr.join('');  //converting the reversed array to string
// }


// let modified_string = reverse_String('hundred');
// console.log(modified_string);

// let's see another method 

const opposite_str = (original_str) =>{
    let reverse_str = '';
                                        //let original_str = 'JavaScript'
    for(i=original_str.length-1;i>=0;i--){
        let temp = original_str[i];
        reverse_str+=temp;
    }
    return reverse_str;
}

let result = opposite_str('JavaScript');
console.log(result);