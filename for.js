// for (var i = 0; i <= 10; i++) {

//     if (i == 5) {
//       //  continue;

//       break;

//     }


//     console.log(i)   //imprime valores del 0 al 9
// }

var Persona= function(){    //objeto principal que origino la clase
    this.nombre= "Juan";
    this.apellido= "Pineda"
    this.edad= 18;
};

var juan = new Persona ();

Persona.prototype.direccion= "san Jose"

for(prop in juan ){           //ciclo for in
    
    //if( !juan.hasOwnProperty(prop))  // imprime nombre, apellido, edad 
    if( juan.hasOwnProperty(prop))  //imprime direccion 
        continue;
   
    //console.log(juan.hasOwnProperty(prop) );  //propiedad hasOwnProperty nos indican con false o true que atributos hace aprte del obj. principal

    console.log(prop, ":", juan[prop])

}

for (num in [1,2,3,4,5,6,7,8,9,10]){  //imprime el valor de la posicion del array

    console.log(num);
}

[1,2,3,4,5,true,6,7,8,false,9,10, "nombre"].forEach(function(val ){ //imprime el valor de cada valor del arreglo
    console.log( val)

});