
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var polygon;
var slingShot;
var ground,ground1,ground2;
var block1,block2,block3,block4,block5,block6,block7,block8;


function setup(){
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand1=new Ground(390,300,250,10);
	stand2=new Ground(700,200,200,10);

	block1=new Block(300,275,30,40);
	block2=new Block(330,275,30,40);
	block3=new Block(360,275,30,40);
	block4=new Block(390,275,30,40);
	block5=new Block(420,275,30,40);
	block6=new Block(450,275,30,40);
	block7=new Block(480,275,30,40);
	block8=new Block(330,235,30,40);
	block9=new Block(360,235,30,40);
	block10=new Block(390,235,30,40);
	block11=new Block(420,235,30,40);
	block12=new Block(450,235,30,40);
	block13=new Block(360,195,30,40);
	block14=new Block(390,195,30,40);
	block15=new Block(420,195,30,40);
	block16=new Block(390,155,30,40);

	block17=new Block(640,175,30,40);
	block18=new Block(670,175,30,40);
	block19=new Block(700,175,30,40);
	block20=new Block(730,175,30,40);
	block21=new Block(760,175,30,40);
	block22=new Block(670,135,30,40);
	block23=new Block(700,135,30,40);
	block24=new Block(730,135,30,40);
    block25=new Block(700,95,30,40);


	polygon=new Polygon(70,100,60);
	slingShot=new SlingShot(polygon.body,{x:70,y:100});
	ground=new Ground(600,695,1200,5)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

	drawSprites();
	polygon.display();
	slingShot.display();
	ground.display();
	stand1.display();
	stand2.display();
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
	block23.display();
	block24.display();
	block25.display();
}
function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingShot.fly();
}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(polygon.body, {x:70, y:400})
		slingShot.attach(polygon.body);

	}
}


