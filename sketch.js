var car,wall;
var speed,weight;

function setup() {
  createCanvas(1000,300);
  car = createSprite (50,150,40,40);
  wall=createSprite(900,150,40,130); 
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;
}
function draw() {
  background("black");  

wall.shapeColor=color("80,80,80");
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation = 0.5 *weight *speed *speed/22500;
    if(deformation>100){
      car.shapeColor=color(255,0,0);
    }
    if(deformation < 100 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation < 100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();

}