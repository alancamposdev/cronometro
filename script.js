let tela= document.querySelector('.timer-number');
let hr = 0;
let min = 0;
let seg = 0;
let intervalo;

function start(){  
  intervalo = setInterval(watch,100);
}
function pause(){
  clearInterval(intervalo)
}
function stop(){
  clearInterval(intervalo);  
  seg = 0;
  min = 0;
  tela.innerText = `00:00:00`
}

  
function twoDigits(digito){
  if(digito < 10){
    return('0'+ digito)
  }
  else{
    return(digito)
  }
}
function watch(){
  seg++
  if(seg == 60){
    min++
    seg = 0
    if(min == 60){
      min= 0
      hr++
    }
  }
  tela.innerText =`${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(seg)}`
}