// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched".  

// let random_num = Math.round(Math.random()*10);
// console.log(`Program generated random num : ${random_num}`);
// let userNum = 10;
// console.log(`Number entered by user : ${userNum}`);
// userNum===random_num? console.log('Good work!') : console.log('Better luck next time!');

// let's do it with a function

const guessNumber = (userNum)=>{
    let random_num = Math.round(Math.random()*10);
    let result = userNum===random_num? 'Good work!' : 'Not matched!';

    console.log(`Program generated random num : ${random_num}`);
    console.log(`Number entered by user : ${userNum}`);

    return result;
}

let guessMatch = guessNumber(2);
console.log(guessMatch);