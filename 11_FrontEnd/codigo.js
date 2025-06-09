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

nombre = prompt("decime tu nombre");
let apellido = prompt(" y el apellido");
console.log(nombre);

alert("Hola " + nombre);
alert(`Hola ${nombre} como estas ${apellido}`)
/* ( `` ) ALT + 96 */

let continuar = confirm("¿Querés continuar?");
if (continuar) {
  alert("Seguí adelante.");
} else {
  alert("Cancelado.");
}