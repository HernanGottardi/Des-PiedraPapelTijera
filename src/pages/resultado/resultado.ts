
const papel = require("../../img/papel.png")
const piedra = require("../../img/piedra.png")
const tijera = require("../../img/tijera.png")


export function initPagRes (params)
{
    const div = document.createElement("div");

    div.innerHTML = `
        <my-list></my-list>
        <my-boton class="volverAJugar"> Volver a Jugar </my-boton>
    `;

    const boton = div.querySelector(".volverAJugar");

    boton?.addEventListener("click", ()=>
    {
        params.goTo("/partida")

    })

    return div;
}