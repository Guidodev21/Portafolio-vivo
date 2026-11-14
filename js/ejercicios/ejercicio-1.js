
//##EJERCICIO 1

//Programa que pida dos numeros y que nos diga cual es el mayor , cual menor y si son iguales.
//Si el usuarion no ingresa numeros o si los numeros son menores o iguales a cero que me los pida de nuevo

let numero1=0
let numero2=0

while (numero1 <= 0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
    numero1= parseInt(prompt("Ingrese el primer numero") )
    numero2= parseInt(prompt("Ingrese el segundo numero") )
}

if(numero1 > numero2){
    console.log("El numero "+numero1+" es el mayor")
}
    

else if( numero1 < numero2){

    console.log("El segundo nummero es mayor");
    
}
else{console.log("Ambos numeros son iguales")
}

