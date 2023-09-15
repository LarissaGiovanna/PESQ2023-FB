function clickMenu() {
    if (lista.style.display == 'block') {
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}

function girarGrafico(){
    let girar = document.querySelector('.bord')
    girar.classList.toggle('.rotacao')

}