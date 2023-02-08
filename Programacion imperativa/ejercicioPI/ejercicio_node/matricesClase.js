/**
 * Declara una variable que contenga una matriz
 * de 5x5 llena de puros numeros enteros y positivos
 */

/**
 * Luego, escribe un algoritmo para sumar todos
 * los numeros en la matriz.
 */

const matriz = [
    [1, 2, 3, 4, 5],
    [7, 4, 10, 42, 5],
    [30, 9, 33, 14, 7],
    [13, 25, 53, 34, 85],
    [17, 27, 19, 21, 54]
]

const sumarMatriz = (matriz) => {
    let sumar = 0;
    for(let i = 0 ; i < matriz.length ; i++){
        for( let j = 0 ; j < matriz[i].length ; j++){
            sumar +=  matriz[i][j]
        }
    }
    return sumar
} 


// console.log(sumarMatriz(matriz));
const sumarMatriz2 = (matriz) => {
    let sumar = 0;
    for(let i = 0 ; i < matriz.length ; i++){
        sumar += sumarArray(matriz[i]);
    }
    return sumar
} 

const sumarArray = (array)=> {
    let suma = 0;
    for( let j = 0 ; j < array.length ; j++){
        suma +=  array[j];
    }
    return sumas
}
 //console.log(sumarMatriz(matriz));

// 2) Crear una función que genere una matriz de 10x10. Cada fila debe tener solo 10
// números. La matriz debe verse así:
// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// 51 52 53 54 55 56 57 58 59 60
// 61 62 63 64 65 66 67 68 69 70
// 71 72 73 74 75 76 77 78 79 80
// 81 82 83 84 85 86 87 88 89 90
// 91 92 93 94 95 96 97 98 99 100

const crearMatriz = () => {
    let matriz = [];
    let max = 10;
    for(let i = 1 ; i <= max ; i++){
        let columnas = [];
        for(let j = (i - 1) * max + 1 ; j <= max * i ; j++){
            columnas.push(j)
        }
        matriz.push(columnas)
    }
    return matriz
};
//otra forma de hacerlos
const crearMatriz2 = () => {
    let matriz = [];
    let contador = 1;
    let maximo = 4;
    //iterando las columnas
    for (let index = 0; index < maximo; index++) {
        //iterando las filas
        let columna = []
        for (let j = 0; j < maximo; j++) {
            columna.push(contador);
            contador++;
        }
        matriz.push(columna);
    }
    return matriz;
}

//console.table(crearMatriz2());

const sumarIzq_Der = (matriz) => {
    let suma = 0;
    for(let i = 0 ; i < matriz.length ; i++){
        suma += matriz[i][i]
    }
    return suma
}
const sumarDer_Izq = (matriz) => {
    let suma = 0;
    for(let i = 0 ; i < matriz.length ; i++){
        suma += matriz[i][matriz.length - 1 - i]
    }
    return suma
}
//console.log(sumarDer_Izq(crearMatriz()));

//CLASE 18S CIERRE DE SEMANA EJERCICIO DESAFIO

let semana = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950],
];
/*a) Lo que nos solicitan es dar el total de gastos en una semana. 
Recordemos que cada fila representa una semana, es decir, 
si nos indican semana 2 tenemos que sumar la fila 1 de la matriz. 
Recordar que las matrices comienzan siempre en posición 0.*/

function gastosSemana(array, semana) {
    let suma = 0;
    for (let j = 0; j < array[semana - 1].length; j++) {
      suma += array[semana - 1][j];
    }
    return suma;
  }
  //console.log(gastosSemana(semana, 1));

let arrayMariana = [2,4,6,8];

function numeroReversa(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i])
    }
}

numeroReversa(arrayMariana);

  /*b) La aplicación también tendrá una parte de estadísticas, 
para esto nos solicitan dar el total de un día en particular, 
por ejemplo del día 3, acá también tengamos en cuenta lo que ocurre 
con las filas, ya que las columnas también comienzan en 0.*/

function gastoNumDia(dia){
    let contador=0;
    for (let c=0; c<gastos.length; c++){
        contador+=gastos[c][dia]    
    }
    return contador
}

//console.log(gastoNumDia(2))

// 2) Escribir un programa que muestre en pantalla los números del 1 al 100,
// sustituyendo los múltiplos de 3 por la palabra “fizz”, los múltiplos de 5 por
// “buzz” y los múltiplos de ambos, es decir, los múltiplos de 3 y 5 —o de 15—,
// por la palabra “fizzbuzz”

const fizzbuzz = () => {
    const array_fizzbuzz = [];
    for( let i = 1 ; i <= 100 ; i++ ){
        if(i % 3 === 0 && i % 5 === 0){
            array_fizzbuzz.push('fizzbuzz')
        }else  if(i % 3 === 0){
            array_fizzbuzz.push('fizz')
        }else if(i % 5 === 0){
            array_fizzbuzz.push('buzz')
        }else{
            array_fizzbuzz.push(i)
        }
    }
    return array_fizzbuzz;
};
//console.log(fizzbuzz())

/*Dada una matriz, recorrer sus valores y sumar solo los números que estén 
por encima o sean iguales a 10, pero menores que 1000.*/

let numeros = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];


const sumarNumerosMatriz = (matriz) => {
    let sumatoria = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (numeros[i][j] >= 10 && numeros[i][j] < 1000) {
                sumatoria += matriz[i][j]
            }
        }
    }
    return sumatoria
}

//console.log(sumarNumerosMatriz(numeros))
  
  

