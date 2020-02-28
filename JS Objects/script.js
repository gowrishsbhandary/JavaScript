

//Creating the object using object litterals
/*var john = {
    name: 'Jhon',
    yearOfBirth: 1990,
    job: 'teacher'
}

// Function constructor
var Person = function(name, yearOfBirth, job) {
    
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
    /*this.calculateAge = function() {
          console.log(2016 -  this.yearOfBirth);                        
                                  };*/
/*}


Person.prototype.calculateAge = function() {
          console.log(2016 -  this.yearOfBirth);                        
                                  };

Person.prototype.lastName = 'Smith';*/


// creating new object using Person Constructor, which is called instanciation
/*var john = new Person('John', 1990, 'teacher');*/
// * when we use 'new' operator, an empty object is created
// * Then Person function is caled
// * Calling a function creates a new Execution context on the Global Execution context in Execution stack
// * In regular function call 'this' variable points to Global object
// * Here the new operators takes care of it and it point this variable to the new empty object.
// * Then all the values are set to new Object and the new object is assigned to Jhon object


//Adding Inheritance
/*john.calculateAge();

var mark = new Person('Mark', 1985, 'designer');

mark.calculateAge();

console.log(john.lastName);
console.log(mark.lastName);*/


//Object.create method

/*var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
}

//Creating john object using personProto object prototype
var john =  Object.create(personProto); // john object is empty but has personProto objects calculate function in it.
//adding some fields to jhon object
john.name = 'Jhon';
john.yearOfBirth = 1990;
john.job = 'teacher';

// other way to add fields to object which are created using Object.create method.
var jane = Object.create(personProto, {
   name: {value: 'jane'},
   yearOfBirth: {value: 1991},
   job: {value: 'Actor'},
    
});*/


//Primitives VS objects


// Functions/ Call back functions
//Passing function as a parameter

/*var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}


function calculateAge(el) {
    return 2016 - el;
}


function isAdult(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return - 1;
    }
}

var ages =  arrayCalc(years, calculateAge); // call back function where arrayCalc function will call calculateAge function which is passed as a parameter.
var adultCheck = arrayCalc(ages, isAdult);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(adultCheck);
console.log(rates);*/

// Function returning another function

/*function interviewQuestion(job) {
    if(job === 'designer') {
        return function (name) {
            console.log(name+ ', can you please explain JS is?')
        } 
    } else if(job === 'teacher') {
        return function (name) {
            console.log(name+ ', what do you teach?')
        } 
    } else {
        return function (name) {
            console.log(name+ ', can you please explain JS is?')
        } 
    }
}

var teacherQuestion = interviewQuestion('teacher');

teacherQuestion('Jhon');

var designerQuestion = interviewQuestion('designer');

designerQuestion('Jhon');

interviewQuestion('teacher')('Mark');*/


// Immediately Invoked Function Expressions (IIFE)

/*function game() { //Normal way of writing function
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();


// IIFE way of function declaration
//No function name is given
//this function can not be called from the outside scope
//Can obtain data privacy
(function () { 
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score); //score variable is not accessible here

(function (val) { 
    var score = Math.random() * 10;
    console.log(score >= 5 - val);
})(10);*/


//Closures

/*function retirement(retiermentAge) {
    var a = ' years left until retierment';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retiermentAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1990);

retirement(65)(1990);*/


// Bind, call and apply

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};


john.presentation('formal', 'morning');

var emily = {
    name: 'emily',
    age: 35,
    job: 'designer'
};

//call
john.presentation.call(emily, 'friendly', 'afternoon'); // Method borrowing where john objects presentation method is used for emily object

//apply
/*john.presentation.apply(emily, ['friendly', 'afternoon']);*/

//bind //allows us to preset parameteres to a function 
var johnFriendly = john.presentation.bind(john, 'friendly'); 

johnFriendly('morning');
johnFriendly('night');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}


function calculateAge(el) {
    return 2016 - el;
}


function isAdult(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var ageJapan = arrayCalc(ages, isAdult.bind(this, 20));
console.log(ageJapan);

















































