
// Código del cuadrado
console.group("Cuadrado");
function perimetroCuadrado(lado) {
    return lado *4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulo");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo
console.group("Círculo");
// diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// pi
const pi = Math.PI;

// circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
};

// area
function areaCirculo(radio) {
    return (radio * radio) * pi;
}

console.groupEnd();


// Aquí interactuamos con el HTML
// Código del cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Código del triángulo
function calculaPerimetroTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("inputBase");
    const value1 = Number(input1.value); // convierte a tipo number para evitar concatenación en vez de suma
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calculaAreaTriangulo() {
    const input1 = document.getElementById("inputAltura");
    const input2 = document.getElementById("inputBase");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const area = areaTriangulo(value2, value1);
    alert(area);
}

// Código del círculo
function calculaDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calculaPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calculaAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}