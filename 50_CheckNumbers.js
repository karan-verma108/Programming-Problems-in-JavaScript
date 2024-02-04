// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

/* const checkNumbers = (num1,num2) =>{
     let sum = num1+num2;
     if(num1===50 || num2===50 || sum===50){
         return true;
     } else{
         return false;
     }
 }

 let result = checkNumbers(150,-100);
 console.log(result); */

// another way to do,

const check50 = (n1,n2) =>{
    return (n1===50 || n2===50 || n1+n2===50);
}

console.log(check50(4,10));