//console.log(this); //Returns window object

/*calculateAge(1990);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this); //Returns window object because this is a function which is in window object.
}*/

 

var exampleObject = { 
    name: 'Jhon',
    yearOfBirth : 1991,
    
    calculateAge : function() { //This is a method defined insie an object exampleObject
        console.log(this);          // Returns the exampleObject
        console.log(2019 - this.yearOfBirth);
        
        function innerFunction() { //Function is always part of window object even after it is defined inside exampleObject
            console.log(this); // Returns the window object
        }
        
        innerFunction();
    }
}

exampleObject.calculateAge();

var anotherExampleObject = {
    name : "mike",
    yearOfBirth : 1980
}

anotherExampleObject.calculateAge = exampleObject.calculateAge; //Method borrowing : same method calculateAge is used in anotherExampleObject

anotherExampleObject.calculateAge();


