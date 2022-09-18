
class CardWidget {
    constructor(nodo, producto) {
        this.nodo = nodo
        this.producto = Object.assign({}, producto)
        this.cantidad = 0
        this.cantidadDom = nodo.querySelector("#cantidad")
        this.stockDom = nodo.querySelector("#cant")
        this.cantidadDom.innerText = 0
        this.suma = nodo.querySelector(".suma")
        this.resta = nodo.querySelector(".resta")
        this.compra = nodo.querySelector("#boton-compra")
        
        this.newcant=0
        
        this.compra.disabled = true
        

        this.suma.addEventListener("click", () => {
            this.compra.disabled = false
            this.resta.disabled = false

            if (this.cantidad < this.producto.stock) {
                this.cantidad++
                this.cantidadDom.innerText = this.cantidad
                this.newcant = resta(this.producto.stock,this.cantidad)
                this.stockDom.innerText = `Stock: ${this.newcant} unidades disponibles` 
                modificaProducto(this.producto.id,this.cantidad,this.producto.stock,true) 
            }
            
        })

       
        this.resta.addEventListener("click", () => {
           
            if (this.cantidad != 0) {
                this.cantidad--
                this.cantidadDom.innerText = this.cantidad
                this.newcant = resta(this.producto.stock,this.cantidad)
                this.stockDom.innerText = `Stock: ${this.newcant} unidades disponibles` 
                this.resta.disabled = this.cantidad === 0 && true
                this.compra.disabled = this.cantidad === 0 && true
                modificaProducto(this.producto.id,this.cantidad,this.producto.stock,false)
            }
        })

            
            this.compra.addEventListener('click', () => {
            addItemCarrito(productos[indexnum(this.producto.id)],this.producto.stock)

              this.cantidadDom.innerText = 0
             
              this.compra.disabled = true
              this.suma.disabled = productos[indexnum(this.producto.id)].stock === 0 && true
              this.resta.disabled = productos[indexnum(this.producto.id)].stock === 0 && true

        })
    }
}



