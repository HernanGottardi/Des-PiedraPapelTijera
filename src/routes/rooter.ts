import {initPageInicio} from "../pages/inicio/inicio"
import {initPageWelcome} from "../pages/welcome/welcome"
import {initPagePartida} from "../pages/partida/partida"
import {initPagRes} from "../pages/resultado/resultado"

const BASE_PATH = "/Des-PiedraPapelTijera";

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

function isGithubPages() 
{
    return location.host.includes("github.io");
}

export function initRouter(container: Element) 
{

    function goTo(path) 
    {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handleRoute(completePath);
    }

    function handleRoute(route) 
    {

        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes) 
        {

            if (r.path.test(newRoute)) 
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
    // Se verifica la ruta inicial y se inicia el enrutador
    if (location.pathname == "/") 
    {
        goTo("/bienvenida");
    } 
    else 
    {
        goTo(location.pathname);
    }
}
