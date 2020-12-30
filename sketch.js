var bullet, wall;
var speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 100, 50);
  wall = createSprite(1200, 200, thickness, height/2)

  speed = Math.round(random(45,60));
  weight = Math.round(random(1522,3000));
  
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness = Math.round(random(22,83));

  wall.shapeColor = color(80,80,80);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
}

function draw() {
  background(0,0,0);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    
    var damage = 0.5 * weight * speed * speed/ (thickness * thickness * thickness);

    if(damage > 10){
      wall.shapeColor = color(255,0,0);
    }
    
    
      if (damage < 10)
      wall.shapeColor = color(0,255,0);
    }

    drawSprites();
  }


function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lwall.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  else{
    return false;
  }
}