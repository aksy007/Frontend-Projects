const hexColors = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.querySelector('.changeColor');
var color = document.querySelector('.color');

btn.addEventListener("click", ()=>{
    let colorCode="#";
    for(let i=0;i<6;i++)
        colorCode+=hexColors[randomIndex()];
    color.textContent=colorCode;
    document.body.style.backgroundColor=colorCode;
    color.style.color=colorCode;
});

function randomIndex(){
    return Math.floor(Math.random() * hexColors.length);
}