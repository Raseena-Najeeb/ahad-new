var form
var barrier
var coca,lemonJUice
var corona , delta , dengue , disease1 , disease2 , disease3 ,disease4 , malaria
var donate , nDonate 
var earthquake , hurricane , metheorite , snowfall
var edication , play
var mask , sanitizer , vaccine
var party , pray
var player 
var physical , digital
var pizza , salad , vegetables , chocolate
var playerAnimation1,playerAnimation2,playerImg
var obstaclesGroup;
var rewardsGroup;
var healsGroup;

var health=20
var shield=20

var gameState=0
var form
var isMoving=false


function preload(){
    track=loadImage("123.jpg")
    vegetables = loadImage("vegetables.png")
    vaccine = loadImage("vaccine.png")
    snowfall = loadImage("snowFall.png")
    sanitizer = loadImage("sanitizer.png")
    salad = loadImage("salad.png")
    pray = loadImage("pray.png")
    play = loadImage("play.png")
    pizza = loadImage("pizza.png")
    physical = loadImage("physical.png")
   playerAnimation2 = loadAnimation("person1.png ", "person2.png","person1.png ", "person2.png")
   playerAnimation1 = loadAnimation("person1.png ", "person1.png","person1.png ", "person1.png")
    party = loadImage("party.png")
    nDonate = loadImage("nDonate.png")
    metheorite = loadImage("metheorite.png")
    mask = loadImage("mask.png")
    malaria = loadImage("malaria.png")
    hurricane = loadImage("hurricane.png")
    education = loadImage("education.png")
    earthquake = loadImage("earthquake.png")
    donate = loadImage("donate.png")
    disease1 = loadImage("disease1.png")
    disease2 = loadImage("disease2.png")
    disease3 = loadImage("disease3.png")
    disease4 = loadImage("disease4.png")
    dengue = loadImage("dengue.png")
    delta = loadImage("delta.png")
    corona = loadImage("corona.png")
    coca = loadImage("coca cola.png")
    barrier = loadImage("barrier.png")
    obstacle1 = loadImage("obstacle 1.png")
    chocolate = loadImage("choclate.png")

    playerImg=loadImage("person1.png")

}



function setup(){
    createCanvas(windowWidth,windowHeight)

    form=new Form()

    player=createSprite(100,100,100,100)
    player.addAnimation("still",playerAnimation1)
    player.addAnimation("run",playerAnimation2)
 //player.addImage("player",playerImg)
    player.debug=true
    player.setCollider("rectangle",0,0,100,100)
 
    console.log(player.position.y)
   
  obstaclesGroup=new Group()
  rewardsGroup=new Group()
  healsGroup=new Group()
    
}

function draw(){
  background(0)
  form.display()

   if(gameState===1)  
   {
     level1()
   }
   const finshLine = height - 100;

   if (player.position.y > finshLine) {
     gameState = 2;
    
   }


   if(gameState===2){
     level2()
   }
   if(shield===0||health===0){
    gameState===3
    gameOver()
  }
        
   
        
       
  if(keyIsDown(UP_ARROW)){
    isMoving=true
    player.changeAnimation("run",playerAnimation2)
   }
   else
  {
    isMoving=false
    player.changeAnimation("still",playerAnimation1)
  }

if(keyDown(UP_ARROW)){
  player.position.y-=15;
}

  camera.position.y = player.position.y

if(keyDown(RIGHT_ARROW)){
  player.position.x-=-5;
}

  if(keyDown(LEFT_ARROW)){
   player.position.x-=5;
}



   
console.log("health" ,health)
console.log(shield)
console.log(player.position.y)

textSize(50)
stroke("white")
fill("white")
  text("health : "+health,1700,player.y-400)
  text("shield : "+shield,1700,player.y-300)
  


drawSprites()
  
}

function spawnObstacles(){
  if(frameCount%60===0){
     
     // var rand1= Math.round(random(0, -height * 6))
      //var rand2= Math.round(random(0, width))

      rand2=Math.round(random(player.position.x-windowWidth,player.position.x+windowWidth))
     rand1=Math.round(random(player.position.y-300,player.position.y-windowHeight))
      var rand3= Math.round(random(1,4))
      

      var NG= createSprite(rand2,rand1,50,50)

switch(rand3){
case 1 :
 NG.addImage(play)
break 

 case 2:
   NG.addImage(pizza)
   break

   case 3:
     NG.addImage(party)
     break

     case 4:
       NG.addImage(nDonate)
       break

       case 5:
         NG.addImage(coca)
         break

         case 6:
           NG.addImage(chocolate)
           break


        default:break
}
  NG.scale=0.5
  NG.lifetime=400
  obstaclesGroup.add(NG)

  }

  }

    function spawnRewards(){
      if(frameCount%100===0){
         
        rand5=Math.round(random(player.position.x-windowWidth,player.position.x+windowWidth))
        rand4=Math.round(random(player.position.y-60,player.position.y-windowHeight))
          var rand6= Math.round(random(1,5))
          
  
          var GG= createSprite(rand5,rand4,50,50)
          rewardsGroup.add(GG)
  switch(rand6){
    case 1 :
     GG.addImage(pray)
  break 
  
     case 2:
       GG.addImage(physical)
       break
  
       case 3:
         GG.addImage(education)
         break
  
         case 4:
           GG.addImage(donate)
           break
  
           case 5:
             GG.addImage(salad)
             break
  
             
  
            default:break
  }
      GG.scale=0.5
      GG.lifetime=400
  
      }
  
      }
      function spawnHeals(){
        if(frameCount%100===0){
           
          rand7=Math.round(random(player.position.x-windowWidth,player.position.x+windowWidth))
          rand8=Math.round(random(player.position.y-60,player.position.y-windowHeight))
            var rand9= Math.round(random(1,3))
            
    
            var heal= createSprite(rand7,rand8,50,50)
            healsGroup.add(heal)
    switch(rand9){
  
    
    case 1:
      heal.addImage(vaccine)
      break
    
    case 2:
       heal.addImage(sanitizer)
      break
  
    case 3:
       heal.addImage(mask)
       break
  
    
    default:break
    }
    heal.scale=0.5
    heal.lifetime=400
    
    }
    
}
    
function level1(){

      image(track, 0, -height * 5, width, height * 6);

      if(obstaclesGroup.isTouching(player)){
        if(shield>0){
         shield-=20;
         obstaclesGroup.destroyEach()
       }
       else{
         health-=20
         obstaclesGroup.destroyEach()
       }
       
     }
   
       if(rewardsGroup.isTouching(player))
  {
   if(shield===100&&health<200)
     {
         health+=20
         rewardsGroup.destroyEach()
      }
       else if(shield<200){
         shield+=20
         rewardsGroup.destroyEach()
       }
   }

     if(gameState===1&& isMoving===true)
     {
       spawnObstacles()
       spawnRewards()
       spawnHeals()
     }

     
   
    }


   function gameOver() {
      swal({
        title: `Game Over`,
        text: "Oops you lost the race....!!!",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Up_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
    }
  function level2(){

  }


  function end(){
    swal({
      title: `Game Over`,
      text:"wow you Won the race....!!!",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
      imageSize: "100x100",
      confirmButtonText: "Thanks For Playing"
    });
  }