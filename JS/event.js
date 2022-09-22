//MUESTRA DE OPERADORES TERNARIOS

var dayNumber= 7; //VARIABLE PARA COMPARAR

var week= ["L", "Ma", "Mi", "J", "V", "S", "D" ]; //ARREGLO SENCILLO

console.log(week.length);

console.log("...");

var dia= (dayNumber <= week.length) ? week[dayNumber-1] : "WRONG"; 
/*SE EVALUA EL NUMERO CON EL TAMAÑO DEL ARRAY, SI LUEGO DE RESTAR 1 EL NUMERO ES MAYOR QUE 
CANTIDAD DE DIAS TIENE LA SEMANA, ERROR, SOLO HAY DOS POSIBILIDADES*/


console.log(dia); //PRINT DEL RESULTADO

function esPar(valor) {
    return valor % 2 == 0;
}

//funcion para numero par

let numbers = [7, 6, 44, 101, 55, 60, 82, 1, 57, 6];
numbers.sort((a, b) => {
  if(a == b) {
    return 0; 
  }
  if(a < b) {
    return -1;
  }
  return 1;
});

console.log(numbers);

//ELEMENTOS NUMERICOS ORDENADOS ASCENDENTE 