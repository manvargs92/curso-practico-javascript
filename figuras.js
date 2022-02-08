
// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden " + ladoCuadrado +" cm");

function perimetroCuadrado(lado) {
    return lado *4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: "
// + ladoTriangulo1
// + " cm "
// + ladoTriangulo2
// + " cm "
// + baseTriangulo
// + " cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
// console.log("El area del triángulo es: " + areaTriangulo + " cm^2");
console.groupEnd();

// Código del círculo
console.group("Círculo");

// radio
// const radioCirculo = 5;
// console.log("El radio del círculo es: " + radioCirculo + " cm");

// diametro
function diametroCirculo(radio) {
    return radio * 2;
}
// console.log("El diámetro del círculo es: " + diametroCirculo + " cm");

// pi
const pi = Math.PI;
// console.log("Pi es : " + pi);

// circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
};
// console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");

// area
function areaCirculo(radio) {
    return (radio * radio) * pi;
}
// console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();