console.log(`my job is ${job}`);  //undefined
var job = 'mern stack developer';
console.log(`my job is ${job}`);  //job value printed

function whoAmI() {
    console.log(`im also known as ${job}`);  //undefined
    var job = 'web developer';
    console.log(`im also known as ${job}`);  //job value printed
}

whoAmI();