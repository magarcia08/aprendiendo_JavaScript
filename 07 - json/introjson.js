const camper = {
    nombre: "Diomedez",
    apellido: "Diaz",
    edad : 60,
    ocupacion : "cantante"
};


// convertirlo a json

const mijson = JSON.stringify(camper);

console.log(typeof mijson);
console.log(mijson);

const strJson = '{ "nombre" : "Luis", "apellido" : "Gonzalez", "edad": 34, "ocupacion" : "auxiliar administrativo" } ';

const camper2 = JSON.parse (strJson);
console.log (typeof camper2);
console.log (camper2);