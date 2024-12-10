const randomNum=Math.ceil(Math.random()*20);
const again= document.querySelector(".again"); // call the elements
const guess= document.querySelector(".guess");
const check= document.querySelector(".check");
const message= document.querySelector(".msg");
const body= document.querySelector("body");
const number= document.querySelector(".questionMark")
console.log(randomNum);

//check.onclick=()=>{}
check.addEventListener("click", ()=>{
const guessVal=guess.value
if(!guessVal){          //!guessVal
message.textContent="Please, enter a guess.";
}
else if(guessVal<0 || guessVal>20){
message.textContent="Please, enter a number from 1 to 20.";
}
else if(guessVal==randomNum){
message.textContent="CONGRATS! You guessed the number🎉";
body.style.backgroundColor="green";
number.textContent= randomNum;


}





})
