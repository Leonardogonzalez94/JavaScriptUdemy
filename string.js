//objeto string es un objeto  es una cadena
var b="Gonzalez"

var a= new String("Daniel Leonardo Gonzalez Cortes");
console.log( a);

console.log(a.toUpperCase ());
console.log(a.toLowerCase ());

var i= a.indexOf("e");
console.log("la letra esta: ", i);

var i= a.indexOf("n")
console.log("la letra esta: ",i);

i=a.lastIndexOf("o");    ///posicion de la ultima letra o
console.log("la letra esta: ",i);

var nombre= a.substr(6, 3);   ///corta desde la posición 6 y apartir de esa posicion cuenta 3 posiciones resultado "do"
console.log( nombre )

var nombre= a.substr(0, a.indexOf( " "));   
console.log( nombre )

var split= a.split( " ")
console.log( split )
console.log( split.length )

document.write( a.italics());

