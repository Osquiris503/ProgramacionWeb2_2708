function mostrarResultado(btn, resultado) {
    btn.textContent = resultado ? 'V' : 'F';
    btn.classList.add(resultado ? 'true' : 'false');
}

function generarTablasVerdad() {
    const contenedor = document.getElementById('contenedor-tablas');

    contenedor.innerHTML += `
        <div class="tabla-contenedor">
            <h2>AND (&&)</h2>
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="true">V</td>
                        <td class="true">V</td>
                        <td id="and-1"></td>
                    </tr>
                    <tr>
                        <td class="true">V</td>
                        <td class="false">F</td>
                        <td id="and-2"></td>
                    </tr>
                    <tr>
                        <td class="false">F</td>
                        <td class="true">V</td>
                        <td id="and-3"></td>
                    </tr>
                    <tr>
                        <td class="false">F</td>
                        <td class="false">F</td>
                        <td id="and-4"></td>
                    </tr>
                </tbody>
            </table>
            <button id="and-btn" class="btn-resultado">Resultado</button>
        </div>
    `;

    contenedor.innerHTML += `
        <div class="tabla-contenedor">
            <h2>OR (||)</h2>
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="true">V</td>
                        <td class="true">V</td>
                        <td id="or-1"></td>
                    </tr>
                    <tr>
                        <td class="true">V</td>
                        <td class="false">F</td>
                        <td id="or-2"></td>
                    </tr>
                    <tr>
                        <td class="false">F</td>
                        <td class="true">V</td>
                        <td id="or-3"></td>
                    </tr>
                    <tr>
                        <td class="false">F</td>
                        <td class="false">F</td>
                        <td id="or-4"></td>
                    </tr>
                </tbody>
            </table>
            <button id="or-btn" class="btn-resultado">Resultado</button>
        </div>
    `;

    contenedor.innerHTML += `
        <div class="tabla-contenedor">
            <h2>NOT (!)</h2>
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="true">V</td>
                        <td id="not-1"></td>
                    </tr>
                    <tr>
                        <td class="false">F</td>
                        <td id="not-2"></td>
                    </tr>
                </tbody>
            </table>
            <button id="not-btn" class="btn-resultado">Resultado</button>
        </div>
    `;

    setTimeout(() => {
        document.getElementById('and-btn').addEventListener('click', () => {
            const vals = [
                true && true,
                true && false,
                false && true,
                false && false
            ];
            vals.forEach((r, i) => {
                const id = `and-${i+1}`;
                const cel = document.getElementById(id);
                cel.textContent = r ? 'V' : 'F';
                cel.className = r ? 'true' : 'false';
                console.log(`${id}: ${r ? 'V' : 'F'}`);
            });
        });

        document.getElementById('or-btn').addEventListener('click', () => {
            const vals = [
                true || true,
                true || false,
                false || true,
                false || false
            ];
            vals.forEach((r, i) => {
                const id = `or-${i+1}`;
                const cel = document.getElementById(id);
                cel.textContent = r ? 'V' : 'F';
                cel.className = r ? 'true' : 'false';
                console.log(`${id}: ${r ? 'V' : 'F'}`);
            });
        });

        document.getElementById('not-btn').addEventListener('click', () => {
            const vals = [
                !true,
                !false
            ];
            vals.forEach((r, i) => {
                const id = `not-${i+1}`;
                const cel = document.getElementById(id);
                cel.textContent = r ? 'V' : 'F';
                cel.className = r ? 'true' : 'false';
                console.log(`${id}: ${r ? 'V' : 'F'}`);
            });
        });
    }, 0);
}

function crearBoton(id, resultado) {
    const celda = document.getElementById(id);
    const btn = document.createElement('button');
    btn.className = 'btn-resultado';
    btn.textContent = '-';
    celda.appendChild(btn);

    const texto = document.createElement('div');
    texto.style.marginTop = '4px';
    celda.appendChild(texto);

    btn.addEventListener('click', () => {
        const valor = resultado ? 'V' : 'F';
        btn.textContent = valor;
        btn.classList.add(resultado ? 'true' : 'false');
        texto.textContent = `Resultado: ${valor}`;
        console.log(`${id}: ${valor}`);
    });
}

window.addEventListener('DOMContentLoaded', generarTablasVerdad);
