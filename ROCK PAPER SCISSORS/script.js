let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("game is draw");
}

const playGame=(userChoice)=>{
    console.log(`User choice is ${userChoice}`)
    //generate Computer choice
    const comChoice=genCompChoice();
    console.log(`Computer Choice is ${comChoice}`);
    if(userChoice===comChoice){
        //draw game
        drawGame();
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked",useChoice);
        playGame(userChoice);

    })
})