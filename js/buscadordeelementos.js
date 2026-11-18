/*
1-pida 6 numeros por pantalla e ingresalos en un array
2-mostrar el array entero en pagina y en console
3- invertir su orden al mostrarlo
5-Cuantos elementos tiene el array
6-Busqueda de un valor introducido por el usuario, que nos dia si lo encuentra y su indice (Se valorara el uso de funciones)
*/


//Solución de punto 1
let array = [1, 2, 3, 4, 5, 6]

do{
    var numero= parseInt(prompt("Ingrese un número cualquiera hasta 6 veces: "))
    array.push(numero)
    


}while (array.length <= 6) 


//Solución de punto 2
console.log(array);
document.write(array + " ")



// 3 Orden invertido

let arrayOrdenado= array.sort((a,b) => b-a)

console.log(arrayOrdenado);


//5 Cuantos elemtnos tiene el array

console.log(array.length);


//6-Buscar un valor introdducido por el ususario


let pedido=parseInt(prompt("Qué numero desea buscar?"))

let resultado = buscarNumero(array, pedido);

function buscarNumero(lista, numeroBuscado) {
    
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === numeroBuscado) {
            return i; // Si lo encuentra, devuelve la posición y la función termina.
        }
    }
    return -1; // Si el bucle termina y no encontró nada, devuelve -1.
}

if (resultado !== -1) {
    console.log("¡El número " + pedido + " está en el índice " + resultado + "!");
} else {
    console.log("No se encontró el número solicitado.");
}

