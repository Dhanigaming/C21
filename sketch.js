var bot;
var canvas;
var music;
var color1, color2, color3, color4;
var topEgde, rightEgde, leftEgde;

function preload(){
    
}


function setup(){
    canvas = createCanvas(800,600);
    color1 = createSprite(100,580,190,20);
    color1.shapeColor = "blue";

    color2 = createSprite(300,580,190,20);
    color2.shapeColor = "orange";

    color3 = createSprite(500,580,190,20);
    color3.shapeColor = "pink";

    color4 = createSprite(700,580,190,20);
    color4.shapeColor = "green";

    bot = createSprite(400,300,50,50);
    bot.shapeColor = "white";
    bot.velocityY = 3;
    bot.velocityX = 1;

    topEgde = createSprite(400,1,800,1);
    topEgde.visible = false;

    rightEgde = createSprite(799,300,1,600);
    rightEgde.visible = false;

    leftEgde = createSprite(1,300,1,600);
    leftEgde.visible = false;

 
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   
    
    bot.bounceOff(topEgde);
    bot.bounceOff(rightEgde);
    bot.bounceOff(leftEgde);
   
    bounce();
    bounce1();
    bounce2();
    bounce3();
   


    drawSprites();
    //add condition to check if box touching surface and make it box
}
function bounce(){
    
    if (bot.isTouching(color1) && bot.bounceOff(color1)) {
         bot.shapeColor = "blue";
        }
         else{
             bot.shapeColor = "white";

            
         }

}
function bounce1(){
    
    if (bot.isTouching(color2) && bot.bounceOff(color2)) {
         bot.shapeColor = "orange";
        }
         else{
             bot.shapeColor = "white";

            
         }

}
function bounce2(){
    
    if (bot.isTouching(color3) && bot.bounceOff(color3)) {
         bot.shapeColor = "pink";
        }
         else{
             bot.shapeColor = "white";

            
         }

}
function bounce3(){
    
    if (bot.isTouching(color4) && bot.bounceOff(color4)) {
         bot.shapeColor = "green";
        }
         else{
             bot.shapeColor = "white";

            
         }

}


