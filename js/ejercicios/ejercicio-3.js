"use strict"

//Programa que muestre todos los numeros que se ecuentre entre los numeros introducidos por el usuario


do {
    var numero1= parseInt(prompt( "ingrese el primer número"))
    var numero2= parseInt(prompt("ingrese el segundo número"))
} while (isNaN(numero1) || isNaN(numero2));

document.write("<h1> Del número "+numero1+" al número "+numero2+" se encuentran los siguientes valores:</h1>")

if(numero1 < numero2){
    for(var i= numero1;i<= numero2; i++)
        document.write("<br>"+i)
}

else if(numero1 > numero2){
    for(var i= numero1; i>=numero2; i--)
        document.write("<br>"+i)
}
else{document.write(numero1)}



