

export function initText ()
{
    class Text extends HTMLElement 
    {
        shadow: ShadowRoot;
        tags: string[] = ["h1", "p"];
        tag: string = "p";

        constructor() 
        {
            super();   
            this.shadow = this.attachShadow({mode: "open"});

            this.tag = this.getAttribute("tag") || this.tag;
            this.render();
        }

        render() 
        {
            const rootEl = document.createElement(this.tag);
            const style = document.createElement("style");

            style.innerHTML = `
                
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
                    text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5); /* Definición de la sombra */
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
                    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); /* Definición de la sombra */
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
            ` 

            rootEl.textContent = this.textContent;
            this.shadow.appendChild(style);
            this.shadow.appendChild(rootEl);

        }
    }

    customElements.define("my-text", Text);

}