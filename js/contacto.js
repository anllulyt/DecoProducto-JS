
const descrip = (descript, namefor) => `<label class="label" for="${namefor}"><h3 class="labelH3">${descript}:</h3></label>`
const inputC = (type, name, placeholder) => `<input class="input" type="${type}" name="${name}" placeholder="${placeholder}"`


formC.id = 'form'

const contentC = `  <legend>
                        <h2 class="legendH2">Contactanos y en breve te responderemos</h2>
                    </legend>
                    <div class="divFormulario">
                        ${descrip('Nombre y apellido', 'nombre')}
                        ${inputC('text', 'nombre', 'Pedro Perez')}>
                    </div>
                    <div class="divFormulario">
                        ${descrip('E-mail', 'email')}
                        ${inputC('email', 'email', 'pedro.perez@gmail.com')}>
                    </div>
                    <div class="divFormulario">
                        ${descrip('Telefono', 'telefono')}
                        ${inputC('telefono', 'tel', '11 1234 7568')} pattern="[0-9]{2}[0-9]{4}[0-9]{4}" title="Por favor introduzca un número valido código de area 11 y número" required>
                    </div>
                    <div class="divFormulario">
                        ${descrip('Mensaje', 'mensaje')}
                        <input class="textarea" type="text" name="mensaje" placeholder="Buen día me gustaria......">
                    </div>
                    <div class="divFormularioBoton">
                        <input type="submit" id="buttonC" value="Enviar Mensaje">
                    </div>
`
formC.innerHTML = contentC
sectionC.append(formC)

const btnC = document.querySelector('#buttonC')
// envio de mail
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btnC.value = 'Enviando...';
        const serviceID = 'default_service';
        const templateID = 'template_a80dxf9';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btnC.value = 'Enviar Mensaje';
                vermodal()
            }, (err) => {
                btnC.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });