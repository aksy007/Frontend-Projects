const game = ()=>{

    let pScore=0;
    let cScore=0;
    
    const startG = ()=>{
        const play=document.querySelector('.Intro button');
        const introScreen = document.querySelector('.Intro');
        const match = document.querySelector('.match');
        play.addEventListener("click", ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    }

    const playMatch = () => {
        
        const options = document.querySelectorAll('.options button');
        const pHand = document.querySelector('.player-hand');
        const cHand = document.querySelector('.computer-hand');
        
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend',function(){
                this.style.animation="";
            });
        });

        const computerChoice = ['rock','paper','scissors'];
        
        options.forEach(option => {
            option.addEventListener('click', function() {
            
            const choiceInd = Math.floor(Math.random() * 3);
            const cChoice = computerChoice[choiceInd];

            setTimeout(() =>{
            
            compareHands(this.textContent,cChoice);

            pHand.src = `./assets/${this.textContent}.png`;
            cHand.src = `./assets/${cChoice}.png`;
            },2000);
        
            pHand.style.animation = "shakePlayerHands 2s ease";
            cHand.style.animation = "shakeComputerrHands 2s ease";
        });
    });
    }

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice,computerChoice) =>{
        
        const winner = document.querySelector('.winner');
        if(playerChoice===computerChoice)
        {
            winner.textContent = 'Draw';
            return;
        }else if(playerChoice==="rock")
        {
            if(computerChoice=="scissors"){
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }else if(playerChoice==="paper")
        {
            if(computerChoice=="rock"){
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }else if(playerChoice==="scissors")
        {
            if(computerChoice=="paper"){
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    startG();
    playMatch();
}

game();