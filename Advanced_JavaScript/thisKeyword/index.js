'use strict';
// console.log(this);  //refers to the global object

// function add (a,b) {
//     let sum = a+b;
//     console.log(sum);
//     console.log(this); //it also refers to the global object, when strict mode is used, this becomes undefined in regular expressions
// }

// add(3,4); 

const data = {
    name: 'karan',
    degree: 'btech',
    sum: function (a, b) {
        let add = a + b;
        console.log(add);
        console.log(this);  //this here refers to this data object

        function child() {
            let name = 'verma';
            console.log(`child method name : ${name}`);   //name here will be 'verma'
            console.log(this);   //points to the window object as in a regular function, this keyword alwasy refers to the window object
        }
        child();
    }
}

data.sum(3, 4);