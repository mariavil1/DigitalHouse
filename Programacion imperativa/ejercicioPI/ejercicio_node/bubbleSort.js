let personas = [
	{
		nombre: "Dua",
		apellido: "Lipa",
		ocupacion: "cantante",
		estatura: 173
	},
	{
		nombre: "Ariana",
		apellido: "Grande",
		ocupacion: "cantante",
		estatura: 160
	},
	{
		nombre: "Taylor",
		apellido: "Swift",
		ocupacion: "cantante",
		estatura: 180
	}
];

//console.table(personas);

/*Considerando la colección de personas que te presentamos en la demostración anterior, 
te proponemos el siguiente desafío:

¿Cómo podrías ordenar la colección, de menor a mayor, 
considerando solo la estatura? Utiliza bubble sort.*/

const bubbleSortAsc = (arrayPersonas) => {
    for (let i = 0; i < arrayPersonas.length; i++) {
        
        for (let j = 0; j < arrayPersonas.length - 1; j++) {

            if (arrayPersonas[j].estatura > arrayPersonas[j + 1].estatura ){

                let aux = arrayPersonas[j];
                arrayPersonas[j] = arrayPersonas[j + 1];
                arrayPersonas[j + 1] = aux
            }
            
        }
    }
}

console.log('ordenando...');
bubbleSortAsc(personas)
console.table(personas);

/*practica matriz

desarrollar una funcion que reciba una matriz cuadrad por parametro
debe retornar un array con os elementos pares*/
/*let matriz = [
    [14, 11, 15],  //indice 0
    [24, 34, 22],  //indice 1
    [33, 30, 21]  //indice 2

]*/

function pares(matriz) {
    let arrayPares = [];

    for (let i = 0; i < matriz.length; i ++) {
        const fila = matriz[i];
        for (let j = 0; j < fila.length; j++) {
            const elementoFinal = fila[j];
            if(elementoFinal % 2 === 0) {
                arrayPares.push(elementoFinal)
            }
        }
    }
    return arrayPares    
}
//console.log(pares(matriz));

/*desarrollar una funcion que reciba una matriz cuadrada por parametro
debe retornar una array con los elementos mayor a 20*/

function mayor(matriz) {
    return arrayMayor = [];

    for (let i = 0; i < array.length; i ++) {
        const fila = matriz[i];
        for (let j = 0; j < fila.length; j++) {
            const elementoFinal = fila[j];
            if(elementoFinal > 20) {
                arrayMayor.push(elementoFinal)
            }
        }
    }
    return arrayMayor   
}
//console.log(mayor(matriz));


/*recorrer la matriz con los elementos de la primer diagonal*/

let matrizDiagonal = [
    [14, 11, 15],  //indice 0
    [24, 34, 22],  //indice 1
    [33, 30, 21]  //indice 2
]

function mostrarDiagonal(matrizDiagonal) {
    let arrayDiagonal = []
    for (let i = 0; i < matrizDiagonal.length; i++) {
        arrayDiagonal.push(matrizDiagonal[i][i])
    }
    return arrayDiagonal;
}
//console.log(mostrarDiagonal(matrizDiagonal));


