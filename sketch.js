var Engine = Matter.Engine; 
var Bodies = Matter.Bodies;
var World = Matter.World;

var engine,object,world; 
 
function setup() {
  createCanvas(400,400);

engine=Engine.create();

world=engine.world;

object = Bodies.rectangle(200,100,50,50);

Matter.World.add(world,object);

console.log(object);

}

function draw() {
  background(0);  
  Engine.update(engine);
rectMode(CENTER);
rect (object.position.x,object.position.y,50,50);

  

}