function clickMenu() {
    if (lista.style.display == 'block') {
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}

let contador = 0
function girarGrafico(){
    let rotacao = document.querySelector('.bord')
    contador+=360
    rotacao.style.transform=`rotate(${contador}deg)`

}