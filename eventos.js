
// function evento(arg){
//     console.log("Me dispare")
//     console.log(arg.x, arg.y)
// }

// var objeto= document.getElementById("objDemo");
// //console.log(objeto);
// //objeto.addEventListener("keypress", evento)

// objeto.addEventListener("click", evento)
// objeto.click(); //actualizar pagina on click = false  




///DESABILITAR OPCIOMNES DE BOTON
document.onmousedown= function(arg){

    

    if(arg.button ===2){

        alert("Click bloqueado");
        return;
    }
    console.log("No hay problema");
}

document.onmouseup= function(){
    var texto=window.getSelection().toString();
    console.log(texto);
}