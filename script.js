let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara= document.querySelector("#user-score");
const comscorepara= document.querySelector("#com-score");
const gencompchoice = () =>{
    const options=["rock", "paper", "scissors"];
    const ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
}
const drawgame=()=>
{
    console.log("Game Draw");
    msg.innerText="GAME DRAW ! PLAY AGAIN";
    msg.style.backgroundColor="#081b31";
};
const showwinner =(userwin,userchoice,compchoice)=>
{
    if(userwin)
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You Win!");
        msg.innerText= `YOU WIN !  Your ${userchoice} Beats ${compchoice} `;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comscorepara.innerText=compscore;
        console.log("You Lose");
        msg.innerText=`YOU LOSE !  Computers ${compchoice} Beats ${userchoice} `;
        msg.style.backgroundColor="red";
    }
};

const playgame=(userchoice)=>
{
console.log("user Choice =", userchoice);
const compchoice= gencompchoice();
console.log("Comp Choice =",compchoice);
if(userchoice===compchoice)
{
drawgame();
}
else{
    let userwin = true;
    if(userchoice ==="rock"){
        userwin = compchoice === "paper" ? false : true;
    }
    else if(userchoice === "paper"){
        userwin = compchoice === "scissors" ? false : true; 
    }
    else{
      userwin = compchoice === "rock" ? false : true;
    }
     
showwinner(userwin,userchoice,compchoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>
    {
        let userchoice=choice.getAttribute("id");
        // console.log("User was Clicked", userchoice);
        playgame(userchoice);
    });
});
