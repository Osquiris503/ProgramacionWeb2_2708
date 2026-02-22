var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;
var modulo = numero1 % numero2;

console.log("=== Resultados de las Operaciones ===");
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Módulo: " + modulo);

let contenedor = document.getElementById("resultado");

contenedor.innerHTML = `
    <h2>Resultados de las operaciones con ${numero1} y ${numero2}:</h2>
    <ul>
        <li><strong>Suma (+):</strong> ${suma}</li>
        <li><strong>Resta (-):</strong> ${resta}</li>
        <li><strong>Multiplicación (*):</strong> ${multiplicacion}</li>
        <li><strong>División (/):</strong> ${division}</li>
        <li><strong>Módulo (%):</strong> ${modulo}</li>
    </ul>
`;