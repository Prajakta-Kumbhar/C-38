class Game
{
    constructor()
    {
    
    }
   
    getState()
    {
        var dbref = database.ref("gameState")
        dbref.on("value",function(data) {
          gameState = data.val()
        })
    }

    updateState(state)
    {
        database.ref("/").update({"gameState": state})
    }

    startGame()
    {
      form = new Form()
      player = new Player()
      player.getCount()
      form.display()

      car1 = createSprite(80,height)
      car2 = createSprite(280,height)
      car3 = createSprite(480,height)
      car4 = createSprite(680,height)

      cars = [car1,car2,car3,car4]

    }

    play()
    {
      form.hideform()
      Player.getAllPlayersInfo()
      //textSize(20)
      //text("Game Started",200,250)
      if(allPlayers != undefined)
      {
        var index = 0
        var x = 200
        var y = height

        for(var plr in allPlayers)
        {
          cars[index].x = x
          y = height - allPlayers[plr].distance
          cars[index].y = y
          
          if(index + 1 === player.index)
          {
            if(allPlayers[plr].distance > 200)
            
            camera.position.y = cars[index].y
            camera.position.x = width/2

          
           cars[index].shapeColor = "red"
          }
           else 
            cars[index].shapeColor = "black"

         //text(allPlayers[plr].name + " : "+ allPlayers[plr].distance,200,textY)
         //textY += 20
         
         index = index + 1
         x = x + 200

                  
        }
       
        if(keyIsDown  (UP_ARROW) && player.index != null)
        {
           player.distance += 50
           player.update()
        }
         
        drawSprites()

      }
     

    }
}