/*1. Desarrollar una función que reciba un array e indique si se encuentran ordenados de
menor a mayor o no.
a. si están ordenados retornar true
b. caso contrario retorna false
ejemplos de arrays
[4,9,2,5,6,7,1,2] // false
[1,2,3,4,5,6,7,8] // true
*/

let arrayO = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayD = [4, 9, 2, 5, 6, 7, 1, 2];

const estaOrdenado = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }
    return true
}
//console.log(estaOrdenado(arrayO));

/*Desarrollar una función que genere una matriz, 
deberá recibir por parámetros la
cantidad de filas y columnas y retornar con valores 
secuenciales numéricos.*/

function generarMatriz(filas, columnas) {
    let matriz = []
    let elementosSec = 1
    for (let i = 0; i < filas; i++) {
        matriz.push([])

        for (let j = 0; j < columnas; j++) {
            matriz[i].push(elementosSec)
            elementosSec++
        }
    }
    return matriz   
}
//console.log(generarMatriz(5, 5));

/*let matriz2x2 = [
    [1,1],
    [1,1]
]
console.table(matriz2x2);*/

const personas = [
  {
    nombre: "Arlene Barr",
    legajo: 3955,
    edad: 33,
  },
  {
    nombre: "Roslyn Torres",
    legajo: 3925,
    edad: 27,
  },
  {
    nombre: "Cleo Lopez",
    legajo: 1965,
    edad: 34,
  },
  {
    nombre: "Daniel Malone",
    legajo: 3925,
    edad: 30,
  },
  {
    nombre: "Ethel Leon",
    legajo: 1915,
    edad: 34,
  },
  {
    nombre: "Harding Mitchell",
    legajo: 1905,
    edad: 25,
  },
];

/*Desarrollar una función llamada orderAscLegajo que reciba por parámetro él
array de personas y realice un ordenamiento de forma ascendente*/

const orderAsc = (arrayPersonas) => {
    for (let i = 0; i < arrayPersonas.length; i++) {
        for (let j = 0; j < arrayPersonas.length - 1; j++) {
            if (arrayPersonas[j].legajo > arrayPersonas[j + 1].legajo) {
                let aux = arrayPersonas[j];
                arrayPersonas[j] = arrayPersonas[j + 1];
                arrayPersonas[j + 1] = aux;
            }
        }
    }
}
orderAsc(personas);
//console.table(personas);

/*4. Teniendo 3 arrays:
fila1 = [4,9,2]
fila2 = [3,5,7]
fila3 = [8,1,6]
Realiza las siguientes tareas:
- Crea una matriz con esta forma:*/
let filasSec = [
fila1 = [4,9,2],
fila2 = [3,5,7],
fila3 = [8,1,6]
]

function generarMatriz(filas, columnas) {
    let matriz = []
    let contador = 0
   
    for (let i = 0; i < filas.length; i++) {
        for (let j = 0; j < columnas.length; j++) {
        }
        matriz.push([i + 1])
        contador++
    }
    return matriz
}
console.table(generarMatriz(filasSec, 3));


