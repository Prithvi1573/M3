noseX=0;
noseY=0;
function preload()
{
  mush_nose = loadImage('https://i.postimg.cc/gkKThW1J/mush-removebg-preview.png');
}
function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw()
{
  image(video, 0, 0, 300, 300);
  image(mush_nose,noseX,noseY,75,75)
}
function take_snapshot()
{
save('cool-mushtache.png')
}
function gotPoses(results)
{
if(results.length>0)
{
  noseX= results[0].pose.nose.x-35;
  noseY=results[0].pose.nose.y+10;
  console.log("nose x ="+results[0].pose.nose.x);
    console.log("nose y ="+results[0].pose.nose.y);
    console.log(results);
}
}
function modelLoaded() {
  console.log('PoseNet Is Initialized');
}