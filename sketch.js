var car, wall, speed, weight;

function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(100, 200, 50, 50);
  car.shapeColor = "car";
  car.velocityX = speed;
  wall = createSprite(700, 200, 60, 200);
  wall.shapeColor = "brown";
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500
    if(deformation>180){
      car.shapeColor = "red";
    }else if(deformation<180 && deformation>100){
      car.shapeColor = "yellow";
    }else{
      car.shapeColor = "green";
    }
  }
  drawSprites();
}