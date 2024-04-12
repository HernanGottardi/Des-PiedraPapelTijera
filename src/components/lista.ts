import {state} from "../../src/state";

const ganar = require("../img/ganar.png")
const perder = require("../img/perder.png")


export function initLista ()
{

    class Lista extends HTMLElement 
    {
        shadow = this.attachShadow({mode: "open"});
    
        constructor()
        {
            super();   
        }
    
        connectedCallback()
        {
            state.suscribe(()=>
            {
                this.render();
            })
            
        }
    
        render ()
        {

            const ganador = state.ultimoGanador();
            let r = "";

            if (ganador == "Jugador") 
            {
                r = ganar;
            }
            else
            {
                r = perder;
            }

            const contadores = state.getConteo();

            console.log(contadores)

            const style = document.createElement("style");
            const div = document.createElement("div");

            div.setAttribute("class", "contenedor")

            style.innerHTML = `

                div
                {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .cuadro 
                {
                    border: 7px solid white;
                    border-radius: 5px;
                    color:white;

                    font-family: "Odibee Sans", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 45px;

                    width: 295px;
                }

                ul
                {
                    display: flex;
                    justify-content: flex-end;
                    flex-direction: column;
                }

                li 
                {
                    text-align: rigth;
                }

                .titulo
                {
                    text-align: center;
                }

                .imagenResultado
                {
                    width: 200px;
                    height: 200px;
                }

                @media screen and (min-width: 1000px)
                {
                    .cuadro 
                    {
                        width: 485px;
                    }

                    .imagenResultado
                    {
                        width: 250px;
                        height: 250px;
                    }
                }
                
            `
    
            div.innerHTML = `
                    <img class="imagenResultado" src="${r}"/>
                    <div class="cuadro">
                        <my-text class="titulo" tag="h4">Score</my-text>
                        <ul>
                            <li> Vos: ${contadores.contadorGanadas} </li>           
                            <li> Maquina: ${contadores.contadorPerdidas} </li> 
                        </ul>
                    <div>
                              
            `
            this.shadow.appendChild(style);
            this.shadow.appendChild(div);



        }
    
    }
    
    customElements.define("my-list", Lista)
}