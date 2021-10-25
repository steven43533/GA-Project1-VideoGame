// variable to use canvas and get ctx
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// set the width and height of the canvas to use for boundaries and other stuff
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
canvas.setAttribute('height', getComputedStyle(canvas)['height'])

// state of game
let isGameActive = true

// start game button var
const startButton = document.getElementById('startButton')

// reset button var
const resetButton = document.getElementById('resetButton')

// variables for center of canvas
let centerX = canvas.width / 2
let centerY = canvas.height / 2

// rng x and y coords
let x = Math.floor(Math.random() * 700)
let y = Math.floor(Math.random() * 300)

console.log(centerX);
console.log(centerY);
// startButton EL
//startButton.addEventListener('click', )

// resetButton EL
//resetButton.addEventListener('click', )

// variable for announcer 
let announcer = document.getElementById('announcer')

// variable for length count of snake to change accordingly 


// upon game ending announcer box showing players stats 

// reset game button

// place initial food

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
}

// constructor for snake
function snake(x, y, color, width, height) {
    this.x = x
    this.y = y
    this.color = color
    this.width = width
    this.height = height
    this.alive = true

    this.spawn = function () {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    // method to remove food
    this.removeFood = function () {
        // 
    }

}

let playerSnake = new snake(centerX, centerY, '#008000', 30, 30)
let food = new snakeFood(x, y, '#DC143C', 20, 20)
food.placeFood()
// function to make food appear in random spots

let rngPlaceFood = () => {
    food.placeFood
}


// switch case to detect movement

let snakeMovement = (e) => {
    switch (e.key) {
        case 'w':
        playerSnake.y -= 30
        if(playerSnake.y <= 0) {
            playerSnake.y = 0
        }
            break;
    
        case 'a':
            playerSnake.x -=30 
            if(playerSnake.x <= 0){
                playerSnake.x = 0
            }
            
            break;
        
        case 's':
            playerSnake.y += 30
            if(playerSnake.y + playerSnake.height >= canvas.height){
                playerSnake.y = canvas.height - playerSnake.height
            }
            break;
        
        case 'd':
            playerSnake.x += 30
            if(playerSnake.x + playerSnake.width >= canvas.width){
                playerSnake.x = canvas.width - playerSnake.width
            }
            break;

    }
}

const detectAppleAte = () => {
    if(
        playerSnake.x < food.x + food.width &&
        playerSnake.x + playerSnake.width > food.x &&
        playerSnake.y < food.y + food.height &&
        playerSnake.y + playerSnake.height > food.y
    ) {
        let newX = Math.floor(Math.random() * 700)
        let newY = Math.floor(Math.random() * 300)
        food = new snakeFood(newX, newY, '#DC143C', 20, 20)
        food.placeFood()
    }
}

const gameLoop = () => {
    if(food.appleNotAte) {
        
        detectAppleAte()
    }

    playerSnake.spawn()
}






// render snakes food on canvas

// once snake eats food, food renders in new spot on canvas

// function that adds length to the snake for every food ate

// set canvas boundaries so snake can't go off map

// function/rule so that snake can't go backwards(eat itself)

// eventL for snake movement
document.addEventListener('keydown', snakeMovement)

let gameInterval = setInterval(gameLoop, 50)


