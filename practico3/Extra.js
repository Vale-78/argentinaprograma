// EXTRA: Después de completar con éxito las tareas anteriores, te quedarán dos
// listas de nombres, los admitidos y los rechazados pero estarán desordenados. El
// desafío es que puedas repetir el inciso anterior, pero esta vez imprimiendo los
// nombres de manera ordenada alfabéticamente. Deberás agregar la palabra
// “ordenada” posterior a la palabra lista, es decir, para el caso de los admitidos
// deberás imprimir: “La lista ordenada de invitados admitidos es:”.
const personas = ["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];

for(let i = 0; i < personas.length; i++){

    if((personas[i] == "Jose") || (personas[i] == "Sofia")){
        let rechazado = personas[i];
        rechazados.push(rechazado);
    } else {
        let admitido = personas[i];
        admitidos.push(admitido);
    }

}
let rechazados2 = rechazados.sort();
let admitidos2 = admitidos.sort();
console.log(`La lista ordanada de invitados rechazados es: ${rechazados2}.`);
console.log(`La lista ordanada de invitados admitidos es: ${admitidos2}.`);
