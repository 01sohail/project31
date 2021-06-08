var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //created division objects
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  //created 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //created 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //created 3rd row of plinko objects
  for (var j = 30; j <width; j=j+50)
  {
    plinkos.push(new Plinko(j,275));
  }
 
  //created 4th row of plinko objects
  for (var j = 15; j <width -10; j=j+50)
  {
    plinkos.push(new Plinko(j,375));
  }

 
    
}


 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //displayed the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  if(frameCount%60===0){
   particles.push(new   Particle(random(width/2-30,  width/2+30),  10,10));
   score++;

  }
   
   //displayed the paricles 
   for(var j = 0;j <  particles.length; j++) {

    particles[j].display();
  }

  //displayed the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
}

 