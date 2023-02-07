//ARREGLOS --->Coleccion de objetos
var arr = [5,4,3,2,1];    //para obtener la posicion del arreglo se empiza desde 0
console.log(arr);
console.log(arr [0], arr[4], arr[5]);

arr.reverse();
console.log(arr)

/// el map recorre la funcion como un ciclo for y actualiza el valor del arreglo
arr = arr.map( function(elem){
    elem *= elem;
    return elem;
});
console.log(arr)

arr= arr.map(Math.sqrt);
console.log(arr)

arr= arr.join( "|" ) ;    ///toma el array y lo convierte un solo string 1|2|3|4
console.log(arr)

arr=arr.split("|");  /// regresa un arreglo y corta el |  eje: ["1", "2"]
console.log(arr);

arr.push("6")        ///agrega un valor al arreglo
console.log(arr)

arr.unshift("0")   //agregar el valor al comienzo del arreglo
console.log(arr)

console.log(arr.toString())


var elimine= arr.pop();   //elimina el último valor del arreglo
console.log(arr, elimine)   //el valor del attributo queda por fuera del array

arr.splice( 1, 3) /// toma el primer valor de referencia despues de la coma elimina la posicion que se asigna
console.log(arr)

arr.splice(1, 3, "10", "20", "30");  /// con las comiilas "10" agrega el valor en el array
console.log(arr);

arr= arr.slice( 1,3 )  ///ignora la cantidad de elemento que tiene despues del valor de la coma, no incluye el numero al que se apunta
console.log(arr);

