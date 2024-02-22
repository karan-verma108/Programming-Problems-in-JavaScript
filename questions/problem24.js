// Problem 24) Calculate the sum of digits of a positive integer number

// what we need to do is add numbers in a line (1234), if entered by user or given to a varibale, should return 10 as its sum
// we are going to need to travese the number for this task to add up every number but we can't traverse through number like 1234 or anthing
// coz numbers aren't iterable, so 

// first let's convert the number to a string so we can iterate over it 

// let num = 1234;
// let num_converted_To_String = num.toString();  //converting the number to string to be able to interate over it
// let sum = 0;

// for (i = 0; i < num_converted_To_String.length; i++) {
//     sum += parseInt(num_converted_To_String[i]);  //converting the characted/string back to number after adding
// }

// console.log(sum);

// now let's using for..of loop inside a function

const specialAddition = (num) =>{
    let sum = 0;

    // let's convert num to string 
    let numConverted = num.toString();

    for(char of numConverted){
        sum+=parseInt(char);
    }
    return sum;
}

let finalResult = specialAddition(1234);
console.log(finalResult);