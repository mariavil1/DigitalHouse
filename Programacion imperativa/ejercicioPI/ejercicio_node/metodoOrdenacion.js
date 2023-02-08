/*Ejercicio 1
En un concurso de fotografía, donde los usuarios publican una fotografía y obtienen
likes, se registra la cantidad de likes obtenidos por cada usuario en un array. Ordenar
los valores para poder indicar cuál fue la mayor cantidad de likes obtenidos, cuánto
obtuvo el segundo, cuánto el tercero y cuánto el que menos likes obtuvo —suponer
que participaron 15 usuarios y suponer para cada uno, una cantidad de likes—.*/

let arraylikes= [3,5,7,9,12,1,2,10,60,76,34,13,19,50]

function bubbleSort(array){
    let contador= 0; 
    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length-1; j++) {
            if (array[j]< array[j+1]){
                let aux=array[j];
                array[j]=array[j+1];
                array[j+1]= aux;
            }
           contador ++ 
        }
    }
}
bubbleSort(arraylikes)
console.log(arraylikes)

//otra solucion

let arrayPersona=[
    {
        persona:"p1",
        like:40,
    },
    {
        persona:"p2",
        like:50,
    },
    {
        persona:"p3",
        like:300,
    },
    {
        persona:"p4",
        like:200,
    },
    {
        persona:"p5",
        like:150,
    },
    {
        persona:"p6",
        like:41,
    },
    {
        persona:"p7",
        like:10,
    },
    {
        persona:"p8",
        like:200,
    },
    {
        persona:"p9",
        like:170,
    },
    {
        persona:"p10",
        like:4,
    },
    {
        persona:"p11",
        like:200,
    },
    {
        persona:"p12",
        like:40,
    },
    {
        persona:"p14",
        like:2,
    },
    {
        persona:"p15",
        like:19,
    },
   
]

function likesPersona(arrayP){
    for(let i=0;i<arrayP.lenght;i++){
        for(let j=0;j<arrayP.lenght-1;j++){
            if(arrayP[j].like>arrayP[j+1].like){
                let aux=arrayP[j]
                arrayP[j]=arrayP[j+1]
                arrayP[j+1]=aux

            }
                      
        }
    }
}
likesPersona(arrayPersona)

//console.table(arrayPersona)

/*Ejercicio 2
El servicio meteorológico, para llevar el control diario de temperatura, utiliza un
objeto temperatura donde registra día —valor numérico del día—, mes —valor
numérico—, temperatura máxima y temperatura mínima, correspondiente a dicho
día. Las temperaturas —objeto temperatura— están cargados en un array.
a) Ordenar por temperatura mínima de menor a mayor.
b) Ordenar por temperatura máxima de mayor a menor.*/

let temperaturas = [
    {
        dia: "1",
        mes: 5,
        tempMax: 30,
        tempMin:5,
    },
    {
        dia: "2",
        mes: 5,
        tempMax: 35,
        tempMin:10,
    },
    {
        dia: "3",
        mes: 5,
        tempMax: 25,
        tempMin:2,
    },
    {
        dia: "4",
        mes: 5,
        tempMax: 32,
        tempMin:0,
    },
    {
        dia: "5",
        mes: 5,
        tempMax: 40,
        tempMin:0,
    },
    {
        dia: "6",
        mes: 5,
        tempMax: 28,
        tempMin:12,
    },
    {
        dia: "7",
        mes: 5,
        tempMax: 31,
        tempMin:0,
    },
    ]

    const temMinAsc = (arrayDatos) => {
        for (let i = 0; i < arrayDatos.length; i++) {
            for (let j = 0; j < arrayDatos.length - 1; j++) {
                if (arrayDatos[j].tempMin > arrayDatos[j + 1].tempMin && arrayDatos[j].dia > arrayDatos[j + 1].dia ){
                    let aux2 = arrayDatos[j];
                    arrayDatos [j] = arrayDatos[j + 1];
                    arrayDatos[j+1] = aux2;
                }
            }
        }
    }
    temMinAsc(temperaturas)
    //console.table(temperaturas)
