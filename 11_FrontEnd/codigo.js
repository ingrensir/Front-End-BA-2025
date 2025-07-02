/* let nombre = "Marcos"
console.log(nombre);

let suma = 2+1
console.log(suma);
 */
let nombre;
let lenguaje="Javascript";
var edad="38";
let lenguaJE="Java";
let boolean = true;
const DNI = 27888444;

console.log(nombre);

/* Interacciones con el Usuario */

/* nombre = prompt("Dime tu nombre?");
let apellido = prompt("... y el apellido?");
console.log(nombre);
 */
/* alert("Hola " + nombre +".");
alert(`Hola ${nombre} como estas ${apellido}.`) */
/* ( `` ) ALT + 96 */

/* let continuar = confirm("¿Querés continuar?");
if (continuar) {
  alert("Seguí adelante.");
} else {
  alert("Cancelado.");
} */

/* actualizar git ----> git push origin master */

/* Operadores matematicos */

/* Suma 
Resta 
Division */

let name = "Juan"
console.log(typeof name) 

/* Comparaciones */

let num1 = 32;
let num2 = 40;
let num3 = "32";
let num4 = 32;

console.log(num1 == num3);
console.log(num1 === num3);
console.log(num1 != num3);
console.log(num1 !== num3);
console.log(num1 > num2);
console.log(num2 < num3);
console.log(num1 == num4 && num1 == num3);
console.log(isNaN("123"));
console.log();
console.log();
console.log();


console.log(num1 == num4 || num1 == num3); /* OR */
console.log(num1 == num4 && num1 == num3); /* AND */

/* CONDICIONAL */

let sucursal = "Caraza";
let anios = 99; 

if(anios>=100) {
    console.log(`${sucursal} Tenes mas de  100 años`);
} else {
     console.log(`${sucursal} No tenes mas de  100 años`);
}

//CLASE DE REPASO 11.06.2025

let nombrer = "Agostina"
let age = 24

if (edad >= 18){
  console.log(`${nombrer} podes entrar`);
} else {
  console.log(`${nombrer} NO podes entrar`);
}

// IF TERNARIO
// CONDICION          TRUE                          :          FALSE                  
edad >= 18 ? console.log(`${nombrer} podes entrar`):console.log(`${sucursal} No tenes mas de  100 años`)

//ANIDADOS

let nota = 8
if (nota<5) { 
  console.log("Insuficiente.");
} else if (nota<6){
  console.log("Suficiente.");}
  else if (nota<8){
    console.log("Bien.");
  }else {
    console.log("Sobresaliente");
  }

  nota<5? console.log("Insuficiente."): nota<6? console.log("Suficiente."):
  nota<8 ? console.log("Bien."): console.log("Sobresaliente")

// SWITCH

/* switch (variable) {
  case "valor1":
    //código se variable es === "valor1"
    break;
  case "valor2":
    break;
  
    default
} */

let semaforo = "verde"
semaforo = semaforo.toLowerCase()
switch (semaforo) {
  case "verde":
    console.log("Avanzar")
    break;
      case "rojo":
    console.log("No Avanzar")
    break;
  case "amarillo":
    console.log("Precaucion")
    break;
  default:
    console.log("no es dato Válido")
    break;
}

/* pedir a usuarios en navegador que elija pelicuals libros o 
series encaso de peliculas le recomendamos una pelicula libro o series so ni respondemos por defaullt */


//.lenght


console.log(nombrer.length);

let nombre2 = "Batmanes de gouta"
console.log(nombre2.length);
console.log(nombre2.toUpperCase())

