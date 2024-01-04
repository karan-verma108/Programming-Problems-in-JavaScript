// Problem 21) Print the first 10 Fibonacci numbers without recursion

// let's first do this task without having to deal with the recursion part 
// so simply we have to print the first 10 fibonacci numbers | expected output -> 0,1,1,2,3,5,8,13,21,34

// it is basically like we have two values first, -> 0 as first and 1 as second, so the third value (1) is the sum of previous two values 

// so we are going to need a sum variable to store the sum of previous two values 
// and we are also going to require an empty array to later push the values into it 

let arr = [0,1];                                                
for(i=0; i<10; i++){                                  //for i = 0, 0+1 = 1(sum) | for i = 1, 1+2 = 3(sum) | for i = 2; 2+3 = sum (5)
    let sum = arr[i] + arr[i+1];
    arr.push(sum);
}

console.log(arr);  // output -> [0,1,1,2,3,5,8,13,21,34]

// let's do this with another way, though it's quite similar 

//     let firstTerm = 0;
//     let secondTerm = 1;
//     console.log(firstTerm);
//     console.log(secondTerm);

//     for (i = 0; i <= 7; i++) {
//     let sumOfBoth = firstTerm + secondTerm;
//     console.log(sumOfBoth);
//     firstTerm = secondTerm;  //first term now becomes 
//     secondTerm = sumOfBoth; //second term now becomes sum of both
// }