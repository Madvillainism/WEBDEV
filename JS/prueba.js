class List extends HTMLElement{
    constructor(){
        super();

        let shadow = this.attachShadow({mode: 'open'}); //USO DE SHADOW

        this.divHeader = document.createElement("div"); //CREACION DE UN ELEMENTO
        this.divContent = document.createElement("div"); //CREACION DE UN ELEMENTO
        this.modePicture = false;


        this.divHeader.innerHTML="LISTA DE PANITAS" //ASIGNACION DE ALGO AL ELEMENTO

        

        shadow.appendChild(this.divHeader); //AÑADIR EL ELEMENTO AL DOM DEL COMPONENTE
        shadow.appendChild(this.divContent);

    }

    connectedCallback(){
        console.log(this.getAttribute("title"));
        let url = this.getAttribute("url");
        let field = this.getAttribute("field");
        if(this.getAttribute("modePicture")){
            this.modePicture = this.getAttribute("modePicture");
        }

        this.divContent.innerHTML= "";

        //PETICION HTTP
        fetch(url) //API JALA DATOS Y DEVUELVE UNA PROMESA
        .then(Response=>Response.json())
        .then(json=>json.forEach(element => {
            if(this.modePicture ){
                this.divContent.innerHTML = `<img
                src= '${element[field]}'>  
                </img>`
            }else{
                  this.divContent.innerHTML += `<div>
            ${element[field]} 
            </div>`
            }
          
        })); //REEMPLAZO DE VARIABLE CON ATRIBUTOS
    }
}

window.customElements.define('app-list', List);