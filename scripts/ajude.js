function clickMenu() {
    if (lista.style.display == 'block') {
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}

function girarGrafico(){
    let girar = document.querySelector('.graf')
    let borda = document.querySelector('.bord')
    borda.style.transform ='rotate(360deg)'
    // girar.style.rotate="360deg"
    // girar.classList.toggle('.rotacao')

}