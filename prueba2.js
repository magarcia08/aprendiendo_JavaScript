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