console.log("Welcome to Music Player");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "all remix", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "What Do You Mean", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Let me love you", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Bengali song", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabindranath Tagore", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Justin", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "shape of you", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Best of Ncs", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "24kGoldn-Mood", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

masterPlay.addEventListener('click', ()=>{
  
    makeAllPlays();
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})



Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 

        
        makeAllPlays();
        let a= parseInt(e.target.id);
        if(songIndex==a)
        {
            audioElement.pause();
            e.classList.remove('fa-pause-circle');
            e.classList.add('fa-play-circle');
        }
        else
        {
        songIndex = parseInt(e.target.id);
     
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        console.log(audioElement.currentTime);
        audioElement.currentTime = 0;
        audioElement.play();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        }
        
       
        
       
        
    
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    makeAllPlays();
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    makeAllPlays();
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
