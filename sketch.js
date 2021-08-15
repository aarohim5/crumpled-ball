const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var paper;
var log1;
var engine,world;

function setup() {
	var canvas = createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1600,
	    height: 700,
	    wireframes: false
	  }
	});

  ground = new Ground(width/2,670,width,20);
  paper = new Paper(200,450);
 // log1 = new Logs(1000,385,200,10);
	//log2 = new Logs(900,339,10,100);
	log3 = new Logs(1200,650);
	Engine.run(engine);
  Render.run(render);
  
}


function draw() {
  background("lightblue");
 Engine.update(engine);
 // keyPressed();
 paper.display();
  ground.display();
 
 // log1.display();
  //log2.display();
  log3.display();

  drawSprites(0);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:125,y:-135});
  }
}
		
	


