function calcDescuento(precio, descuento) {
    const porcentajeDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajeDescuento) / 100
    return precioConDescuento
}


function PriceDiscount() {
    const inputPrice = document.getElementById("inputPrice")
    const price = inputPrice.value

    const inputDiscount = document.getElementById("inputDiscount")
    const discount = inputDiscount.value

    let precioFinal = calcDescuento(price, discount)

    const finalPrice = document.getElementById("finalPrice")
    finalPrice.innerText = `El precio con el descuento son: $${precioFinal}`

}

/* El metodo innetText me permite escribir en una etiqueta del HTML */

