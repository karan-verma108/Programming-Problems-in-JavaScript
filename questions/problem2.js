// Problem-2) print multiplication table 

// let's first create a varible named num and define its value to be 4 (for example)

// using for loop, the multiplication table of 4 is printed 
// let num = 4;
// for(i=0;i<=10;i++){
//     console.log(`${num} * ${i} = ${num*i}`);
// }

// The same task is achieved using a function also 

const multiply = (num) =>{
    let i = 0;
    while (i<=10) {
        console.log(`${num} * ${i} = ${num*i}`);
        i++;
    }
}

multiply(10);