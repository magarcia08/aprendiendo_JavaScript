const cajaNombre = document.getElementById("nombre");
const txtaNombres = document.getElementById("txtnombres");


function limpiar() {
    txtaNombres.value = "";
}

function agregar() {
    const nombres = txtaNombres.value.trim();
    const vnombre = nombres.split("\n");
    const nuevoNombre = cajaNombre.value.trim();

    vnombre.push(nuevoNombre);
    vnombre.sort((a, b ) => 
        (a.toLowerCase() > b.toLowerCase()) ? 1 : -1
    );

    txtaNombres.value = vnombre.join("\n");

    cajaNombre.value = "";

}