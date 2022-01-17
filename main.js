var lips_x=0;
var lips_y=0;
function preload(){
lips=loadImage('https://i.postimg.cc/mrfGdQbP/lips-png.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNET=ml5.poseNet(video,modelLoaded);
poseNET.on('pose',gotPoses);


}
function draw(){
image(video,0,0,300,300)
image(lips,lips_x,lips_y,30,30);
}
function take_snapshot(){
    save('lips.png');
}
function modelLoaded(){
    console.log("posenet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lips_x=results[0].pose.nose.x-10;
        lips_y=results[0].pose.nose.y+10;
        console.log("lips x="+lips_x);
        console.log("lips y="+lips_y);
    }
}