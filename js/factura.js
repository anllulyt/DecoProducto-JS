const nombreCompra = document.querySelector('.nombre')
const telefonoCompra = document.querySelector('.telefono')
const dniCompra = document.querySelector('.dni')
const calleCompra = document.querySelector('.calle')
const provinciaCompra = document.querySelector('.provincia')
const postalCompra = document.querySelector('.postal')
let dataFactura
let props

okCompra.addEventListener('click', () => {

  const pagoCompra = document.querySelector('input[name="gridRadios"]:checked').value

  if ((nombreCompra.value) && (telefonoCompra.value) && (dniCompra.value) && (calleCompra.value) && (provinciaCompra.value) && (postalCompra.value)) {
    dataFactura = {
      "nombre": nombreCompra.value,
      "telefono": telefonoCompra.value,
      "dni": dniCompra.value,
      "calle": calleCompra.value,
      "provincia": provinciaCompra.value,
      "postal": postalCompra.value,
      "pago": pagoCompra,
    }
    cargaData()
    actualizar()
  }

})

let index = 1
let date = new Date();

  function generatePDF() {
   const db = jsPDFInvoiceTemplate.default(props);
   console.log(db)
}

  function cargaData() {
    props = {
      outputType: jsPDFInvoiceTemplate.OutputType.Save,
      returnJsPDFDocObject: false,
      fileName: "Factura_" + date.toLocaleDateString(),
      orientationLandscape: false,
      compress: true,
      logo: {
        src: "./img/logo/logo.jpg",
        margin: {
          top: 0,
          left: 0
        }
      },
      stamp: {
        inAllPages: true, //by default = false, just in the last page
        src: "https://raw.githubusercontent.com/edisonneza/jspdf-invoice-template/demo/images/qr_code.jpg",
        type: 'JPG', //optional, when src= data:uri (nodejs case)
        width: 20, //aspect ratio = width/height
        height: 20,
        margin: {
          top: 0, //negative or positive num, from the current position
          left: 0 //negative or positive num, from the current position
        }
      },
      business: {
        name: "Factura",
        address: "Sebastián Elcano 888, Acassuso, Buenos Aire",
        phone: "+54 11 6929 9999",
        email: "productos.deco@gmail.com",
        website: "www.decoproductos.com"
      },
      contact: {
        label: "Datos de cliente:",
        name: dataFactura.nombre,
        address: dataFactura.calle + ', ' + dataFactura.provincia + ', ' + dataFactura.postal,
        phone: dataFactura.telefono,
        dni: dataFactura.dni
      },
      invoice: {
        label: "Factura #: ",
        num: `000000100${index++}`,
        invDate: "Fecha: " + date.toLocaleDateString(),
        headerBorder: false,
        tableBodyBorder: false,
        header: [
          {
            title: "#",
            style: {
              width: 10
            }
          },
          {
            title: "Descripción",
            style: {
              width: 90
            }
          },
          { title: "Precio" },
          { title: "Cantidad" },
          { title: "U Medida" },
          { title: "Total" }
        ],
        table: carrito.map(item => ([
          index++,
          item.nombre,
          new Intl.NumberFormat('de-DE').format(item.precio) + ",00",
          item.cant,
          "uni",
          new Intl.NumberFormat('de-DE').format(Number(item.precio) * Number(item.cant)) + ",00", 
        ])),
        additionalRows: [{
          col1: 'SubTotal: $ ',
          col2: new Intl.NumberFormat('de-DE').format(total) + ",00",
          style: {
            fontSize: 10 //optional, default 12
          }
        },
        {
          col1: 'Importe otros Tributos: $ ',
          col2: "0,00",
          style: {
            fontSize: 10 //optional, default 12
          }
        },
        {
          col1: 'Total: $ ',
          col2: new Intl.NumberFormat('de-DE').format(total) + ",00",
          style: {
            fontSize: 14 //optional, default 12
          }
        }],

        invDescLabel: "Nota:",
        invDesc: `Metodo de pago = ${dataFactura.pago}.
         Para devoluciones, posee 30 días a partir de la fecha de emisión de la factura.
         `,
      },
      footer: {
        text: "Derechos reservados Deco productos",
      },
      pageEnable: true,
      pageLabel: "Page ",
    }
    generatePDF()
  }

  function actualizar() {
    location.hash = ''
    console.log('actualizo')
    pago.classList.add("hide")
    carrito= []
    total = 0
    localStorage.removeItem('carrito')
  }

  cancelaCompra.addEventListener('click', () => {
    pago.classList.add("hide")
  })