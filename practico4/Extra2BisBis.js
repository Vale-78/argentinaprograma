

const readlineSync = require('readline-sync');
const numeroJugadas = readlineSync.question('Elige "1" si quieres jugar una vez, "2" si quieres que se jueguen dos partidas,o "3" si prefieres que gane el mejor de 3, en este caso ganará quien tenga al menos dos partidas ganadas: ');

if(numeroJugadas == 1 || numeroJugadas == 2 || numeroJugadas == 3){
    
    const piedra = "piedra";
    const papel = "papel";
    const tijeras = "tijeras";
    ganaPC= 0;
    ganaUsuario=0;
    let partidosJugados = 0;

        while(((numeroJugadas==3) && (ganaPC < numeroJugadas && ganaUsuario < numeroJugadas)) || ((numeroJugadas==1 || numeroJugadas==2) && (partidosJugados < numeroJugadas))){

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
        console.log(`Usuario gana ${ganaUsuario} veces. Computadora gana ${ganaPC} veces`);
       
        if(ganaUsuario===ganaPC){
            console.log(`Resultado Final : Empate`);
        }else if(ganaUsuario > ganaPC){
            console.log(`Resultado Final : Ganaste, felicitaciones!!! .`);
        }else{
            console.log(`Resultado Final : Lo siento, Gana la Computadora.`);
        }
    } else {
        console.log(`El número ingresado no es válido. Vuelve a intentarlo`);
    }


