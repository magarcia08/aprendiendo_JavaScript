const inputNombre = document.getElementById("nombrepoke");
const nombreDisplay = document.getElementById("nombrepokemon");
const imagenDisplay = document.getElementById("imgpokemon");


function consultar() {
    nombreDisplay.textContent = "";
    imagenDisplay.innerHTML = "";
    const nomPoke = inputNombre.value.
    toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${nomPoke}`;

    nombreDisplay.textContent = "Buscando el pokemon ... ";


    fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error (`Error. POkemon  ${nomPoke} no encontrado`);
            }
            return respuesta.json();
        })
        .then (datos => {
            nombreDisplay.textContent = datos.name[0].toUpperCase () 
            + datos.name.slice(1);
            
        }) 
}


