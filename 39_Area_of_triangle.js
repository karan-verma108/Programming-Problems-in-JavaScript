// Write a JavaScript program to find the area of a triangle
// formula = (1/2)*b*h

// let b=3;
// let h = 10;
// const area_of_triangle = (1/2)*b*h;
// console.log(`The base of triangle is ${b}`);
// console.log(`The height of triangle is ${h}`);
// console.log(`The area of triangle is ${area_of_triangle}`);

// let's now do it with a function 

const area_of_triangle = (b,h) =>{
    let findArea = (1/2)*b*h;
    return findArea;
}

let result = area_of_triangle(3,10);
console.log(result);