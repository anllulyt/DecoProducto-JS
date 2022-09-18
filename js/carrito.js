function addItemCarrito(producto, cant) {
  // console.log(cant)
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'success',
    iconColor: '#4f6f59',
    title: 'Genial! tu producto fue agregado al carrito'
  })

  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre.trim() === producto.nombre.trim()) {
      carrito[i].cant++
      // console.log(carrito[i].cant)
      const InputElemnto = tbody.getElementsByClassName('inputElemento')
      const inputValue = InputElemnto[i]
      inputValue.value++
      carritoTotal()
      return null
    }
  }

  carrito.push(producto)
  // console.log(carrito)
  carrito.cant = cant
  renderCarrito()
}



function renderCarrito() {
  tbody.innerHTML = ''
  spanCompra.innerHTML = carrito.length
  let rowtr = 0
  carrito.map(item => {
    rowtr++
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const content = `
    <th scope="row">${rowtr}</th>
            <td class="tableProducto">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.nombre}</h6>
            </td>
            <td class="tablePrice"><p> $ ${(new Intl.NumberFormat('de-DE').format(item.precio))},00</p></td>
            <td class="tableCantidad">
              <input type="number" min="1" max=${item.stock} value=${item.cant} class="inputElemento">
              <button class="delete btn btn-outline-dark"> <i class="bi bi-trash-fill"></i> </button>
            </td>
    
    `
    tr.innerHTML = content;

    tbody.append(tr)
    tr.querySelector(".delete").addEventListener('click', removeItemCarrito)
    tr.querySelector(".inputElemento").addEventListener('change', sumaCantidad)
  })
  carritoTotal()
}

function carritoTotal() {
  total = 0;
  carrito.forEach((item) => {
    const precio = Number(item.precio)
    total = total + precio * item.cant
  })
  itemCartTotal.innerHTML = `Total:  $ ${(new Intl.NumberFormat('de-DE').format(total))},00`
  addLocalStorage()
}

function removeItemCarrito(e) {
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  for (let i = 0; i < carrito.length; i++) {
    if (carrito[i].nombre.trim() === title.trim()) {
      carrito.splice(i, 1)
    }
  }
  spanCompra.innerHTML = carrito.length

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon: 'error',
    iconColor: '#5a2f2f',
    title: 'Producto eliminado de tu lista de compras'
  })


  tr.remove()
  carritoTotal()
}

function sumaCantidad(e) {
  const sumaInput = e.target
  const tr = sumaInput.closest(".ItemCarrito")
  const title = tr.querySelector('.title').textContent;
  carrito.forEach(item => {
    if (item.nombre.trim() === title) {
      Number(sumaInput.value) < 1 ? (sumaInput.value = 1) : sumaInput.value;
      Number(sumaInput.value) > Number(sumaInput.max) ? (sumaInput.value = sumaInput.max) : sumaInput.value;
      item.cant = Number(sumaInput.value);
      carritoTotal()
    }
  })
}

function addLocalStorage() {
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function () {
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if (storage) {
    carrito = storage;
    renderCarrito()
  }
}


comprar.addEventListener("click", () => {
  console.log(carrito.length)
  if (carrito.length >= 1) {
      pago.classList.remove("hide")
      location.hash = "#containerCompra"   
  }

})
