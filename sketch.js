var ship, ship_running , edges;
var sea, sea_img, invisible_sea;

function preload(){
  ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea_img = loadImage("sea.png");
}

function setup(){
  createCanvas(1425,775);

  sea = createSprite(450,450,5,7);
  sea.addAnimation("sea",sea_img);
  sea.velocityX=-4;
  ship = createSprite(450,425,5,7);
  ship.addAnimation("ship",ship_running);
  edges = createEdgeSprites();


  
}

function draw() {
  background("blue");
if(sea.x < 0){
  sea.x = sea.width/2
}


  drawSprites();
 
}