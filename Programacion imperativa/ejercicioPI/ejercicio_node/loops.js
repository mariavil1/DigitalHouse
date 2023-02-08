function loopDePares(number){
    let numeroPar = 0;
    for( let vuelta = 0; vuelta <= 100; vuelta++){
        if (vuelta + (number) %2 === 0)
        return "El numero es par"
    }
}
console.log(loopDePares(2));


/*function cantidadNumerosPares(limite) {
    let numerosPares = 0; 
    for (let i = 0; i <= limite; i++) {
       if (i % 2 === 0){
        numerosPares++;
       }
    }
    return numerosPares;
}

console.log(cantidadNumerosPares(20));*/