// Problem-11) print all odd numbers less than 100

// for(i=1;i<=100; i++){
//     if(!(i%2==0)){
//         console.log(i);
//     }
// }

// using while loop 

// let i = 1;
// while(i<=100 && i!==100){
//     if(!(i%2==0)){
//         console.log(i);
//     }
//     i++
// }

// using do while loop 

// let i = 1;
// do{
//     if(!(i%2==0)){
//         console.log(i);
//     }
//     i++;
// }
// while(i<100){
// }

// another way of doing so is 

// for(i=1;i<=100;i+=2){
//     console.log(i);
// }

// Bonus: printing multiplication table of 7

let i = 1;
num = 7;
while(i<=10){
    console.log(`${num} * ${i} = ${num*i}`);
    i++;
}