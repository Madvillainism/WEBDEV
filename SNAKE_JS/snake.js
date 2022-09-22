import { getInputDirection } from "./input.js";

export const snake_speed = 3;
const snakeBody = [ {x : 11, y : 11}]
let newSegments = 0

export function update(){
    addSegments()
    const inputDir = getInputDirection() //para guardar hacia donde se mueve
    for (let i = snakeBody.length - 2; i >= 0; i--){
        snakeBody[i + 1] = {...snakeBody[i]} //CREAR UN CLON DEL OBJETO PARA REFERENCIAR
    }

    snakeBody[0].x += inputDir.x
    snakeBody[0].y += inputDir.y

}

export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement("div")
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)

    })
}

export function expandSnake(amount) { //para hacer crecer la serpiente
    newSegments += amount
}

export function onSnake(position){
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

export function getSnakeHead(){
    return snakeBody[0]
}

/*export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead:true })
}*/

function equalPositions(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y 
}

function addSegments(){
    for (let i = 0; i < newSegments; i++){
        snakeBody.push({...snakeBody[snakeBody.length - 1]})
    }

    newSegments = 0
}