var player;
var monster;
var speedPowerUp;
var invisibilityPowerUp;
var thermalVisionPowerUp;
var wall1;
var wall2;
var wall3;
var wall4;
var lava1;

function setup(){
  createCanvas(800, 800);
  wall1 = createSprite(10, 400, 20, 800);
  // wall1.shapeColor("black");
  wall2 = createSprite(400, 790, 800, 20);
  wall3 = createSprite(600, 425, 800, 20);
  wall4 = createSprite(500, 10, 20, 500);
  lava1 = createSprite(500, 600, 250, 250);
}

function draw(){
  background(50, 50, 50);
  wall1.display();
  wall2.display();
  drawSprites();
}