let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    const totalSpan = document.getElementById('total');
    carritoDiv.innerHTML = '';
    carrito.forEach((producto, index) => {
        const productoDiv = document.createElement('div');
        productoDiv.innerHTML = `
            <img src="images/${producto.nombre.toLowerCase()}.jpg" alt="${producto.nombre}">
            <span>${producto.nombre} - $${producto.precio.toLocaleString()} COP</span>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoDiv.appendChild(productoDiv);
    });
    totalSpan.textContent = `$${total.toLocaleString()} COP`;
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}