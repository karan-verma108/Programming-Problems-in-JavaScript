// Problem-5) define a function that reverses an array 

// let's first create an array 

// let myArr = [1,2,3,4];
// expected output : [4,3,2,1]

// we can use the reverse() to do so 
// myArr.reverse();
// console.log(myArr);

// let's do the same without the reverse() method 

let myArr = [1,2,3,4];

const reverseFun = (myArr) =>{
    debugger;
    let newArr = []; //creating an empty array to store the reversed array items in it
    for(i = myArr.length-1; i>=0; i--){
        newArr.push(myArr[i]);
    }
    return newArr;
}

let reversedArr = reverseFun(myArr);
console.log(reversedArr);