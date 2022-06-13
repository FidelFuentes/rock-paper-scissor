
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


    

    const buttonRock = this.document.querySelector('#rock')
    buttonRock.addEventListener('click',function(e){
    const play= computerPlay(1,4);
    round.textContent=( playRound('rock',play))
    
    count('rock',play)
    countComputerDisplay.textContent= `Computer score: ${countComputer}`;
    countHumanDisplay.textContent = `Human score: ${countHuman}`;
    results.textContent=result(countComputer,countHuman);



})

    const buttonPaper = this.document.querySelector('#paper')
    buttonPaper.addEventListener('click',function(e){
        const play= computerPlay(1,4);
        round.textContent=( playRound('paper',play))
        
        count('paper',play)
        countComputerDisplay.textContent= `Computer score: ${countComputer}`;
        countHumanDisplay.textContent = `Human score: ${countHuman}`;
        results.textContent=result(countComputer,countHuman);
    })

    const buttonScissor= this.document.querySelector('#scissors')
    buttonScissor.addEventListener('click',function(e){
        const play= computerPlay(1,4);
        round.textContent=( playRound('scissors',play))
        
        count('scissors',play)
        countComputerDisplay.textContent= `Computer score: ${countComputer}`;
        countHumanDisplay.textContent = `Human score: ${countHuman}`;
        results.textContent=result(countComputer,countHuman);
    })
    const container= document.querySelector('#container')
    const round= document.createElement('div');
    round.classList.add('round')
    
    container.appendChild(round);


    let countComputer =  0;
    let countHuman = 0;
    
    function result(countComputer,countHuman){

        if(countComputer ===5){
            return 'the winner is the computer!'
        } else if (countHuman ===5)
            return 'You are the winner!'
        }
    
    
    const countComputerDisplay= document.createElement('div')
    countComputerDisplay.classList.add('countComputerDisplay')


    container.appendChild(countComputerDisplay)

    const countHumanDisplay= document.createElement('div')
    countHumanDisplay.classList.add('countHumanDisplay')


    container.appendChild(countHumanDisplay)

    const results= document.createElement('div')
    results.classList.add('results')


    container.appendChild(results)

    




