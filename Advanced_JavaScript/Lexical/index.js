let a = 'hi guys!';

function funA () {
    let b = '... how are you?';
    // console.log(c);  //but the parent function can't have access to its child's variables
    funB();

    function funB () {
        let c = '... I hope you are good!';
        console.log(a + b + c);  //this will have access to its parent variables due to lexical scoping, only in case of traditional function
        funC();

        function funC(){
            console.log(`trying to access b and c : ${b} and ${c}`); //this time it will work bcoz funC() now is a child of funB() which is a child of funA()
        }

    }
}

// function funC(){
//     console.log(`Im trying to access b and c : ${b} ${c}`); //wont work as the scope of b and c is only limited to funA() and funB() and is not accessible by funC() because it's a child function of funA() nor of funB()
// }

funA();
// funC();