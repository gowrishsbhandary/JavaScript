/*


*/

var markMass, markHeight, markBMI, jhonMass, jhonHeight, jhonBMI;
markMass = 70;
markHeight = 1.6;

jhonMass = 80;
jhonHeight = 2;

markBMI = markMass / (markHeight * markHeight);

jhonBMI = jhonMass / (jhonHeight * jhonHeight);

var isMarkBMIHigher = markBMI > jhonBMI;

console.log('Is mark\'s BMI ' +markBMI+ ' is higher than Jhon\'s BMI ' +jhonBMI+ ' ? ' + isMarkBMIHigher);

if(markBMI > jhonBMI) {
   console.log('Is mark\'s BMI ' +markBMI+ ' is higher than Jhon\'s BMI ' +jhonBMI);
} else {
    console.log('Is Jhon\'s BMI ' +jhonBMI+ ' is higher than mark\'s BMI ' +markBMI);
}