var starImg,bgImg,sound;
var star, starBody;
var fairy, fairyimg,fairyimg2;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
//carregar animação de fada 
    
    fairyimg = loadAnimation("images/fairyImage1.png")
    fairyimg2 = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")

    

}

function setup() {
    createCanvas(800, 750);
    

    //escrever código para tocar o som vozFada


    //criar sprite de fada e adicionar animação para fada

    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
   

    engine = Engine.create();
	world = engine.world;   

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

    fairy = createSprite(50,375,20,20)
    fairy.addAnimation("fada parada",fairyimg);
    fairy.scale = 0.2;
    

   
  
	Engine.run(engine);

}


function draw(){
 
    background(bgImg);

    if(keyDown("d")&&fairy.x<560){
        
        fairy.x = fairy.x + 10
        fairy.addAnimation("fada voando",fairyimg2)
        
       }
       
    if(keyDown("a")&&fairy.x>100){
        
        fairy.x = fairy.x - 10
        fairy.addAnimation("fada voando",fairyimg2)
        
       }
       
    if(keyDown("s")&&fairy.x>550&&star.y<350){
        
        star.y = star.y + 10
        
       }

       fairy.display();

       star.display();


       drawSprites();

       
}