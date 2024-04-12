
import {initPageInicio} from "../pages/inicio/inicio"
import {initPageWelcome} from "../pages/welcome/welcome"
import {initPagePartida} from "../pages/partida/partida"
import {initPagRes} from "../pages/resultado/resultado"

// Collection de rutas.
const routes = [
    {
        path: /\/bienvenida/,
        component: initPageWelcome,
    },
    {
        path: /\/inicio/,
        component: initPageInicio,
    },
    {
        path: /\/resultado/,
        component: initPagRes,
    },
    {
        path: /\/partida/,
        component: initPagePartida,
    }
];

// Container es un elemento HTML que le pase a la hora de invocarlo.
export function initRouter(container: Element | null)
{   
    // Cambia URL sin hacer refresh
    function goTo(path)
    {
        history.pushState({}, "", path);
        handlerRoute(path);   
    }


    function handlerRoute(pathRecibida)
    { 

        for (const r of routes) 
        {

            if (r.path.test(pathRecibida)) 
            {  

                const el = r.component({ goTo: goTo });

                if (container != null)
                {
                    if (container.firstChild)
                    {
                        container.firstChild.remove();
                    }
                    
                    if (el != null)
                    {
                        container.appendChild(el);
                    }
                }
            }
        } 
    }


    if (location.pathname == "/")
    {
        goTo("/bienvenida")
    }
    else
    {
        goTo(location.pathname)
    }
        
}