// funciones con parametros


//function imprimir(nombre, apellido){
function imprimir (persona) {

   console.log(persona.nombre + " " + persona.apellido)

   // apellido= apellido || "xxx";

    // if( apellido === undefined ){
    //     apellido = "xxx";
    // }

   // console.log(nombre + " " + apellido);

}
//var nombre="Juan" //Variable explicita
//imprimir("Juan", "Padilla")  //variable anonima

imprimir ( { 
    nombre: "Juan",
    apellido:"Padilla"  
 
});  //objeto anonimo

