// Problem-14) Calculate the sum of odd numbers greater than 10 and less than 30

// let's find out how many odd numbers are greater than 10 and also less than 30(their sum)

let sum = 0;

for(i=11;i<=30;i+=2){
    sum+=i;  //sum = sum+i which mean sum = 0+11
}
console.log(`The sum of odd numbers greater than 10 but less than 30 is : ${sum}`);
console.log(typeof sum);