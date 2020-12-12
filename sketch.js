var movingRect,fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 20, 50);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(600,200,20,50);
  fixedRect.shapeColor="blue";
}

function draw() {
  background(0,0,0);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2  &&
     movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2 &&
     fixedRect.y-movingRect.y < fixedRect.height/2+ movingRect.height/2 ){
      movingRect.shapeColor="purple";
      fixedRect.shapeColor="purple";
    }
      else{
        movingRect.shapeColor="blue";
      fixedRect.shapeColor="blue";
      }

  drawSprites();
}