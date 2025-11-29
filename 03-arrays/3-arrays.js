// declaracion literal ([])

const frutas = []; // array vacio
const mixtos = ["papas", "patacones", "chicarrones", "arepas"];



const frutasExoticas = new Array ("kiwi", "chontaduro", "macadami", "granada");


// declaracion con array.from()
const letras = Array.from("hola");


// declaracion con array of
const letras2 = Array.of(7)

const numeros = Array.of(7)
const numeros2 = Array.of(5,10,20)

// recorrido de los arrays por los elementos

for (let fe of frutasExoticas) {
    console.log(fe);
}


// metodos de los arrays

// metodo push : agrega al final

 numeros.push(13);
 console.log(numeros);

 // metodo unshift : metodo agregar al inicio
 numeros.unshift(80);
console.log(numeros);

// metodo pop :  este metodo elimina el ultimo elemento 
numeros.pop();
console.log(numeros);

// metodo shift : elimina al primer elemento
numeros.shift();
console.log(numeros);

// metodos funcionales

// metodo map

//recorre el array y crea uno nuevo aplicandole una funcion a cada elemento

console.log(frutasExoticas.map(fruta => fruta.toUpperCase()));

// metodo filter 
// crea un nuevo array con todos los elementos que cumplen una condicion 

