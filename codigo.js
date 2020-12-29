
var contador = 0
function modoNocturno(){
    
    if(contador==0){
        contador=1
        var cuerpo=document.querySelector("body")
        cuerpo.style.backgroundColor="black"

        var encabezado=document.querySelector("header")
        encabezado.style.backgroundColor="black"

        var cajaTexto=document.getElementsByTagName("article")
        for(i=0;i<cajaTexto.length;i++){
            cajaTexto[i].style.backgroundColor="black"
        }
        var parrafos=document.getElementsByTagName("p")
        for(i=0;i<parrafos.length-1;i++){//para los parrafos
            parrafos[i].style.color="white"
        }
        var textoH3=document.getElementsByTagName("h3")
        for(i=0;i<textoH3.length-2;i++){
            textoH3[i].style.color="white"
        }
        var listas=document.getElementsByTagName("a")
        for(i=0;i<7;i++){
            listas[i].style.color="white"
        }
        var banner=document.getElementById("main_banner")
        if(banner!== null){
            banner.style.backgroundColor="black"
        }
        var partners=document.getElementById("img_partner")
        if(partners!== null){
            partners.style.backgroundColor="black"
        }
        var seccion=document.getElementById("section_pg1")
        if(seccion!== null){
            seccion.style.backgroundColor="#585858"
        }

        var seccion2=document.getElementById("section_pg2")
        if(seccion2!== null){
            seccion2.style.backgroundColor="#585858"
        }
        ///////////////////////////////////////////////////

        var txtDown=document.getElementById("txt_pres_3down")
        if(txtDown!==null){
            txtDown.style.backgroundColor="rgba(160, 163, 158, 0.9)"
        }

        var txtUp=document.getElementById("txt_pres_3up")
        if(txtUp!==null){
            txtUp.style.backgroundColor="rgba(160, 163, 158, 0.5)"
        }

        var servicio1_pg4=document.getElementById("s1")
        if(servicio1_pg4!==null){
            servicio1_pg4.style.backgroundColor="black"
        }

        var servicio2_pg4=document.getElementById("s2")
        if(servicio2_pg4!==null){
            servicio2_pg4.style.backgroundColor="black"
        }
        var servicio3_pg4=document.getElementById("s3")
        if(servicio3_pg4!==null){
            servicio3_pg4.style.backgroundColor="black"
        }
        var servicio4_pg4=document.getElementById("s4")
        if(servicio4_pg4!==null){
            servicio4_pg4.style.backgroundColor="black"
        }
        var servicio5_pg4=document.getElementById("s5")
        if(servicio5_pg4!==null){
            servicio5_pg4.style.backgroundColor="black"
        }

        var txt_servicio1_pg4=document.getElementById("ps1")
        if(txt_servicio1_pg4!==null){
            txt_servicio1_pg4.style.color="white"
        }

        var historia=document.getElementById("nuestraHistoria")
        if(historia!==null){
            historia.style.backgroundColor="black"
        }
        var habilitacionesRegistros=document.getElementById("habilitaciones")
        if(habilitacionesRegistros!==null){
            habilitacionesRegistros.style.backgroundColor="black"
        }
        /////////////////////////////////////////////////
    }else{
        contador=0
        location.reload()
    }
}
function mostrarLista(lista){
    var elemento=document.getElementById(lista)
     elemento.style.display='block'
}
function ocultarLista(lista){
    var elemento=document.getElementById(lista)
    elemento.style.display='none'
}


