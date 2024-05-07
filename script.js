let wins=0,loses=0,draws=0;
function helper(button){
    document.querySelector('.you').style.display='none';
    document.querySelector('.comp').style.display='none';
    document.querySelector('.draw').style.display='none';
    let yourChoice=button.className;
    let compChoice=randomGenerator();
    document.querySelector('.one').src=`${yourChoice}.png`;
    document.querySelector('.two').src=`${compChoice}.png`;
    document.querySelector('.status').style.display='block';
    document.querySelector('.scores').style.display='block';
    if((yourChoice=='rock' && compChoice=='scissor') || 
        (yourChoice=='paper' && compChoice=='rock') ||
        (yourChoice=='scissor' && compChoice=='paper')) youWon();
    else if(yourChoice==compChoice) draw();
    else compWon();
}

function randomGenerator(){
    let choices=['rock','paper','scissor'];
    return choices[Math.floor(Math.random()*choices.length)];
}

function youWon(){
    document.querySelector('.you').style.display='block';
    wins++;
    document.querySelector('.wins').innerText=wins;
}

function compWon(){
    document.querySelector('.comp').style.display='block';
    loses++;
    document.querySelector('.loses').innerText=loses;
}

function draw(){
    document.querySelector('.draw').style.display='block';
    draws++;
    document.querySelector('.draws').innerText=draws;
}

document.querySelector('.reset').addEventListener('click',function(){
    wins=0;
    loses=0;
    draws=0;
    document.querySelector('.scores').style.display='none';
    document.querySelector('.status').style.display='none';
    document.querySelector('.you').style.display='none';
    document.querySelector('.comp').style.display='none';
    document.querySelector('.draw').style.display='none';
});