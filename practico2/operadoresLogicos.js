// 3. Escribe un programa que solicite al usuario ingresar un número entero.
//A continuación, evalúa las siguientes condiciones:
// -  mensaje: "El numero es positivo y par".
// -"El numero es positivo e impar".
// - "El numero es negativo".
// - "El numero escero".
const readlineSync = require('readline-sync');
const numero = readlineSync.question('Ingresa un numero entero: ');
//Debí eliminar acento en string (ingresa un número) porque figuraba extraño en consola.
if(numero >0 && numero%2 === 0){
    console.log('El numero es positivo y par');
} else if(numero >0 && numero%2 !== 0) {
    console.log('El numero es positivo e impar');
} else if(numero < 0) {
    console.log('El numero es negativo');
} else {
    console.log('El numero es cero ');
}