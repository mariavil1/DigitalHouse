const suma = (a, b) => a + b
const resta = (a, b) => a - b
const division = (a, b) => a / b
const multiplicacion = (a, b) => a * b

// 1. Crear una función que se llame cuadradoDeUnNumero, la cual recibe un
// número como parámetro y deberá retornar ese número elevado al cuadrado.
// Importante: cuadradoDeUnNumero() deberá utilizar la función multiplicar() para
// calcular el cuadrado del parámetro ingresado a cuadradoDeUnNumero()

//const cuadradoDeUnNumero = num => multiplicacion(num, num)
//console.log(cuadradoDeUnNumero(5))

let cuadradoDeUnNumero = function (numero){
    return multiplicacion(numero, numero)
}
console.log(cuadradoDeUnNumero(4));

//Crear la función promedioDeTresNumeros, la misma deberá calcular el promedio
//de 3 números, que serán ingresados por parámetro.
//Importante: promedioDeTresNumeros() deberá utilizar algunas funciones
//previamente creadas de nuestra calculadora.

//const promedioDeTresNumeros = (num1, num2, num3) => division(num1 + num2 + num3, 3)
//console.log(promedioDeTresNumeros(4,3,2))

let promedioDeTresNumeros = function (numero1, numero2, numero3){
    return division (numero1 + numero2 + numero3, 3)
}
console.log(promedioDeTresNumeros(4, 10, 6));

// 3. Crear la función calcularPorcentaje. Esta recibirá dos parámetros: el número
// total y el porcentaje que se le quiere calcular. Deberá retornar el x% del total.
// Ejemplo: calcularPorcentaje(300, 15) debe retornar 45, ya que es el 15% de 300.
// Importante: calcularPorcentaje() deberá utilizar algunas funciones previamente
// creadas de nuestra calculadora.

//const calcularPorcentaje = (a, b) =>  division(multiplicacion(a, b), 100);
//console.log(calcularPorcentaje(300, 15));

let calcularPorcentaje = function (a, b){
    return division(multiplicacion(a, b), 100);
}
console.log(calcularPorcentaje(300, 15));

// 4. Crear una función GeneradorDePorcentaje que recibe dos parámetros y deberá
// retornar el porcentaje del primero con respecto al segundo.
// Importante: GeneradorDePorcentaje() deberá utilizar algunas funciones
// previamente creadas de nuestra calculadora.
// Ejemplo: GeneradorDePorcentaje(2, 200) deberá retornar 1, ya que 2 es el 1% de
// 200.

//const generadorDePorcentaje = (a, b) => division(multiplicacion(a, 100), b);
//console.log(generadorDePorcentaje(45, 300))

let generadorPorcentaje = function (a, b){
    return division(multiplicacion(a, 100), b);
}
console.log(generadorPorcentaje(5, 80));



function esPar(num){
    if (num % 2 === 0 ) {
        return true
    } else {
        return false
    }
}
console.log(esPar(45))


const esPar1 = nume => nume % 2 === 0
console.log(esPar1(100))