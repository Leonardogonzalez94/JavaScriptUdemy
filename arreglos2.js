var arr = [
    true,
    {
        nombre: "Leonardo",
        apellido: "Gonzalez"
    },
    function () {  //funcion anonima
        console.log("Estoy viviendo en un arreglo")
    },
    function (persona) {
        console.log(persona.nombre + " " + persona.apellido)
    },
    [
        "Fernado",
        "Carlos",
        "Leonardo",
        [
            "Juan",
            "Pedro",
            "Daniel",
            function(){
                console.log(this)
            }
        ]
    ]


];
console.log(arr)
console.log(arr[0]);
console.log(arr[1].nombre + " " + arr[1].apellido);
//console.log(arr.length) //cuantos elementos hay en un arreglo
arr[2]();   /////invocar funcion anonima con ()
arr[3](arr[1]);   //Leonardo Gonzalez
console.log(arr[4][3][1])

var arreglo2 = arr[4][3]  //todos los objetos se comunican por referencia
arreglo2[1]= "Danilo!"   
console.log(arreglo2);
console.log(arr)
arreglo2[3]();
