// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar

// let year = 1965;

// if(year%4===0){
//     if(year%100===0 && year%400===0){
//         console.log(`The year ${year} is a leap year`);
//     }
//     console.log(`The year ${year} is a leap year`);
// } 
// else{
//     console.log(`The year ${year} is not a leap year`);
// }

// let's do it with a function now 

const findLeapYear = (year) =>{
    if(year%4===0){
        if(year%100===0 && year%400===0){
            return `The year ${year} is a leap year`;
        }
        return `The year ${year} is a leap year`;
    }
    else{
        return `The year ${year} is not a leap year`;
    }
}

let result = findLeapYear(1985);
console.log(result);