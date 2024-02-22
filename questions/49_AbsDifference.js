/* Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19 */

// n>19? diff = 3*diff : diff

const tripleDiff = (n) =>{
    let diff = n>19? 3*(n-19): 19-n;
    return diff;
}

let result = tripleDiff(5);
console.log(result);