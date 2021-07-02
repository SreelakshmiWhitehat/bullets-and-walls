var bullet,wall,thickness
var speed, weight
function setup() {
  createCanvas(1600,400);

  thickness=random(22,83)

 bullet= createSprite(50, 200, 50, 50);
 wall= createSprite(1500,200,50,height/2)
 wall.shapeColor= color(80,80,thickness,80)
speed= random(223,320);
wall= random(30,52);

 bullet.velocityX=speed;
}

function draw() {
  background("black");  
  if(bullet.x-wall.x<(bullet.width+ wall.width)/2);
  bullet.velocityX=0
  var deformation = 0.5 *weight *speed *speed/22500

  if(deformation>180){
    bullet.shapeColor=color("white")
  }

  if(deformation<180 && deformation>100){
    bullet.shapeColor=color("white")}

    if( deformation<100){
      bullet.shapeColor=color("white")} 

      if(hasCollided(bullet,wall))
      {
        bullet.velocityX=0
        var damage=0.5 *weight *speed *speed/(thickness *thickness *thickness);
        if(damage>10){
          wall.shapeColor=colour(255,0,0)
        }
        if(damage<10){
          wall.shapeColor=color(0,255,0)
        }
      }
  drawSprites();

  
}

function hasCollided(Lbullet,Lwall){
bulletRightEdge=Lbullet.x +Lbullet.width
wallLeftEdge=Lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}