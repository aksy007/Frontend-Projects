//data
const data = [
    {
        id : 1 ,
        title :'Attack on Titan',
        img : "Images/aot.jpg", 
        category : 'anime',
        link : '#',
        language : 'english',
    },
    {
        id : 2 ,
        title :'Demon Slayer',
        img : "Images/demonslayer.jpg", 
        category : 'anime',
        link : '#',
        language : 'english',
    },
    {
        id : 3 ,
        title :'Fairy Tails',
        img : "Images/fairytails.png", 
        category : 'anime', 
        link : '#',
        language : 'english',
    },
    {
        id : 4 ,
        title : 'Jujutsu Kaisen',
        img : "Images/jujutsuKaisen.jpg", 
        category : 'anime', 
        link : '#',
        language : 'english',
    },
    {
        id : 5 ,
        title :'Naruto',
        img : "Images/Naruto.jpg",
        category : 'anime', 
        link : '#',
        language : 'english',
    },
    {
        id : 6 ,
        title :'Attack on Titan',
        img : "Images/aot.jpg", 
        category : 'anime',
        link : '#',
        language : 'english',
    },
    {
        id : 7 ,
        title :'Demon Slayer',
        img : "Images/demonslayer.jpg", 
        category : 'anime',
        link : '#',
        language : 'english',
    },
    {
        id : 8 ,
        title :'Naruto',
        img : "Images/Naruto.jpg",
        category : 'anime', 
        link : '#',
        language : 'english',
    },
];

//variables
const animeContainer = document.querySelector('.anime-container'); 

//Functions
const displayAnime = (data)=>{
    let display = data.map(anime=>{
        return(
            `<div class="anime">
            <img src=${anime.img} class="photo"alt=${anime.title}>
            <h3 class="anime-name">${anime.title}</h3>
            </div>
          </div>`
        );
    }); 

    display = display.join("");
    animeContainer.innerHTML = display;
};



//Events
window.addEventListener('DOMContentLoaded', ()=>{
    displayAnime(data);
});

animeContainer.addEventListener('click',(anime)=>{
    console.log(anime);
});