
const papel = require("../../img/papel.png")
const piedra = require("../../img/piedra.png")
const tijera = require("../../img/tijera.png")

export function initPageWelcome(params)
{
    const div = document.createElement("div");
    div.setAttribute("class", "contenedor")

    const style = document.createElement("style");

    style.innerHTML = `
        .contenedor {
            wdith: 600px;
            margin: 0 auto;
            padding: 0 20px;
        }

        my-text
        {
            text-align: center;
        }

        .imgMov
        {
            width: 100px;
            heigth: 100px;
            margin-top: 50px;
            padding: 0 20px;
        }

        .imagenes
        {
            display:flex;
            justify-content: center;
        }

        @media screen and (min-width: 1000px)
            .contenedor {
                max-width: 1000px; 
            }
        }

    `;

    div.innerHTML = `

        <my-text tag="h1">Piedra, Papel o Tijera</my-text>
        <my-boton class="boton">Empezar</my-boton>

        <div class="imagenes">
            <img class= "imgMov" src="${papel}" alt="Movimientos"/>
            <img class= "imgMov" src="${piedra}" alt="Movimientos"/>
            <img class= "imgMov" src="${tijera}" alt="Movimientos"/>
        <div>
    `;

    const boton = div.querySelector(".boton");

    if (boton != null)
    {
        boton.addEventListener("click", ()=>{
            params.goTo("/inicio")
        })
    }

    div.appendChild(style);


    return div;
}