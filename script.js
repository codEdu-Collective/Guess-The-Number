const randomNum=Math.ceil((Math.random()*20)+1);
const again= document.querySelector(".again"); 
const guess= document.querySelector(".guess");
const check= document.querySelector(".check");
const message= document.querySelector(".msg");
const body= document.querySelector("body");
const questionMark= document.querySelector(".questionMark");
const topScore=document.querySelector(".topScore");
const life=document.querySelector(".life");
let live=10;
let topScore=0;

console.log(randomNum);

//check.onclick=()=>{}
check.addEventListener("click", ()=>{
const guessVal=guess.value
if(!guessVal){       
message.textContent="Please, enter a guess.";
}
else if(guessVal<0 || guessVal>20){
message.textContent="Please, enter a number from 1 to 20.";
}
else if(guessVal==randomNum){
message.textContent="CONGRATS! You guessed the number🎉";
body.style.backgroundImage = "none";
body.style.backgroundColor = "green";
questionMark.textContent= randomNum;
check.disabled=true;
//return;
if(life>topScore){
    topScore=live;
    topScore.textContent=topScore;
}
}
else{
    if(live>1){
    live--
    life.textContent=live;   
    guessVal>randomNum? message.textContent="Enter a smaller number":message.textContent="Enter a greater number";
    } 
    else{
    body.style.backgroundImage = "none";
    body.style.backgroundColor="red";
    message.textContent="Game is over."
    check.disabled=true;
    life.textContent=0;

    }
}




})
