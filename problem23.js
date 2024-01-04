// Problem23 Create a function that will return a Boolean specifying if a number is prime

// let's first do this without a function

// let isTrue = true;
// let num = 10;
// if(num<2){
//     console.log(`${num} is not a prime number`);
// }

// if(num==2){
//     console.log(`${num} is a prime number`);
// }

// // let maxDivision = Math.sqrt(num);  //example -> num=3; 3*3 = 9, so the maxDivision = 9

// for(i=2;i<=num;i++){
//     if(num%i==0){
//         isTrue = false;
//     }
// }

// if(isTrue){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let's do the same using a function 

const findPrimeNumber = (num) =>{
    let isTrue = true;

    if(num<0){
        console.log(`${num} is not a prime number`);
    }
    if(num>0 && num<=2){
        console.log(`${num} is a prime number`);
    }

    for(i=2;i<num;i++){
        if(num%i==0){
            isTrue = false
        }
    }
    return isTrue;
}

let prime_num = findPrimeNumber(5);
console.log(prime_num);

