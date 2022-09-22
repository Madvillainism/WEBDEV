const template = document.createElement('template');
//TEMPLATE EN HTML DONDE SE MONTA EL COMPONENTE
 template.innerHTML= `
    <style>
    .crash-class{
        background: #f49999;
        border-radius: 15px;
        width:500px;
        display:grid;
        grid-template-columns: 1fr 2fr;
        grid-gap:10px;
        margin-bottom: 10px;
        border-bottom: purple 5px groove;
    }
    .crash-class img{
        border-radius: 15px;
        width:100%;
    }

    .crash-class button {
        cursor:pointer;
        background: darkorchid;
        color: white;
        font-weight: bolder;
        border:0;
        border-radius: 10px;
        padding: 5px 10px;
        transition: all 0.4s;
    }

    .crash-class button:hover{
        color:black;
        border-radius:50%;
    }

    .info{
        transition: all 0.4s;
    }

    </style>
    <div class="crash-class">
    <img />
    <div>
    <h3></h3>
    <div class="info">
        <p><slot name="email" /></p>
        <p><slot name="phone" /></p>
    </div>
    <button id="toggle">HIDE</button>
    </div>
    </div>
 `;

 //AÑADIR TRANSICION AL BOTON O LA INFORMACION QUE SE ESCONDE

class CrashClass extends HTMLElement{
    constructor(){
        super();

        this.showInfo = true;

        this.attachShadow({mode: 'open'});

        this.shadowRoot.appendChild(template.content.cloneNode(true));
        //CLONACION DEL NODO PARA PODER USAR SHADOWROOT

        this.shadowRoot.querySelector('h3').innerText =
        this.getAttribute('name');

        this.shadowRoot.querySelector('img').src =
        this.getAttribute('avatar');

    }

    //FUNCIONALIDAD DE ESCONDER INFORMACION MEDIANTE TOGGLE DE ESTILOS
    toggle(){
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const togglebtn = this.shadowRoot.querySelector('#toggle');


        if(this.showInfo){
            info.style.display = 'block';
        }else{
            info.style.display = 'none' ;
            togglebtn.innerText = "SHOW";
        }
    }

    //AÑADIR FUNCIONES AL BOTON DEL COMPONENTE
    connectedCallback(){
        this.shadowRoot.querySelector('#toggle').
        addEventListener('click', () => this.toggle());
    }

    //REMOVER FUNCIONES AL BOTON CUANDO SE QUITE DEL DOM
    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle').
        removeEventListener;
    }

}

window.customElements.define('crash-class', CrashClass);