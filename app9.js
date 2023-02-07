/// FUNCIONES DE PRIMERA CLASE, las funciones son objetos

function a(){
    console.log("Funcion a");

}

a();
a.nombre= "Maria";
a.direccion={
    pais: "Costa Rica",
    ciudad: "San José",
    edificio:{
        piso: "8vo",
        nombre: "Edificio principal"
    }
}