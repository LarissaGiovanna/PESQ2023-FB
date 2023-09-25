function clickMenu() {
    if (sanduiche.style.display == 'block') {
        sanduiche.style.display = 'none'
    } else {
        sanduiche.style.display = 'block'
    }
}

let contador = 0
function girarGrafico(){
    let rotacao = document.querySelector('.bord')
    contador+=360
    rotacao.style.transform=`rotate(${contador}deg)`

}