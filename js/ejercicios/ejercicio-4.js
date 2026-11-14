"use sctrict"

//Mostrar todos los números impares entre dos números introducidos por el usuario

do {
    var numero1= parseInt(prompt( "ingrese el primer número"))
    var numero2= parseInt(prompt("ingrese el segundo número"))
} while (isNaN(numero1) || isNaN(numero2));


if (numero1 < numero2) {
    for(var i = numero1; i <= numero2; i++){

        if(i %2 == 0){
            document.write("<br> Número par "+ i)
        }
        else{document.write("<br> Número impar "+i)}
    }
}