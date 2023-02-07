function crearCookie(nombre, valor) {

    valor = escape(valor);

    var hoy= new Date();
    hoy.setMonth(hoy.getMonth()+1);   ///sumar meses

    document.cookie = nombre + "=" + valor + ";expires=" + hoy.toUTCString()+";";

    // document.cookie= "nombre=leonardo";
    // document.cookie= "apellido=gonzalez";

}

function borrarCookie(nombre) {
    var hoy= new Date();
    hoy.setMonth(hoy.getMonth() -1 );
    document.cookie = nombre + "=x;expires=" + hoy.toUTCString()+";";

}

//crearCookie("nombre", "Leoanrdo");
//borrarCookie("nombre")

// var demo= "123;123*123'123/ 123";
// console.log( demo );
// console.log( escape(demo) );
// console.log( unescape(escape(demo)) );




var cookies = document.cookie;
console.log(cookies)