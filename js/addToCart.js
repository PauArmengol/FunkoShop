var carrito = [];
var total = 0;

function agregarProducto() {
  carrito.push("Producto");
  total += 10;
  actualizarCarrito();
}

function actualizarCarrito() {
  var carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";
  carrito.forEach(function (producto) {
    var li = document.createElement("li");
    li.textContent = producto;
    carritoElement.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}
