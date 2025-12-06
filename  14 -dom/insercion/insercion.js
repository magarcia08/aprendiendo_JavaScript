// 1. appendChild()

const miDiv = document.querySelector(".parent");

const parrafo = document.createElement("p");

parrafo.textContent = "Hoy es viernes :D";
miDiv.appendChild(parrafo);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Pidan tutorias";
miDiv.insertBefore(parrafo2, miDiv.firstChild);

// 2.
const parrHola = document.querySelector(".parent < p");
miDiv.removeChild(parrHola);


// 3. replaceChild(new, old)
