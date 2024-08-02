let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>
{
   const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawgame=()=>
{
    msg.innerText="Game was Draw. Play Again!";
}

const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`you Win ! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#081b31";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`you Lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>
{
     console.log("user choice =",userChoice);
     const compChoice=genCompChoice();

     console.log("Comp Choice=",compChoice);

     if(userChoice===compChoice)
     {
       drawgame();
     }

     else
     {
       let userWin=true;
       if(userChoice==="rock")
        {
            userWin = compChoice==="paper" ? false : true;
        } 
        else if(userChoice==="paper")
        {
            userWin=compChoice==="scissors" ? false :true;
        }

        else{
           userWin= compChoice==="rock" ? false :true;
        }

        showWinner(userWin,userChoice,compChoice);
     }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});