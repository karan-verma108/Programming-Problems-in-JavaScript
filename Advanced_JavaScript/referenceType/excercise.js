let year = 2024;

let biodata = {
    name: 'don',
    age: 23
}

const changeValues = (a, b) => {
    a = 2012;
    b.age = 30;
    b.name = 'jonny';
}

changeValues(year, biodata);

console.log(year);
console.log(biodata.age);
console.log(biodata.name);