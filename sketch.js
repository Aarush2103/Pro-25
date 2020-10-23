
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bin1;
var ground;
var paper;


function setup() {
	createCanvas(1600, 700);
     
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin1 = new Bin(1200,650);
	ground = new Ground(width/2,670,width,20);

	paper = new Paper(200,450,40);
	//Matter.paper.circle(200,10,20);

	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  bin1.display();
  ground.display();
  paper.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}


