

export function initBoton ()
{
    class Boton extends HTMLElement
    {
        constructor ()
        {
            super();
            this.render();
        }
    
        render() 
        {
            const shadow = this.attachShadow({ mode: "open" });

            const contenedor = document.createElement("div");

            const boton = document.createElement("button");
            boton.setAttribute("class", "botoncito")
    
            const style = document.createElement("style");
            style.innerHTML = `

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
            `;

            boton.textContent = this.textContent;

            contenedor.appendChild(boton)
            contenedor.appendChild(style)
    
            shadow.appendChild(contenedor);
        }
    }
    
    customElements.define("my-boton", Boton);

}


    
