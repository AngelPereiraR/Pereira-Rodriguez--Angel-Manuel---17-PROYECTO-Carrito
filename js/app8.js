let carrito = []

const bodyCarrito = document.querySelector("#lista-carrito tbody")

const listaCursos = document.querySelector("#lista-cursos")

const btnVaciarCarrito = document.querySelector("#vaciar-carrito")

listaCursos.addEventListener("click", (e) => {
  e.preventDefault()
  if (e.target.classList.contains("agregar-carrito")) {
    const card = e.target.parentElement.parentElement

    for (let i = 0; i < carrito.length; i++) {
      bodyCarrito.childNodes[0].remove()
    }

    const nuevoElemento = {
      "imagen": card.children[0].src,
      "titulo": card.children[1].children[0].textContent,
      "precio": card.children[1].children[3].children[0].textContent,
      "cantidad": 1
    }

    const index = carrito.findIndex((elemento) => {
      return elemento.titulo === nuevoElemento.titulo
    })

    if (index !== -1) {
      carrito[index].cantidad++
    } else {
      carrito.push(nuevoElemento)
    }

    for (let i = 0; i < carrito.length; i++) {
      const row = document.createElement("tr")

      const imagenTd = document.createElement("td")
      const imagen = document.createElement("img")
      imagen.src = carrito[i].imagen
      imagen.style.width = "100px"
      imagenTd.append(imagen)
      row.append(imagenTd)

      const tituloTd = document.createElement("td")
      const titulo = document.createElement("p")
      titulo.textContent = carrito[i].titulo
      tituloTd.append(titulo)
      row.append(tituloTd)

      const precioTd = document.createElement("td")
      const precio = document.createElement("p")
      precio.textContent = carrito[i].precio
      precioTd.append(precio)
      row.append(precioTd)

      const cantidadTd = document.createElement("td")
      const cantidad = document.createElement("p")
      cantidad.textContent = carrito[i].cantidad
      cantidadTd.append(cantidad)
      row.append(cantidadTd)

      const borrarTd = document.createElement("td")
      const botonBorrar = document.createElement("button")
      botonBorrar.textContent = "Borrar"
      botonBorrar.addEventListener("click", () => {
        row.remove()
        if (carrito.length === 1) {
          carrito = []
        } else {
          carrito.splice(i, 1)
        }
      })
      borrarTd.append(botonBorrar)
      row.append(borrarTd)

      bodyCarrito.append(row)
    }
  }
})

btnVaciarCarrito.addEventListener("click", () => {
  for (let i = 0; i < carrito.length; i++) {
    bodyCarrito.childNodes[0].remove()
  }
  carrito = []
})