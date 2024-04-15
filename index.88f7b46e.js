var t=globalThis,e={},a={},i=t.parcelRequirec1dc;null==i&&((i=function(t){if(t in e)return e[t].exports;if(t in a){var i=a[t];delete a[t];var r={id:t,exports:{}};return e[t]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){a[t]=e},t.parcelRequirec1dc=i),(0,i.register)("27Lyk",function(t,e){Object.defineProperty(t.exports,"register",{get:()=>a,set:t=>a=t,enumerable:!0,configurable:!0});var a,i=new Map;a=function(t,e){for(var a=0;a<e.length-1;a+=2)i.set(e[a],{baseUrl:t,path:e[a+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.88f7b46e.js","bc9ZW","ganar.11d6c6f1.png","aHuFk","perder.5de9781a.png","5mdmA","papel.98785778.png","hbeyn","piedra.ff3206dd.png","cnU0O","tijera.abf361cb.png"]'));const r={data:{history:[]},listeners:[],conteo:{contadorGanadas:0,contadorPerdidas:0},init(){let t=localStorage.getItem("historial-juego");if(null===t)console.log("El Historial NO existia"),localStorage.setItem("historial-juego",JSON.stringify(this.data.history));else{console.log("El Historial existia");let e=JSON.parse(t);this.data.history=e}},init_history(t){console.log(t)},getConteo(){return this.conteo},getHistory(){return this.data.history},setHistory(t){let e=this.getHistory();for(let a of(e.push(t),this.data.history=e,localStorage.setItem("historial-juego",JSON.stringify(e)),this.ActualizarContadores(),this.listeners))a()},suscribe(t){this.listeners.push(t)},ActualizarContadores(){let t=0,e=0;for(let a of this.data.history)"Papel"===a.myPlay&&"Piedra"===a.computerPlay||"Piedra"===a.myPlay&&"Tijera"===a.computerPlay||"Tijera"===a.myPlay&&"Papel"===a.computerPlay?t++:("Piedra"===a.myPlay&&"Papel"===a.computerPlay||"Tijera"===a.myPlay&&"Piedra"===a.computerPlay||"Papel"===a.myPlay&&"Tijera"===a.computerPlay)&&e++;this.conteo={contadorGanadas:t,contadorPerdidas:e}},ultimoGanador(){let t=r.getHistory(),e=t.length,a=t[e-1];return"Papel"===a.myPlay&&"Piedra"===a.computerPlay||"Piedra"===a.myPlay&&"Tijera"===a.computerPlay||"Tijera"===a.myPlay&&"Papel"===a.computerPlay?"Jugador":("Piedra"===a.myPlay&&"Papel"===a.computerPlay||"Tijera"===a.myPlay&&"Piedra"===a.computerPlay||"Papel"===a.myPlay&&a.computerPlay,"Maquina")}};var o={};o=new URL("ganar.11d6c6f1.png",import.meta.url).toString();var n={};n=new URL("perder.5de9781a.png",import.meta.url).toString(),new URL("papel.98785778.png",import.meta.url).toString(),new URL("piedra.ff3206dd.png",import.meta.url).toString(),new URL("tijera.abf361cb.png",import.meta.url).toString(),function(){class t extends HTMLElement{constructor(){super(),this.tags=["h1","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tag=this.getAttribute("tag")||this.tag,this.render()}render(){let t=document.createElement(this.tag),e=document.createElement("style");e.innerHTML=`
                
                h1 
                { 
                    width: 308px;
                    font-size: 80px;
                    color: orange;
                    font-family: "Anta", sans-serif;
                    font-weight: 700;
                    font-style: normal;
                    margin: 0 auto;
                    margin-top: 50px;
                    text-align: center;
                    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5); /* Definici\xf3n de la sombra */
                }

                h4
                {
                    width: 308px;
                    font-size: 40px;
                    color: red;
                    font-family: "Anta", sans-serif;
                    font-weight: 700;
                    font-style: normal;
                    margin: 0 auto;
                    margin-top: 50px;
                    text-align: center;
                    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); /* Definici\xf3n de la sombra */
                }

                img 
                {
                    margin: 0 auto;
                }

                @media screen and (min-width: 1000px) {
                    h1 {
                        width: 750px;
                        margin-top: 130px;
                        text-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.5);
                    }

                    h4 {
                        width: 750px;
                        margin-top: 5vh;
                        text-shadow: 0.7vw 0.7vw 1vw rgba(0, 0, 0, 0.5);
                    }

                    img {
                        width: 10%;
                    }
                }
            `,t.textContent=this.textContent,this.shadow.appendChild(e),this.shadow.appendChild(t)}}customElements.define("my-text",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),e=document.createElement("div"),a=document.createElement("button");a.setAttribute("class","botoncito");let i=document.createElement("style");i.innerHTML=`

                div 
                {
                    display: flex;
                    justify-content: center;  
                }

                .botoncito 
                {

                    background-color: #006CFC;
                    border: 10px solid #001997;
                    border-radius: 5px;

                    margin-top: 50px;
                    width: 300px;
                    padding: 15px 60px;

                    font-family: "Odibee Sans", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    color: white;
                    font-size: 45px;
                }

                @media screen and (min-width: 1000px) {
                    .botoncito 
                    {
                        width: 500px;
                    }
                }
            `,a.textContent=this.textContent,e.appendChild(a),e.appendChild(i),t.appendChild(e)}}customElements.define("my-boton",t)}(),function(){class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){r.suscribe(()=>{this.render()})}render(){let t=r.ultimoGanador(),e="";e="Jugador"==t?o:n;let a=r.getConteo();console.log(a);let i=document.createElement("style"),s=document.createElement("div");s.setAttribute("class","contenedor"),i.innerHTML=`

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
                
            `,s.innerHTML=`
                    <img class="imagenResultado" src="${e}"/>
                    <div class="cuadro">
                        <my-text class="titulo" tag="h4">Score</my-text>
                        <ul>
                            <li> Vos: ${a.contadorGanadas} </li>           
                            <li> Maquina: ${a.contadorPerdidas} </li> 
                        </ul>
                    <div>
                              
            `,this.shadow.appendChild(i),this.shadow.appendChild(s)}}customElements.define("my-list",t)}(),r.init(),document.querySelector(".contenedorPrincipal");
//# sourceMappingURL=index.88f7b46e.js.map
