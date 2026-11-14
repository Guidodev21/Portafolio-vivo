//###Funnción que guarda la calculadora de conversión de ventas
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