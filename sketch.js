var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	  

	
	lBody = Bodies.rectangle(320 , 610 , 20 ,100 ,{ isStatic:true});
	World.add(world, lBody);
	
	
	rBody = Bodies.rectangle(480 , 610 , 20 ,100, { isStatic:true});
	World.add(world, rBody);
	
	
	bBody = Bodies.rectangle(400 , 650 , 180 ,20 ,  { isStatic:true});
	World.add(world, bBody);
   
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 ball = Bodies.circle(50, 630, 40 ,  {restitution : 0.6,density:0.8,friction:0.3} );
 	World.add(world, ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(lBody.position.x,lBody.position.y,20,100)
  rect(rBody.position.x,rBody.position.y,20,100)
  rect(bBody.position.x,bBody.position.y,180,20)
  circle(ball.position.x,ball.position.y,80)
  rect(ground.position.x,ground.position.y,800,20)
  //drawSprites();
  text(mouseX+","+mouseY,mouseX,mouseY)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  Matter.Body.setStatic(packageBody,false)
    
  }
}
function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-100})



}




}









