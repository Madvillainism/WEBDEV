class TestGround extends HTMLElement{ //ACA VAN LOS PARAMETROS Y EL NOMBRE DEL COMP
    constructor(){
        super();
        this.name;
        this.surname;
    }

    static get observedAttributes(){ //RETORNO DE LOS ATRIBUTOS A USAR
        return ['name', "surname"];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue){ //ASIGNACION DE VALORES A LOS ATRIBUTOS
        switch(nameAtr){
            case "name":
                this.name = newValue;
            break;
            case "surname":
                this.surname = newValue;
            break;
        }
    }
    
    connectedCallback(){ //PARA FUNCIONAMIENTO DEL COMP
        this.innerHTML = ` <h1> ${this.name} ${this.surname} ES GENIAL </h1> ` ;  //COMILLAS INVERTIDAS CON ALTGR + CIERRA LLAVE
        this.style.color= "red";
    
    }
}



window.customElements.define("test-ground", TestGround); //DEFINICION DEL COMPONENTE