const inputNombre = document.getElementById("nombredpto");
const nombreDisplayDpto = document.getElementById("nombredpto")


async function consultar() {
    nombreDisplayDpto.innerHTML = "";
    const nombreDpto = inputNombre.value.toLowerCase().trim();
    const url = `https://api-colombia.com/api/v1/Department/name/${nombreDpto}`;
}