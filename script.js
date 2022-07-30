let h3 = document.getElementsByTagName('h3')[0]
let play = document.getElementById('iniciar')
let reset = document.getElementById('reiniciar')

let sec = 0
let min = 0
let hrs = 0
let t 

function tick() {
    sec++;
    if(sec >= 60){
        sec = 0
        min++
        if(min >= 60){
            min = 0
            hrs++
        }
    }
}

function add(){
    tick();
    h3.textContent = (hrs > 9 ? hrs : "0" + hrs) + ":" + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec)
    timer();
}

function timer(){
    t = setTimeout(add, 1000)
}

timer();
play.onclick = timer

reset.onclick = function(){
    h3.textContent = "00:00:00"
    seconds = 0
    minutes = 0
    hours = 0
}

let margemA = ["mae", "pai", "filha1", "filha2", "filho1", "filho2", "policial", "prisioneiro"]
