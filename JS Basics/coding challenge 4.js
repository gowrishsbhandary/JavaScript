var mark = {
    markMass: 60,
    markHeight: 1.6,
    
    markBMI: function() {
         this.bmi = (this.markMass / (this.markHeight * this.markHeight));
        return  this.bmi;
    }
}

var jhon = {
    jhonMass: 80,
    jhonHeight: 1.6,
    
    jhonBMI: function() {
        this.bmi = (this.jhonMass / (this.jhonHeight * this.jhonHeight));
        return  this.bmi;
    }
}

var isMarkBMIHigher = mark.markBMI() > jhon.jhonBMI();

console.log('Is mark\'s BMI ' +mark.bmi+ ' is higher than Jhon\'s BMI ' +jhon.bmi+ ' ? ' + isMarkBMIHigher);

if(mark.bmi > jhon.bmi) {
   console.log('Is mark\'s BMI ' +mark.bmi+ ' is higher than Jhon\'s BMI ' +jhon.bmi);
} else {
    console.log('Is Jhon\'s BMI ' +jhon.bmi+ ' is higher than mark\'s BMI ' +mark.bmi);
}