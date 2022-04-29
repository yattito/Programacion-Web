/* 
	Bucle Detemirnado

	Buble for

	Su sintaxis se compone de tres partes

		1. Inicialización de la variable
		2. Numero de iteraciones
		3. Incremento o Decremento
			incremento i++
			decremento i--

	Usamos la palabra reservada for seguido de parentesis y llaves. Dentro de los parentesis colocamos la sintaxis

	for (variable; iteraciones; icremento/decremento) {
		Cogido a ejecutar
	}

*/


/* for ( i = 1; i <= 3 ; i++ ){
	// Imprimimos el valor de i en cada iteración
	console.log(i)
} */

/* for ( i = 30; i >= 0; i--) {
	// Imprimimos el valor de i en cada iteración
	console.log(i)
} */



var pokemones = ["Pikachu","Bulbasaur","Charmander"];
//var i = 0;
/* while (i < pokemones.length) {
	console.log(pokemones[i]);
	i++;
} */
/* do {
	console.log(pokemones[i]);
	i++;
} while (i < pokemones.length); */

for (var i = 0; i < pokemones.length ; i++) {
	// console.log("i vale " + i + " y su valor es de " + pokemones[i]);
}

// Declaramos un Array vacio
var usuarioPokemones = [];
var numeroPokemones = prompt("¿Cuántos Pokemones quieres?");
// Preguntamos el usuario los pokemones y que se impriman en el documento
for (var i = 0; i < numeroPokemones; i++) {
	// console.log("i vale " + i + " y su valor es de " + pokemones[i]);
	var agregarPokemon = prompt("Agrega un Pokemon");
	usuarioPokemones.push(agregarPokemon);
	document.write(usuarioPokemones[i] + " yo te elijo! <br>");
}