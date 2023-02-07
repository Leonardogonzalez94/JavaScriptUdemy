///PROTOTIPOS --> hacer mas eficiente el uso de los objetos

function Persona() {
    this.nombre = "Fernando";
    this.apellido = "Herrera";
    this.edad = 30;
    this.pais = "Costa Rica";

  
}
Persona.prototype.imprimirInfo = function () {  ///puede estar solamente 1 vez en memoria

    console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")")
}


var fer = new Persona();
//console.log(fer)
//console.log(fer.imprimirInfo());
//fer.imprimirInfo();

Number.prototype.esPositivo= function(){
    if(this > 0){
        return true;
    }else{
        return false;
    }
}