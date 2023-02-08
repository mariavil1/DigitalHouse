function tablaDeMultiplicar (numero) {
    for (let tabla = 1; tabla <= 10; tabla++){
        console.log(numero + " * " + tabla + " = " + (tabla * numero))
    }
}


//tablaDeMultiplicar(5)

function fibonacci (limite) {
    let a = 0;
    console.log(a);
    let b = 1;
    console.log(b);
    for (let i = 2; i<=limite; i++){
        c = a+b;
        console.log(c);
        a = b;
        b = c;
    }
}










function fibonacci2(limite){
    let a = 0;
    console.log(a);
    let b = 1;
    console.log(b);
    for(let numero = 2; numero<=limite; numero++){
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
}
fibonacci2(1);