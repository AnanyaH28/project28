
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var mango1;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)

    platform = new Ground(150,305,300,175);

	tree = new Tree(1000,200)
	
	//Create the Bodies Here.
	mango1 = new Mango(900, 180, 40, 50);
	mango2 = new Mango(950, 162, 40, 50);
	mango3 = new Mango(870, 150, 40, 50);
	mango4 = new Mango(900, 100, 40, 50);
	mango5 = new Mango(930, 30, 40, 50);
	mango6 = new Mango(1020, 180, 40, 50);
	mango7 = new Mango(1000, 120, 40, 50);
	mango8 = new Mango(980, 60, 40, 50);
	mango9 = new Mango(1070, 80, 40, 50);
	mango10 = new Mango(1099, 100, 40, 50);
	mango11 = new Mango(1080, 20, 40, 50);
	mango12 = new Mango(1080, 190, 40, 50);
	mango13 = new Mango(1150, 140, 40, 50);
	mango14 = new Mango(1150, 190, 40, 50);
	stone = new Stone(200,50)

	boy = new Boy(stone.body,{x:200, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();

  stone.display();

  boy.display();   
 
  drawSprites();
 
}



