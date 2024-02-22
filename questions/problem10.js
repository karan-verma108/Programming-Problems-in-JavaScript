// Problem-9) return number of vowels in a string

// let str = 'Hey there I am a string but people are trying to find vowels inside me ha ha';
// let vowelCount = 0;
// for(i = 0;i<str.length;i++){
//     if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u' || str[i]==='A' || str[i]==='E' || str[i]==='I' || str[i]==='O' || str[i]==='U'){
//         vowelCount++;
//     }
// }

// console.log(vowelCount);

// B) let's do the same using a function 

// const calcVowels = (str) => {   //it takes a string as a paramater
//     debugger;
//     let vowelCount = 0;  //initializing the vowelCount variable to 0
//     let i = 0;          //initializing the iterator(index) variable to 0
//     while (i < str.length) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' || str[i] === 'A' || str[i] === 'E' || str[i] === 'I' || str[i] === 'O' || str[i] === 'U') {
//             vowelCount++;  //incrementing the vowelCount by 1
//         }
//         i++;            //incrementing the iterator(index) by 1
//     }
//     return vowelCount;      //returning the vowelCount
// }

// let obtainedVowels = calcVowels('hello');
// console.log(obtainedVowels);

// C) An easy to solve the above problem, using match() with for loop

// let str = 'i have been coding today for about 2 hours now';
// let count = 0;
// for(i=0;i<str.length;i++){
//     if(str[i].match(/[aeiou]/gi)){
//         count++;
//     }
// }
// console.log(count);

//D) Anothe way to do so 

// let str = 'i have been coding today for about 2 hours now';
// let count = 0;

// for(elements of str){
//     if(/[aeiou]/gi.test(elements)){
//         count++;
//     }
// }

// console.log(count);

// E) An even shorter way to solve the above problem, using match() with ternary operator

// let str = 'i have been coding today for about 2 hours now';

// let result = str.match(/[aeiou]/gi);
// let count = result? result.length : 0;

// console.log(count);


// B) let's also try to return number of characters in a string 

let str = 'today i feel great because i am feeling great';  //expected : 37

let strToArr = str.split(' ');  //to first split the string in words and convert into an array

let spacesRemoved = strToArr.reduce((acc, curr)=>{
    return acc+=curr;
});

console.log(spacesRemoved);

let newStr_Without_Spaces = spacesRemoved.length;
console.log(newStr_Without_Spaces);