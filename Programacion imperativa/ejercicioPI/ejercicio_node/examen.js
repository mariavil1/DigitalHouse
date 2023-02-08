/*ejercicio 1
Realizar una función que reciba por parámetro dos valores numéricos. Si ambos números
recibidos son impares se deberá retornar su división. En cambio, si ambos números recibidos
son pares entonces se deberá retornar la suma. Para cualquier otro caso, retornar null*/

function verificacionNumerosParesEImpares(numeroUno, numeroDos) {
    if (numeroUno % 2 !== 0 && numeroDos % 2 !== 0) {
        return numeroUno / numeroDos;       
    } else if (numeroUno % 2 === 0 && numeroDos % 2 === 0){
        return numeroUno + numeroDos;
    } else {
        return null;
    }
}
console.log(verificacionNumerosParesEImpares(5, 7));

/*ejercicio 2
Desarrollar una función que reciba un array de notas (representado por 4 numeros
enteros positivos) [7,6,7,8] por parámetro, calcule él promedio y retorne:
● retornar true SI él promedio es mayor a 7
● caso contrario retornar false*/

let notas = [7,6,7,8];

function calcularPromedio(arrayNotas) {
    let sumaNotas = 0;
    for (let i = 0; i < arrayNotas.length; i++) {
        sumaNotas = sumaNotas + arrayNotas[i]
    }
    let promedio = sumaNotas / arrayNotas.length
    if (promedio > 7) {
        return true;        
    } else {
        return false;
    }
}
console.log(calcularPromedio(notas));

/*ejercicio 3
Dado el siguiente array de objetos literales que representan artículos :
Realizar una función que reciba por parámetro el array de artículos, y un valor numérico
que represente al precio máximo , deberá retornar un nuevo array con los artículos que
cumplan con estas condiciones.*/

let articulos = [
{
id: 4 ,
precio : 3321,
tipo : "Deportivo",
nombre: "Zapatillas"
},
{
id: 22 ,
precio: 4482,
tipo : "Moda",
nombre: "Zapatillas"
},
{
id: 1 ,
precio: 3600,
tipo : "Moda",
nombre: "Zapatos"
},
{
id: 44 ,
precio: 8889,
tipo : "Moda",
nombre: "Remera"
},
]

function articuloDentroDelPrecio(arrayArticulos, precioMax) {
    let articulosARetornar = [];
    for (let i = 0; i < arrayArticulos.length; i++) {
        let articuloActual = arrayArticulos[i];
        if (articuloActual.precio <= precioMax) {
            articulosARetornar.push(articuloActual);
        }
    }
    return articulosARetornar;
}
console.log(articuloDentroDelPrecio(articulos, 4000));