
function computerPlay(min,max){
    let result= Math.floor(Math.random() * (max - min)) + min;
    
    if(result === 1){
        return 'paper'
    } else if(result ===2){
        return 'rock'
    } else {
        return 'scissors'
    }
}




function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return "It's a tie!" 
    } else if( playerSelection === 'rock' && computerSelection === 'scissors'){
        return "You win, Rock beats scissors!" 
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return "You lose, paper beats rock!" 
    } else if( playerSelection === 'paper' && computerSelection === 'scissors'){
        return "You lose, scissors beats paper" 
    } else if (playerSelection === 'paper' && computerSelection === 'paper'){
        return "It's a tie!"
    } else if( playerSelection === 'paper' && computerSelection === 'rock'){
        return "You win, paper beats rock" 
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
        return "It's a tie!"
    } else if( playerSelection === 'scissors' && computerSelection === 'rock'){
        return "You lose, rock beats scissors" 
    } else if ( playerSelection === 'scissors' && computerSelection=== 'paper'){
        return "You win, scissors beat paper"
    }
}
function count(playerSelection, computerSelection) {
   
     if( playerSelection === 'rock' && computerSelection === 'scissors'){
        return  countHuman++
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return  countComputer++
    } else if( playerSelection === 'paper' && computerSelection === 'scissors'){
        return  + countComputer++
    
    } else if( playerSelection === 'paper' && computerSelection === 'rock'){
        return  countHuman++
   
    } else if( playerSelection === 'scissors' && computerSelection === 'rock'){
        return  countComputer++
    } else if ( playerSelection === 'scissors' && computerSelection=== 'paper'){
        return  countHuman++
    }
}

let countComputer =  0;
let countHuman = 0;

function result(countComputer,countHuman){
    if(countComputer > countHuman){
        return 'the winner is the computer!'
    } else if (countComputer < countHuman){
        return 'You are the winner!'
    } else{
        return "It's a tie!"
    }

}


function game(){
   

    for (let i = 0; i < 6; i++) {
        if( i===5){
            console.log(result(countComputer,countHuman))
        } else{
        const playerSelection = prompt('choose your option');
        const computerSelection = computerPlay(1,4);
        count(playerSelection, computerSelection)
        console.log(playRound(playerSelection, computerSelection));
        console.log(countComputer,countHuman)
     }}

}
game()
