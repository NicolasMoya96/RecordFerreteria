let carrito = [];
let total = 0;

/* 
 * Función para agregar un producto al carrito.
 * Recibe el nombre y precio, añade el producto al array y actualiza el total.
 */
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

/* 
 * Función para actualizar la vista del carrito.
 * Recorre el array de productos, genera la lista en el DOM y actualiza el total.
 */
function actualizarCarrito() {
  const carritoDiv = document.getElementById('carrito');
  const totalSpan = document.getElementById('total');
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
  
  totalSpan.textContent = `$${total.toLocaleString()} COP`;
}

/* 
 * Función para eliminar un producto del carrito.
 * Resta su precio del total, elimina el producto y actualiza la vista.
 */
function eliminarDelCarrito(index) {
  total -= carrito[index].precio;
  carrito.splice(index, 1);
  actualizarCarrito();
}

/* 
 * Función para vaciar el carrito.
 * Reinicia el array de productos y el total a cero, actualizando la vista.
 */
function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}

/* 
 * Función para mostrar/ocultar el carrito lateral.
 * Alterna la clase .active en el contenedor del carrito.
 */
function toggleCarrito() {
  const carritoLateral = document.getElementById("carrito-lateral");
  carritoLateral.classList.toggle("active");
}
