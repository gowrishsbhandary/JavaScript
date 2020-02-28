console.log('--------- HOISTING -----------');

//Function declaration 
// function call calculateAge(1965); work before and after function declaration

calculateAge(1965); //works

function calculateAge(year) {
    console.log(2016 - year);
}

calculateAge(1965); //works

//Function Expression
//function call calculateYear(1967); gives error before the definition of function expression

//calculateYear(1967); //Error

var calculateYear = function (year) {
    console.log(2016 - year);
}

calculateYear(1967); //works





//Variable

console.log(age); //undefined
var age = 23;
console.log(age); //works

function foo() {
    var age = 45;
    console.log(age); //age is printed from Foo function execution object
}
foo();
console.log(age); //age is printed from Global execution object