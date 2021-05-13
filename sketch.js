// How to add single sprite
// How to add sound
// How to add single images
//How to give scale to images

//10 May 2021, Nehal ma'am' 500th class

//load according to 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11;
var block12, block13;
var block15, block16, block17, block18, block19, block20, block21;
var ground1;
var player;
var img;
var ground2;
var ground3;
var sling100;
var sun;

var image;

function preload(){
  backgroundImg = loadImage("Sprites/pleasegod.jpeg")
  img = loadImage("Sprites/Ball.png");
  sun = loadImage("Sprites/sun.png");
}


function setup() {
  createCanvas(1200,600);
  
  engine = Engine.create();
  world = engine.world;
  
  // Block
  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);
  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);
  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);
  block13 = new Block(600,140,30,40);
  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  player = new Player(50,200,30,30);

  //Ground
  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);
  ground3=new Ground(564,387,20000,10)
  

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingshot = new SlingShot(player.body,{x:150, y:160});
  
}


function draw() {

  background(backgroundImg);

  Engine.update(engine);

  text(mouseX+','+mouseY,30,45)
  stroke("black")
  strokeWeight(2)
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  


  //ground3.display();
  ground1.display();
  ground2.display();
   

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  slingshot.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(player.body,{x:235, y:420})
		chain.attach(player.body);
	}
}
