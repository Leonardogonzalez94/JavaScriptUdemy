try{
    // var a=100;
    // if(a === 101){
    //     throw 'que mal';
    // }else{
    //     throw 'oh oh!'
    // }                                    ///throw --->tirar
    // console.log("el valor de a:" , a) 

    // throw new Error('Error tipo 1');
    // throw{
    //     nombreError:"Error tipo 1",
    //     accion: "Salir corriendo a echarle agua al servidor ",
    //     coderror:1
    // }
    throw function(){
        console.log("Funcion del throw....")  //funciones como argumentos a los aprametros e();
    }

    console.log("Esta parte nunca se ejecuta");
}
catch(e){   ///si el catch no se utiliza se debe usar el finally a fuerza
    e(); 
    // if(e === "que mal" ){
    //     console.log("Error tipo 1")

    // } if(e === "oh oh!"){
    //     console.log("Error tipo 2")


    // }
       
    //console.log("Error de catch: ", e);
   // console.log(e.message);
//    console.log( e );
//    console.log( e.nombreError );
//    console.log( e.accion);
//    console.log( e.coderror );
   console.log("Parte del catch");
}
finally{
    console.log("Finalmente")
}