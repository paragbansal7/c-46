class Game{
    constructor(){

    }

    start(){
        if(gameState === 0){
            //player = new Player();
            form = new Form();
            form.display();

            earth = createSprite(width-150, width/2-100, 10, 10);
            earth.addImage(earthImg);
            earth.scale = 0.5;
        }
    }

    play(){

        helicopter = createSprite(width-400, 200, 100, 100);
        helicopter.addAnimation("op",heliAnim);
        helicopter.scale = 0.5;        

        if(frameCount%100===0){
            var qw = Math.round(random(100,height));
            enemy = createSprite(-100,qw);
            enemy.velocityX = 2;
            enemy.addAnimation("abc",enemyAnim);
            enemy.scale = 0.5;
        }

        if(keyDown(UP_ARROW)){
            helicopter.velocityY = -10;
            helicopter.velocityX = 0;
        }

        if(keyDown(DOWN_ARROW)){
            helicopter.velocityY = 10;
            helicopter.velocityX = 0;
        }

        if(keyDown(RIGHT_ARROW)){
            helicopter.velocityY = 0;
            helicopter.velocityX = 10;
        }

        if(keyDown(LEFT_ARROW)){
            helicopter.velocityY = 0;
            helicopter.velocityX = -10;
        }

        if(keyCode === 32){
            laser = createSprite(helicopter.x-30,helicopter.y)
            laser.addImage(laserImg);
            laser.scale = 0.1;
            //laser.velocityX = -20;
        }
       
    }

}