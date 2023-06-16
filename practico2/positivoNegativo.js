// Solicite al usuario ingresar un número. Si el número es positivo: "El numero es positivo". Si el número es igual a
// cero, "El numero es cero". Si el número es negativo, "El numero es negativo".

const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresa un numero: ');
//Debí eliminar acento en string (ingresa un número) porque figuraba extraño en consola.
if(numero > 0){
    console.log('El numero es positivo');
} else if(numero == 0) {
    console.log('El numero es cero');
} else {
    console.log('El numero es negativo');
}