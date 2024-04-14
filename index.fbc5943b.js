var e=globalThis,t={},n={},i=e.parcelRequirec1dc;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequirec1dc=i),(0,i.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>n,set:e=>n=e,enumerable:!0,configurable:!0});var n,i=new Map;n=function(e,t){for(var n=0;n<t.length-1;n+=2)i.set(t[n],{baseUrl:e,path:t[n+1]})}}),i("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["1LzKV","index.fbc5943b.js","1e92r","ganar.11d6c6f1.png","aYJk8","perder.5de9781a.png","cpPij","papel.98785778.png","ecEbG","piedra.ff3206dd.png","GDy1l","tijera.abf361cb.png"]'));const a={data:{history:[]},listeners:[],conteo:{contadorGanadas:0,contadorPerdidas:0},init(){let e=localStorage.getItem("historial-juego");if(null===e)console.log("El Historial NO existia"),localStorage.setItem("historial-juego",JSON.stringify(this.data.history));else{console.log("El Historial existia");let t=JSON.parse(e);this.data.history=t}},init_history(e){console.log(e)},getConteo(){return this.conteo},getHistory(){return this.data.history},setHistory(e){let t=this.getHistory();for(let n of(t.push(e),this.data.history=t,localStorage.setItem("historial-juego",JSON.stringify(t)),this.ActualizarContadores(),this.listeners))n()},suscribe(e){this.listeners.push(e)},ActualizarContadores(){let e=0,t=0;for(let n of this.data.history)"Papel"===n.myPlay&&"Piedra"===n.computerPlay||"Piedra"===n.myPlay&&"Tijera"===n.computerPlay||"Tijera"===n.myPlay&&"Papel"===n.computerPlay?e++:("Piedra"===n.myPlay&&"Papel"===n.computerPlay||"Tijera"===n.myPlay&&"Piedra"===n.computerPlay||"Papel"===n.myPlay&&"Tijera"===n.computerPlay)&&t++;this.conteo={contadorGanadas:e,contadorPerdidas:t}},ultimoGanador(){let e=a.getHistory(),t=e.length,n=e[t-1];return"Papel"===n.myPlay&&"Piedra"===n.computerPlay||"Piedra"===n.myPlay&&"Tijera"===n.computerPlay||"Tijera"===n.myPlay&&"Papel"===n.computerPlay?"Jugador":("Piedra"===n.myPlay&&"Papel"===n.computerPlay||"Tijera"===n.myPlay&&"Piedra"===n.computerPlay||"Papel"===n.myPlay&&n.computerPlay,"Maquina")}};var o={};o=new URL("ganar.11d6c6f1.png",import.meta.url).toString();var r={};r=new URL("perder.5de9781a.png",import.meta.url).toString();var l={};l=new URL("papel.98785778.png",import.meta.url).toString();var s={};s=new URL("piedra.ff3206dd.png",import.meta.url).toString();var d={};d=new URL("tijera.abf361cb.png",import.meta.url).toString();const c=[{path:/\/bienvenida/,component:function(e){let t=document.createElement("div");t.setAttribute("class","contenedor");let n=document.createElement("style");n.innerHTML=`
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

    `,t.innerHTML=`

        <my-text tag="h1">Piedra, Papel o Tijera</my-text>
        <my-boton class="boton">Empezar</my-boton>

        <div class="imagenes">
            <img class= "imgMov" src="${l}" alt="Movimientos"/>
            <img class= "imgMov" src="${s}" alt="Movimientos"/>
            <img class= "imgMov" src="${d}" alt="Movimientos"/>
        <div>
    `;let i=t.querySelector(".boton");return null!=i&&i.addEventListener("click",()=>{e.goTo("/inicio")}),t.appendChild(n),t}},{path:/\/inicio/,component:function(e){let t=document.createElement("div");t.setAttribute("class","contenedorPrin");let n=document.createElement("style");n.innerHTML=`

        
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


    `,t.innerHTML=`
        <my-text tag="h4">Presion\xe1 jugar
        y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</my-text>
        <my-boton class="BotonJugar">\xa1Jugar!</my-boton>

        <div class="contenedorImagenes"> 
            <img class= "imgMov papel" src="${l}" alt="Movimientos "/>
            <img class= "imgMov piedra" src="${s}" alt="Movimientos"/>
            <img class= "imgMov tijera" src="${d}" alt="Movimientos"/>
        </div>

    `;let i=t.querySelector(".BotonJugar");return null!=i&&i.addEventListener("click",()=>{e.goTo("/partida")}),t.appendChild(n),t}},{path:/\/resultado/,component:function(e){let t=document.createElement("div");t.innerHTML=`
        <my-list></my-list>
        <my-boton class="volverAJugar"> Volver a Jugar </my-boton>
    `;let n=t.querySelector(".volverAJugar");return n?.addEventListener("click",()=>{e.goTo("/partida")}),t}},{path:/\/partida/,component:function(e){let t=3,n=document.createElement("div");n.setAttribute("class","contenedorPrin");let i=document.createElement("style");i.innerHTML=`

        
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


    `,n.innerHTML=`

        <h1 class="titulo" style="font-size: 70px; color: white; display: flex; justify-content: center; margin: 0px;">Tu turno</h1>
        <h1 class="informar" style="color: white; margin-top: 0px; font-size:80px; display: flex; justify-content: center;"> </h1>

        <div class="contenedorImagenes">
            <img class="movMaquina" style="display: none;"/>
            <img class= "imgMov Papel" src="${l}" alt="Movimientos"/>
            <img class= "imgMov Piedra" src="${s}" alt="Movimientos"/>
            <img class= "imgMov Tijera" src="${d}" alt="Movimientos"/>
        </div>

    `,n.appendChild(i);let o=n.querySelector(".informar"),r=n.querySelector(".Papel"),c=n.querySelector(".Piedra"),p=n.querySelector(".Tijera"),m=["Piedra","Papel","Tijera"],u=function(){let e="",t=n.querySelector(".titulo");null!=t&&(t.textContent="Turno maquina"),e=m[Math.floor(3*Math.random())];let i=n.querySelector(".movMaquina");if(null!=i){if("Papel"==e)return i.setAttribute("src",l),i.style.display="initial",i.style.width="200px","Papel";if("Piedra"==e)return i.setAttribute("src",s),i.style.display="initial",i.style.width="200px","Piedra";if("Tijera"==e)return i.setAttribute("src",d),i.style.display="initial",i.style.width="200px","Tijera"}},y=function(){e.goTo("/resultado")};return(async function(i){return new Promise(a=>{if(null!=i){let o=n.querySelector(".titulo");null!=o&&(o.textContent="Tu turno");let l=setInterval(()=>{i.textContent=t.toString();let o=e=>{let t=n.querySelector(".Papel"),i=n.querySelector(".Piedra"),o=n.querySelector(".Tijera"),r=n.querySelector(".contenedorImagenes"),s=e.target.classList.value;s.includes("Papel")?(i.style.display="none",o.style.display="none",t.style.width="200px",r.style.flexDirection="column",r.style.justifyContent="center",r.style.alignItems="center",a("Papel")):s.includes("Piedra")?(t.style.display="none",o.style.display="none",i.style.width="200px",r.style.flexDirection="column",r.style.justifyContent="center",r.style.alignItems="center",a("Piedra")):s.includes("Tijera")&&(t.style.display="none",i.style.display="none",o.style.width="200px",r.style.flexDirection="column",r.style.justifyContent="center",r.style.alignItems="center",a("Tijera")),clearInterval(l)};r?.addEventListener("click",o),c?.addEventListener("click",o),p?.addEventListener("click",o),0===t&&(clearInterval(l),e.goTo("/inicio")),t--},1e3)}})})(o).then(e=>{let t=u();setTimeout(()=>{new Promise(i=>{if(null!=o){let a=n.querySelector(".titulo");null!=a&&(a.textContent=""),"Papel"==e&&"Piedra"==t&&(o.textContent="Ganaste!"),"Piedra"==e&&"Tijera"==t&&(o.textContent="Ganaste!"),"Tijera"==e&&"Papel"==t&&(o.textContent="Ganaste!"),"Papel"==t&&"Piedra"==e&&(o.textContent="Perdiste!"),"Piedra"==t&&"Tijera"==e&&(o.textContent="Perdiste!"),"Tijera"==t&&"Papel"==e&&(o.textContent="Perdiste!"),t==e&&(o.textContent="Empate!"),i("")}}).then(()=>{y(),a.setHistory({computerPlay:t,myPlay:e})})},3e3)}),n}}];!function(){class e extends HTMLElement{constructor(){super(),this.tags=["h1","p"],this.tag="p",this.shadow=this.attachShadow({mode:"open"}),this.tag=this.getAttribute("tag")||this.tag,this.render()}render(){let e=document.createElement(this.tag),t=document.createElement("style");t.innerHTML=`
                
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
            `,e.textContent=this.textContent,this.shadow.appendChild(t),this.shadow.appendChild(e)}}customElements.define("my-text",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),n=document.createElement("button");n.setAttribute("class","botoncito");let i=document.createElement("style");i.innerHTML=`

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
            `,n.textContent=this.textContent,t.appendChild(n),t.appendChild(i),e.appendChild(t)}}customElements.define("my-boton",e)}(),function(){class e extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){a.suscribe(()=>{this.render()})}render(){let e=a.ultimoGanador(),t="";t="Jugador"==e?o:r;let n=a.getConteo();console.log(n);let i=document.createElement("style"),l=document.createElement("div");l.setAttribute("class","contenedor"),i.innerHTML=`

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
                
            `,l.innerHTML=`
                    <img class="imagenResultado" src="${t}"/>
                    <div class="cuadro">
                        <my-text class="titulo" tag="h4">Score</my-text>
                        <ul>
                            <li> Vos: ${n.contadorGanadas} </li>           
                            <li> Maquina: ${n.contadorPerdidas} </li> 
                        </ul>
                    <div>
                              
            `,this.shadow.appendChild(i),this.shadow.appendChild(l)}}customElements.define("my-list",e)}(),a.init(),function(e){function t(n){history.pushState({},"",n),function(n){for(let i of c)if(i.path.test(n)){let n=i.component({goTo:t});null!=e&&(e.firstChild&&e.firstChild.remove(),null!=n&&e.appendChild(n))}}(n)}"/"==location.pathname?t("/bienvenida"):t(location.pathname)}(document.querySelector(".contenedorPrincipal"));
//# sourceMappingURL=index.fbc5943b.js.map
