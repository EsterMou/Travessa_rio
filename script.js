const seg = document.querySelector('.segundo')
const min = document.querySelector('.minuto')
const miliseg = document.querySelector('.milisegundo')

let miliNum = 0
let segNum = 0
let minNum = 0
let INTERVALO

function milissegundo(){
    miliNum++
    miliseg.innerHTML = miliNum
}
function segundos(){
    segNum++
    seg.innerHTML = segNum
}
function minutos(){
    minNum++
    min.innerHTML = minNum
}
function iniciar(){
    clearInterval(INTERVALO)
    INTERVALO = setInterval(() => {
        milissegundo()
    }, 10)
}