// Problem 15) Create a function that will convert from Celsius to Fahrenheit

// formula -> (C * 9/5) + 32 = F 
// It means we'll create a function that will take value as celius as its parameter upon calling it

let fehrn = 0;
const celToFahr = (cal) =>{
    return fehrn = (cal*(9/5) + 32);
}

// let calculated_Value_In_Fahrn = celToFahr(98);  //output -> 208.4
// console.log(calculated_Value_In_Fahrn);

// but let's say we dont want output in floating points so we can use Math.round() to round the values to its nearest integer 

let calculated_Value_In_Fahrn = Math.round(celToFahr(98));  //output -> 208
console.log(calculated_Value_In_Fahrn);