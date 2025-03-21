// Variables globales para almacenar el carrito y el total acumulado
let carrito = [];
let total = 0;

/**
 * Función agregarAlCarrito
 * Agrega un producto al carrito y actualiza el total.
 *
 * @param {string} nombre - El nombre del producto.
 * @param {number} precio - El precio del producto.
 */
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

/**
 * Función actualizarCarrito
 * Actualiza la visualización del carrito en el DOM.
 * Recorre el arreglo 'carrito' y muestra cada producto, y actualiza el total.
 */
function actualizarCarrito() {
  const carritoDiv = document.getElementById('carrito');
  const totalSpan = document.getElementById('total');
  
  if (carritoDiv) {
    carritoDiv.innerHTML = "";
    carrito.forEach((producto, index) => {
      const productoDiv = document.createElement("div");
      productoDiv.innerHTML = `
        <span>${producto.nombre}</span>
        <span>$${producto.precio.toLocaleString()} COP</span>
        <button onclick="eliminarDelCarrito(${index})">X</button>
      `;
      carritoDiv.appendChild(productoDiv);
    });
  }
  
  if (totalSpan) {
    totalSpan.textContent = `$${total.toLocaleString()} COP`;
  }
}

/**
 * Función eliminarDelCarrito
 * Elimina un producto del carrito basado en su índice y actualiza el total.
 *
 * @param {number} index - El índice del producto a eliminar.
 */
function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

/**
 * Función vaciarCarrito
 * Reinicia el carrito y el total a cero, y actualiza la visualización.
 */
function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

/**
 * Función toggleCarrito
 * Alterna la visibilidad del carrito lateral mediante la clase 'active'.
 */
function toggleCarrito() {
  const carritoLateral = document.getElementById("carrito-lateral");
  if (carritoLateral) {
    carritoLateral.classList.toggle("active");
  }
}

// Exportamos las funciones y variables que queremos que sean accesibles en otros módulos
module.exports = {
  agregarAlCarrito,
  actualizarCarrito,
  eliminarDelCarrito,
  vaciarCarrito,
  toggleCarrito,
  carrito,
  total
};
