if (typeof (Storage) !== 'undefined') {
    localStorage.setItem("Nombre", "Andres");
    localStorage.getItem("Nombre");
} else {
    console.log("NO se soporta el localStorage");
}