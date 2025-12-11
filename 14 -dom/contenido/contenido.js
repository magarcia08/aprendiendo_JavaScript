// 1.textContent
const miDiv = document.getElementById("miElemento");

miDiv.textContent = "<b>Contenido modificado</b>";

// 2. innerHTML
miDiv.innerHTML = "<i>Contenido modificado</i>";

// 3. nodeName
// devuelve el nombre del nodo como una cadena de texto.
// El nombre del nodo es el nombre de la etiqueta HTML
const elemMensaje = document.querySelector(".message");
console.log("Nombre del nodo: ", elemMensaje.nodeName);

// 4. outerText
// el contenido del nodo
console.log("Contenido del nodo:\n", elemMensaje.outerText);
console.log(
    "Contenido del container:\n",
    docustomElements.querySelector(".container").outerHTML
);