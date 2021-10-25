// variable to use canvas and get ctx
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// set the width and height of the canvas to use for boundaries and other stuff
canvas.setAttribute('width', getComputedStyle(canvas)['width'])
canvas.setAttribute('height', getComputedStyle(canvas)['height'])

// start game button var
const startButton = document.getElementById('startButton')

// reset button var
const resetButton = document.getElementById('resetButton')

// variables for center of canvas
let centerX = canvas.width / 2
let centerY = canvas.height / 2

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

}

let playerSnake = new snake(centerX, centerY, '#008000', 30, 30)



// switch case to detect movement

let snakeMovement = (e) => {
    switch (e.key) {
        case 'w':
        playerSnake.y -= 30    
            break;
    
        case 'a':
            playerSnake.x -=30
            break;
        
        case 's':
            playerSnake.y += 30
            break;
        
        case 'd':
            playerSnake.x += 30
            break;

    }
}


const gameLoop = () => {
    if(playerSnake.alive) {
        playerSnake.spawn()
    }
}


// constructor for snakes food

// render snakes food on canvas

// once snake eats food, food renders in new spot on canvas

// function that adds length to the snake for every food ate

// set canvas boundaries so snake can't go off map

// function/rule so that snake can't go backwards(eat itself)

// eventL for snake movement
document.addEventListener('keydown', snakeMovement)

let gameInterval = setInterval(gameLoop, 50)


