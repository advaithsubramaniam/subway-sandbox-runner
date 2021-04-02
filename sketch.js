var path, pathimage, invisibler, invisiblel;
var jake , jake_running;

function preload(){
  //pre-load images
  pathimage = loadImage("path.png");
  
  jake_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png" );
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathimage);
  path.velocityY = 4;
  path.scale = 1.2;
  invisibler = createSprite(20,170,40,500)
  invisibler.visible = false;
  
  invisiblel = createSprite(380,170,40,500)
  invisiblel.visible = false;
  jake = createSprite(180,250,20,50);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.9;
}

function draw() {
  background(0);
  
if(path.y > 400){   
 path.y = height/2;  
}
  
jake.x = World.mouseX;
 jake.collide(invisibler);
  jake.collide(invisiblel);
drawSprites();
}
