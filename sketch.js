let ground;
let lander;
var lander_img;
var bg_img;
var invisible;
var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,250,250)
  lander.velocityY = -3;
  

  invisible = createSprite(0,620,1000,20);
  invisible.visible = false; 


  edges = createEdgeSprites();
 // rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);

  if(keyDown("UP_ARROW")){
    lander.y = lander.y - 4;
  
  }
 if (keyDown("DOWN_ARROW")){
   lander.y = lander.y+1;
 }
  
 if (keyDown("LEFT_ARROW")){
  lander.x = lander.x-4;
}
if (keyDown("RIGHT_ARROW")){
  lander.x = lander.x+4;
}
 
  
lander.bounceOff(edges);
  push()
  fill(255);
  //text("Vertical Velocity: "+round(vy),800,75);
  pop();
  //fall down
  //vy +=g;
  //lander.position.y+=vy;
 // lander.velocityY = lander.velocityY+0.08;
 if (lander.x>=42 && lander.x<=150 && lander.y>=540 && lander.y<=630){
   textSize(25)
   text("The Lander Landed Safely",395,275)
} 
 lander.collide (invisible);

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

