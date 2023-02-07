//////////////////METODOS Y EL OBJETO THIS
var nombre = "Juan Carlos";

var persona ={

    nombre: "Maria",
    apellido: "Gonzalez",
    imprimirNombre: function(){

        console.log(this.nombre + " " + this.apellido);  //Objeto principal
    },
    direccion:{
        pais: "Costa Rica",
        obtenerPais: function(){
           
            
            var self =this;
            var nuevaDireccion= function(){
                console.log( self );
                console.log(" La direccion es en " + self.pais) //self no es una palabra reserva de JS

            }
            nuevaDireccion();
        }
    }
}

//persona.nombre = "Andres";
persona.imprimirNombre();
persona.direccion.obtenerPais();