function imprimir(entrada){
    /* SI ES X PALABRA, CAMBIAR VARIABLE A LA IMAGEN CORRESPONDIENTE */
    let entrada = document.getElementById("inp").value;
    if (entrada === "flower"){
        alert("currently working");

    var modalObject = document.getElementById("myModal");
    var modalImg = document.getElementById("myImg");
    var captionText = document.getElementById("caption");
   
    var span = document.getElementsByClassName("close")[0];

    
     modalObject.style.display="block";
    modalImg.src="konji.jpg";
    captionText = myImg.alt;

    
span.onclick = function(){
    modalObject.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modalObject) {
        modalObject.style.display="none";
    }
}
    }
else if (entrada === "heaven"){
    let entrada = document.getElementById("inp").value;
    alert("currently working");

    var modalObject = document.getElementById("myModal");
    var modalImg2 = document.getElementById("myImg");
    var captionText = document.getElementById("caption");
   
    var span = document.getElementsByClassName("close")[0];

    modalObject.style.display="block";
    modalImg2.src="heaven.jpg";
    captionText=myImg.alt;

span.onclick = function(){
    modalObject.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modalObject) {
        modalObject.style.display="none";
    }
}
}
else if (entrada === "hand" || entrada === "arm"){
    let entrada = document.getElementById("inp").value;
    alert("currently working");

    var modalObject = document.getElementById("myModal");
    var modalImg3 = document.getElementById("myImg");
    var captionText = document.getElementById("caption");
   
    var span = document.getElementsByClassName("close")[0];

    modalObject.style.display="block";
    modalImg3.src="arm_hand.jpg";
    captionText=myImg.alt;

span.onclick = function(){
    modalObject.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modalObject) {
        modalObject.style.display="none";
    }
}
}
else if (entrada === "gold" || entrada === "metal" || entrada === "money"){
    let entrada = document.getElementById("inp").value;
    alert("currently working");

    var modalObject = document.getElementById("myModal");
    var modalImg4 = document.getElementById("myImg");
    var captionText = document.getElementById("caption");
   
    var span = document.getElementsByClassName("close")[0];

    modalObject.style.display="block";
    modalImg4.src="money.jpg";
    captionText=myImg.alt;

span.onclick = function(){
    modalObject.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modalObject) {
        modalObject.style.display="none";
    }
}
}
else {
        alert("The word is mispelled or doesn´t exist, try again!");
     }
}