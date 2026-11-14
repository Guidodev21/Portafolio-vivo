"use strict"

//#######Calculadora de conversión en JavaAScript#########


console.log("A continuación verás algunos datos importantes en tu quincena");

let ventas= 5
let leads= 10


/*
if (leads <= 0 || ventas < 0  ) {
    console.log("Asegurese de que leads no sea igual o menor a '0' y la cantidad de ventas sea como mínimo 0");
    
}


else if (ventas > leads) {
    console.log("La cantidad de ventas ingresada es mayor a la cantidad de leads, se debe colocar un número menor");
}


else{
    let conversion= ventas /  leads * 100
    console.log(conversion);
}

*/



function calculadora(ventas, leads){

if (leads <= 0 || ventas < 0  ) {
    alert("Asegurese de que leads no sea igual o menor a '0' y la cantidad de ventas sea como mínimo 0");
    
}


else if (ventas > leads) {
    alert("La cantidad de ventas ingresada es mayor a la cantidad de leads, se debe colocar un número menor");
}


else{
    let conversion= ventas /  leads * 100
    document.write(conversion);
}

}

calculadora(10, 0)