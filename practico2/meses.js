// Escriba un programa que solicite al usuario ingresar un número entero del 1 al
// 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
// marzo, etc. Imprimir por consola la cantidad de días que tiene el mes bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
// Por ejemplo: si el número ingresado es 1, su programa imprimirá “La cantidad
// de dias del mes de enero es 31”.
// NOTAS:
// ● Nota que el valor de [mes] no es el numero ingresado si no el almacenado en la estructura de datos elegida.
// ● Para el alcance de este ejercicio, podemos pensar que febrero siempre
// tiene 28 días.
const readlineSync = require('readline-sync');
const numeroMes = readlineSync.question('Ingresa un número entero del 1 al 12 representando los meses de un año: ');

const meses = [{number:1, mes:"Enero", cantidadDeDias:31},{number:2, mes:"Febrero", cantidadDeDias:28}, {number:3, mes:"Marzo", cantidadDeDias:31}, {number:4, mes:"Abril", cantidadDeDias:30} ,{number:5, mes:"Mayo", cantidadDeDias:31} ,{number:6 , mes:"Junio", cantidadDeDias:30}, {number:7 , mes:"Julio", cantidadDeDias:31}, {number:8 , mes:"Agosto" ,cantidadDeDias:31}, {number: 9, mes:"Septiembre", cantidadDeDias:30}, {number:10 , mes:"Octubre" , cantidadDeDias:31}, {number:11 , mes:"Noviembre" , cantidadDeDias:30}, {number:12 ,mes:"Diciembre", cantidadDeDias:31}];

for(let i = 0; i < meses.length; i++){
    if(numeroMes == meses[i].number){
        let numero = numeroMes -1
        console.log(`La cantidad de dias del mes de ${meses[numero].mes} es ${meses[numero].cantidadDeDias}`); 
        break;   
    }else{}
}

 