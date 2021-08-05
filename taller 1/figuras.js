// código del cuadrado

console.group("Cuadrado") // es una funcion de la consola que sirve para agrupar msj

const perimetroCuadrado = (lado) =>  {  // usando arrow function
  return lado * 4
} 

function areaCuadrado(lado) {  // usando functions normales
    return (lado * lado)
}

console.groupEnd() // para finalizar el grupo de console.log llamado "cuadrado"

// código del Circulo

console.group("Circulos")

function diametroCirculo(radio) {
    return radio * 2
} 

// Pi
// Hay 2 maneras de obtener PI

// 1: a mano
// const PI = 3.1415 

// 2: usando Math
const PI = Math.PI.toFixed(5) // toFixed me deja la cant de decimales que desee

const perimetroCirculo = (diametro) => {
    return diametro * PI
}

function areaCirculo(radio) {
    return radio * radio * PI
}    

console.groupEnd()


// AQUI INTERACTUAMOS CON EL HTML

function calcPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value
    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcAreaCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value
    const area = areaCuadrado(value)
    alert(area)
}

function tipoTrianguloPerimetro() {
    const lado1input = document.getElementById("inputTriangulo1")
    const lado1 = Number(lado1input.value)
    const lado2input = document.getElementById("inputTriangulo2")
    const lado2 = Number(lado2input.value)
    const baseinput = document.getElementById("inputTriangulo3") 
    const base = Number(baseinput.value)
    const perimetro = base + lado1 + lado2
    return alert(perimetro)
}

function tipoTrianguloArea() {
    const lado1input = document.getElementById("inputTriangulo1")
    const lado1 = Number(lado1input.value)
    const lado2input = document.getElementById("inputTriangulo2")
    const lado2 = Number(lado2input.value)
    let baseinput = document.getElementById("inputTriangulo3") 
    if (lado1 == lado2) {
        base = Number(baseinput.value / 2)
    } else {
        base = Number(baseinput.value)
    }
    let altura = Math.sqrt(lado1**2 - base**2/ 4)
    let area = (base * altura) / 2
    alert(area)
}