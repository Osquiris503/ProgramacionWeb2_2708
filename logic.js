document.getElementById("CalculadoraForm").addEventListener("submit", 
    function(event) {
        event.preventDefault(); 
        const numero1 = parseFloat(document.getElementById("num1").value);
        const numero2 = parseFloat(document.getElementById("num2").value);
        const operacion = document.getElementById("operacion").value;
        let resultado;

        switch (operacion) {
            case "suma":
                resultado = numero1 + numero2;
                break;
            case "resta":
                resultado = numero1 - numero2;
                break;
            case "multiplicacion":
                resultado = numero1 * numero2;
                break;
            case "division":
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    resultado = "Error: División por cero";
                }
                break;
            case "potencia":
                resultado = Math.pow(numero1, numero2);
                break;
            case "raiz":
                if (numero1 >= 0) {
                    resultado = Math.sqrt(numero1);
                } else {
                    resultado = "Error: No se puede calcular la raíz de un número negativo";
                }
                break;
            default:
                resultado = "Operación no válida";
        }
        document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
        console.log(`Operación seleccionada: ${operacion}`);
        console.log(`Resultado calculado: ${resultado}`);
});