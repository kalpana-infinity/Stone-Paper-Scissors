
var userscore=0;
var compscore=0;
var totalrounds;
var roundsplayed=0;

const choices= document.querySelectorAll(".container");
let b=document.querySelector("#match");
let match=document.querySelector("#match");
let users=document.querySelector("#yourscore");
let comps=document.querySelector("#computerscore");

let startscreen=document.querySelector("#str");
let roundslide=document.querySelector("#round");
let startbtn=document.querySelector("#startbtn");
let roundvalue=document.querySelector("#round-value");
let gamescreen=document.querySelector("#gamescreen");

let winnerscreen=document.querySelector("#winnerscreen");
let yourfinal=document.querySelector("#yourfinal");
let compfinal=document.querySelector("#compfinal");
let winhead=document.querySelector("#winhead");
let playagain=document.querySelector("#playagain");

roundslide.addEventListener("input",()=>{
  roundvalue.innerText=roundslide.value;          //update slider value
});

startbtn.addEventListener("click",()=>{ 
  totalrounds=parseInt(roundslide.value,10);
  roundsplayed=0;
  userscore=0;
  compscore=0;
  users.innerText=userscore;
  comps.innerText=compscore;
 
  //hide the screen
  startscreen.style.display="none";
  gamescreen.style.display="block";
  match.style.backgroundColor= "rgb(243, 215, 130)";

});

choices.forEach(element => {
  element.addEventListener("click",()=>{
    totalrounds=parseInt(roundslide.value,10);
    if(roundsplayed<totalrounds){
      const userchoice=element.getAttribute("id");
        playgame(userchoice);
    }
    else{
        winnerscreen.style.display="block";
        gamescreen.style.display="none";
        yourfinal.innerText=userscore;
        compfinal.innerText=compscore;
        if(compscore>userscore){
        winhead.innerHTML="You lose";
        }
        if(userscore>compscore)
        {
          winhead.innerHTML="You Win";
        }
        if(userscore===compscore){
          winhead.innerHTML="Game Draw";
        }
    }
  });
});


 const generatecompchoice =()=>{
  const options=["rock","paper","scissor"];
  const randIdx=Math.floor(Math.random()*3 );
  return options[randIdx]; 
 };
 

const playgame=(userchoice)=>{
  console.log("user choice is ",userchoice);
  const compchoice=generatecompchoice();
  console.log("computer choice is ",compchoice);
 let userwin="true";
  if(userchoice===compchoice){  
     draw();
  }              
  else{
    if(userchoice==="rock"){
      userwin=compchoice==="paper"?false:true;          //paper scissor
    }
    else if(userchoice==="paper"){                     //rock scissor
    userwin=compchoice==="rock"?true:false;
    }
    else{         
      userwin=compchoice==="rock"?false:true;            //rock paper
    }
    score(userwin,compchoice,userchoice);
  }
  roundsplayed++;
};


const draw=()=>{
  console.log("Draw");
  match.style.backgroundColor="rgb(205, 207, 56)";
  match.innerText="Draw";
}
 
const score=(userwin,_compchoice,_userchoice)=>{
  if(userwin){
    userscore++;
    users.innerText=userscore;
    console.log("you win");
    match.innerText=`You Win! Your ${_userchoice} beats ${_compchoice}`;
    match.style.backgroundColor="rgb(93, 226, 128)";
  }
  else{
    compscore++;
    comps.innerText=compscore;
    console.log("you lose");
    match.innerText=`You Lose! ${_compchoice} beats Your ${_userchoice}`;
    match.style.backgroundColor="rgb(237, 110, 79)";
  }
}

playagain.addEventListener("click",()=>{
  roundsplayed=0;
  userscore=0;
  compscore=0;
  users.innerText=userscore;
  comps.innerText=compscore;
  winnerscreen.style.display="none";
  startscreen.style.display="block";
  gamescreen.style.display="none";
  match.innerText="Pick up your choice";
 });
