// En este ejercicio, queremos que imprima una cuenta regresiva de lanzamiento de un
// cohete a Marte. Dicha cuenta irá desde 10 hasta el despegue. Específicamente,
// queremos que: 
// - Si el número es 10, imprima "Cuenta regresiva 10" en el párrafo.
// - Si el número es 0, imprime "Lanzamiento!", al párrafo.
// - Para cualquier otro número, imprima solo el número al párrafo.
for(let i = 10 ; i >= 0; i--){
    if(i==10){
        console.log("Cuenta regresiva 10");
    }else if(i==0){
        console.log("Lanzamiento");
    }else{
        console.log(`${i}`);
    };
};