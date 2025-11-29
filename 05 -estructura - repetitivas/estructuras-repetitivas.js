/* for


sintaxis:

for ( inicializacion; parada;  incremento) {
    expresiones;
}

ejemplo: imprima la tabla de multiplicar de un numero dado
*/

let num = 7;

for (let i=1; i < 10; i++ ) {
    console.log(`${num} * ${i} = ${num * i}`);
}


/*

for .. of

    sintaxis
    se usa para recorrer array vectores o string.
    for (let elemento of array) {
        expresiones;
    }

    ejemplo
    imprimir las consonantes de una frase
*/

let frase = "yo solo se que nada se";

let frase_min = frase.toLocaleLowerCase();

let frase_resul = "";
for (let letra of frase_min) {
    switch (letra) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            break;
    default:
        frase_resul += letra;
    }
}

console.log(frase_resul);

/* for .. in

sintaxis
se usa para recorrer las propiedades de un objeto

for (let clave in objeto) {
    expresiones;
}

*/

/* while

sintaxis

while (condicion) {
    expresiones;
}

ejemplo: preguntar por la contraseña hasta que se diguite la correcta


*/

let contrasena = "shirly123";
secreto = String(prompt("ingrese la contraseña", "sintaxos"));
let i = -1;


while (contrasena !== "sintaxis") {
    contrasena += secreto.charAt(i++);
    console.log("error. contraseña invalida. ");
    console.log(contrasena)
    break;
}

console.log("bienvenido a la casa de los famosos");

/*

do while

sintaxis:

primero hace y luego evalua

do {
     expresiones
} while (condicion)

*/

i = -1
pal = ""

do {
    console.log("error. contraseña invalida");
    pal += secreto.charAt(++i);
    contrasena = pal;

} while (contrasena !== "sintaxis");