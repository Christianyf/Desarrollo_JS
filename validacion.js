var nombre=document.getElementById("nombre")
var correo=document.getElementById("correo")
var boton=document.getElementById("envio")

function validarNombre(){
    if(nombre.value==''){
        nombre.style.backgroundColor="red"
        nombre.setCustomValidity("Este campo es requerido")
    }else{
        nombre.style.backgroundColor="white"
        nombre.setCustomValidity("")
    }

}

function validarCorreo(){
    if(correo.value==''){
        correo.style.backgroundColor="red"
        correo.setCustomValidity("Este campo es requerido")
    }else{
        correo.style.backgroundColor="white"
        correo.setCustomValidity("")
    }

}
function validarDatos(){
    validarNombre()
    validarCorreo()
}
nombre.addEventListener("input",validarNombre)
correo.addEventListener("input",validarCorreo)
boton.addEventListener("click",validarDatos)