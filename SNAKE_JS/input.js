let inputDirection = { x : 0, y : 0}
let lastInputDirection = {x : 0, y : 0}
    //evento para cada tecla mediante event listener y un switch 
    window.addEventListener("keydown", e =>{
        switch(e.key){
            case 'ArrowUp' :
                if (lastInputDirection.y !== 0) break
                inputDirection = {x : 0, y : -1}
                break
            case "ArrowDown" :
                if (lastInputDirection.y !== 0) break
                inputDirection = {x : 0, y : 1} 
                 break
            case "ArrowLeft" :
                if (lastInputDirection.x !== 0) break
                inputDirection = {x : -1, y : 0} //Nota: dejar Y en 0 para movimiento horizontal
                break
            case "ArrowRight" :
                if (lastInputDirection.x !== 0) break
                inputDirection = {x : 1, y : 0}
                break

        }
    })

export function getInputDirection(){
    lastInputDirection = inputDirection
    return inputDirection //para retornar el valor del input
}