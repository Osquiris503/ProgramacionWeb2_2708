console.log("=== JUEGO DE ADIVINANZA ===");
console.log("Debes adivinar un número del 1 al 10");
console.log("¡Tienes 3 vidas!");
console.log("=====================================\n");

const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let vidas = 3;
let adivinado = false;

while (vidas > 0 && !adivinado) {
  const intento = prompt(`¿Cuál es tu número? (Vidas: ${vidas})`);
  if (intento === null) {
    console.log("Juego cancelado.");
    break;
  }
  
  const numero = parseInt(intento);
  if (isNaN(numero) || numero < 1 || numero > 10) {
    console.log("❌ Ingresa un número válido entre 1 y 10");
    continue;
  }
  
  if (numero === numeroSecreto) {
    adivinado = true;
    console.log(`✅ ¡GANASTE! El número correcto era ${numeroSecreto}`);
  } else if (numero < numeroSecreto) {
    vidas--;
    console.log(`❌ El número es mayor. Vidas restantes: ${vidas}`);
  } else {
    vidas--;
    console.log(`❌ El número es menor. Vidas restantes: ${vidas}`);
  }
}

if (!adivinado && vidas === 0) {
  console.log(`\n💀 PERDISTE! El número correcto era ${numeroSecreto}`);
}
console.log("\n=== FIN DEL JUEGO ===");
