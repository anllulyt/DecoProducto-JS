
fetch('../js/stock.json')
    .then((resp) => resp.json())
    .then((elm) => {
        productos = elm
        render(productos)
    })

function render(array) {
    containerProductos.innerHTML = ""
    array.forEach((elm) => {
        let cardClonada = card.cloneNode(card, true)
        cardBody = cardClonada.querySelector(".card-body")
        img = cardClonada.querySelector(".card-img-top")
        img.src = elm.img
        cardBody.children[0].innerText = elm.nombre
        cardBody.children[1].innerText = `Precio: $ ${(new Intl.NumberFormat('de-DE').format(elm.precio))}`
        cardBody.children[2].innerText = `Stock: ${elm.stock} unidades disponibles`

        containerProductos.appendChild(cardClonada)
        new CardWidget(cardClonada, elm)
    })
}

function modificaProducto(num, cant, stock, sum) {
    const ind = indexnum(num)
    sum ? productos[ind].cant++ : productos[ind].cant--
    productos[ind].stock = resta(stock, cant)
}

const indexnum = (num) => productos.indexOf(productos.find((el) => el.id === num))

const suma = (num1, num2) => num1 + num2

const resta = (num1, num2) => num1 - num2
