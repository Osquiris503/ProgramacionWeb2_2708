var nombre = prompt("Ingrese su nombre:");
var edad = prompt("Ingresa tu edad:");
var carrera = prompt("Ingresa tu carrera:");
var correo = prompt("Ingresa tu correo electrónico:");

let contenedor = document.getElementById("resultado");

console.log("=== Datos Registrados ===");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Carrera: " + carrera);
console.log("Correo electrónico: " + correo);

contenedor.innerHTML = `
    <h2>=== Datos Registrados ===</h2>
    <ul>
        <li><strong>Nombre:</strong> ${nombre}</li>
        <li><strong>Edad:</strong> ${edad}</li>
        <li><strong>Carrera:</strong> ${carrera}</li>
        <li><strong>Correo electrónico:</strong> ${correo}</li>
    </ul>
`;