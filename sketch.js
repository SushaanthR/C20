var fr , mr;

function setup() {
  createCanvas(1200,800);
fr=createSprite(600,400,50,80);
fr.shapeColor="orange";

mr=createSprite(400,200,80,30);
mr.shapeColor="orange";
}

function draw() {
  background(0);
  mr.x=mouseX;
  mr.y=mouseY;
  
  if(mr.x-fr.x<fr.width/2+mr.width/2 &&
    fr.x-mr.x<fr.width/2+mr.width/2 &&
    mr.y-fr.y<fr.height/2+mr.height/2 &&
    fr.y-mr.y<fr.height/2+mr.height/2){
    mr.shapeColor="pink";
    fr.shapeColor="pink";
  }
  else{
    mr.shapeColor="orange";
    fr.shapeColor="orange";
  }
  drawSprites();
}