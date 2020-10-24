var banana, bananaImage;
var monkey, monkeyImage;
var ostacle1, obstacle2;
var ground, invisibleGround, groundImage;
var stone, stoneImage;
var backgroundImage;
var score;

function preload(){
  bananaImage = loadImage("banana.png");
  monkeyImage = loadAnimation("monkey_01.png","monkey_02.png","monkey_03.png","monkey_04.png","monkey_05.png","monkey_06.png","monkey_07.png","monkey_08.png","monkey_09.png","monkey_10.png");
  stoneImage = loadImage("stone.png");
  backgroundImage = loadImage("jungle.png");
}

function setup() {
  createCanvas(400, 400);

  monkey = createSprite(50,180,20,80);
  monkey.addAnimation("running", monkeyImage);
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(220);
}