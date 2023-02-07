////metodos CALL,  BIND Y APPLY


var carro= {
   color: "Blanco",
   marca: "Mazda",
   imprimir:function(){
         var salida= this.marca + " - " + this.color
         return salida;
   }

}

var carro2= {

      color: "Rojo",
      marca: "Toyota"
}
console.log(carro.imprimir())


var logCarro= function(arg1, arg2){
      console.log("Carro ", this.imprimir() );
      console.log("Argumentos:", arg1, arg2)
      console.log("==================")
}

var logModeloCarro= logCarro.bind( carro );   ///bind setea el (carro) para establecer el objeto y obtener el  this
logModeloCarro("abc", "xyz");

logModeloCarro.call( carro, "123","456"  )
logModeloCarro.apply( carro, ["asd","qwd" ]  )

//funciones prestadas
console.log( carro.imprimir.call( carro2));
