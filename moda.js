
const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

function calcularModa(lista) {
    const listaCount = {};
    
    lista.map(function (elemento) {
        if(listaCount[elemento]) {
            listaCount[elemento] += 1; // guarda la cantidad de veces que ha aparecido el elemento
        } else {
            listaCount[elemento] = 1; // crear el elemento y decir que por defecto solo ha aparecido una sola vez
        }
    });
    
    const listaArray = Object.entries(listaCount).sort(function (elementoA, elementoB) { // convierte objetos en listas
        return elementoA[1] - elementoB[1];
    });
    
    const moda = listaArray[listaArray.length - 1]; // la ultima posición del array; como los indices empiezan en 0, necesitamos restar -1 a la longitud del array.

    return moda;    
}




