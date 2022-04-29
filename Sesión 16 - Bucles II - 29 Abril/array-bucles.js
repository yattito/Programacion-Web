// Declaramos un array

var pokemones = ["Pikachu" , "Squirtle" , "Charizard"];

// Definir nuestra variable i

// var i = 0;

// Ciclo While

/* 
while( i <= 2){
	//codigo que se ejcuta
	console.log(pokemones[i]);
	i++;
} 
*/

// Ciclo Do/While

/* 
	do{
 // Codigo a ejecutar
 console.log(pokemones[i]);
 i++;
} while(i <= 2); 
*/

//  Ciclo For

for (var i = 0 ; i <= 2; i++) {
	// codigo que se ejecuta
	// Imprimir en el documento
	// Después del nombre del pokemon debe decir "yo te elijo!"
	// Salto de linea en cada impresión.
	// console.log(pokemones[i]);
	document.write(pokemones[i] + " yo te elijo! <br>");
}