// Escriba un programa que solicite al usuario ingresar un número entero del 1 al
// 12 representando los meses de un año; donde 1 es enero, 2 es febrero, 3 es
// marzo, etc. Imprimir por consola la cantidad de días que tiene el mes bajo el siguiente formato:
// "La cantidad de dias del mes de [mes] es [cantidadDeDias]"
const readlineSync = require('readline-sync');
const numeroMes = readlineSync.question('Ingresa un número entero del 1 al 12 representando los meses de un año: ');

const meses = [{mes:"Enero", cantidadDeDias:31},{mes:"Febrero", cantidadDeDias:28}, {mes:"Marzo", cantidadDeDias:31}, {mes:"Abril", cantidadDeDias:30} ,{mes:"Mayo", cantidadDeDias:31} ,{mes:"Junio", cantidadDeDias:30}, {mes:"Julio", cantidadDeDias:31}, {mes:"Agosto" ,cantidadDeDias:31}, {mes:"Septiembre", cantidadDeDias:30}, {mes:"Octubre" , cantidadDeDias:31}, {mes:"Noviembre" , cantidadDeDias:30}, {mes:"Diciembre", cantidadDeDias:31}];

  if(numeroMes == 1){
    console.log(`La cantidad de dias del mes de ${meses[0].mes} es ${meses[0].cantidadDeDias}`); 
 } else if(numeroMes == 2){
    console.log(`La cantidad de dias del mes de ${meses[1].mes} es ${meses[1].cantidadDeDias}`); 
}else if(numeroMes == 3){
    console.log(`La cantidad de dias del mes de ${meses[2].mes} es ${meses[2].cantidadDeDias}`); 
}else if(numeroMes == 4){
    console.log(`La cantidad de dias del mes de ${meses[3].mes} es ${meses[3].cantidadDeDias}`); 
}else if(numeroMes == 5){
    console.log(`La cantidad de dias del mes de ${meses[4].mes} es ${meses[4].cantidadDeDias}`); 
}else if(numeroMes == 6){
    console.log(`La cantidad de dias del mes de ${meses[5].mes} es ${meses[5].cantidadDeDias}`); 
}else if(numeroMes == 7){
    console.log(`La cantidad de dias del mes de ${meses[6].mes} es ${meses[6].cantidadDeDias}`); 
}else if(numeroMes == 8){
    console.log(`La cantidad de dias del mes de ${meses[7].mes} es ${meses[7].cantidadDeDias}`); 
}else if(numeroMes == 9){
    console.log(`La cantidad de dias del mes de ${meses[8].mes} es ${meses[8].cantidadDeDias}`); 
}else if(numeroMes == 10){
    console.log(`La cantidad de dias del mes de ${meses[9].mes} es ${meses[9].cantidadDeDias}`); 
}else if(numeroMes == 11){
    console.log(`La cantidad de dias del mes de ${meses[10].mes} es ${meses[10].cantidadDeDias}`); 
}else if(numeroMes == 12){
    console.log(`La cantidad de dias del mes de ${meses[11].mes} es ${meses[11].cantidadDeDias}`); 
};
