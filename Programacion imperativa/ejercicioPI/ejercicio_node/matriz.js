let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.table(arrayMatriz)

//imprimir todos sus elementos
console.log(arrayMatriz.length)
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i])
}
//imprimir una columna
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[i][0])
}
//imprimir una fila
for(let i=0; i<arrayMatriz.length; i++) {
    console.log(arrayMatriz[0][i])
}
//para recorrer toda la matriz
//Bucle que recorre el primer array
for(let i=0; i<arrayMatriz.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(let j=0; j<arrayMatriz[i].length; j++) {
        console.log(arrayMatriz[i][j]);
    }
}

//18s CIERRE SEMANA
let numeros = [
	[10, 3, 2, 1, 4, 7],
	[5, 5, 10, 100, 4],
	[5, 125, 10, 1020, 4],
	[5, 5, 5097, 100, 4]
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

function sumatoria(arrayNumeros) {
	let numerosElegidos = 0;
	for (let i = 0; i < arrayNumeros.length; i++) {
		for (let j = 0; j < arrayNumeros[i].length; j++) {
			if (arrayNumeros[i][j]>=10 && arrayNumeros[i][j]<1000) {
				numerosElegidos += arrayNumeros[i][j]
			}
		}
	}
	return numerosElegidos
}
console.log(sumatoria(numeros));

