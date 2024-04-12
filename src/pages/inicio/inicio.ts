
const papel = require("../../img/papel.png")
const piedra = require("../../img/piedra.png")
const tijera = require("../../img/tijera.png")


export function initPageInicio (params)
{
    const div = document.createElement("div");

    div.setAttribute("class", "contenedorPrin")

    const style = document.createElement("style");

    style.innerHTML = `

        
        .contenedorImagenes
        {
            display:flex;
            justify-content: center;
        }

        .imgMov
        {
            width: 100px;
            heigth: 100px;
            margin-top: 50px;
            padding: 0 20px;
        }

        
        @media screen and (min-width: 1000px)
        {
            .contenedorImagenes 
            {
                max-width: 1000px; 
            }

            .imgMov
            {
                width: 150px;
            }

            .contenedorPrin
            {
                margin-top: 50px;
            }
        }


    `;

    div.innerHTML = `
        <my-text tag="h4">Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
        <my-boton class="BotonJugar">¡Jugar!</my-boton>

        <div class="contenedorImagenes"> 
            <img class= "imgMov papel" src="${papel}" alt="Movimientos "/>
            <img class= "imgMov piedra" src="${piedra}" alt="Movimientos"/>
            <img class= "imgMov tijera" src="${tijera}" alt="Movimientos"/>
        </div>

    `;

    const boton = div.querySelector(".BotonJugar");
    if (boton != null)
    {
        boton.addEventListener("click", ()=>
        {
            params.goTo("/partida")
        })

    }

    div.appendChild(style);

    return div;
}