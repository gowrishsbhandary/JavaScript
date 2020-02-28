var avgJhonTeamScore = (116 + 94 + 123) / 3;
var avgMikeTeamScore = (116 + 158 + 123) / 3;


if(avgJhonTeamScore === avgMikeTeamScore) {
   console.log('Both the team has same score '+avgJhonTeamScore , avgMikeTeamScore);
} else if (avgJhonTeamScore > avgMikeTeamScore) {
    console.log('John\'s team wins with the score of '+avgJhonTeamScore);
} else {                
    console.log('Mike\'s team wins with the score of '+avgMikeTeamScore);            
}