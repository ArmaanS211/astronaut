const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;



var bath, brush, drink, eat, gym1, gym2, iss, move, sleep, astronaut, le, re, te, be;
var astronautG;


function setup() {
  createCanvas(800,400);


  bath = loadAnimation("bath1.png", "bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png", "drink2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  gym1 = loadAnimation("gym1.png", "gym2.png");
  gym2 = loadAnimation("gym11.png", "gym12.png");
  iss = loadImage("iss.png");
  move = loadAnimation("move.png", "move1.png");
  sleep = loadAnimation("sleep.png");
  

  astronaut = createSprite(400, 230);
  astronaut.scale = 0.1;
  astronaut.addAnimation("sleeping", sleep);

  astronautG = createGroup();
  astronautG.add(astronaut);

  le = createSprite(0, 200, 10, 400);
  re = createSprite(800, 200, 10, 400);
  te = createSprite(400, 0, 800, 10);
  be = createSprite(400, 400, 800, 10);

}

function draw() {
  background(iss);  
  drawSprites();

  
  astronaut.setCollider("rectangle", 50, 40, 1300, 2400)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 230;
    astronaut.velocityX = 4;
    astronaut.velocityY = 5;     

  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming1", gym1);
    astronaut.addAnimation("gymming2", gym2);

    var randomnum = Math.round(random(1, 2));

    if(randomnum == 1){
      astronaut.changeAnimation("gymming1");
    }
    else if(randomnum == 2){
      astronaut.changeAnimation("gymming2");
    }
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }


  
}