const buttons = document.querySelectorAll('button')
const body = document.querySelector('main')
// M1 
const eventListner = (mouseEvent) => {
    body.setAttribute('style', `background-color: ${mouseEvent.target.id}`)
}
buttons.forEach( (button) => {
    button.addEventListener('click', eventListner)
})

document.querySelector(".contrast").addEventListener('click', () => {
    body.removeAttribute('style')
})