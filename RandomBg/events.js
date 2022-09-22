alert("Welcome to the random color changer");

$(document).ready(function(){

    $("button").click(function(){
        var r = Math.floor(Math.random() * (256)); 
        var g = Math.floor(Math.random() * (256)); /*NUMEROS RANDOM PARA RGB*/
        var b = Math.floor(Math.random() * (256));

        /*var bgColor = "rgb(" + r + "," +g + "," + b + ")";
            alert("The random values are: " + r + " " + g + " " + b); ALTERNATIVA CREAR UNA VARIABLE
        $("body").css('background-color', bgColor);*/

        alert("The random values are: " + r + " " + g + " " + b); 
        $("body").css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')'); /*MI MANERA: USAR LAS VARIABLES DIRECTAMENTE*/
        
        /*NEXT UP PRACTICAR USO DE ANIMATE CON VARIABLES Y COLORES RANDOM*/
    })
})


