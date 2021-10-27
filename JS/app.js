// variable to use canvas and get ctx
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// var holding length of snake
let snakeLength = 3
let tailSize = snakeLength
let snakeTrail = []

// initial snake variables to add on and have persistent movement
let tileCount = 20
let tileSize = canvas.width / tileCount - 2
let headX = 10
let headY = 10

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

function gameLoop() {
    clearScreen()
    snakePosition()
    spawnSnake()
    setTimeout(gameLoop, 60)
    
} 

function clearScreen() {
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canvas.width,canvas.height)
}



// constructor for snakes food
function snakeFood(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.appleNotAte = true

    this.placeFood = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    // method to remove food
    this.removeFood = function () {
        void ctx.clearRect(this.x, this.y, this.width, this.height)
    }
}


// constructor for snake
function spawnSnake(){
    ctx.fillStyle = "blue"
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}

function snakePosition() {
    headX = headX + xVel
    headY = headY + yVel
}



// instantiate food
let food = new snakeFood(x, y, '#DC143C', 20, 20)
// place initial food
food.placeFood()


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





const detectAppleAte = () => {
    if(
        playerSnake.x < food.x + food.width &&
        playerSnake.x + playerSnake.width > food.x &&
        playerSnake.y < food.y + food.height &&
        playerSnake.y + playerSnake.height > food.y
    ) {
        
        food.removeFood()
        let newX = Math.floor(Math.random() * 700)
        let newY = Math.floor(Math.random() * 300)
        food = new snakeFood(newX, newY, '#DC143C', 20, 20)
        food.placeFood()
    }
}

// setInterval to keep the game going
gameLoop()


