/*JUEGO DE LA CULEBRITA. 
AÑADIR: SISTEMA DE PUNTAJE (VARIABLE QUE SE ACTUALIZA CADA VEZ QUE SE CUMPLE
    LA FUNCION DE COMER)
    SONIDO
    BOTON DE PAUSA*/

//FUNCTION IMPORTS
import {update as updateSnake, draw as drawSnake, snake_speed, getSnakeHead} from './snake.js'
import {update as updateFood, draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'

//CONSTANTS AND GAME OVER BOOLEAN 
let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById("game-board")

//MAIN LOOP

function main(currentTime){
    if(gameOver){
        if(confirm("You lose... Press ok to restart the game")){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secSinceLastRender = (currentTime - lastRenderTime) / 1000

    if (secSinceLastRender < 1 / snake_speed) return


    console.log("Render")
    lastRenderTime = currentTime

    //LOGICA DEL JUEGO
    update()
    //GRAFICO DESPUES DEL UPDATE
    draw()
}
//GRIDS COUNT FROM 1 ONWARDS, 0 IS OUTSIDE OF THE GRID

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML= '' //LIMPIAR AL DIBUJAR 
    drawSnake(gameBoard);
    drawFood(gameBoard);

}

window.requestAnimationFrame(main)

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) 
}