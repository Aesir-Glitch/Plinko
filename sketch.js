const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  for (var j = 40; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,75,20,20));
    console.log(j);
  }
  
  for (var j = 20; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,125,20,20));
    console.log(j);
  }

  for (var j = 40; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,175,20,20));
    console.log(j);
  }
  
  for (var j = 20; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,225,20,20));
    console.log(j);
  }

  for (var j = 40; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,275,20,20));
    console.log(j);
  }
  
  for (var j = 20; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,325,20,20));
    console.log(j);
  }

  for (var j = 40; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,375,20,20));
    console.log(j);
  }
  
  for (var j = 20; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,425,20,20));
    console.log(j);
  }

  for (var j = 40; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,475,20,20));
    console.log(j);
  }
  
  for (var j = 20; j <= width;  j = j + 50)
  {     
    plinkos.push(new Plinko(j,525,20,20));
    console.log(j);
  }

  division1 = new Division(0,height,10,400);
  division2 = new Division(80,height,10,400);
  division3 = new Division(160,height,10,400);
  division4 = new Division(240,height,10,400);
  division5 = new Division(320,height,10,400);
  division6 = new Division(400,height,10,400);
  division7 = new Division(480,height,10,400);

}

function draw() {
  background(0);

  Engine.update(engine);

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display()
    console.log(plinkos.length);
  }

  
  if(frameCount%40 === 0) {
    particles.push(new Particle(random(width/2 - 50,width/2 + 50),10,10))
  }

  for (var i = 0; i < particles.length; i++) {
    particles[i].display()
  }

  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

}