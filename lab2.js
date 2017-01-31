var userChoice=prompt( "Do you choose rock, paper or scissors?");
var computerChoice =Math.random(1);
console.log(computerChoice);
if (computerChoice<0.33)
console.log("rock");
else if (computerChoice>0.33 && computerChoice<0.66)
console.log("paper");
else (computerChoice>0.66 && computerChoice<1)
console.log("scissors");
