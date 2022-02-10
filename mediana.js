
const lista = [
    100,
    200,
    500,
    400000000
];

function calcularMediana(lista) {
    let mediana;

    let listaOrdenada = lista.sort(function (numero1, numero2) {
        return numero1 - numero2;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);

    function calcularMediaAritmetica(lista) {
        const sumaLista = lista.reduce(function (valorAcumulado = 0, elemento) {
            return valorAcumulado + elemento;
        });
    
        const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    }
    
    function esPar(numero) {
        if(numero % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    if(esPar(listaOrdenada.length)) {
        let elemento1 = listaOrdenada[mitadLista - 1];
        let elemento2 = listaOrdenada[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana = promedioElemento1y2;
    } else {
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}









