// Calculate days since October 12, 2021 
var initialDate = new Date(2021, 9, 12); // October 12, 2021, Attention: month is zero-based (starts from 0, E.g. Jan is 0 feb is 1)
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);

// Write result to HTML
document.getElementById('days_since').innerHTML = daysSince;









var audio = document.getElementById('audio-player')
var playPauseBTN = document.getElementById('playPauseBTN')
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = '<i class="fa-sharp fa-solid fa-pause"></i>';
    }else{
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = '<i class="fa-sharp fa-solid fa-play"></i>';
    }
}

function stopRestart(){
    playPause()
    audio.pause();
    audio.currentTime = 0;
    if(count == 0){

    }else{
        audio.currentTime = 0;
        playPauseBTN.innerHTML = '<i class="fa-sharp fa-solid fa-play"></i>';
    }
}