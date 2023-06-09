let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";

// a. Recuperes la longitud de la cita y la guardes en tamañoDeCita. Imprimir por consola un mensaje 
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita +".");

// b. Posición del índice donde aparece substring en cita,guardar en indice. Imprimir
let indice= cita.indexOf(substring);
console.log("El indice del substring es: "+ indice);

// c. Combinando ambas citas
let citaRevisada = cita.slice(0,13) + substring.slice(0,20);
console.log(citaRevisada);

let citaRevisada2 = cita.replace("en un trigal", "");
console.log(citaRevisada2);

// RESPUESTAS
// [Running] node "c:\Users\Usuario\Famaf-IntroJS\practico1\tempCodeRunnerFile.js"
// El tamaño de la cita es: 44.
// El indice del substring es: 13
// Tres tristes tigres comen trigo
// Tres tristes tigres comen trigo 