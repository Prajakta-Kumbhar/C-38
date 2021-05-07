var database;
var playerCount, gameState;
var form, player, game;
var allPlayers;
var car1,car2,car3,car4;
var cars = []

function setup(){
    createCanvas(windowWidth - 40,windowHeight - 20);

    database = firebase.database();
   game = new Game()
   game.getState()
   game.startGame()
}

function draw(){
    background("white");
   
    if(playerCount === 4)
    {
      game.updateState(1)    
    }
    if (gameState === 1)
    {
        game.play()
    }
     
}

