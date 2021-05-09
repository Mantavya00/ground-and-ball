const Engine =  Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball,ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var option = {
  isStatic:true  
  }
  ground = Bodies.rectangle(0,380,1000,20,option);
  World.add(world,ground)
  var options = {
  restitution:1  
  }
  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball);
}

function draw() {
  background("green");  
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1000,20);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}