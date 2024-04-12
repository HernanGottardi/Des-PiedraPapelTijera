var e=globalThis,t={},i={},a=e.parcelRequirec1dc;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequirec1dc=a),(0,a.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,a=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)a.set(t[i],{baseUrl:e,path:t[i+1]})}}),a("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.a6930e7a.js","bc9ZW","ganar.11d6c6f1.png","aHuFk","perder.5de9781a.png","5mdmA","papel.98785778.png","hbeyn","piedra.ff3206dd.png","cnU0O","tijera.abf361cb.png"]'));const n={data:{history:[]},listeners:[],conteo:{contadorGanadas:0,contadorPerdidas:0},init(){let e=localStorage.getItem("historial-juego");if(null===e)console.log("El Historial NO existia"),localStorage.setItem("historial-juego",JSON.stringify(this.data.history));else{console.log("El Historial existia");let t=JSON.parse(e);this.data.history=t}},init_history(e){console.log(e)},getConteo(){return this.conteo},getHistory(){return this.data.history},setHistory(e){let t=this.getHistory();for(let i of(t.push(e),this.data.history=t,localStorage.setItem("historial-juego",JSON.stringify(t)),this.ActualizarContadores(),this.listeners))i()},suscribe(e){this.listeners.push(e)},ActualizarContadores(){let e=0,t=0;for(let i of this.data.history)"Papel"===i.myPlay&&"Piedra"===i.computerPlay||"Piedra"===i.myPlay&&"Tijera"===i.computerPlay||"Tijera"===i.myPlay&&"Papel"===i.computerPlay?e++:("Piedra"===i.myPlay&&"Papel"===i.computerPlay||"Tijera"===i.myPlay&&"Piedra"===i.computerPlay||"Papel"===i.myPlay&&"Tijera"===i.computerPlay)&&t++;this.conteo={contadorGanadas:e,contadorPerdidas:t}},ultimoGanador(){let e=n.getHistory(),t=e.length,i=e[t-1];return"Papel"===i.myPlay&&"Piedra"===i.computerPlay||"Piedra"===i.myPlay&&"Tijera"===i.computerPlay||"Tijera"===i.myPlay&&"Papel"===i.computerPlay?"Jugador":("Piedra"===i.myPlay&&"Papel"===i.computerPlay||"Tijera"===i.myPlay&&"Piedra"===i.computerPlay||"Papel"===i.myPlay&&i.computerPlay,"Maquina")}};var o={};o=new URL("ganar.11d6c6f1.png",import.meta.url).toString();var r={};r=new URL("perder.5de9781a.png",import.meta.url).toString();var l={};l=new URL("papel.98785778.png",import.meta.url).toString();var s={};s=new URL("piedra.ff3206dd.png",import.meta.url).toString();var d={};d=new URL("tijera.abf361cb.png",import.meta.url).toString();const c=[{path:/\/bienvenida/,component:function(e){let t=document.createElement("div");t.innerHTML=`

        <my-text tag="h1">Piedra, Papel o Tijera</my-text>
        <my-boton class="boton">Empezar</my-boton>

        <img class= "imgMov" src="${l}" alt="Movimientos" style="width: 100px; margin-top: 50px"/>
        <img class= "imgMov" src="${s}" alt="Movimientos" style="width: 100px; margin-top: 50px"/>
        <img class= "imgMov" src="${d}" alt="Movimientos" style="width: 100px; margin-top: 50px"/>
    `;let i=t.querySelector(".boton");return null!=i&&i.addEventListener("click",()=>{e.goTo("/inicio")}),t}},{path:/\/inicio/,component:function(e){let t=document.createElement("div");t.innerHTML=`
        <my-text tag="h4">Presion\xe1 jugar
        y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
        <my-boton class="BotonJugar">\xa1Jugar!</my-boton>
        <img class= "papel" src="${l}" alt="Movimientos" style="width: 100px; margin-top: 50px"/>
        <img class= "piedra" src="${s}" alt="Movimientos" style="width: 100px; margin-top: 50px"/>
        <img class= "tijera" src="${d}" alt="Movimientos" style="width: 100px; margin-top: 50px"/>
    `;let i=t.querySelector(".BotonJugar");return null!=i&&i.addEventListener("click",()=>{e.goTo("/partida")}),t}},{path:/\/resultado/,component:function(e){let t=document.createElement("div");t.innerHTML=`
        <my-list></my-list>
        <my-boton class="volverAJugar"> Volver a Jugar </my-boton>
    `;let i=t.querySelector(".volverAJugar");return i?.addEventListener("click",()=>{e.goTo("/partida")}),t}},{path:/\/partida/,component:function(e){let t=5,i=document.createElement("div");i.innerHTML=`
        <h1 class="titulo" style="font-size: 70px; color: white; display: flex; justify-content: center;">Tu turno</h1>
        <h1 class="informar" style="color: white; font-size:80px; display: flex; justify-content: center;"> </h1>
        <img class="movMaquina" style="display: none;"/>

        <img class= "Papel" src="${l}" alt="Movimientos" style="width: 100px; margin-top: 50px"/>
        <img class= "Piedra" src="${s}" alt="Movimientos" style="width: 100px; margin-top: 50px "/>
        <img class= "Tijera" src="${d}" alt="Movimientos" style="width: 100px; margin-top: 50px "/>
    `;let a=i.querySelector(".informar"),o=i.querySelector(".Papel"),r=i.querySelector(".Piedra"),c=i.querySelector(".Tijera"),p=["Piedra","Papel","Tijera"],u=function(){let e="",t=i.querySelector(".titulo");null!=t&&(t.textContent="Turno maquina"),e=p[Math.floor(3*Math.random())];let a=i.querySelector(".movMaquina");if(null!=a){if("Papel"==e)return a.setAttribute("src",l),a.style.display="block",a.style.width="200px","Papel";if("Piedra"==e)return a.setAttribute("src",s),a.style.display="block",a.style.width="200px","Piedra";if("Tijera"==e)return a.setAttribute("src",d),a.style.display="block",a.style.width="200px","Tijera"}},m=function(){e.goTo("/resultado")};return(async function(a){return new Promise(n=>{if(null!=a){let l=i.querySelector(".titulo");null!=l&&(l.textContent="Tu turno");let s=setInterval(()=>{a.textContent=t.toString();let l=e=>{let t=i.querySelector(".Papel"),a=i.querySelector(".Piedra"),o=i.querySelector(".Tijera"),r=e.target.classList.value;r.includes("Papel")?(a.style.display="none",o.style.display="none",t.style.width="200px",n("Papel")):r.includes("Piedra")?(t.style.display="none",o.style.display="none",a.style.width="200px",n("Piedra")):r.includes("Tijera")&&(t.style.display="none",a.style.display="none",o.style.width="200px",n("Tijera")),clearInterval(s)};o?.addEventListener("click",l),r?.addEventListener("click",l),c?.addEventListener("click",l),0===t&&(clearInterval(s),e.goTo("/inicio")),t--},1e3)}})})(a).then(e=>{let t=u();setTimeout(()=>{new Promise(n=>{if(null!=a){let o=i.querySelector(".titulo");null!=o&&(o.textContent=""),"Papel"==e&&"Piedra"==t&&(a.textContent="Ganaste!"),"Piedra"==e&&"Tijera"==t&&(a.textContent="Ganaste!"),"Tijera"==e&&"Papel"==t&&(a.textContent="Ganaste!"),"Papel"==t&&"Piedra"==e&&(a.textContent="Perdiste!"),"Piedra"==t&&"Tijera"==e&&(a.textContent="Perdiste!"),"Tijera"==t&&"Papel"==e&&(a.textContent="Perdiste!"),t==e&&(a.textContent="Empate!"),n("")}}).then(()=>{m(),n.setHistory({computerPlay:t,myPlay:e})})},2e3)}),i}}];!function(){class e extends HTMLElement{constructor(){super(),this.tags=["h1","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tag=this.getAttribute("tag")||this.tag,this.render()}render(){let e=document.createElement(this.tag),t=document.createElement("style");t.innerHTML=`
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
                    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); /* Definici\xf3n de la sombra */


                }

                img 
                {
                    margin: 0 auto;
                }
            `,e.textContent=this.textContent,this.shadow.appendChild(t),this.shadow.appendChild(e)}}customElements.define("my-text",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("button");i.setAttribute("class","botoncito");let a=document.createElement("style");a.innerHTML=`

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
            `,i.textContent=this.textContent,t.appendChild(i),t.appendChild(a),e.appendChild(t)}}customElements.define("my-boton",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){n.suscribe(()=>{this.render()})}render(){let e=n.ultimoGanador(),t="";t="Jugador"==e?o:r;let i=n.getConteo();console.log(i);let a=document.createElement("style"),l=document.createElement("div");l.setAttribute("class","contenedor"),a.innerHTML=`

                .cuadro 
                {
                    background-color: white;

                    border: 7px solid black;
                    border-radius: 5px;

                    font-family: "Odibee Sans", sans-serif;
                    font-weight: 400;
                    font-style: normal;
                    font-size: 45px;
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
                
            `,l.innerHTML=`
                    <img src="${t}"/>
                    <div class="cuadro">
                        <my-text class="titulo" tag="h4">Score</my-text>
                        <ul>
                            <li> Vos: ${i.contadorGanadas} </li>           
                            <li> Maquina: ${i.contadorPerdidas} </li> 
                        </ul>
                    <div>
                              
            `,this.shadow.appendChild(a),this.shadow.appendChild(l)}}customElements.define("my-list",e)}(),n.init(),function(e){function t(i){history.pushState({},"",i),function(i){for(let a of c)if(a.path.test(i)){let i=a.component({goTo:t});null!=e&&(e.firstChild&&e.firstChild.remove(),null!=i&&e.appendChild(i))}}(i)}"/"==location.pathname?t("/bienvenida"):t(location.pathname)}(document.querySelector(".contenedorPrincipal"));
//# sourceMappingURL=index.a6930e7a.js.map
