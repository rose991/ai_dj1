song = "";
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    capture = createCapture(VIDEO);
    capture.hide();
}
function draw(){
    image(capture,0,0,600,500);
}
function preload(){
song = loadSound("music.mp3");
}
function play(){
    song.play();
}