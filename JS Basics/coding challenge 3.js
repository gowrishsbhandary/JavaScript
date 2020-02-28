
function tipCalculator() {
    
    var tip = [];
    var bill = [124, 48, 268];
    var i;
    for(i = 0; i<bill.length; i++) {
        if(bill[i] <= 50) {
            tip[i] = bill[i] * 20/100;
         } else if(bill[i] > 50 && bill[i]<= 200) {
            tip[i] = bill[i] * 15/100;
            
        } else {
            tip[i] = bill[i] * 10/100;
        }
    }
    
   return tip;
}

console.log(tipCalculator());

