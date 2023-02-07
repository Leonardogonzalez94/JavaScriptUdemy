var fecha= new Date(2023,1,23);
console.log(fecha)


Date.prototype.sumarDias=function(dias){    //Prototipo para sumar dias del mes
 
    this.setDate( this.getDate() + dias  );
    return this;

}

Date.prototype.sumarAnios=function(anios){    //Prototipo para sumar años
 
    this.setFullYear( this.getFullYear() + anios  );
    return this;

}

console.log(fecha);
console.log(fecha.sumarDias(20))
//fecha.setDate(25);
//console.log(fecha)

console.log(fecha.sumarAnios(20))