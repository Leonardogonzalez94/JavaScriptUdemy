///Funciones de tiempo

// setTimeout(function(){
//   console.log("Paso un segundo") 


// },1000);

// var segundos= 0;
// var intervalo = setInterval(function(){

//     segundos ++;

//     console.log("seg", segundos);
//     if( segundos ===3){

//         clearInterval(intervalo)
        
//     }
//    // console.log(this)    //this objeto global

// }, 1000)


var juan={
    nombre: "Leonardo",
    edad: 28,
    imprimir: function(){

        var self= this;  ///paso a referencia por objetos
        setTimeout(function(){
            console.log( self);
            console.log(self.nombre, self.edad);

        },1000)
       
    }

};

juan.imprimir();