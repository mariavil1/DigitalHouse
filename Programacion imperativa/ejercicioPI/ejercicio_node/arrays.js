/*1) Crear un array llamado misMascotas
2) Dentro de este array crearemos un objeto literal para cada mascota. Cada
objeto deberá tener:
● nombre
● raza
● edad
● sonido
Cuando esté listo, verificar en consola
3) Deberemos crear una función que se llame aumentarEdad que aumente la
edad de cada animal en 1.*/


let misMascotas = [
    {
        nombre : 'Tom',
        raza : 'Dogo',
        edad : 10,
        sonido : 'Guau guau'
    },
    {
        nombre : 'Nico',
        raza : 'pincher',
        edad : 4,
        sonido : 'Guaf guaf'
    },
    {
        nombre : 'mona',
        raza : 'criolla',
        edad : 12,
        sonido : 'Gua gua'
    }
]

console.table(misMascotas);

/*function aumentarEdad(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
        //arrayMascotas[i].edad++ o puede ser asi:
        arrayMascotas[i].edad = arrayMascotas[i].edad + 1
    }
}

console.log('EJECUTANDO aumentarEdad...')
aumentarEdad(misMascotas)

console.table(misMascotas);*/

/*4) Ahora debemos crear otra función, que se llame aumentarEdad2, que va a
hacer un trabajo más fino:
● Si la mascota tiene menos de 6 años, debe aumentar su edad en 1*/


/*function aumentarEdad2(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad++
        }
    }
}

console.log('EJECUTANDO aumentarEdad...')
aumentarEdad2(misMascotas)

console.table(misMascotas);*/

/*● Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2*/

/*function aumentarEdad3(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad++
        } else if(arrayMascotas[i].edad >= 6 && arrayMascotas[i].edad <= 10){
            arrayMascotas[i].edad = arrayMascotas[i].edad + 2
        }
    }
}

console.log('EJECUTANDO aumentarEdad...')
aumentarEdad3(misMascotas)

console.table(misMascotas);*/


/*● Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad*/

function aumentarEdad4(arrayMascotas){
    for (let i = 0; i < arrayMascotas.length; i++) {
        if (arrayMascotas[i].edad < 6) {
            arrayMascotas[i].edad++
        }else if(arrayMascotas[i].edad >= 6 && arrayMascotas[i].edad <= 10){
            arrayMascotas[i].edad = arrayMascotas[i].edad + 2
        }else{
            arrayMascotas[i].edad = arrayMascotas[i].edad + (arrayMascotas[i].edad / 2)
            //arrayMascotas[i].edad += (arrayMascotas.edad[i] / 2)
        }
    }
}

console.log('EJECUTANDO aumentarEdad...')
aumentarEdad4(misMascotas)

console.table(misMascotas);

/*5) Ahora crearemos una función que va a generar un identificador (ID) en cada
objeto, que será secuencial y que empezará en 1.*/
