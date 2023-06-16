//Solicite al usuario ingresar su edad. Si la edad es mayor o igual a 18,"Eres mayor de edad". De lo contrario,
//  "Eres menor de edad". 

const readlineSync = require('readline-sync');
const edad = readlineSync.question('Ingresa tu edad: ');
if(edad >= 18){
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}
