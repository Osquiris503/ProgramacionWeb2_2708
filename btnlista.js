const numeroFilasInput = document.getElementById('NumeroFilas');
const listaUl = document.getElementById('lista');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const numeroFilas = parseInt(numeroFilasInput.value);
    listaUl.innerHTML = ''; 
    const registroConsola = []; 

    if (!isNaN(numeroFilas) && numeroFilas > 0) {
        for (let i = 1; i <= numeroFilas; i++) {
            const li = document.createElement('li');
            li.textContent = `Fila ${i}`;
            listaUl.appendChild(li);
            registroConsola.push(`Fila ${i}`);
        }
        console.log("Lista generada:", registroConsola);
    } else {
        alert('Por favor, ingrese un número válido de filas.');
        console.error("Error: Se ingresó un valor inválido.");
    }
});