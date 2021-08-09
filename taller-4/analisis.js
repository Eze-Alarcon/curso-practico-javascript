// Helpers o utils (nombre q reciben las funciones q solo sirven para ayudar)
function esPar(numero) {
    return (numero % 2 === 0)
}

// Calculadora de mediana
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    )
    const promedioLista = sumaLista / lista.length
    return promedioLista
}
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

const salariosCol = colombia.map(
    function(persona) {
        return persona.salary
    }
)

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB
    }
)

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// Mediana top 10%

const spliceStart = (salariosColSorted.length * 90) / 100
const spliceCount = (salariosColSorted.length - spliceStart) // de aqui obtenemos la cantidad de posiciones que es el 10%

// splice nos permite dividir un array en una parte que le indiquemos
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,    
    spliceCount
)

const medianaTop10Col = medianaSalarios(salariosColTop10)



console.log({
    medianaGeneralCol,
    medianaTop10Col
})