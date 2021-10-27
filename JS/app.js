// variable to use canvas and get ctx
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// var holding length of snake
let snakeLength = 3
let tailSize = snakeLength
let snakeTrail = []

// set tile size
let tileCount = 20
let tileSize = canvas.width / tileCount - 2

// initial snake variables
let headX = 10
let headY = 10

// apple cords
let appleX = 10
let appleY = 10

// snakeSpeed 
let yVel = 0
let xVel = 0

// set the width and height of the canvas to use for boundaries and other stuff
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
canvas.setAttribute('height', getComputedStyle(canvas)['height'])

// state of game
let isGameActive = true

// start game button var
const startButton = document.getElementById('startButton')

// reset button var
const resetButton = document.getElementById('resetButton')


// rng x and y coords
let x = Math.floor(Math.random() * 700)
let y = Math.floor(Math.random() * 300)


// startButton EL
//startButton.addEventßListener('click', )

// resetButton EL
//resetButton.addEventListener('click', )

// variable for announcer 
let announcer = document.getElementById('announcer')




// upon game ending announcer box showing players stats 

// reset game button

// main loop that keeps the game going and calls the functions created below with a settimeout
function gameLoop() {
    clearScreen()
    snakePosition()
    spawnSnake()
    detectAppleAte()
    spawnApple()
    setTimeout(gameLoop, 60)
    
} 

// updates the screen every time gameloop is called so snake moves correctly
function clearScreen() {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canvas.width,canvas.height)
}



// constructor for snake
function spawnSnake(){
    ctx.fillStyle = "blue"
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}

// updates the snake position depending on last key pressed
function snakePosition() {
    headX = headX + xVel
    headY = headY + yVel
}

// creates red apple
function spawnApple() {
    ctx.fillStyle = "red"
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize/1.5, tileSize/1.5)
}




// eventL for snake movement
document.addEventListener('keydown', snakeMovement)


// switch case to detect movement
function snakeMovement(e) {
    switch (e.key) {
        case 'w':
            if(yVel == 1)
                return;
            yVel = -1
            xVel = 0
            break;
    
        case 'a':
            if(xVel == 1)
                return;
            yVel = 0
            xVel = -1
            break;
        
        case 's':
            if(yVel == -1)
                return;
            yVel = 1
            xVel = 0
            break;
        
        case 'd':
            if(xVel == -1)
                return;
            yVel = 0
            xVel = 1
            break;

        default:
            console.log("Wrong key bub");
    }
}




// checks to see if the snakehead has collided with an apple and moves apple to new position upon true
function detectAppleAte() {
    if(appleX == headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount)
        
    }
}

// setInterval to keep the game going
gameLoop()


