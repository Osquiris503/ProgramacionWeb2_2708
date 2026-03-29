let productos = [
    { nombre: "camisa", precio: 300 },
    { nombre: "pantalon", precio: 550 },
    { nombre: "zapatos", precio: 750 },
    { nombre: "sombrero", precio: 550 },
];

let carrito = [];

function mostrarMenu() {
    let menu = "Seleccione un producto para agregar al carrito o agrege un nuevo producto:\n";
    for (let i = 0; i < productos.length; i++) {
        menu += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    menu += `${productos.length + 1}. - Agregar nuevo producto\n`;
    menu += `${productos.length + 2}. - Ver carrito y total\n`;
    menu += `${productos.length + 3}. - Salir\n`;
    return menu;
}

function agregarAlCarrito(indice) {
    let productoSeleccionado = productos[indice];
    carrito.push(productoSeleccionado);
    console.log(`Producto "${productoSeleccionado.nombre}" añadido.`);
}

function agregarNuevoProductoAlCatalogo() {
    let nombre = prompt("Ingrese el nombre del nuevo producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));
    if (nombre && !isNaN(precio) && precio > 0) {
        productos.push({ nombre: nombre, precio: precio });
        console.log(`Nuevo producto "${nombre}" creado en el catálogo.`);
    } else {
        alert("Datos inválidos. No se pudo agregar el producto.");
    }
}

function mostrarCarritoTotal() {
    let mensaje = "";
    if (carrito.length === 0) {
        mensaje = "El carrito está vacío.";
    } else {
        mensaje = "--- CARRITO DE COMPRAS ---\n";
        let total = 0;
        for (let i = 0; i < carrito.length; i++) {
            mensaje += `${i + 1}.- ${carrito[i].nombre} - $${carrito[i].precio}\n`;
            total += carrito[i].precio;
        }
        mensaje += `\nTotal a pagar: $${total}`;
    }
    console.log(mensaje);
    alert(mensaje);
}

let opcion;
do {
    opcion = Number(prompt(mostrarMenu()));
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        console.log("Opción inválida.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        agregarNuevoProductoAlCatalogo();
    } else if (opcion === productos.length + 2) {
        mostrarCarritoTotal();
    }
} while (opcion !== productos.length + 3);
console.log("Gracias por su compra.");