var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));

  car = createSprite(50,200,20,20);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;
  car.shapeColor = ("white");

}

function draw() {
  background("black");  

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapecolor=(255,0,0);
    }
    if(deformation>100&&deformation<180){
    car.shapeColor = (230,230,0);
    }
    if(deformation<100){
      car.shapeColor=("green");
    }
  }
  car.collide(wall);

  drawSprites();
}