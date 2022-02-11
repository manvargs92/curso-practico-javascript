// Promedio Intercuartil
// Similar a la media truncada, pero, en lugar de eliminar los valores extremos, se establecen iguales a los valores más grandes y más pequeños que quedan
// La media truncada es un estimador útil porque es menos sensible a valores atípicos que el promedio y aun así da un razonable estimador de la tendencia central o promedio para numerosos modelos estadísticos. En este sentido es reconocido por ser un estimador robusto.

const lista = [5, 8, 4, 38, 8, 6, 9, 7, 7, 3, 1, 6];

function calcularPromedioIntercuartil(lista) {

        // El primer paso sería ordenar los elementos de menor a mayor

        let listaOrdenada = lista.sort(function (elemento1, elemento2) {
            return elemento1 - elemento2;
        })

            
        // Se descartan el 25% de los datos inferiores y el 25% de los datos superiores

        function calcularCantidadDatosDescartar(cantidad) {
            return (cantidad * 25) / 100
        }

        let listaReducida = listaOrdenada.slice(calcularCantidadDatosDescartar(listaOrdenada.length), listaOrdenada.length - calcularCantidadDatosDescartar(listaOrdenada.length));
        
        // Se calcula el promedio aritmético
        function calcularMediaAritmetica(lista) {         
            const sumaLista = lista.reduce(function (valorAcumulado = 0, elemento) {
                return valorAcumulado + elemento;
            });
        
            const promedioLista = sumaLista / lista.length;
        
            return promedioLista;
        }

        return calcularMediaAritmetica(listaReducida);
    }




