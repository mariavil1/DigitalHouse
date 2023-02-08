//Mesa de trabajo

fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]

function matrizTres(array1, array2, array3){
    let matriz = [];
  
    matriz.push(array1, array2, array3)
        
    return matriz
}

matrizRecibida = matrizTres(fila1,fila2,fila3)
//console.table(matrizRecibida)

//Función que reciba por parámetro la fila y retornar la suma de la misma.

function sumaFila(matriz,filaPos){
    let suma = 0
    const fila = matriz[filaPos-1];
    for (let j = 0; j < fila.length; j++) {
        suma = suma + fila[j]
    }
    return suma
}
console.log(sumaFila(matrizRecibida,2))

/*
[4,9,2] -> 0
[3,5,7] -> posición: 1, 'Fila: 2' 
[8,1,6] -> 2
*/
function sumaDiagonales(matriz){
    let suma1 = 0
    let suma2 = 0
    let sumasDiag = []

    for (let i = 0; i < matriz.length; i++) {
        suma1 = suma1 + matriz[i][i]
    }

    sumasDiag.push(suma1)

    for (let j = (matriz.length - 1); j >= 0; j--) {
        suma2 = suma2 + matriz[j][j] 
    }

    sumasDiag.push(suma2)

    return sumasDiag
}
//console.log(sumaDiagonales(matrizRecibida))
