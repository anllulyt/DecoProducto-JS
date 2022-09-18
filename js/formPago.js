
const contentP = `   
        <legend class="header">
            <h5 class="title" id="">Datos para la compra</h5>
        </legend>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control nombre" placeholder="Nombre" maxlength="20" aria-label="nombre" required>
            </div>
            <div class="col">
                <input type="tel" class="form-control telefono" placeholder="Telefono 11 7648 7652" aria-label="telefono" pattern="[0-9]{2}[0-9]{4}[0-9]{4}"  maxlength="10" title="Por favor introduzca un número valido código de area y número" required>
            </div>
            <div class="col">
                <input type="text" class="form-control dni" placeholder="DNI" aria-label="dni"  maxlength="8" pattern="[0-9]{8}" required>
            </div>
        </div>
        <br>

        <div class="row g-3">
            <div class="col-sm-7">
                <input type="text" class="form-control calle" placeholder="Calle y altura" maxlength="20" aria-label="calle" required>
            </div>
            <div class="col-sm">
                <input type="text" class="form-control provincia" placeholder="Provincia" maxlength="10" aria-label="provincia" required>
            </div>
            <div class="col-sm">
                <input type="text" class="form-control postal" placeholder="CP" maxlength="10" aria-label="CodigoPostal" required>
            </div>
        </div>
        <br>
        <fieldset class="row mb-3">
            <legend class="col-form-label col-sm-2 pt-0">Forma de pago</legend>
            <div class="col-sm-10">
                <div class="form-check">
                    <input class="form-check-input pago" type="radio" name="gridRadios" id="gridRadios1" value="Transferencia" checked>
                    <label class="form-check-label" for="gridRadios1"> Transferencia </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input pago" type="radio" name="gridRadios" id="gridRadios2" value="Tarjeta">
                    <label class="form-check-label" for="gridRadios2"> Pago con tarjeta </label>
                </div>
            </div>
        </fieldset>
        
        <button type="submit" class="btn btn-dark okCompra"> Pagar y generar factura </button>
        <button type="button" class="btn btn-dark cancelaCompra"> Cancelar compra </button>
`