import { onSnake, expandSnake } from "./snake.js"
import {randomGridPos} from "./grid.js"
 
let food = getRandomFoodPos()
const expansion_rate = 1

export function update(){

    if (onSnake(food)){
            expandSnake(expansion_rate)
            food = getRandomFoodPos()
    }

}

export function draw(gameBoard){
        const foodElement = document.createElement("div")
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPos(){
        let newFoodPos
        while(newFoodPos == null || onSnake(newFoodPos)){
                newFoodPos = randomGridPos()
        }
        return newFoodPos
}