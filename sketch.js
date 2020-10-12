function setup() {
  createCanvas(800,400);
  fixrect=createSprite(200, 200, 50, 80);
  fixrect.shapeColor="green";
  movingrect=createSprite(400, 200, 80, 50);
  movingrect.shapeColor="pink";
}

function draw() {
  background(255,255,255);  
movingrect.y=World.mouseY;
movingrect.x=World.mouseX;
console.log(movingrect.x);

if(movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2 
  && fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2

  &&movingrect.y-fixrect.y<movingrect.width/2+fixrect.width/2 
  && fixrect.y-movingrect.y<movingrect.width/2+fixrect.width/2){
    
  background("pink");
  fixrect.shapeColor="yellow";
  movingrect.shapeColor="purple";
}
else{
  background("red");
  fixrect.shapeColor="green"; 
  movingrect.shapeColor="pink";
}

  drawSprites();
}