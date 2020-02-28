
var tipCalculatorClass = {
    
    tipValue : [],
    totalPayment : [],
    
    tipCalculatorMethod : function(fullName, billsArray, tipsPecentage, billRange) {
        
        console.log('--------- Tip calculator ------------')
        
        for(var i=0; i<billsArray.length; i++) {
            if(billsArray[i] < billRange[0]) {
                this.tipValue[i] = billsArray[i] * 20/100;
            } else if(billsArray[i] >= billRange[1] && billsArray[i] < billRange[2]) {
                this.tipValue[i] = billsArray[i] * 15/100;
            } else {
                this.tipValue[i] = billsArray[i] * 10/100;
            }
            
            this.totalPayment[i] = billsArray[i] + this.tipValue[i];
        }
        console.log(fullName + "'s Bill         : \n          "+billsArray);
        console.log(fullName + "'s Tip          : \n          "+this.tipValue);
        console.log(fullName + "'s totalPayment : \n          "+this.totalPayment);
        calcAverageTip(fullName, this.tipValue);
        
    }
}

function calcAverageTip(fullName, tipValue) {
    
    var avgTip = 0;
    for(var i = 0; i < tipValue.length; i++) {
        avgTip = (avgTip + tipValue[i])/tipValue.length ;
    }
    console.log(fullName+ "'s average tip : "+avgTip);
}

var jhon = {
   fullName : 'Jhon Smith',
   bills : [124, 48, 268, 180],
   tipsPecentage : [20, 15, 10],
   billRange : ['50', '50', '200']
}



var marks = {
    fullName : 'Mark Rode',
    bills : [77, 375, 110, 45],
    tipsPecentage : [20, 10, 25],
    billRange : ['100', '100', '300']
}

 tipCalculatorClass.tipCalculatorMethod(jhon.fullName, jhon.bills, jhon.tipsPecentage, jhon.billRange);
 tipCalculatorClass.tipCalculatorMethod(marks.fullName, marks.bills, marks.tipsPecentage, marks.billRange);






