let estadoInicialCelularCesar;

function voltearCelular(estadoCelular){
    estadoCelular = !estadoCelular;
    return estadoCelular;
}

estadoInicialCelularCesar = true;
let estadoFinalCelularMariana = voltearCelular(false);
let estadoFinalCelularCesar = voltearCelular(estadoInicialCelularCesar);
// console.log("el resultado Cesar es: ", estadoFinalCelularCesar);
// console.log("el celular Mariana quedo con orientacion: ", estadoFinalCelularMariana);





function contarDedos(valorTotalDedosIzquierda, valorTotalDedosDerecha){
    let manoIzquierda = '';
    for(let dedo=1; dedo <= valorTotalDedosIzquierda; dedo++){
        manoIzquierda += ("izquierda: dedo numero:" + dedo + '\n');
    }
    let manoDerecha = '';
    for(let dedo=1; dedo <= valorTotalDedosDerecha; dedo++){
        manoDerecha += ("derecha: dedo numero:" + dedo + '\n');
    }
    return manoIzquierda + manoDerecha;
}

// let manoNormal = 5;
// let manoMochita = 4;

// console.log(contarDedos(manoMochita, manoNormal));

function contarDedosArray(valorTotalDedosIzquierda, valorTotalDedosDerecha){
    let manos = [];
    for(let dedo=1; dedo <= valorTotalDedosIzquierda; dedo++){
        manos.push("izquierda: dedo numero:" + dedo);
    }
    for(let dedo=1; dedo <= valorTotalDedosDerecha; dedo++){
        manos.push("derecha: dedo numero:" + dedo);
    }
    return manos;
}

let manoNormal = 5;
let manoMochita = 4;

console.log(contarDedosArray(manoMochita, manoNormal));





