const btnCargar = document.getElementById("btnCargar");
const btnGuardar = document.getElementById("btnGuardar");
const btnLimpiar = document.getElementById("btnLimpiar");
const tablaCuerpo = document.getElementById("tablaCuerpo");
const mensaje = document.getElementById("mensaje");

const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputSexo = document.getElementById("sexo");
const inputModulos = document.getElementById("modulos");

btnCargar.addEventListener("click", cargarCampers);
btnGuardar.addEventListener("click", guardarCamper);
btnLimpiar.addEventListener("click", limpiarFormulario);

async function cargarCampers() {
    const campers = await api.obtenerTodosCampers();

    dibujarTabla(campers);
    mostrarMensaje(`Se cargaron ${campers.length} campers`, "exito");
} catch (error) {
    mostrarMensaje(`Error al cargar: ${error.mensage}`, "error");
}

