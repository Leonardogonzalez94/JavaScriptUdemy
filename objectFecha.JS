var hoy= new Date() ;  //las fechas son objeto
console.log(hoy)

var fechaMilisegundos= new Date(1);
console.log(fechaMilisegundos)

var fechaFija=new Date( 2016, 9,21,23,10,15)    ///año, mes,dia: hora , min, seg
console.log(fechaFija)

console.log(hoy.getFullYear())

console.log(hoy.getDate())

console.log(hoy.getHours())

console.log(hoy.getMilliseconds());

console.log(hoy.getMonth());

console.log(hoy.getSeconds());

console.log(hoy.getTime())  //representacion fecha en milisegundos


var inicio= new Date()
for(var i =0; i< 15000; i++){
    console.log("Algo.....")
}
var fin= new Date();
// console.log(inicio);
// console.log(fin);

var duracion= fin.getTime() - inicio.getTime();
console.log(duracion, "milisegundos");
console.log((duracion/1000), "milisegundos");

////documentacion fechas   momentjs.com
