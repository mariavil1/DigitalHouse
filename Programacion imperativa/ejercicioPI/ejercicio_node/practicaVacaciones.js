/*CALCULADORA
let sumar = (a, b) => a + b;
let restar = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

console.log('probando testeo calculadora')

console.log(sumar(5, 2));
console.log(restar(8, 4));
console.log(multiplicar(2, 2));
console.log(dividir(10, 2));
console.log(dividir(2, 0));

let cuadradoDeUnNumero = numero => multiplicar (numero, numero);
console.log(cuadradoDeUnNumero(2))

let promedioDeTresNumeros = (num1, num2, num3) => dividir (num1 + num2 + num3, 3);
console.log(promedioDeTresNumeros(2, 2, 2))

let calcularPorcentaje = (numeroUno, numeroDos) => dividir(multiplicar(numeroUno, numeroDos), 100)
console.log(calcularPorcentaje(300, 15))

let generadorDePorcentaje = (a, b) => dividir(multiplicar(a, 100), b);
console.log(generadorDePorcentaje(2, 200))
*/
/* let edad = 18 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

if(edad % 2 !== 0) {
    console.log("sabias que tu edad es impar?")

}

if(edad < 18 && edad > 1) {
    console.log("No puede pasar al bar.")
} else if (edad <= 21 && edad >= 18){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else if (edad <= 0){
    console.log("Error, edad inválida. Por favor ingrese un número válido.")
} else {
    console.log("Puede pasar al bar y tomar alcohol; felicitaciones por tu mayoria de edad")
}
*/

let totalAPagar = (vehiculo, litrosConsumidos)
let multiplicar = (litrosConsumidos * precioLitro)

if (vehiculo = 'coche') {
    precioLitro = 86
} else if (vehiculo = 'moto'){
    precioLitro = 70
} else if (vehiculo = 'autobus'){
    precioLitro = 55
}

if (litrosConsumidos = 0 && litrosConsumidos <= 25) {
    totalAPagar + 50    
} else if (litrosConsumidos > 25) {
    totalAPagar + 25
}

console.log(totalAPagar(moto, 1))

