var rwx=0;
var lwx=0;
var rwy=0;
var lwy=0;
var srw=0;
var slw=0;

function preload(){
song=loadSound("music.mp3");
song1=loadSound("music.mp3");
}
function setup(){
 canvas=createCanvas(650,500);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 x=ml5.poseNet(video,mpl);
 x.on('pose',pd);
}
function mpl(){
    console.log("poseNet is intialized");
}
function pd(result){
 if(result.length>0){
console.log(result);
srw=result[0].pose.keypoints[9].score;
slw=result[0].pose.keypoints[10].score;
console.log("score of right wrist is ",srw);
console.log("the score of left wrist is ",slw);
lwx=result[0].pose.leftWrist.x;
rwx=result[0].pose.rightWrist.x;
lwy=result[0].pose.leftWrist.y;
rwy=result[0].pose.rightWrist.y;
console.log(lwx);
console.log(rwx);
console.log(lwy);
console.log(rwy);
 }
}
function draw(){
    image(video,0,0,650,500);
}
function p(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}