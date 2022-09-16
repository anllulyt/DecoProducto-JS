// envio de mail
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        btn.value = 'Enviando...';
        const serviceID = 'default_service';
        const templateID = 'template_a80dxf9';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                vermodal()
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });