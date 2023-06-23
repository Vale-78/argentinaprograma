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
let persRechazadas= `La lista de invitados rechazados es: `;
console.log(persRechazadas);

    for(let i = 0; i < rechazados.length; i++){      
        for(let j = 0 ; j < rechazados.length-i; j++){
            if(rechazados[j]> rechazados[j+1]) {
                [rechazados[j], rechazados[j+1]]=[rechazados[j+1], rechazados[j]];
            }
        }  
     console.log(rechazados[i]);   
    }


let persAdmitidas = `La lista de invitados admitidos es: `; 
console.log(persAdmitidas);
    
    for(let i = 0; i < admitidos.length; i++){      
        for(let j = 0 ; j < admitidos.length-i; j++){
            if(admitidos[j]> admitidos[j+1]) {
                [admitidos[j], admitidos[j+1]]=[admitidos[j+1], admitidos[j]];
            }
        }   
     
    }
    console.log(admitidos);  
