
const readlineSync2 = require('readline-sync');
const numeroJugadas = readlineSync2.question('Elige "1" si quieres jugar una vez, "2" si quieres que se jueguen dos partidas,o "3" si prefieres que gane el mejor de 3, en este caso ganará quien tenga al menos dos partidas ganadas: ');

const piedra = "piedra";
const papel = "papel";
const tijeras = "tijeras";
ganaPC= 0;
ganaUsuario=0;
let partidosJugados = 0;

if(numeroJugadas==1 || numeroJugadas==3){
    while(ganaPC < numeroJugadas && ganaUsuario < numeroJugadas){       
            function random(min, max) {
                return Math.floor((Math.random() * (max - min + 1)) + min);
            }
            let aleatorio = random(0,2);
            let jugadaCompu;

            function obtenerJugadaComputadora(){
                if(aleatorio==0){
                    jugadaCompu = piedra;
                } else if(aleatorio==1){
                    jugadaCompu = papel;
                }else {
                    jugadaCompu = tijeras;
                }
            return jugadaCompu;
            }

            const readlineSync = require('readline-sync');
            const eleccionJugador = readlineSync.question('Elige : piedra, papel o tijeras: ').toLowerCase();     

            function determinarGanador(usuario,compu){
                let resultado;
                if(usuario===compu){
                    resultado = "Empate";
                    
                }else if((usuario===piedra && compu ===tijeras) || (usuario===papel && compu === piedra ) || (usuario===tijeras && compu === papel)){
                    resultado = "Gana el usuario";
                    ganaUsuario = ganaUsuario +1;
                }else{
                    resultado = "Gana la computadora";
                    ganaPC=ganaPC +1;
                }
                return resultado
            }

            let compuElige = obtenerJugadaComputadora();
            let resultadoFinal = determinarGanador(eleccionJugador,compuElige);

            console.log(`La computadora eligió: ${jugadaCompu}, el usuario eligió: ${eleccionJugador}. ${resultadoFinal}.`);
        }
}else if(numeroJugadas==2){
    
    while(partidosJugados < numeroJugadas){       
        function random(min, max) {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        }
        let aleatorio = random(0,2);
        let jugadaCompu;

        function obtenerJugadaComputadora(){
            if(aleatorio==0){
                jugadaCompu = piedra;
            } else if(aleatorio==1){
                jugadaCompu = papel;
            }else {
                jugadaCompu = tijeras;
            }
        return jugadaCompu;
        }

        const readlineSync = require('readline-sync');
        const eleccionJugador = readlineSync.question('Elige : piedra, papel o tijeras: ').toLowerCase();     

        function determinarGanador(usuario,compu){
            let resultado;
            if(usuario===compu){
                resultado = "Empate";
                partidosJugados = partidosJugados +1;
                
            }else if((usuario===piedra && compu ===tijeras) || (usuario===papel && compu === piedra ) || (usuario===tijeras && compu === papel)){
                resultado = "Gana el usuario";
                ganaUsuario = ganaUsuario +1;
                partidosJugados = partidosJugados +1;
            }else{
                resultado = "Gana la computadora";
                ganaPC=ganaPC +1;
                partidosJugados = partidosJugados +1;
            }
            return resultado
        }

        let compuElige = obtenerJugadaComputadora();
        let resultadoFinal = determinarGanador(eleccionJugador,compuElige);
        console.log(`La computadora eligió: ${jugadaCompu}, el usuario eligió: ${eleccionJugador}. ${resultadoFinal}.`);
    }
}

 console.log(`Usuario gana ${ganaUsuario} veces. Computadora gana ${ganaPC} veces`);

if(ganaUsuario===ganaPC){
    console.log(`Resultado Final : Empate`);
}else if(ganaUsuario > ganaPC){
    console.log(`Resultado Final : Ganaste, felicitaciones!!! .`);
}else{
    console.log(`Resultado Final : Lo siento, Gana la Computadora.`);
};