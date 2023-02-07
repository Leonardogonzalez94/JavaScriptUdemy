
var objetoJS={
   nombre: "Leonardo",
   edad: 28,
   imprimir: function(){
      console.log(this.nombre, this.edad);
   }

};

console.log( "Objeto Literal", objetoJS);
var jsonString= JSON.stringify(objetoJS);
console.log( jsonString);

var objetoDesdeJson = JSON.parse( jsonString);
console.log(objetoDesdeJson)
console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);