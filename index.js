const modal = document.querySelector('.modal')
const button= document.querySelectorAll('.button')
const close = document.querySelector('.modal__content--close')

for (let index = 0; index < button.length; index++) {


button[index].addEventListener("click", () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})
}
close.addEventListener('click',() => {
    modal.classList.add('hidden')
    modal.classList.remove('visible')
} )