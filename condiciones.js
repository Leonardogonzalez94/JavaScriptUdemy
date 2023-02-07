//IF -ELSE

// var nota = 59;

// if (nota >= 90) {

//     console.log("A");
// } else if ( nota >= 80) {

//     console.log("B")
// } else if ( nota >= 70) {

//     console.log("C")
// } else if ( nota >= 60) {

//     console.log("D")
// } else {
//     if (nota > 50) 
//     console.log("F");
//     {
    
//         console.log("Algo por aquí...")
//     }

// }


// console.log("Termino el codigo")

// var a= 10;
// var b= 20;
// var c= 0;

// var c= (a > b)? a : b ;


// var c = (a > b)? function(){

//    console.log("A es mayor a B");
//    return a;
// }() : function(){

//     console.log("B es mayor a A ")
//     return b;
// }();
// if(a > b ){
//     c=a;
// } else {
//     c=b;
// }

var a=10;
var b= 20;
var c= a || b;

console.log(c);

function getNombre(nombre){
    //var nomb= nombre || "<sin nombre>" || "<sin apellido>";
    var nomb= null || null || undefined || 123;  //imprime el 123 por que tiene mas pesos que los otros parametros

    console.log( nomb)
 
};
getNombre();
