var sun,mercury,earth,mars;
var sunImg,mercuryImg,earthImg,marsImg;
var angle=0;

function preload(){
  sunImg=loadImage("images/sun.png");
  mercuryImg=loadImage("images/mercury.png");
  venusImg=loadImage("images/Venus.png");
  earthImg=loadImage("images/earth.png");
 

}

function setup() {
  createCanvas(400,400);
  // sun=createSprite(200, 150, 50, 50);
  sun=createSprite(10, 10, 50, 50);
  sun.addImage("sun",sunImg);
  mercury=createSprite(90,20,50,50);
  mercury.addImage("mercury",mercuryImg);
 venus=createSprite(-100,95,50,50);
 venus.addImage("venus",venusImg);
 earth=createSprite(100,150,50,50);
 earth.addImage("earth",earthImg);
    sun.scale=0.2;
   mercury.scale=0.12; 
   venus.scale=0.04;
  earth.scale=0.15;
//   sun.debug=true;
//   mercury.debug=true;
//   venus.debug=true;
//   earth.debug=true;
}

function draw() {
  background(0); 
  
translate(200,200);
rotate(angle);
 angle=angle+0.5;

 if(frameCount%20===0){
   sun.scale=sun.scale+0.01;
 }
 sun.setCollider("circle",0,10,210);
 mercury.setCollider("circle",0,0,155);
 venus.setCollider("circle",0,0,410);
 earth.setCollider("circle",0,0,120);
//  isTouching(sun,mercury);
//  isTouching(sun,venus);
//   isTouching(sun,earth);
// if(sun.isTouching(venus)){
//   venus.visible=false;
// }
// if(isTouching(sun,earth)){
//   earth.visible=false;
// }
// else{
//   earth.visible=false;
// }
if(sun.isTouching(mercury)){
  mercury.visible=false;
}
if(sun.isTouching(venus)){
  venus.visible=false;
  }
  if(sun.isTouching(earth)){
    earth.visible=false;
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x - object2.x < object1.width/2 + object2.width/2
&& object2.x - object1.x < object1.width/2 + object2.width/2&&object1.y - object2.y < object1.height/2 + object2.height/2
&& object2.y - object1.y < object1.height/2 + object2.height/2){
   
   return true;

}
else{
  
  return false;
}
}
