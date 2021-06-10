//data
const data = [
    {
        id : 1 ,
        title :'Attack on Titan',
        img : "Images/anime/aot.jpg", 
        category : 'anime',
        link : '#',
        language : 'english',
    },
    {
        id : 2 ,
        title :'Demon Slayer',
        img : "Images/anime/demonslayer.jpg", 
        category : 'anime',
        link : '#',
        language : 'english',
    },
    {
        id : 3 ,
        title :'Fairy Tails',
        img : "Images/movie/fairytails.png", 
        category : 'movie', 
        link : '#',
        language : 'english',
    },
    {
        id : 4 ,
        title : 'Jujutsu Kaisen',
        img : "Images/anime/jujutsuKaisen.jpg", 
        category : 'anime', 
        link : '#',
        language : 'japanese',
    },
    {
        id : 5 ,
        title :'Naruto',
        img : "Images/anime/Naruto.jpg",
        category : 'anime', 
        link : '#',
        language : 'english',
    },
    {
        id : 6 ,
        title :'Black Clover',
        img : "Images/anime/blackClover.jpg", 
        category : 'anime',
        link : '#',
        language : 'english',
    },
    {
        id : 7 ,
        title :'Fire Force',
        img : "Images/movie/fireForce.jpg", 
        category : 'movie',
        link : '#',
        language : 'english',
    },
    {
        id : 8 ,
        title :'Hunter X Hunter',
        img : "Images/anime/hunterXhunter.jpg",
        category : 'anime', 
        link : '#',
        language : 'english',
    },
    {
        id : 9 ,
        title :'Tokyo Revengers',
        img : "Images/movie/tokyoRevengers.jpg",
        category : 'movie', 
        link : '#',
        language : 'japanese',
    },
    {
        id : 10 ,
        title :'Bleach',
        img : "Images/anime/Bleach.jpg",
        category : 'anime', 
        link : '#',
        language : 'english',
    },
    {
        id : 11 ,
        title :'God Eater',
        img : "Images/movie/godEater.jpg",
        category : 'movie', 
        link : '#',
        language : 'english',
    },
    {
        id : 12 ,
        title :'Psycho Mob',
        img : "Images/movie/psychoMob.jpg",
        category : 'movie', 
        link : '#',
        language : 'english',
    },
    {
        id : 13 ,
        title :'My Hero Academia',
        img : "Images/OVA/MHA.png",
        category : 'ova', 
        link : '#',
        language : 'english',
    },
    {
        id : 14 ,
        title :'One Piece',
        img : "Images/OVA/OnePiece.jpg",
        category : 'ova', 
        link : '#',
        language : 'japanese',
    },
    {
        id : 15 ,
        title :'One Punch Man',
        img : "Images/OVA/OnePunchMan.jpg",
        category : 'ova', 
        link : '#',
        language : 'english',
    },
    {
        id : 16 ,
        title :'Demon Slayer',
        img : "Images/OVA/TanjirouKamado.jpg",
        category : 'ova', 
        link : '#',
        language : 'japanese',
    },
];

//variables
const animeContainer = document.querySelector('.anime-container');
const filterButtons = document.querySelectorAll('.fiiter-button');
const filterMenu = document.querySelectorAll('.fiiter-anime');

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
    animeContainer.classList.add('afterFilterEffects');
};


//Events
window.addEventListener('DOMContentLoaded', ()=>{
    
    displayAnime(data);

    filterButtons.forEach((btn)=>{
      btn.addEventListener('click',(e)=>{
          const category = e.target.dataset.id;
          //console.log(category);
        
          const filteredMenu = data.filter(anime =>{
                return ((category==="all")? data: (anime.category===category));            
          });
          displayAnime(filteredMenu);
      });  
    });
});

animeContainer.addEventListener('click',(anime)=>{
    //console.log(anime);
});
