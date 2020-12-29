var video=document.getElementById("medio")
var bot_play=document.getElementById("play")
barra=document.getElementById('barra');
progreso=document.getElementById('progreso');


function reproducir(){
    if(video.paused){
        video.play()
        bot_play.innerHTML='<span class="icon-pause2"></span>'
        bucle=setInterval(estado, 1000);
        
    }else{
        video.pause()
        bot_play.innerHTML='<span class="icon-play3"></span>'
        window.clearInterval(bucle);
    }
}

function detener(){
    video.pause()
    video.currentTime=0
    bot_play.innerHTML='<span class="icon-play3"></span>'
    estado()
}
function saltar(rango){
    video.currentTime+=rango

}
function estado(){
    maximo=barra.clientWidth
    if(!video.ended){
        var total=parseInt(video.currentTime*maximo/video.duration);
        progreso.style.width=total+'px';
    }else{
        progreso.style.width='0px';
        bot_play.innerHTML='<span class="icon-play3"></span>'
        window.clearInterval(bucle);
    }
}
function mover(e){
    if(!video.paused && !video.ended){
        var ratonX=e.pageX-barra.offsetLeft;
        var nuevoTiempo=ratonX*video.duration/maximo;
        video.currentTime=nuevoTiempo;
        progreso.style.width=ratonX+'px';
    }
}