// ------>  Music Container   <----------
// variables

const musicContainer = document.querySelector('.music-container');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const audio = document.getElementById('audio');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const songs = ['hey' , 'summer' , 'ukulele'];
let songIndex = 2;


//-------> Functions <-------
const loadSong = (song)=>{
    title.innerHTML = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

const playSong = ()=>{
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

const pauseSong = ()=>{
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

const nextSong = ()=>{
    songIndex++;
    (songIndex >= songs.length)? songIndex=0: '';
    loadSong(songs[songIndex]);
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying===true)
    {
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        audio.play();
    }
}

const prevSong = ()=>{
    songIndex--;
    (songIndex < 0)? songIndex=songs.length-1: '';
    loadSong(songs[songIndex]);
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying===true)
    {
        playBtn.querySelector('i.fas').classList.remove('fa-play');
        playBtn.querySelector('i.fas').classList.add('fa-pause');
        audio.play();
    }
}

const updateProgress = (e)=>{
    const {duration,currentTime} = e.srcElement;
    const progressPercent = (currentTime/duration)*100;
    progress.style.width = `${progressPercent}%`;
}

const setProgress = (e)=>{	
    const width = e.srcElement.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


//-------> Events <-------
loadSong(songs[songIndex]);

playBtn.addEventListener('click', ()=>{
    const isPlaying = musicContainer.classList.contains('play');
    (isPlaying===true) ? pauseSong() : playSong(); 
});
nextBtn.addEventListener('click',nextSong);
prevBtn.addEventListener('click',prevSong);

audio.addEventListener('timeupdate',updateProgress);
progressBar.addEventListener('click',setProgress);
audio.addEventListener('ended',nextSong);



// ---------->Playlist Section  <------------ //

// Variables
const musicSection = document.querySelector('.playist-section');
const musicList = document.querySelector('.music-list');
const filterAll = document.querySelector('.all-btn');
const filterFav = document.querySelector('.fav-btn');
const favTitle = document.querySelector('.title-fav');
const allTitile = document.querySelector('.title-all');
const heartIcon = document.querySelector('.fav');
const musicIcon = document.querySelector('.all');
let favPlayList = [];

//Functions

const displayPlaylist = (audioItems)=>{
    
    let displayList = audioItems.map((audio)=>{
        return(
            `
            <div class="audio-file">
                <img class="cover-image" src='./images/${audio}.jpg'>
                <h3 class="audio-title">${audio}</h3>
                <button class="fav-toggler ${(favPlayList.includes(audio)===true)? 'toggler' : ''} ">
                        <i class="fa fa-heart"></i>
                </button>
            </div>
            `
        );
    });
    displayList = displayList.join('');
    musicList.innerHTML = displayList;
}

const updateFavList = ()=>{
    //console.log(musicList.children)
    const children = musicList.children;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];
        let gChild = child.children;
        //console.log(gChild[2]);
        if(gChild[2].classList.contains('toggler'))
        {
            //console.log(gChild[1].innerHTML);
            //console.log(gChild[2].classList)
            if(!favPlayList.includes(gChild[1].innerHTML))
                favPlayList.push(gChild[1].innerHTML);
        }else{
            favPlayList = favPlayList.filter((item)=>{
                return item!=(gChild[1].innerHTML);
            });
        }
    }
}

//Events

window.addEventListener('DOMContentLoaded', ()=>{

    displayPlaylist(songs);

    allTitile.classList.add('filter-selected');
    musicIcon.classList.add('filter-selected');
    
    filterAll.addEventListener('click',(e)=>{    
        allTitile.classList.add('filter-selected');
        musicIcon.classList.add('filter-selected');
        favTitle.classList.remove('filter-selected');
        heartIcon.classList.remove('filter-selected');
        displayPlaylist(songs);
    });
    
    filterFav.addEventListener('click',(e)=>{
        favTitle.classList.add('filter-selected');
        heartIcon.classList.add('filter-selected');
        allTitile.classList.remove('filter-selected');
        musicIcon.classList.remove('filter-selected');
        e.target.classList.add('filter-selected');
        displayPlaylist(favPlayList);
    });


    // ----> Filter For All <----
    musicList.addEventListener('click',(e)=>{
        const target = e.target;
        //console.log(target);
        if(!target.parentElement.classList.contains('toggler') && target.classList.contains('fa-heart'))
        {   
            target.parentElement.classList.add('toggler');
        }
        else if(target.parentElement.classList.contains('toggler') && target.classList.contains('fa-heart'))
        {
            target.parentElement.classList.remove('toggler');
            if(favTitle.classList.contains('selected'))
                displayPlaylist(favPlayList);
        }else if(songs.includes(target.innerHTML))
        {
            //console.log(target.innerHTML)
            loadSong(target.innerHTML);
            playSong();      
            /*
            const isPlaying = musicContainer.classList.contains('play');
            if(isPlaying)
            {
                audio.play();
            }
            */
        }
        updateFavList();
    });
});


//  ----------> Responsive Menu  <-------------------- //

const menuTransition = ()=>
{
    const musicBox= document.querySelector('.music-section');
    const responsiveMenu = document.querySelector(".menu-icon");
    const playlistSection = document.querySelector('.playlist-section');
    responsiveMenu.addEventListener("click", () => {

        responsiveMenu.classList.toggle('toggle');
        playlistSection.classList.toggle("active-menu");
        musicBox.classList.toggle('toggle-down');

    });
}
menuTransition();