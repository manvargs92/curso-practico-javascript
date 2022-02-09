
// const precioOriginal = 120;
// const discount = 18;

// const coupons = [
//     "MICUMPLE",
//     "BLACKFRIDAY",
//     "INVIERNO2022",
//     "PLATZI"
// ];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("inputPrice");
    const inputCoupon = document.getElementById("inputCoupon");
    const priceValue = inputPrice.value;
    const couponValue = inputCoupon.value;

    switch(couponValue) {
        case "MICUMPLE":
            discount = 60;
            break;
        case "BLACKFRIDAY":
            discount = 20;
            break;
        case "INVIERNO2022":
            discount = 15;
            break;
        case "PLATZI":
            discount = 30;
            break;
        default:
            discount = 0;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);
    const resultPrice = document.getElementById("resultPrice");
    if (discount === 0) {
        resultPrice.innerText = "Cupón NO válido; ingresa otro cupón.";
    } else {
        resultPrice.innerText = "El precio con discount es: $" + precioConDescuento;
    }
}

// console.log({
//     precioOriginal,
//     discount,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });