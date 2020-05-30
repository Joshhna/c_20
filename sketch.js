var fixed,moving;

function setup() {
  createCanvas(1200,800);
 fixed = createSprite(600, 400, 50, 80);
 fixed.shapeColor="green";

 moving = createSprite(400,200,80,30);
 moving.shapeColor="green";
}

function draw() {
  background(0,0,0);
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  
  if(moving.x-fixed.x <fixed.width/2 + moving.width/2 && fixed.x-moving.x < fixed.width/2 + moving.width/2
    && moving.y - fixed.y <fixed.width/2 + moving.width/2 && fixed.y-moving.y < fixed.width/2 + moving.width/2)
  {
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }else{
    fixed.shapeColor="green";
    moving.shapeColor="green";
  }
  drawSprites();
}