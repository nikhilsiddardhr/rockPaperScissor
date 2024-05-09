scores=JSON.parse(localStorage.getItem('scores'))||{
    win:0,
    loss:0,
    draw:0
};
function playerChoice(button){
    displayPreset();
    you=button.className;
    comp=computerTurn();
    document.querySelector('.status').style.display='block';
    document.querySelector('.one').src=you+".png";
    document.querySelector('.two').src=comp+".png";
    checkWinner(you,comp);
    displayScore();
    localStorage.setItem('scores',JSON.stringify(scores));
}

function computerTurn(){
    const choices=['rock','paper','scissor'];
    return choices[Math.floor(Math.random()*3)];
}
function checkWinner(you,comp){
    if(you==comp){
        document.querySelector('.draw').style.display='block';
        scores.draw++;
        return 'draw';
    }
    if((you=='rock' && comp=='scissor')||(you=='scissor' && comp=='paper') || (you=='paper' && comp=='rock')){
        document.querySelector('.you').style.display='block';
        scores.win++;
        return 'you';
    } 
    document.querySelector('.comp').style.display='block';
    scores.loss++;
    return 'comp';
}
function displayPreset(){
    document.querySelector('.draw').style.display='none';
    document.querySelector('.you').style.display='none';
    document.querySelector('.comp').style.display='none';
}
function displayScore(){
    document.querySelector('.scores').style.display='block';
    document.querySelector('.wins').innerText=scores.win;
    document.querySelector('.loses').innerText=scores.loss;
    document.querySelector('.draws').innerText=scores.draw;
}
document.querySelector('.reset').addEventListener('click',function(){
    scores.win=0;
    scores.loss=0;
    scores.draw=0;
    displayScore();
})

function automatic(){
    let player=computerTurn();
    playerChoice(document.querySelector(`.${player}`));
}
document.querySelector('.auto').addEventListener('click',startInterval);
document.querySelector('.stop').addEventListener('click',stopInterval);
let interval;
function startInterval(){
    interval=setInterval(automatic,1000);
}
function stopInterval(){
    clearInterval(interval);
}