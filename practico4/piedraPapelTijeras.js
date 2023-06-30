function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
let aleatorio = random(0,2);
let jugadaCompu;

function obtenerJugadaComputadora(){
    if(aleatorio==0){
        jugadaCompu = 'Piedra';
    } else if(aleatorio==1){
        jugadaCompu = 'Papel';
    }else {
        jugadaCompu = 'Tijeras';
    }
 return aleatorio;
}

const readlineSync = require('readline-sync');
const numero = readlineSync.question('Elige "0" para piedra, "1" para papel o "2" si quieres tijeras: ');

function obtenerJugadaUsuario(){
    if(numero==0){
        jugadaUsuario = 'Piedra';
    } else if(numero==1){
        jugadaUsuario = 'Papel';
    }else {
        jugadaUsuario = 'Tijeras';
    }
    return numero;
}


function determinarGanador(usuario,compu){
    let resultado;
    if(usuario==compu){
        resultado = "Empate"
        
    }else if((usuario==0 && compu ==2) || (usuario==1 && compu == 0 ) || (usuario==2 && compu == 1)){
        resultado = "Gana el usuario";
    }else{
        resultado = "Gana la computadora";
    }
    return resultado
}

let usuarioElige = obtenerJugadaUsuario();
let compuElige = obtenerJugadaComputadora();
let resultadoFinal = determinarGanador(usuarioElige,compuElige );
console.log(`La computadora eligió: ${jugadaCompu},`);
console.log(`El usuario eligió: ${jugadaUsuario},`);
console.log(`El resultado fue: ${resultadoFinal}.`);