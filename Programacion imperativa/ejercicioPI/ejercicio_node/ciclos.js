// /*for (let i = 0; i < 4; i++) {
//     console.log('avanzar');
// }
// */
// //procurar usar este metodo

// /*let i = 0
// while (i < 4) {
//     console.log('avanzar');
//     i++
// }
// //primero pregunta cuantas veces lo hara y ahi si ejecuta


// let k = 0
// do {
//     console.log('avanzar');
//     k++
// } while (k < 4);
// //lo hace por lo menos una vez y luego pregunta cuantas veces
// */

// function cantImpares(){
//     let impares = 0
//     for (let i = 0; i <= 20; i++) {
//         if (i % 2 !== 0)
//         {
//             //impares++
//             impares = impares + 1
//         }
//     }
// //     return impares
// // }
// // console.log(cantImpares())

// // /*Crear una función llamada cantidadPares que reciba un número
// // por parámetro y retorne la cantidad de pares que hay desde él 0
// // hasta él numero inclusive*/

// function cantidadPares(numeroRecibido) {
//     let pares = 0
//     for (let i = 0; i <= numeroRecibido; i++) {
//         if (i % 2 == 0) {
//             console.log("este es par:", i);
//             pares++
//        }
//     }
//     return pares
// }
// console.log("este es el nuero de pares: ", cantidadPares(25))






function cantidadNumerosPares(limite) {
    let numerosPares = 0; 
    for (let i = 0; i <= limite; i++) {
       if (i % 2 === 0){
        numerosPares++;
       }
    }
    return numerosPares;
}

console.log(cantidadNumerosPares(20));
























// /*Crear una función que imprima los números entre el 5 y el 20,
// saltando de tres en tres.*/

// for (let i = 5; i <= 20; i+=3){
//     console.log(i);
// }

// /*Crear una función que retorne la sumatoria de todos los pares
// entre él cero y un número ingresado por parámetro*/




// /*Crear una función que retorne la sumatoria de todos los impares
// entre él cero y un número ingresado por parámetro*/

