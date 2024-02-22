// Write a JavaScript program to get the current date.  
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date();

let day = today.getDate();
let month = today.getMonth()+1;  //adding one because month starts from 0 in Date()
let year = today.getFullYear();

day = (day<10) ? '0'+ day : day;
month = (month<10) ? '0'+ month : month;

const showDate = `${day}-${month}-${year}`;
console.log(showDate); 