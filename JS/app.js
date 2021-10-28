// variable to use canvas and get ctx
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// start button 
const startButton = document.getElementById('startButton')

// reset button
const resetButton = document.getElementById('resetButton')

// grab length box html to maniupate as counter increases
let lengthValueDom = document.getElementById('length-of-snake')

// score counter
let lengthCounter = 2;

// apple ate audio
audioObj = new Audio("audioStuff/munch.mp3")

// snake constructor 
class snakePiece{
    constructor(x,y){
        this.x = x
        this.y = y
    }
}
// var holding length of snake
const snakePieces = []
let snakeLength = 2

// set tile size
let tileCount = 20
let tileSize = canvas.width / tileCount - 2

// initial snake variables
let headX = 10
let headY = 10

// apple cords
let appleX = 5
let appleY = 5

// snekSpeed 
let yVel = 0
let xVel = 0

// set the width and height of the canvas to use for boundaries and other stuff
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
canvas.setAttribute('height', getComputedStyle(canvas)['height'])

// state of game, always start as false until hit a wall/or self cannibalized
isGameOver = false



// startButton EL
// startButton.addEventListener('click', startButtonPressed)

// function startButtonPressed() {
//     isGameOver = false
// }

// resetButton EL
//resetButton.addEventListener('click', )



// reset game button

// main loop that keeps the game going and calls the functions created below with a settimeout
function gameLoop() {
    checkForGameOver()
    clearScreen()
    snakePosition()
    checkForSnakeAteItself()
    detectAppleAte()
    spawnApple()
    spawnSnake()
    lengthValueDom.innerText = `Length: ${lengthCounter}`

    if(isGameOver == false) {
        timeOut = setTimeout(gameLoop, 200)
    } else {
        console.log('Game over!');
    }
    
    
} 





// updates the screen every time gameloop is called so snake moves correctly
function clearScreen() {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canvas.width,canvas.height)
}

// constructor for snake and also adds on to the snake length upon apple being ate
function spawnSnake(){
    
    ctx.fillStyle = "green"
    for (let i = 0; i < snakePieces.length; i++) {
        let part = snakePieces[i]
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize)
        
    }

    snakePieces.push(new snakePiece(headX, headY))
    while(snakePieces.length > snakeLength){
        snakePieces.shift()
    }

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
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize/2, tileSize/2)
}

// checks to see if the snakehead has collided with an apple and moves apple to new position upon true
function detectAppleAte() {
    if(appleX == headX && appleY == headY){
        appleX = Math.floor(Math.random() * tileCount)
        appleY = Math.floor(Math.random() * tileCount) 
        snakeLength++
        lengthCounter++
        audioObj.play()
    }
}

function checkForSnakeAteItself() {
    if(headX * tileCount + tileSize == snakePieces.x * tileCount + tileSize || headY * tileCount + tileSize == snakePieces.y * tileCount + tileSize) {
            console.log("Snake ate itself, ded");
        }
}

function checkForGameOver() {
    if(headX * tileCount + tileSize > canvas.width + 10|| headY * tileCount + tileSize > canvas.height + 10||
        headY < 0 || headX < 0){
        console.log("Hit a wall!")
        isGameOver = true
        console.log(isGameOver);
    } 
    
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



gameLoop()
console.log("Game active!");


// switch around the boolean values 
// 


