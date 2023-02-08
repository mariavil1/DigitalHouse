// busqueda lineal

/*let listaOrdenada = [1, 2, 4, 6, 8, 10];

const buscarLineal = (array, item) => {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === item) {
            return i
        }    
    }
    return null
}
console.log(buscarLineal(listaOrdenada, 4));
console.log(buscarLineal(listaOrdenada, 12));*/

// busqueda binaria

/*let listaOrdenada = [1, 2, 4, 6, 8, 10];
//                  in               fin

console.log(listaOrdenada[listaOrdenada.length - 1]);

const buscarBinaria = (array, item) => {
  let inicio = 0;
  let final = array.length - 1;

  while (inicio <= final) {
    let medio = Math.floor((inicio + final) / 2);

    let encontrado = array[medio];

    if (encontrado === item) {
      return medio;
    }

    if (item > encontrado) {
      inicio = medio + 1;
    }

    if (item < encontrado) {
      final = medio - 1;
    }
  }

  return null
}

console.log(buscarBinaria(listaOrdenada, 4));
console.log(buscarBinaria(listaOrdenada, 12));*/

/*let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const busquedaBinaria = (array, item) => {
  let inicial = 0;
  let final = array.length - 1;

  while (inicial <= final) {
    let medio = Math.floor((inicial + final) / 2);

    let elQueBusco = array[medio];

    if (item === elQueBusco) {
      return medio;
    }
    if (item > elQueBusco){
      inicial = medio + 1;
    }
    if (item < elQueBusco){
      final = medio - 1;
    }
  }
  return null
}
console.log(busquedaBinaria(list, 13));*/

/*let lista = [12,3,5,7,1,22,47,100];

const ordenacionBubble = (array) => {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]){
        let auxiliar = array[j];
        array[j] = array[j + 1];
        array[j + 1] = auxiliar;
      }
      contador ++ 
    }
  }
}
ordenacionBubble(lista)
console.log(lista);

const busquedaBinaria = (array, item) => {
  let inicio = 0;
  let fin = array.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    let elQueBusco = array[medio]

    if (item === elQueBusco) {
      return medio;      
    }
    if (item > elQueBusco) {
      inicio = medio + 1; 
    }
    if (item < elQueBusco) {
      fin = medio - 1;
    }   
  }
  return null
} 
console.log(busquedaBinaria(lista, 20));*/

const arrayTemasMusicales = [
  {
    nombre: "Pop",
    votos: 250
  },
  {
    nombre: "Rock",
    votos: 100
  },
  {
    nombre: "Salsa",
    votos: 35
  },
  {
    nombre: "Balada",
    votos: 200
  },
  {
    nombre: "Regueton",
    votos: 25
  }
];

const ordenacionBubble = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j].votos > array[j + 1].votos) {
        let aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux        
      }
    }
  }
}
ordenacionBubble(arrayTemasMusicales)
console.log(arrayTemasMusicales);

const busquedaLineal = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    const elemento = array[i].nombre;
    if (elemento === item) {
      return array[i].votos
    }
  }
  return null
}
//console.log(busquedaLineal(arrayTemasMusicales, "Pop"))

const busquedaBinaria = (array, item) => {
  let inicio = 0;
  let final = array.length - 1;

  while (inicio <= final) {
    let medio = Math.floor((inicio + final) / 2);

    let loQueVeo = array[medio].nombre;

    if (item.localeCompare(loQueVeo) === 0) {
      return medio;    
    }
    if (item.localeCompare(loQueVeo) === 1) {
      inicio = medio + 1;
    }
    if (item.localeCompare(loQueVeo) === -1) {
      final = medio - 1;
    }
  }
  return null
}
console.log(busquedaBinaria(arrayTemasMusicales, "Salsa"))