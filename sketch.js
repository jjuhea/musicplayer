// let mySound;   //변수명 my Sound
//     function setup(){
//         soundFormats('YOUNHA.mp3');
//         mySound=loadSound('YOUNHA',loadMusic); //mySound 변수에 음악을 넣는다.
//         musicFile.play
//     }


// function loadMusic()
// {
//     mySound.play();
// }

var song;
var button;

function setup(){
    createCanvas(200,200);
    song=loadSound("YOUNHA.MP3",loaded);
    button=createButton('play');
    button.mousePressed(togglePlaying);
    background(51);

}

function togglePlaying(){
    if(!song.isPlaying()){
        song.play();
        song.setVolumn(0,3);
        button.html('pause');
        }

    else{
        song.stop();
        button.html('play');
    }
}

function loaded(){
    console.log('loaded');
}
