//funciones typeof e instanceof

function identifica( param ){
console.log( typeof param );   //tipo de dato primitivo
//    if(typeof param == "function" ){
//     param();
//    } else{
//     console.log(param);
//    }
console.log( param instanceof Persona );  //retorna un true // instance compara dos objetos
}

function Persona(){
    this.nombre= "Fernado";
    this.edad= 30;

}

var fernando=new Persona();

//identifica( function(){ console.log("soy anonima");} );
identifica(fernando );