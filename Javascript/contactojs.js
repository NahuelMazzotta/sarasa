// function enviar (){
//     let Nombre = document.getElementById ("Nombre").value;
//     let Apellido = document.getElementById ("Apellido").value;
//     let Pais = document.getElementById ("Pais").value;
//     let Calle = document.getElementById ("Calle").value;
//     let Numero = document.getElementById ("Numero").value;
//     let Mensaje = document.getElementById ("Mensaje").value;
//     console.log({Nombre:Nombre,Apellido:Apellido,Pais:Pais,Calle:Calle,Numero:Numero,Mensaje:Mensaje});
//     alert(`${Nombre}, ${Apellido} del ${Pais} ha enviado un msj`)
// }

// function enviar (){
//     let Nombre = document.getElementById ("Nombre");
//     if (!Nombre.value) {
//         console.log("Vacio");
//         alert("te falta completar el nombre")
//     }else{
//         console.log("Nombre esta completado")
//     }
// }

// function enviar(){
//      let Nombre = document.getElementById("Nombre");
//      let NombreError = document.getElementById("NombreError");
//      if (Nombre.value) {
//          Nombre.classList.remove("campoInvalido")
//      }else{
//          Nombre.classList.add("campoInvalido")
//          NombreError.classList.remove("ocultarError");
//         }
//     }

var calcularEdad=(fechaNacimiento)=>{
    var fechaActual=new Date();
    var anoActual=parseInt(fechaActual.getFullYear());
    var mesActual=parseInt(fechaActual.getMonth()) +1;
    var diaActual=parseInt(fechaActual.getDate());
    var anoNacimiento=parseInt(String(fechaNacimiento).substring(0,4))
    var mesNacimiento=parseInt(String(fechaNacimiento).substring(5,7))
    var diaNacimiento=parseInt(String(fechaNacimiento).substring(8,10))
    let edad= anoActual-anoNacimiento;
    if(mesActual<mesNacimiento){
        edad-=1;
    }else if (mesActual===mesNacimiento){
        if(diaActual<diaNacimiento){
            edad-=1;
            
        }
    
    }
    return edad;
    
}
window.addEventListener('load', function(){
	let edad=document.getElementById ("edad");
	let fechaNacimiento=document.getElementById ("fechaNacimiento");
    fechaNacimiento.addEventListener('change', function(){
        if(this.value){
            edad.innerText= `Edad: ${calcularEdad(this.value)} años`;
        }
    })
})


function enviar(){
    let Nombre = document.getElementById ("Nombre");
    let NombreError = document.getElementById("NombreError");
    let Apellido = document.getElementById ("Apellido");
    let ApellidoError = document.getElementById ("ApellidoError");
    let fechaNacimiento = document.getElementById("fechaNacimiento");
    let fechaNacimientoError = document.getElementById("fechaNacimientoError");
    let Pais = document.getElementById ("Pais");
    let PaisError = document.getElementById ("PaisError");
    let Calle = document.getElementById ("Calle");
    let CalleError = document.getElementById ("CalleError");
    let Numero = document.getElementById ("Numero");
    let NumeroError = document.getElementById ("NumeroError");
    let Mensaje = document.getElementById ("Mensaje");
    let MensajeError = document.getElementById ("MensajeError");
    if (validarInput(Nombre,NombreError)&&validarInput(Apellido,ApellidoError)&&validarInput(fechaNacimiento,fechaNacimientoError)&&validarInput(Pais,PaisError)&&validarInput(Calle,CalleError)&&validarInput(Numero,NumeroError)&&validarInput(Mensaje,MensajeError)) {
        alert("enviado");
    }
}
    
function validarInput (inputElement,inputError){
    if (inputElement.value) {
        inputElement.classList.remove("campoInvalido")
        inputError.classList.add("ocultarError");
        return true;
        }else{
        inputElement.classList.add("campoInvalido")
        inputError.classList.remove("ocultarError");
        return false;
    }
}