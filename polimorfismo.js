function determinaDato( a ){
    if( a === undefined){
        console.log("A es undefined.... no se que hacer")
    }

    if( typeof a === "number"){
        console.log("A es un numero, y puedo hacer una operación con números")
    }

    if( typeof a === "string"){
        console.log("A es un texto, y puedo hacer una operación con texto")
    }
    if( typeof a === "object"){
        console.log("A es un objeto, y puedo hacer cualquier cosa...")

        if(a instanceof Number){
            console.log("A es un objeto numerico....")
        }
    }
  

}

var b= new Number(3);  /////imprime un objeto con el instanceof imprime un Number
console.log(b + 10)
determinaDato( b );

// determinaDato(1)   // si no se le envia un número va tomar el primer console.log(undefined)
// determinaDato("Leonardo")
// determinaDato({
//     nombre: "Leonardo",

// });