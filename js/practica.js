let equipo="Boca Juniors"
let campeonatos=75
let booleano=true



console.log(equipo);
console.log(campeonatos);
console.log(booleano);

//#######Calculadora de conversión en JavaAScript#########


console.log("A continuación verás algunos datos importantes en tu quincena");

let ventas= 5
let leads= 10



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

