const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var caja1
var tronco1


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,2000,20);
  caja1=new clasecaja(700,320,70,70)
  caja2=new clasecaja(900,320,70,70)
  tronco1=new troncos(810,260,PI/2)
  caja3=new clasecaja(700,100,70,70)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();

caja1.show();
caja2.show();
tronco1.show();
caja3.show();


  Engine.update(engine);
}



