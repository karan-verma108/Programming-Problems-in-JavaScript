// Problem-8) remove the spaces found in a string

// A) to remove the spaces found outside of string (at the start or end),
// we can use trim()
// let str = '            hello im karan     ';

// let trimmedStr = str.trim();
// console.log(trimmedStr);

// B) to remove the spaces found inside of string (at any location),
// we can use split() and join() methods

// split(' ') will separate each word and return a new array , while join('') will concat all the words present in the array and
// then return a new string seperated by ('') which is basically an empty space  

// let str = 'hello  im    karan';

// let trimmedStr = str.split(' ').join('');
// console.log(trimmedStr);

// C) for second problem, we can also use reduce()

// let's first define a string 
// let str = 'hello  im    karan';

// // now to use reduce() we first need to convert this string into an Array, so let's use split() to do so

// let splited_Str = str.split(' ');  //spliting by words
// // console.log(splited_Str);  // output -> [ 'hello', '', 'im', '', '', '', 'karan' ]
// // now we can use reduce() method 

// let spaces_Removed = splited_Str.reduce((acc,curr)=>{
//     debugger;
//     if(curr!==''){
    //         acc+=curr;
    //     }
    //     return acc;
    // });
    
    // console.log(spaces_Removed);

    
// D) let's use reduce without if statement

// let's first define a string 
// let str = 'hello  im    karan';

// // now to use reduce() we first need to convert this string into an Array, so let's use split() to do so

// let splited_Str = str.split(' ');  //spliting by words
// // console.log(splited_Str);  // output -> [ 'hello', '', 'im', '', '', '', 'karan' ]
// // now we can use reduce() method 

// let spaces_Removed = splited_Str.reduce((acc, curr)=>{
//     debugger;
//     return acc+=curr;
// })

// console.log(spaces_Removed);

// E) another way to remove spaces (at start / end) using reduce()

let str = '     hey!   where       are     you?'

// let's convert it into an array first

let strToArr = str.split(' ');  // output (including spaces as words) ->  [
//     '',      '',     '', '',   
//     '',      'hey!', '', '',   
//     'where', '',     '', '',   
//     '',      '',     '', 'are',
//     '',      '',     '', '',   
//     'you?'
//   ]
// console.log(strToArr);

let strToArr_Without_Spaces = strToArr.reduce((acc, curr)=>{
    return acc+=curr;
})

// another way to do the same task, with ease :)
// let strToArr_Without_Spaces = strToArr.join('');

console.log(strToArr_Without_Spaces);  //output -> hey!whereareyou?