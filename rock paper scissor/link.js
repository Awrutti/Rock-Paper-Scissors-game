let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScored=document.querySelector("#user-score");
const compScored=document.querySelector("#comp-score");

const genCompChoice=()=>{
     const options=["rock","paper","scissors"];
    const randIdx= Math.floor( Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
   
  msg.innerText="Game Draw. Play again";
  msg.style.backgroundColor="rgb(3, 31, 31)";
};

const showWinner=(userWin,choiceId,compChoice)=>
{
    if(userWin){
        userScore++;
        userScored.innerText=userScore;
        msg.innerText=`You Win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScored.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats ${choiceId}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(choiceId)=>{
console.log("user choice= ", choiceId);
const compChoice=genCompChoice();
console.log(compChoice);

if(choiceId===compChoice){
   drawGame();
}else{
    let userWin=true;
    if(choiceId=="rock"){
     userWin= compChoice==="paper"?false:true;
    }else if(choiceId==="paper"){
        userWin= compChoice==="scissor" ? false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,choiceId,compChoice);
}
};

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
    const choiceId=choice.getAttribute("id");
    playGame(choiceId);
   });
});