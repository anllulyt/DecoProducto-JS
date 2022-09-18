// Variables productos.js
const containerProductos = document.querySelector("#productos")
const tem = document.querySelector("template")
const card = tem.content.querySelector("div.card")
let productos

// Variables de carrito.js
const tbody = document.querySelector('.tbody')
const itemCartTotal = document.querySelector('.itemCartTotal')
const spanCompra = document.querySelector('.spanCompra')
const ItemCarrito = document.querySelector('.ItemCarrito')

let carrito = []
let oldstock
let total

// Variable contacto.js
const btn = document.getElementById('button');

//  Variables modal.js
const modalContainer = document.querySelector('#modal-container')
const modal = document.querySelector('#modal')
const cerrarModal = document.querySelector('#modal-close')
const ultModal = document.querySelector('.modal-ul')
const listModal = document.querySelector('.modal-il')


const comprar = document.querySelector(".comprar")
const pago = document.querySelector('.pago')

const sectionP = document.querySelector('.sDataPago')
const formP = document.createElement('form')

const sectionC = document.querySelector('.sContacto')
const formC = document.createElement('form')