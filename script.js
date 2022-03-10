var chrono;
var isOn = false;
var cronometro = document.querySelector("#cronometro");

function startStop(btn) {
  if (!isOn) {
    inicial = new Date();
    chrono = setInterval(timer, 10);
    isOn = true;
    btn.innerHTML = "Pausar";
    btn.style.backgroundColor = "red";
    document.getElementById("btnLimpar").disabled = true;
  } else {
    clearInterval(chrono);
    isOn = false;
    btn.innerHTML = "Iniciar";
    btn.style.backgroundColor = "green";
    document.getElementById("btnLimpar").disabled = false;
  }
}

function reset() {
  cronometro.innerHTML = "00:00:00";
}

//temporizador
function timer() {
  let atual = new Date(); //cada instante
  //tempo (cro) = atual - inicial
  let crono = atual - inicial; //milisegundos transcorridos.
  cr = new Date();
  cr.setTime(crono);
  //obtem os os dados para a exibição
  ms = cr.getMilliseconds(); //milisegundos
  ms = ms / 10; //centésimos de segundo.
  ms = Math.round(ms); //arredondar os centésimos
  sec = cr.getSeconds(); //segundos
  min = cr.getMinutes(); //minutos
  

  //ajusta a exibição com dois dígitos
  ( ms < 10) ?  ms = "0" + ms  : ms;
  (sec < 10) ? sec = "0" + sec : sec;
  (min < 10) ? min = "0" + min : min;
 
  //atualiza o visor
  // cronometro.innerHTML = hr + ": "+ min + ":" + sec + "." + ms;
  cronometro.innerHTML = `${min}:${sec}.${ms}`;
}
