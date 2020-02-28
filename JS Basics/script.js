/**************************
* Variables and data types
*/


/*var firstName = 'Jhon';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var jhonMark = 'Jhon and Mark';
var if = 23;*/

/**************************
* Variable mutation and Type coercion
*/

/*var firstName = 'Jhon';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age); 

var job, isMarried;

job = 'Teacher';
//isMarried = false;

console.log(job);
console.log(isMarried);

console.log(firstName + ' is a ' + age + ' year old ' + job + ' Is he Married? ' + isMarried);

//Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + ' Is he Married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);*/


/**************************
* Basic operators
*/

/*var now, ageJhon, ageMark, yearJhon, yearMark;
now = 2018;
ageJhon = 28;
ageMark = 33;

//Math Operators
yearJhon = now - ageJhon;
yearMark = now - ageMark;

console.log(yearJhon);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);
console.log(now % 10);

//logical operators
var jhonOlder = ageJhon < ageMark;
console.log(jhonOlder);

//tyoeof operator
console.log(typeof jhonOlder);
console.log(typeof ageJhon);
console.log(typeof 'Mark is older than Jhon');
var x;
console.log(typeof x);*/


/**************************
* Operators precedence
*/

/*
var now = 2018;
var yearJhon = 1989;
var fullAge = 18;

//multiple operators
var isFullAge = now - yearJhon >= fullAge; //true
console.log(isFullAge);

//Grouping
var ageJhon = now - yearJhon;
var ageMark = 35;
var average = (ageJhon + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26

console.log(x, y);

//More operators

x *= 2;
console.log(x);

x += 10;
console.log(x);

x--;
console.log(x);

x++;
console.log(x);

++x;
console.log(x);

--x;
console.log(x);
*/


/**************************
* If / else statements
*/

/*
var firstName = 'Jhon';
var civiStatus = 'single';

if(civiStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married!');
}

var isMarried = true;
if(isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' is not married!');
}
*/

/**************************
* Arrays
*/

//Array can have different datatype elements in JS
/*
var exampleArray = ['Jhon', 'Smith', 1990, 'teacher', false]; 


exampleArray.push('blue');      //Inserts the element at the end of the array.
exampleArray.unshift('Mr.');    //Inserts the element in the begining of the array.
console.log(exampleArray);


exampleArray.pop();             //Removes the last element from the array.
exampleArray.shift();           //Removes the first element from the array.
console.log(exampleArray);

console.log(exampleArray.indexOf(1991)); //Returns the first index of given element can be found/ -1 if not found
*/

/**************************
* Objects and Properties
*/

/*
var exampleObject = {
    firstName: 'Jhon',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried:false
};
console.log(exampleObject.firstName);
console.log(exampleObject['lastName']);

var x = 'birthYear';
console.log(exampleObject[x]);

console.log(exampleObject.job);
//Mutate the object
exampleObject.job = 'designer';
console.log(exampleObject.job);
console.log(exampleObject);

//new object sysntax
var exampleObject1 = new Object();
exampleObject1.firstName = 'Jane';
exampleObject1.lastName = 'Smith';
exampleObject1.birthYear = 1990;

console.log(exampleObject1);
*/

/**************************
* Objects and Methods
*/

/*var exampleObject = {
    firstName: 'Jhon',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried:false,
    
    //Methods
    calcAge: function(){
        //return 2018 - this.birthYear;
        this.age = 2018 - this.birthYear;
    }
    
};

//console.log(exampleObject.calcAge(1992))
//console.log(exampleObject.calcAge())

//exampleObject.age = exampleObject.calcAge();
exampleObject.calcAge();
console.log(exampleObject)*/

/**************************
* Loops and iteration
*/

/*for(var i=0; i<5; i++) {
    console.log(i);
}

var i = 0;
while(i < 4) {
    console.log("while " + i);
    i++;
}*/

//Continue and break statements

/*var exampleArray = ['Jhon', 'Smith', 1990, 'Designer', 'false'];

for(var i=0; i<exampleArray.length; i++){
    if(typeof exampleArray[i] !== 'string') continue;
    console.log(exampleArray[i])
}

for(var i=0; i<exampleArray.length; i++){
    if(typeof exampleArray[i] !== 'string') break;
    console.log(exampleArray[i])
}

//looping backwords

for(var i = exampleArray.length-1; i>=0; i--) {
     console.log(exampleArray[i])
}*/




