var fixedRect,movingRect,box;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 80, 80);
  movingRect= createSprite(400, 200, 80, 80);
  box = createSprite(300,200,80,80);
  box.shapeColor = "blue";

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "green";

}
else{
  movingRect.shapeColor = "grey";
  fixedRect.shapeColor = "grey";
}
if(isTouching(movingRect,box)){
  movingRect.shapeColor ="red";
  box.shapeColor = "yellow";
}
else{
  movingRect.shapeColor ="grey";
  box.shapeColor = "blue";
}
  
  drawSprites();
}


