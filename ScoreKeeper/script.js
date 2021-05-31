const ScoreKeeper = ()=>{

    //buttons
    const player1 = document.querySelector('.p1');
    const player2 = document.querySelector('.p2');
    const reset = document.querySelector('.reset');

    // Player Score
    const p1=document.getElementById('P1Score');
    const p2=document.getElementById('P2Score');
    const TargetScore = document.querySelector(".tScore");
    const TargetInput = document.querySelector(".targetInput[type='number']");

    var p1Score=0,p2Score=0;
    var target=5;
    var isGameOver=false;

    // Reset Score

    function resetScore(){
        p1.innerHTML=0;
        p2.innerHTML=0;
        isGameOver=false;    
        p1.classList.remove('winner');
        p2.classList.remove('winner');
    }

    // Target Score Function
    TargetInput.addEventListener("change", ()=>{
        TargetScore.innerHTML = TargetInput.value;
        target = Number(TargetInput.value);
        resetScore();
    });

    player1.addEventListener('click',()=>{
        p1Score+=1;
        if(p1Score < target)
            p1.innerHTML=p1Score;
        else if(p1Score==target)
        {
            p1.innerHTML=target;
            isGameOver=true;
            p1.classList.add('winner');
            
        }else
            alert("Game Over! Player 1 Won");
    });

    player2.addEventListener('click',()=>{
        p2Score+=1;
        if(p2Score < target)
            p2.innerHTML=p2Score;
        else if(p2Score==target)
        {
            p2.innerHTML=target;
            isGameOver=true;
            p2.classList.add('winner');
        }
        else
            alert("Game Over! Player 2 Won");
    });
    reset.addEventListener('click',resetScore);
}

ScoreKeeper();