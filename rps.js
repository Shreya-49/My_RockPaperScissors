let score =JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0,
};
updateScoreElement();

function playGame(playerMove){
    const computermove = pickcomputermove();
    let res = '';
    if(playerMove==='scissors'){
        if (computermove === 'rock') {
            res = 'You Lose.';
        } else if (computermove === 'paper') {
            res = 'You Win.';
        } else if (computermove === 'scissors') {
            res = 'Tie.';
        }
    }
    else if(playerMove==='paper'){
        if (computermove === 'rock' ) {
            res = 'You Win.';
        } else if (computermove === 'paper') {
            res = 'Tie.';
        } else if (computermove === 'scissors') {
            res = 'You Lose.';
        }

    }
    else if(playerMove==='rock'){
        if (computermove === 'rock') {
            res = 'Tie.';
        } else if (computermove === 'paper') {
            res = 'You Lose.';
        } else if (computermove === 'scissors') {
            res = 'You Win.';
        }
    }

    if (res==='You Win.'){
        score.wins+=1;
    }else if(res==='You Lose.'){
        score.losses+=1;
    }else if(res==='Tie.'){
        score.ties+=1;
    }
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = res;

    // Corrected the src paths for the images
    document.querySelector('.js-moves').innerHTML = `
        You <img src="images/${playerMove}.png" class="move-icon"> 
        - 
        <img src="images/${computermove}.png" class="move-icon"> Computer
    `;
}
function updateScoreElement(){
    
    document.querySelector('.js-score').innerHTML= `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickcomputermove(){
    let computermove = '';
    const rno = Math.random();
    if (rno >= 0 && rno < 1/3) {
        computermove = 'rock';
    } else if (rno >= 1/3 && rno < 2/3) {
        computermove = 'paper';
    } else if (rno >= 2/3 && rno < 1) {
        computermove = 'scissors';
    }
    return computermove;
}