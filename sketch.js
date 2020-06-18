var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);
  car=rect(50,200, 40, 40);
  wall=rect(1500,200,60,height/2);
 

}

function draw() {
  background(255,255,255); 
  createEdgeSprites;
  wall.shapeColor=color(80,80,80);
  car.shapeColor("red");

  car.velocityX=speed;
  if (wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
if (deformation>180){
  car.shapeColor=color(255,0,0);
}
if (deformation>180 && deformation>100){
  car.shapeColor=color(230,230,0);
} 
if (deformation<100){
  car.shapeColor=color(0,255,0);
}


  }
  drawSprites();
}