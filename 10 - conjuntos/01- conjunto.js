// conjunto son estructura de datos

// sin elementos repetidos y en teoria no ordenados

const frutas = new Set(["mango" , "banano", "lulo", "guayaba" , "mora", "banano"]);

frutas.add("anon").add("aguacuate").add("tomate");

console.log(typeof frutas);
console.log(frutas);


// si existe
console.log(frutas.has("aguacuate"));

// borrar un elemento
console.log(frutas.delete("aguacuate"));

console.log(frutas.size);

for (let fruta of frutas.values())
    console.log(fruta);

frutas.clear();
console.log(frutas);
frutas = new 
