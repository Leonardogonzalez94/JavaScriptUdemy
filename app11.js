///PALABRA RESERVADA NEW
function Persona(nombre, apellido){

    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = 30;
    this.nombreCompleto=function(){
        return this.nombre + " " + this.apellido + "("+ this.edad +")";
    }

  //  console.log("Paso por aqui");

}

var Juan= new Persona("Juan", "Mendoza");   // sin el new es undefined
console.log(Juan.nombreCompleto() );
//console.log(Juan)
// console.log(Juan.nombre);
// console.log(Juan.nombreCompleto());