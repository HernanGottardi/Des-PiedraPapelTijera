import {state} from "./state"

import { initText } from "./components/texto";
import { initBoton } from "./components/boton";
import { initLista } from "./components/lista";

import {initRouter} from "./routes/rooter"

(function()
{
    initText();
    initBoton();
    initLista();

    state.init();

    const contenedor = document.querySelector(".contenedorPrincipal") as HTMLElement;
    initRouter(contenedor);
    
})();