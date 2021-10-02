var ReadLineSync=require('readline-sync');
Score=0;

function welcome(){
  var UserName= ReadLineSync.question("What is your Name? ");

  console.log("Welcome " + UserName + ", Let's see How much you know me?")
}



//Array of all the Questions & Answers
var Questions=[{question:"What is my Age? ",answer:"24"},{question:"Where do I Live? ",answer:"Mumbai"},{question:"Which skill am I currently Learning? ",answer:"Coding"},{question:"Which is my favourite Sport? ", answer:"Cricket"},{question:"What is my Mother Tongue? ", answer:"Marathi"}];


function play(question,answer){
  var UserAnswer=ReadLineSync.question(question);
  if(UserAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("You are Right! ");
    Score=Score+1;
    
  }else{console.log("You are Wrong! ");

  }
  console.log("Your Score is "+Score+" !")
  console.log("____________________________________")

}

function game(){
  for (var i=0; i<Questions.length; i++){
    var CurrentQuestion= Questions[i];
    play(CurrentQuestion.question, CurrentQuestion.answer)
  }
}


var str= "High Scores till now are: \n 1) Ajay : 4\n 2) Amey : 3\n"


function ShowScores() {
  console.log("Your Total Score is "+ Score+" !")
  console.log(str);
  console.log("If your Score beats the High Scores, Contact me and I will update it.")
}



welcome();
game();
ShowScores();


