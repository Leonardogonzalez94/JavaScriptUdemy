//sobrecargas de operadores JS

// function crearProducto(){
// }
// function crearProducto(nombre){
// }


function crearProducto(nombre,precio){   ///sobreescribe las funciones anteriores queda como resultado esta funcion

    nombre = nombre || "sin nombre";
    precio = precio || 0;
    console.log("Producto: ", nombre,  "Precio: ", precio  )
}

function crearProducto100(nombre){
    crearProducto(nombre, 100);
}

function crearProductoCamisa( precio ){
   crearProducto("Camisa", precio)

}
crearProducto("lapiz");
crearProducto100("corrector")
crearProductoCamisa( 75 );
