// // Write a JavaScript program to calculate the days left before Christmas

// // let year = 2024;
// // let monthIndexJan = 0;
// // let monthIndexDec = 11;
// // let today = new Date(year,monthIndexJan+1,11).getDate();  //prints the total number of days in a month
// // let dec = new Date(year,monthIndexDec,25).getDate(); 
// // // console.log(today);
// // // console.log(dec);

// // for(i=today;i<=dec;i++){
// //      today+=dec;
// // }

// // console.log(today);

// let year = 2024;
// let indexMonth = 0;
// let today = new Date(year,indexMonth,11).getDate();
// let totalDaysOfMonth = new Date(year,indexMonth+1,0).getDate();
// let janMonth_day_remaining = totalDaysOfMonth-today;  //days remaning for this month
// console.log(janMonth_day_remaining);

// let arr = [];
// indexMonth = [0,1,2,3,4,5,6,7,8,9,10,11];


// for(i=1;i<=10;i++){
//     totalDaysOfMonth = new Date(year,indexMonth[i]+1,0).getDate();
//     arr.push(totalDaysOfMonth);
// }
// // console.log(arr);

// let sum = arr.reduce((acc,currEle) =>{
//     return acc+=currEle;
// });

// // console.log(sum);

// let decMonthIndex = 12;
// let decemTotalDays = new Date(year,decMonthIndex,0).getDate();
// // console.log(decemTotalDays);
// let decemTil_25 = new Date(year,decMonthIndex,25).getDate();

// let finalDec = decemTotalDays-decemTil_25;
// // console.log(finalDec);

// //now total days remaning from 11th jan till 25th dec

// let totalDaysLeft = janMonth_day_remaining+sum+finalDec;
// console.log(totalDaysLeft);

/* function for celcius to fahreinheit conversion 
 (0°C × 9/5) + 32 = 32°F  //0° = value in celcius

 const celToFah = (cel) =>{
     let fahreinheit = (cel*9/5) + 32;
     return fahreinheit;
 }

 let result = celToFah(4);
 console.log(`4° is equivalent to ${result}F`);

 now fah to cel, 
 (32°F − 32) × 5/9 = 0°C

 const fahToCel = (fah) =>{
     let celcius = (fah-32) * 5/9;
     return celcius;
 }

 let result = fahToCel(48).toFixed(3);
 console.log(`48F is equivalent to ${result}°C`); */