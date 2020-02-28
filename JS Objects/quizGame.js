console.log('Welcome to Quiz world!');
console.log(' ');

function Question(question, answers, correctAns) {
    this.question = question;
    this.answers = answers;
    this.correctAns = correctAns;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);
    
    for(var i=0; i <this.answers.length; i++) {
        console.log('  ' + i + ': '+ this.answers[i])
    }
}

Question.prototype.checkAnswer = function (ans) {
    if(ans === this.correctAns) {
        console.log('Correct answer!')
    } else {
        console.log('Wrong answer!')
    }
}

var q1 = new Question('What is default scope of bean in Spring framework?', 
                     ['singleton', 'prototype', 'request', 'session'], 0);
var q2 = new Question('By default a bean is eagerly loaded', 
                     [true, false], 0);
var q3 = new Question('A bean must have id attribute in beans configuration file.', 
                     [true, false], 1);
var q4 = new Question('What is true about BeanPostProcessor?', 
                     ['It is a concrete class', 'It is an interface', 'It is an abstract class', 'None of the above'], 1);

var questionArray = [q1, q2, q3, q4];

var n = Math.floor(Math.random() * questionArray.length);

questionArray[n].displayQuestion();

var answer = parseInt(prompt('Please select the correct answer!'))

questionArray[n].checkAnswer(answer);