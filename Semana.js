function obtenerDia() {
    let numero = parseInt(document.getElementById("numeroDia").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 1 || numero > 7) {
        console.log("Error: Número inválido - " + numero);
        resultado.textContent = "Por favor, ingresa un número entre 1 y 7";
        resultado.style.color = "red";
        return;
    }
    
    let dia;
    switch(numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        default:
            dia = "Día no válido";
    }
    
    resultado.textContent = "Hoy es: " + dia;
    resultado.style.color = "green";
    console.log("Resultado: Hoy es " + dia);
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("numeroDia").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            obtenerDia();
        }
    });
});
