const frutas = ["mango" , "banano", "lulo", "guayaba" , "mora", "banano"];
const precio = [45000, 89000, 12000, 65000, 35000];

console.log(frutas)
frutas.sort(); // timsort : mergeSort y insertion sort 0 (nlog n)
console.log(frutas)

/* console.log(precio);
//precio.sort();
console.log(precio);

*/ 
// ordenar de manera descendente

console.log(precio);
precio.sort((a, b) => b -a );
console.log(precio);

/*const frutas2 = ["mango" , "banano", "lulo", "guayaba" , "mora", "banano"];
*/

/* console.log(frutas2);
frutas.sort((fr1, fr2) => {
    const dif = fr1.length - fr2.length;
    if (dif !== 0)
        return dif;
    else
        return (fr1 > fr2) ? -1 : 1;

})
console.log(frutas2);*/


const campers = [
    {
        nombre : "Diomedez",
        edad: 60,
        score: 5
    },
    {
    nombre : "Maria",
    edad: 19,
    score: 80
    },
    {
        nombre : "Vicor",
        edad: 30,
        score: 73
        }

];

console.log(campers);
console.sort((c1, c2) => c2.score - c1.score);
console.log(campers);
