
import {state} from "../../../src/state" 

const papel = require("../../img/papel.png")
const piedra = require("../../img/piedra.png")
const tijera = require("../../img/tijera.png")

export function initPagePartida(params)
{
    let contador = 3;

    const div = document.createElement("div");

    div.setAttribute("class", "contenedorPrin")

    const style = document.createElement("style");

    style.innerHTML = `

        
        .contenedorImagenes
        {
            display: flex;
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
                width: 200px;
            }
        }


    `;


    div.innerHTML = `

        <h1 class="titulo" style="font-size: 70px; color: white; display: flex; justify-content: center; margin: 0px;">Tu turno</h1>
        <h1 class="informar" style="color: white; margin-top: 0px; font-size:80px; display: flex; justify-content: center;"> </h1>

        <div class="contenedorImagenes">
            <img class="movMaquina" style="display: none;"/>
            <img class= "imgMov Papel" src="${papel}" alt="Movimientos"/>
            <img class= "imgMov Piedra" src="${piedra}" alt="Movimientos"/>
            <img class= "imgMov Tijera" src="${tijera}" alt="Movimientos"/>
        </div>

    `;

    div.appendChild(style)

    const contenedorInforme = div.querySelector(".informar");

    const imgPapel = div.querySelector(".Papel") as HTMLDivElement;
    const imgPiedra = div.querySelector(".Piedra") as HTMLDivElement;
    const imgTijera = div.querySelector(".Tijera") as HTMLDivElement;

    const movs = ["Piedra", "Papel", "Tijera"]

    const ganador = function (jugador, maquina) 
    {

        return new Promise((resolve) =>
        {
            if (contenedorInforme != null)
            {

                const titulo = div.querySelector(".titulo");

                if (titulo != null)
                {
                    titulo.textContent = ""
                }

                // Ganaste.
                if (jugador == "Papel" && maquina == "Piedra")
                {
                    contenedorInforme.textContent = "Ganaste!";
                }

                if (jugador == "Piedra" && maquina == "Tijera")
                {
                    contenedorInforme.textContent = "Ganaste!";
                }

                if (jugador == "Tijera" && maquina == "Papel")
                {
                    contenedorInforme.textContent = "Ganaste!";
                }

                // Perdiste.
                if (maquina == "Papel" && jugador == "Piedra")
                {
                    contenedorInforme.textContent = "Perdiste!";
                }

                if (maquina == "Piedra" && jugador == "Tijera")
                {
                    contenedorInforme.textContent = "Perdiste!";
                }

                if (maquina == "Tijera" && jugador == "Papel")
                {
                    contenedorInforme.textContent = "Perdiste!";
                }

                // Empate
                if (maquina == jugador)
                {
                    contenedorInforme.textContent = "Empate!";
                }

                resolve("")
            }  
        })

        
    }

    const resMaquina = function ()
    {
        const numeroRandom = Math.floor(Math.random() * 3);
        return movs[numeroRandom]
    }

    const seleccionMaquina = function () 
    {
        let maquina = "";

        const titulo = div.querySelector(".titulo");
        if (titulo != null)
        {
            titulo.textContent = "Turno maquina"
        }

        maquina = resMaquina();
        const imgMaquina = div.querySelector(".movMaquina") as HTMLElement;

        if (imgMaquina != null)
        {

            if (maquina == "Papel")
            {
                imgMaquina.setAttribute("src", papel);
                imgMaquina.style.display = "initial";
                imgMaquina.style.width = "200px";
                return "Papel";
            } 
            else if (maquina == "Piedra")
            {
                imgMaquina.setAttribute("src", piedra);
                imgMaquina.style.display = "initial";
                imgMaquina.style.width = "200px";
                return "Piedra";
            }
            else if (maquina == "Tijera")
            {
                imgMaquina.setAttribute("src", tijera);
                imgMaquina.style.display = "initial";
                imgMaquina.style.width = "200px";
                return "Tijera";
            }   
        }
    }

    const mostrarResultados = function () 
    {

        params.goTo("/resultado")
    }
        
    const seleccion_jugador = async function (contenedor_informar) 
    {
        return new Promise((resolve) => {

            if (contenedor_informar != null) 
            {

                const titulo = div.querySelector(".titulo");
                if (titulo != null) 
                {
                    titulo.textContent = "Tu turno"
                }
    
                // Le damos el tiempo al usuario para que elija.
                const intervalo = setInterval(() => {
    
                    // Actualizo el informe/contador.
                    contenedor_informar.textContent = contador.toString();
    
                    const handleClick = (e) => 
                    {

                        const imgPapel = div.querySelector(".Papel") as HTMLElement
                        const imgPiedra = div.querySelector(".Piedra") as HTMLElement
                        const imgTijera = div.querySelector(".Tijera") as HTMLElement

                        const contenedorImg = div.querySelector(".contenedorImagenes") as HTMLElement

                        const clase = e.target.classList.value;
    
                        if (clase.includes("Papel")) 
                        {
                            
                            imgPiedra.style.display = "none";
                            imgTijera.style.display = "none";
                            imgPapel.style.width = "200px";
                            contenedorImg.style.flexDirection = "column";
                            contenedorImg.style.justifyContent = "center";
                            contenedorImg.style.alignItems = "center";

                            resolve("Papel");
                        } 
                        else if (clase.includes("Piedra")) 
                        {
                            imgPapel.style.display = "none";
                            imgTijera.style.display = "none";
                            imgPiedra.style.width = "200px";
                            contenedorImg.style.flexDirection = "column"
                            contenedorImg.style.justifyContent = "center";
                            contenedorImg.style.alignItems = "center";


                            resolve("Piedra");
                        } 
                        else if (clase.includes("Tijera")) 
                        {
                            imgPapel.style.display = "none";
                            imgPiedra.style.display = "none";
                            imgTijera.style.width = "200px";
                            contenedorImg.style.flexDirection = "column"
                            contenedorImg.style.justifyContent = "center";
                            contenedorImg.style.alignItems = "center";

                            resolve("Tijera");
                        }
    
                        clearInterval(intervalo);
                    };
    
                    // Agregar evento clic a cada imagen
                    imgPapel?.addEventListener("click", handleClick);
                    imgPiedra?.addEventListener("click", handleClick);
                    imgTijera?.addEventListener("click", handleClick);
    
                    if (contador === 0) 
                    {
                        clearInterval(intervalo);
                        params.goTo("/inicio");
                    }

                    contador--;

                }, 1000);
            }
        });
    }
    
    const movimientoJugador = seleccion_jugador(contenedorInforme)

    movimientoJugador.then((resJugador) => {
        
        const resMaquina = seleccionMaquina();

            setTimeout(() => 
            {

                ganador(resJugador, resMaquina).then(() => 
                {
                    mostrarResultados();
                    state.setHistory({ computerPlay: resMaquina, myPlay: resJugador });
                });
        }, 3000); 

    });
    
    return div;

}