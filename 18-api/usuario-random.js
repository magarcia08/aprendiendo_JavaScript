const apiUrl = "https://randomuser.me/api/?results=4";

async function getUsuarios() {
    try {
        const respuesta = await fetch(apiUrl);
        const data = await respuesta.json();

        console.table(data.results);

        const usuarios = data.results;
        const usuContainer = document.querySelector(".user-container");


        usuarios.foreach((usu) => {
            const cajaUsu = crearTarjetaUsuario(usu);
            usuContainer.appendChild(cajaUsu);

        });


    } catch (error){
        console.error("Error al obtener los usuarios. " +  error);

    }
}

function crearTarjetaUsuario(usu) {
    const { tittle, nombre, apellido } = usu.name;
    const { genero, email, tel } = usu;
    const img = usu.picture.large;
    const { ciudad, estado, pais } = usu.location;
    const nombreFull = `${tittle} ${nombre} ${apellido}`;

    const cajaUsu = document.createElement("div");
    cajaUsu.classList.add("user-box");

    const range = document.createRange();
    const frag = range.createContextualFragment(

    );

}

getUsuarios();