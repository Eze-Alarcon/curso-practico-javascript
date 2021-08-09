const lista1 = [
    100,
    200,
    300,
    500,
]

// forma 1: forma del curso

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
    console.log(promedioLista)
}

calcularMediaAritmetica(lista1)


// Forma 2: usando funcion reduce
// const funcionReductora = (acumulador, valorActual) => acumulador + valorActual;

// let total1 = lista1.reduce(funcionReductora)

// console.log(total1)