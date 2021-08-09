function calcularMediaAritmetica(lista) {
    // let sumaLista = 0
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i]
    // }
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) { /* el 0 es para no inicializar la variable y darle un valor por defecto */
            return valorAcumulado + nuevoElemento
        }
    )

    const promedioLista = sumaLista / lista.length
    return promedioLista
}

const lista1 = [
    100,
    200,
    500,
    4000000,
]

const mitadLista1 = parseInt(lista1.length / 2)

function esPar(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1] 
    // en el caso de lista 1, esto me devuelve 2, entonces el elemento de la posicion 2 es "500" y si le sumo uno al valor de abajo
    // obtengo el numero 4000000... entonces, lo que debo hacer es lo contrario a lo intuitivo y es restar uno, asi obtengo 
    // el elemento 1 = "200" y el elemento 2 sera "500"
    const elemento2 = lista1[mitadLista1] 

    const promedio1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]) 

    mediana = promedio1y2

} else {
    mediana = lista1[mitadLista1]
}

