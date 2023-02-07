function imprimir( fn ) {

    fn();
}

var persona={
    nombre: "Juan",
    apellido: "Padilla"


}

var miFuncion = function(){
    console.log("miFuncion");
}

imprimir (miFuncion);

   
