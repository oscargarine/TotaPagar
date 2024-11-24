

// Constantes del DOM
const precioBase = 400000
const txtPrecioBase = document.querySelector('.precio-inicial')
txtPrecioBase.innerHTML = precioBase.toLocaleString()

const cantidadActual = document.querySelector('.cantidad')
const txtCantidad = document.querySelector('span')

const sumarCantidad = document.querySelector('.boton-sumar')
const restarCantidad = document.querySelector('.boton-restar')

let totalPagar = 0
const txtTotalPagar =  document.querySelector('.valor-total')
txtTotalPagar.innerHTML = totalPagar

let cantidad = 0


// sumarCantidad
sumarCantidad.addEventListener("click", () => {
  cantidad++
  cantidadActual.innerHTML = cantidad

  // totalPagar
totalPagar = cantidad * precioBase
txtTotalPagar.innerHTML = totalPagar.toLocaleString()
})

// restarCantidad
restarCantidad.addEventListener("click", () => {
  cantidad--
  if (cantidad <0) {
    cantidad = 0}
  cantidadActual.innerHTML = cantidad

  // totalPagar
totalPagar = cantidad * precioBase
txtTotalPagar.innerHTML = totalPagar.toLocaleString()
})



