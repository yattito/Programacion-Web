/* 
	Ciclo While sirve para ejecutar un codigo de forma ciclica mientras su condición se cumpla. 
*/

/* 
	Definimos la variable i 
*/


/* 
	var i = 1;
	var numero = prompt("Elige un número");

	while( i <= numero ) {
		// Aquí va el código que se ejecuta.
		document.write("Hola soy un ciclo <br>");
		// Sumanos una unidad a la variable i, para que la condición deje de cumplirse.
		// i = i + 1;
		i++;
	}
*/

/* 
	El ciclo Do While ejecuta un código al menos 1 vez y si se cumple la condición volvera a iterarlo.
*/

var i = 0;
var numero = prompt("Elije un número");

do {
	// Aquí el código que se ejecuta en el ciclo.
	document.write("Yatto <br>");
	i++;
} while (i < numero );