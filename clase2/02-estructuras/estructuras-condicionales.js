// estructura

// if

/*
if (condicion) {
    instrucciones
}
 
ejemplo;
hacer un programa que imprima si una persona es mayor  o menor de edad
*/

let edad = 17;
if ( edad >= 18) {
    console.log("Es mayor de edad");
}


// if else

/*

if (condicion) {
    expresion-verdadero;
} else {
    expresion-falso;
}
*/


edad = 22;
if (edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es mayor de edad");

}

// if - else if - else if ... else
/*
 sintaxis
  if (condicion1) {
    expresion 1
  } else if (condicion2) {
   expresion 2 
  }

  ...
  else {
    expresion-else;
  }


  ejemplo: imprimir el mensaje correspondiente (niño, adolecente, adulto, adulto mayor) de acuerdo con la edad ingresada

*/


edad = 22;
if (edad > 59 ) {
    console.log("es un adulto mayor");
} else if (edad  > 17 ) {
    console.log("es un adulto");
} else if (edad > 14 ) {
    console.log ("es un adolecente");
} else {
    console.log("es un niño");
}



// operador ternario

/* 
sintaxis

(condicion) ? expresion verdadera : expresion - falsa;
*/

( edad > 59 ) ? console.log("es un adulto mayor") :
    ( edad > 17 )  ? console.log("es un adulto ") :
        ( edad > 14 ) ? console.log("es un adolecente ") :
            console.log("es un niño");

// switch

// sintaxis

/* 

switch(variable) {
    case valor1:
        expresion1;
        break;
    case valor2:
        expresion2:
        break;
    case valorn:
        expresion3:
        break;
    default:
        expresion-default;
}

ejemplo: dado el valor numerico de un dia a la semana,
devuelva que día es.

*/

let valDia = 2;
switch (valDia) {
    case 1:
        console.log("Domingo");
        break;
     case 2:
        console.log("Lunes");
        break;
     case 3:
        console.log("Martes");
        break;
     case 4:
        console.log("Miercoles");
        break;
     case 5:
        console.log("Jueves");
        break;
     case 6:
        console.log("Viernes");
        break;
    default:
        console.log("Sabado");
}

// estructura repetitivas

