/* Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38 */

let today = new Date();
let day = today.getDay();

let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(`Today is : ${weekDays[day]}`);

// let's get the other values

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

let prepand = (hours > 12) ? 'PM' : 'AM';
hours = (hours > 12) ? hours-12 : hours;


console.log(`Current time is : ${hours} ${prepand} : ${minutes}m : ${seconds}s`);