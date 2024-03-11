// pass by value 

let num1 = 4;
let num2 = num1;

num2 += 10;

// console.log(num1);
// console.log(num2);

// pass by reference 

let obj1 = {
    name: 'don',
    pass: '123'
}

let obj2 = JSON.parse(JSON.stringify(obj1));   //it creates a deep copy of the obj1 and assigns it to obj2, hence obj2 has properties of obj1 but it's a completely new object

obj2.field = 'web dev';

// console.log(obj1);
// console.log(obj2);

let arr1 = [1, 2, 3, 4];

// let arr2 = arr1;
// arr2.push(5);  //pushes 5 in both arrays

// let arr2 = [].concat(arr1);
let arr2 = [...arr1]; //it also does the concat work but using spread operator
arr2.push(5);  //pushes 5 in arr2 only

// console.log(arr1);
// console.log(arr2);