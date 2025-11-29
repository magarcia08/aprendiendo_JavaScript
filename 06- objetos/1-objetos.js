const persona = {
    nombre: "Andres",
    edad: 23,
    altura: 1.68,
    peso: 60,
    hobbie: () => console.log("la, la ,la ,la"),
    direccion: [{
        calle: 56,
        numero: "25 - 32 ",
        barrio: "zona franca"
    },
        {
            calle: 48,
            numero: "33A - 45",
            barrio: "cuadra play"
    }]
};

console.log(typeof (persona));

console.log(persona.altura);
console.log(persona.direccion.barrio);
console.log(persona.direccion[1].barrio)
persona.hobbie();


