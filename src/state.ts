
type Game = 
{
    computerPlay ,
    myPlay
}

const state = 
{
    data: 
    {
        history: [] = [],
    },

    listeners: [],

    conteo: {contadorGanadas: 0, contadorPerdidas: 0},

    init()
    {
        const localData = localStorage.getItem("historial-juego");
        
        if (localData === null)
        {
            console.log("El Historial NO existia")
            localStorage.setItem("historial-juego", JSON.stringify(this.data.history));
        } 
        else 
        {
            console.log("El Historial existia")
            const parsedHistory = JSON.parse(localData);
            this.data.history = parsedHistory;
        }
    },

    init_history (localStorage)
    {
        console.log(localStorage)
    },
    
    getConteo () 
    {
        return this.conteo;        
    },

    getHistory()
    {
        return this.data.history;
    },

    setHistory(play:Game)
    {

        const currenHistory = this.getHistory();
        currenHistory.push(play);

        this.data.history = currenHistory;

        localStorage.setItem("historial-juego", JSON.stringify(currenHistory));

        this.ActualizarContadores();
        
        for (const cb of this.listeners)
        {
            cb();
        }

    },

    suscribe(callback)
    {
        this.listeners.push(callback)
    },

    ActualizarContadores() 
    {
        let contadorGanadasActual = 0;
        let contadorPerdidasActual = 0;

        for (const h of this.data.history)
        {
            // Caso ganar
            if ((h.myPlay === "Papel" && h.computerPlay === "Piedra") ||
                (h.myPlay === "Piedra" && h.computerPlay === "Tijera") ||
                (h.myPlay === "Tijera" && h.computerPlay === "Papel")) {
                    contadorGanadasActual++;
            }
            // Caso perder
            else if ((h.myPlay === "Piedra" && h.computerPlay === "Papel") ||
                     (h.myPlay === "Tijera" && h.computerPlay === "Piedra") ||
                     (h.myPlay === "Papel" && h.computerPlay === "Tijera")) {
                    contadorPerdidasActual++;      
            }
        }

        this.conteo = { contadorGanadas: contadorGanadasActual, contadorPerdidas: contadorPerdidasActual };

    },

    ultimoGanador() 
    {
        const partidas = state.getHistory();
        const cantidadPartidas = partidas.length;
        const ganador = partidas[cantidadPartidas - 1]

        if ((ganador.myPlay === "Papel" && ganador.computerPlay === "Piedra") ||
                (ganador.myPlay === "Piedra" && ganador.computerPlay === "Tijera") ||
                (ganador.myPlay === "Tijera" && ganador.computerPlay === "Papel")) {
                return "Jugador";
            }
            // Caso perder
            else if ((ganador.myPlay === "Piedra" && ganador.computerPlay === "Papel") ||
                     (ganador.myPlay === "Tijera" && ganador.computerPlay === "Piedra") ||
                     (ganador.myPlay === "Papel" && ganador.computerPlay === "Tijera")) {
                     return "Maquina";      
            }
            else
            {
                return "Maquina";
            }


    }
    
    

}


export {state};

