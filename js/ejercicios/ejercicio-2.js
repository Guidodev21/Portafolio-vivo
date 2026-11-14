/*Utilizar un bucle para calcular la suma y la media de los numeros ingresados hasta intruductir un numero negativo y ahí mostrar el resutlado*/

let suma= 0
let contador=0
let media=0

do {
    
    var numero = parseInt(prompt("Introduce numeros hasta que introduzcas uno negativo"))
    
    if (isNaN(numero)) {
        numero=0

    }else if (numero >=0) {
        suma=suma+numero

        contador++
    }

}while (numero >=0);

media=media/contador

console.log("la suma es; " +  suma) ;
console.log("la media es: " + media);


