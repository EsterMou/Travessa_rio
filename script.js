let hora = 0;
let minuto = 0;
let segundo = 0;

let cron;

document.form_cronometro.iniciar.onclick = () => iniciar();
document.form_cronometro.reiniciar.onclick = () => reiniciar();

function iniciar(){
    clearInterval(cron);
    cron = setInterval(() => {timer(); }, 10);
}

function reiniciar(){
    hora = 0;
    minuto = 0;
    segundo = 0; 

    document.getElementById('hora').innerText = "00";
    document.getElementById('minuto').innerText = "00";
    document.getElementById('segundo').innerText = "00";
}