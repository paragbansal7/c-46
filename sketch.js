var bg;
var earth,earthImg;
var helicopter,heliImg,heliAnim;
var enemy,enemyAnim;
var laser,laserImg;
var form,game,player;
var gameState = 0;
var playerCount;

function preload(){
  bg = loadImage("img/bg.png");
  earthImg = loadImage("img/earth.jpg");
  heliImg = loadImage("img/h1.png")
  heliAnim = loadAnimation("img/h1.png","img/h2.png","img/h3.png","img/h4.png");
  enemyAnim = loadAnimation("img/eh1.png","img/eh2.png","img/eh3.png");
  laserImg = loadImage("img/laser.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);

  game = new Game();
  game.start();

}

function draw() {
  background(bg);  

  if(gameState === 1){
    game.play();
  }
  
  drawSprites();
}
