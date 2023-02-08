//EJERCICIO UNO

let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamérica",
    poblacion: 40000000,
  },
  {
    nombre: "Colombia",
    continente: "Sudamérica",
    poblacion: 50372000,
  },

  {
    nombre: "Brasil",
    continente: "Sudamérica",
    poblacion: 300000000,
  },
  {
    nombre: "Etiopía",
    continente: "África",
    poblacion: 15000000,
  },
  {
    nombre: "Chile",
    continente: "Sudamérica",
    poblacion: 10000000,
  },
];
/*Crear una función que reciba como parámetro él arreglo de objetos, un continente, y un número de población.
  La misma debe retornar un nuevo arreglo solo con los países que sean del continente pasado 
  por parámetro, y además, que su población sea mayor o igual a la del parámetro.
  Si no encuentra coincidencias deberá retornar un array vacío*/

const filtrarPais = (arr, continenteParm, poblacionParm) => {
  const arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].continente === continenteParm &&
      arr[i].poblacion >= poblacionParm
    ) {
      arrResult.push(arr[i]);
    }
  }

  return arrResult;
};

console.log(filtrarPais(paises, "África", 200000));

//EJERCICIO 2

/*Crear una función llamada bubbleSort que reciba como parámetros el array y un string que represente el 
sentido de ordenamiento, la función deberá realizar un ordenamiento interno del array según el orden indicado 

“ASC” lo ordenará ascendente
“DESC” lo ordenará descendente
	
Para analizar el correcto funcionamiento imprimir por consola el array antes y después de ejecutar la función.*/

let arrayDeNumeros = [1, 2, 3, 8, 9, 104, 5, 6, 7, 15];

//console.log(arrayDeNumeros)

function bubbleSort(array, orden) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (
        (orden === "DESC" && array[j] < array[j + 1]) ||
        (orden === "ASC" && array[j] > array[j + 1])
      ) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
}

bubbleSort(arrayDeNumeros, "ASC");
//console.log(arrayDeNumeros)

//EJERCICIO TRES: Dada la matriz
let matrizTres = [
  [5, 2, 2], // 0
  [2, 5, 2], // 1
  [4, 4, 5], // 2
];

/* A. Crear una función que reciba la matriz por parámetro, sume todos los valores de la fila 1 y retorne la suma.*/

function sumatoria(matriz) {
  let filaUno = matriz[1];
  let suma = 0;
  for (let i = 0; i < filaUno.length; i++) {
    suma += filaUno[i];
  }
  return suma;
}
//console.log(sumatoria(matrizTres));

/*B. Crear una función que reciba la matriz generada por parámetro y retorne un nuevo array con todos 
los valores pares de la matriz.*/

function numerosPares(matriz) {
  let listaPares = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 2 === 0) {
        listaPares.push(matriz[i][j]);
      }
    }
  }
  return listaPares;
}
//console.log(numerosPares(matrizTres));
