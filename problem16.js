// Problem 15) Create a function that will convert from Fahrenheit to Celcius

// formula -> (32F - 32) * 5/9 = C 

// so, we need to create a function that will take fahrenheit value as its parameter and do the operation inside it 

let cel = 0;
const fahrToCel = (fehr) =>{
    return cel = (fehr - 32) * 5/9;
}

Math.ceil
// let calculated_Value_In_Cel = fahrToCel(208); //output -> 97.77777777777777
// console.log(calculated_Value_In_Cel);

// so, to avoid getting outputs like before, we will use Math.round() to round the value to its nearest integer

let calculated_Value_In_Cel = Math.round(fahrToCel(208));  //output -> 98
console.log(calculated_Value_In_Cel);