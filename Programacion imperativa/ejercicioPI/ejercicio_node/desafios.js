/*A - Nivel 1

1 - Desarrollar una función que reciba 2 numeros y retorne la suma de ambos
2 - Desarrollar una función que reciba 2 numeros y 
     retorne la suma de ambos, si el primer parametro es mayor, 
     caso contrario retornar la resta.
3 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
     caso contrario retornar 'otra chance '.

4 - Desarrollar una función que reciba 4 numeros y calcular la suma de total
     si el el resultado es par, retornar la mitad del total,  
     caso contrario retornar el doble del total.*/

/* ejercicio 1
function suma(n1, n2) {
    return n1 + n2
}
console.log(suma(2, 2));*/

/* ejercicio 2
function suma(n1, n2) {
    if (n1 > n2) {
        return n1 + n2
    } else {
        return n1 - n2
    }
}
console.log(suma(3, 5));*/

/* ejercicio 3
function sumaTotal(n1, n2, n3, n4) {
    let sumatoria = n1 + n2 + n3 + n4
    if (sumatoria >=7) {
        return 'Aprobado'
    } else {
        return 'otro chance '
    }
}
console.log(sumaTotal(1, 2, 3, 1))*/

/* ejercico 4
function sumaNumeros(n1, n2, n3, n4) {
    let sumatoria = n1 + n2 + n3 + n4;
    if (sumatoria % 2 === 0) {
        return sumatoria / 2;
    }
    else{
        return sumatoria * 2;
    }
}
console.log(sumaNumeros(1, 1, 1, 1));*/

//NIVEL 2

let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];

/*ejercicio 1 Funcion que reciba un array de edades y retorne el promedio 
function promedio(arrayEdades) {
    let sumatoria = 0;
   
    for (let i = 0; i < arrayEdades.length; i++) {
        // no es necesario poner este console.log(arrayEdades[i]);

        sumatoria += arrayEdades[i]
    }
    return sumatoria / arrayEdades.length
}
console.log(promedio(edades))*/

/*ejercicio 2 Funcion que reciba un array de edades y retorne el mayor elemento // 80
function mayor(arrayEdades) {
    let numeroMayor = arrayEdades[0];
    for (let i = 1; i < arrayEdades.length; i++) {

        if (arrayEdades[i] > numeroMayor) {
            numeroMayor = arrayEdades[i]
        }
    }
    return numeroMayor
    
}
console.log(mayor(edades));

//ejercicio 3 Funcion que reciba un array de edades y retorne el menor elemento // 5

function menor(arrayEdades) {
    let numeroMenor = arrayEdades[0];
    for (let i = 1; i < arrayEdades.length; i++) {

        if (arrayEdades[i] < numeroMenor) {
            numeroMenor = arrayEdades[i]
        }
    }
    return numeroMenor
    
}
console.log(menor(edades));

// ejercicio 4 Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario

function numeroIgual(arrayEdades) {
    let repetido = []
    for (let i = 0; i < arrayEdades.length; i++) {
        if (repetido.includes(arrayEdades[i])) {
            return true
        }
        repetido.push(arrayEdades[i])
    }
    return false
}
console.log(numeroIgual(edades));

// ejercicio 5 Funcion que reciba un array de edades y una edada buscar, retorne el primer índice si encuentra coincidencia o null caso contrario

let edades2 = [5, 8, 4, 10];

const edadBuscar = (arrayEdades, edad) => {
  for (let i = 0; i < arrayEdades.length; i++) {
    if (arrayEdades[i] === edad) {
      return i;
    }
  }
  return null;
};
console.log(edadBuscar(edades2, 4));

/* ejercicio 6 Funcion que reciba un array de edades y retorne un objeto literal con dos propiedades que contengan un array
{
    edadesMenor : "// edades menor a 18",  
    edadesMayor : "// edades menor a 18"
 }*/

function objetoLiteral(edades) {
  let edadesMenor = [];
  let edadesMayor = [];
  for (let posicion = 0; posicion < edades.length; posicion++) {
    if (edades[posicion] < 18) {
      edadesMenor.push(edades[posicion]);
    } else {
      edadesMayor.push(edades[posicion]);
    }
  }
  let objeto = {
    edadesMenor : edadesMenor,
    edadesMayor,
  }
  return {...objeto};
}

console.log(objetoLiteral(edades));
let edadesFinal = [30, 25, 16, 22, 10, 5];

//CLASE 16 DE NOVIEMBRE
//A partir de el siguiente array de edades nos solicitan realizar lo siguiente:
//Obtener en un nuevo array las edades menores a 18.

//const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

/*function obtenerMenores(arrayEdades){

    let menores = []

    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] < 18) {
            menores.push(arrayEdades[i])
        }
    } 
 }
 console.log(obtenerMenores(edades));*/

//cuando me piden creacion de dos arrays, un poco mas dificil

/*function obtenerMenores(arrayEdades){

    let menores = []
    let mayores = []

    for (let i = 0; i < arrayEdades.length; i++) {
        if (arrayEdades[i] < 18) {
            menores.push(arrayEdades[i])
        }else{
            mayores.push(arrayEdades[i])
        }
    }

//entonces si me dice el enunciado que retorne un objeto literal seguiria esto
    return {
        propMenores : menores,
        propMayores : mayores
    }
    
 }
console.log(obtenerMenores(edades));*/

// ejercicio Incrementar en 1 todas las edades.

/*function incrementar(arrayEdades){
    for (let i = 0; i < arrayEdades.length; i++) {
        arrayEdades[i]++
    }
}

incrementar(edades)
console.table(edades);*/

/*ENUNCIADO EJERCICO DE CLASE
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: 3253.40,
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: 3229.45,
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: 1360.19,
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: true,
      saldo: 3627.12,
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: 1616.52,
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: 1408.68,
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]*/

//Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

/*function menores2(arrayCuentasParas) {
    let menores = []
    for (let i = 0; i < arrayCuentasParas.length; i++) {
        if (arrayCuentasParas[i].edadTitular < 30) {
            menores.push(arrayCuentasParas[i])
        }
    }
    return menores 
}
console.log(menores2(arrayCuentas));*/

//obtener un array con las cuentas habilitadas

/*function cuentasHabilitadas(arrayCuentas){
    let cuentasHab = []
    for (let i = 0; i < arrayCuentas.length; i++) {
        if (arrayCuentas[i].estaHabilitada === true){
            cuentasHab.push(arrayCuentas[i])
        }
    }
    return cuentasHab;
}
console.log(cuentasHabilitadas(arrayCuentas));*/

//Obtener la cuenta con el menor saldo.

/*function saldoMenor(array){
    let cuenta = [];
    let saldo = array[0].saldo;
    for (let i = 0; i < array.length; i++) {
        if (array[i].saldo < saldo){
            saldo = array[i].saldo
            cuenta = array[i]
        }
    }
    return cuenta
}
console.table(saldoMenor(arrayCuentas));*/

/*como hacerlo un poco mas abreviado

function saldoMenor(arraySaldo) {

    let saldo = arraySaldo[0];

    for (let i = 0; i < arraySaldo.length; i++) {

        if (arraySaldo[i].saldo < saldo.saldo) {
            saldo = arraySaldo[i]
        }
    }
    return saldo
}
console.table(saldoMenor(arrayCuentas))
*/
