/// expresiones literales
///Key sensitive---> difiere de Mayusculas y minusculas
//var reg1= RegExp("a");   //estas dos lineas son igual, 
var reg2= /a/;

//i= insensible
//g = todas apariciones
//m multilinea

var texto= "Holaa Mundoo.\nQué tál? \nHooola de nuevooo.";
//console.log(texto);
var arr= texto.match( /^H/ )     //madar exp regular , regresa un arreglo , si no encuentra la letra es= NULL
                           ///  ^ ---> este pico le esta diciendo al texto que busque en el texto en la primera posicion
                           //si encuentra la letra "a"
///EL opuesto en la ultima posicion
var arr= texto.match( /o$/ )

/// obtener varios caracteres
var arr= texto.match( /.../ )

var arr= texto.match( /^.o/ )

var arr= texto.match( /[0-9]/ )  //rango

var arr= texto.match( /^H[a-z]/ )

var arr= texto.match( /[aeiou].$/ )

var arr= texto.match( /\s/ )   //buscar cualquier separacion 

//abreviar expresiones regulares

var arr= texto.match( /[a-zA-Z0-9]/ )
var arr= texto.match( /\w/ )  // es lo mismo de la linea 28

var arr= texto.match( /\d/ )   //abre. solo numeros

var arr= texto.match( /[aeiou]|é/ig  )   //abre. solo numeros

var arr= texto.match( /o/ig  )   //muestra las o que aaprecen en la cadena texto


var arr= texto.match( /o+/g  )


var arr= texto.match( /o?/g  )

var arr= texto.match( /o*/g  ) //estructura de repeticion


var arr= texto.match( /o{3,4}/g  ) ///rango.


var texto2= "Aeropuerto";
console.log(texto2);
var arr= texto2.match( /\w{2,2}/ig )

var texto3= "La Respuesta de la suma es: 45 + 60 = 105";
console.log(texto3);
var arr= texto3.match( /\d{1,}|respuesta/ig )

console.log(arr)     //encontro expresion "a" , la ubicación, y el texto enviado

///expresiones regulares js buscar


