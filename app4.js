///ANOTACIÓN DE PUNTO

var persona= {

    nombre: "Juana",
    apellido: "Herrera",
    edad: 25,
    direccion:{
            pais: "Costa Rica",
            ciudad: "San Jose",
            edificio:{
                nombre: "Edificio Residencial",
                telefono: "2222-3333"
            }

    }
}

//console.log(persona.direccion.pais)
//persona.direccion.zipcode=11101;
//console.log(persona.direccion)
//console.log(persona.direccion.zipcode)
//console.log(persona.direccion.edificio.telefono)

//VALORES REFERENCIA
//var edificio = persona.direccion.edificio;  //uso de la referencia
//edificio.nopiso="8vo piso";
//console.log(persona)

//ANOTACION DE CORCHETE

var campo = "edad";
//var campo ="edad2"

console.log(persona["direccion"] ["pais"]);
console.log(persona [campo]);
//console.log(persona [campo]);  ---> valor: undefined 

