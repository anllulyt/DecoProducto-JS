
function vermodal() {
    modalContainer.classList.add('modal-container-active')

    cerrarModal.addEventListener('click', () => {
        modalContainer.classList.remove('modal-container-active')

    })
    modalContainer.addEventListener('click', () => {
        cerrarModal.click()
    })

    modal.addEventListener('click', (event) => {
        event.stopPropagation()
    })
}
