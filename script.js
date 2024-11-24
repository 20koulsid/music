console.log("welcome to spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = document.getElementById('songItemPlay');
let songs = [
    {songName: "Guli Mata", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "O Mahi", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName:"Aaj Ki Raat", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Tauba Tauba", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Ve Kmaleya", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "O SajniRe", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Mere Mehboob Mere Sanam", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Mahadev Tera Naam", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Hawa Mohabbat", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Lagai Dehe Choliya Ke Hook RajaJi", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// Listen to events
audioElement.addEventListener('timeupdate', () => {
    // update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    ProgressBar.value = progress;
})
ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;

})

// click listener
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-circle-play');
        element.classList.remove('fa-circle-pause');
    });

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-circle-pause');
        e.target.classList.remove('fa-circle-play');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListener('click', () => {
    if(songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if(songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
