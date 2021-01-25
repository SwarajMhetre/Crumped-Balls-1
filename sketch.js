
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(1397, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(700,595,1500,30);


rod3= new Rod(1150,570,320,20)
rod1=new Rod(1300,420,20,320);
rod2=new Rod(1000,420,20,320);

paper=new Paper(200,593,40)


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();

 rod3.display();
 rod1.display();
 rod2.display();

 paper.display();

  drawSprites();

  fill("lime");
  textSize(20);
  //stroke("cyan")
  text("Press UP ARROW KEY to Clean your area",20,30)
}
function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:100})
	}
}