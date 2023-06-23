// queremos que tomes una lista de nombres almacenados en un arreglo y los coloques en una lista de
// invitados. no queremos dejar entrar a Jose y Sofia 
// La lista de personas es la siguiente: Jose, Maria, Juan, Andres, Lionel, Sofia, Leandro y Emilia.
// Específicamente, queremos que:● Escribas un bucle que itere desde 0 hasta la longitud del arreglo personas.
// ● Durante cada iteración del ciclo, verifique si el elemento del arreglo actual es igual a "Jose" o "Sofia" usando una declaración condicional:
// - Si es así, concatene el elemento al arreglo de rechazados. - Si no es así, concatene el elemento al arreglo de admitidos.
// ● Finalmente, queremos que escribas dos bucles más; uno para imprimir la lista de invitados admitidos y otra para imprimir la lista de invitados rechazados:

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
    let persRechazadas= `La lista de invitados rechazados es: `;
    console.log(persRechazadas);
   
    for(let i = 0; i < rechazados.length; i++){  
        console.log(rechazados[i]);
    }

    let persAdmitidas = `La lista de invitados admitidos es: `;
    console.log(persAdmitidas);
    
    for(let i = 0; i < admitidos.length; i++){
       console.log(admitidos[i]);
    }
