function solicitarNumero(mensaje) {
    let n;
    do {
        n = parseInt(prompt(mensaje + " (0 a 10):"), 10);
        if (isNaN(n) || n < 0 || n > 10) {
            alert("Por favor ingrese un número entre 0 y 10.");
        }
    } while (isNaN(n) || n < 0 || n > 10);
    return n;
}

var num1 = solicitarNumero("Ingrese el primer numero");
var num2 = solicitarNumero("Ingrese el segundo numero");
var resultado;

if (num1 > num2) {
    resultado = "El numero mayor es: " + num1;
} else if (num2 > num1) {
    resultado = "El numero mayor es: " + num2;
} else {
    resultado = "Los numeros son iguales";
}

console.log(resultado);
document.body.innerHTML = '<p>' + resultado + '</p>';