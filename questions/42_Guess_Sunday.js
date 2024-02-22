// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 

// let today = new Date();
// // console.log(today);
// let day = today.getDay();
// console.log(day);

// // if(day===0){
// //     console.log('It is sunday today');
// // }else{
// //     console.log('It is not sunday today');
// // }

// // for a specific year we need to give year and other values as parameters to the date constructor 



// switch(day){
//     case 0:
//         console.log('Sunday');
//         break;
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//         break;
//         default:
//         console.log('No day found');
// }

// let checker = new Date(2017,0,1);
// // console.log(checker);
// if(checker.getDay()===0){
//     console.log('it is sunday');
// } else{
//     console.log('it is not sunday');
// }

// let's do this with a function that takes year as its parameter 

const sundayChecker = (year) =>{
    year = new Date(year,0,1);
    let fullYear = year.getFullYear();
    if(year.getDay()===0){          //as 0 is sunday here
        return `The year ${fullYear}'s 1st Jan is Sunday`;
    } else{
        return `The year ${fullYear}'s 1st Jan is not Sunday`;
    }
}

let result = sundayChecker(2023);
console.log(result);