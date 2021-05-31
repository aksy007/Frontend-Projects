// const Increment = document.querySelector('.increment');
// const Reset = document.querySelector('.reset');
// const Decrement = document.querySelector('.decrement');

const btns = document.querySelectorAll(".btn");
var count = document.querySelector('.val');

let cnt=0;



btns.forEach(function(btn){

    btn.addEventListener("click",(e)=>{
   
        const option = e.target.classList;
        if(option.contains("increment"))
            cnt+=1;
        else if(option.contains("decrement"))
            cnt-=1;
        else if(option.contains("reset"))
            cnt=0;
        
        count.textContent=cnt;
        if(cnt>0)
            count.style.color=`green`;
        else if(cnt<0)
            count.style.color=`red`;
        else
            count.style.color=`black`;
    });

});

