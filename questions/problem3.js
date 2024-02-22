// Problem-3) create a length converter function

// For example, creating a kilometer to miles converter function 
// It is obtained by diving the length with 1.609344 (to convert km to miles)
// First we'll create a function that will take kmValue as its only parameter, it will be used to pass the value of km upon calling

const convertFun = (kmValue) =>{  //value is what will by passed upon calling of this function (value = value of km)
    let milesValue = (kmValue/1.609344);  //login to convert km to miles
    return milesValue.toFixed(3)  //returning only 3 digits after decimal using toFixed()

}

let convertedValue = (convertFun(12));  //calling of function
console.log(convertedValue);  //