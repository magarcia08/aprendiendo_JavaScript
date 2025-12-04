// objeto cuyo resultado se da en un futuro o no

/*

declaracion: const miPromesa = new Promisse((resolve, reject) => {...});

2. ejecucion 


*/
// construccion de la promesa
const miPromesa = new Promise ((resolve,reject ) => {
    const exito = true;

    if (exito) {
        console.log("esperando...");
        setTimeout(()=> resolve("promesa cumplida"), 2000);
    } else {
        reject("promesa rechazada");

    }
});

// ejecucion de la promesa

miPromesa
    .then(respuesta => {
        console.log("No hubo errores en la promesa");
        console.log(respuesta);
    }).catch(error => {
        console.log("ERROR en la promesa");
        console.log(error);
    });