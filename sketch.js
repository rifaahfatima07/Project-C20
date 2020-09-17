var car, wall;
var speed, weight;



function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car .shapeColor="red";
  wall=createSprite(800,200,60,height/2);
  wall.shapeColor="red";
  
  
}

function draw() {
  background(0);  

  car.velocityX=speed;

  if (wall.x-car.x<=car.width+wall.width/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;

    if (deformation>180){
      car.shapeColor="blue";
    }

    if (deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }

    if (deformation<100 && deformation>0){
      car.shapeColor="green";
    }

    
  }


  drawSprites();
}